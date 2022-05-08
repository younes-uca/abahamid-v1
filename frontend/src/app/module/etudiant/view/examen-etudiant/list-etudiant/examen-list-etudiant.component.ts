import {Component, OnInit} from '@angular/core';
import {ExamenService} from '../../../../../controller/service/Examen.service';
import {ExamenVo} from '../../../../../controller/model/Examen.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';


import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-examen-list-etudiant',
  templateUrl: './examen-list-etudiant.component.html',
  styleUrls: ['./examen-list-etudiant.component.css']
})
export class ExamenListEtudiantComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Examen';


    constructor(private datePipe: DatePipe, private examenService: ExamenService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadExamens();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadExamens(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Examen', 'list');
        isPermistted ? this.examenService.findAll().subscribe(examens => this.examens = examens,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.examenService.findByCriteria(this.searchExamen).subscribe(examens=>{
            
            this.examens = examens;
           // this.searchExamen = new ExamenVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'code', header: 'Code'},
                            {field: 'libelle', header: 'Libelle'},
        ];
    }
    
    public async editExamen(examen:ExamenVo){
        const isPermistted = await this.roleService.isPermitted('Examen', 'edit');
         if(isPermistted){
          this.examenService.findByIdWithAssociatedList(examen).subscribe(res => {
           this.selectedExamen = res;
            this.editExamenDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewExamen(examen:ExamenVo){
        const isPermistted = await this.roleService.isPermitted('Examen', 'view');
        if(isPermistted){
           this.examenService.findByIdWithAssociatedList(examen).subscribe(res => {
           this.selectedExamen = res;
            this.viewExamenDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateExamen(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedExamen = new ExamenVo();
            this.createExamenDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteExamen(examen:ExamenVo){
       const isPermistted = await this.roleService.isPermitted('Examen', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Examen) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.examenService.delete(examen).subscribe(status=>{
                          if(status > 0){
                          const position = this.examens.indexOf(examen);
                          position > -1 ? this.examens.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Examen Supprimé',
                        life: 3000
                    });
                                     }

                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
              });
             }
    }


public async duplicateExamen(examen: ExamenVo) {

     this.examenService.findByIdWithAssociatedList(examen).subscribe(
	 res => {
	       this.initDuplicateExamen(res);
	       this.selectedExamen = res;
	       this.selectedExamen.id = null;
            this.createExamenDialog = true;

});

	}

	initDuplicateExamen(res: ExamenVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.examens.map(e => {
    return {
                    'Code': e.code ,
                    'Libelle': e.libelle ,
     }
      });

      this.criteriaData = [{
            'Code': this.searchExamen.code ? this.searchExamen.code : environment.emptyForExport ,
            'Libelle': this.searchExamen.libelle ? this.searchExamen.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get examens(): Array<ExamenVo> {
           return this.examenService.examens;
       }
    set examens(value: Array<ExamenVo>) {
        this.examenService.examens = value;
       }

    get examenSelections(): Array<ExamenVo> {
           return this.examenService.examenSelections;
       }
    set examenSelections(value: Array<ExamenVo>) {
        this.examenService.examenSelections = value;
       }
   
     


    get selectedExamen():ExamenVo {
           return this.examenService.selectedExamen;
       }
    set selectedExamen(value: ExamenVo) {
        this.examenService.selectedExamen = value;
       }
    
    get createExamenDialog():boolean {
           return this.examenService.createExamenDialog;
       }
    set createExamenDialog(value: boolean) {
        this.examenService.createExamenDialog= value;
       }
    
    get editExamenDialog():boolean {
           return this.examenService.editExamenDialog;
       }
    set editExamenDialog(value: boolean) {
        this.examenService.editExamenDialog= value;
       }
    get viewExamenDialog():boolean {
           return this.examenService.viewExamenDialog;
       }
    set viewExamenDialog(value: boolean) {
        this.examenService.viewExamenDialog = value;
       }
       
     get searchExamen(): ExamenVo {
        return this.examenService.searchExamen;
       }
    set searchExamen(value: ExamenVo) {
        this.examenService.searchExamen = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
