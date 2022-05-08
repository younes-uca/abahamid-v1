import {Component, OnInit} from '@angular/core';
import {SexeService} from '../../../../../controller/service/Sexe.service';
import {SexeVo} from '../../../../../controller/model/Sexe.model';
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
  selector: 'app-sexe-list-admin',
  templateUrl: './sexe-list-admin.component.html',
  styleUrls: ['./sexe-list-admin.component.css']
})
export class SexeListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Sexe';


    constructor(private datePipe: DatePipe, private sexeService: SexeService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadSexes();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadSexes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Sexe', 'list');
        isPermistted ? this.sexeService.findAll().subscribe(sexes => this.sexes = sexes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.sexeService.findByCriteria(this.searchSexe).subscribe(sexes=>{
            
            this.sexes = sexes;
           // this.searchSexe = new SexeVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'code', header: 'Code'},
                            {field: 'libelle', header: 'Libelle'},
        ];
    }
    
    public async editSexe(sexe:SexeVo){
        const isPermistted = await this.roleService.isPermitted('Sexe', 'edit');
         if(isPermistted){
          this.sexeService.findByIdWithAssociatedList(sexe).subscribe(res => {
           this.selectedSexe = res;
            this.editSexeDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewSexe(sexe:SexeVo){
        const isPermistted = await this.roleService.isPermitted('Sexe', 'view');
        if(isPermistted){
           this.sexeService.findByIdWithAssociatedList(sexe).subscribe(res => {
           this.selectedSexe = res;
            this.viewSexeDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateSexe(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedSexe = new SexeVo();
            this.createSexeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteSexe(sexe:SexeVo){
       const isPermistted = await this.roleService.isPermitted('Sexe', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Sexe) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.sexeService.delete(sexe).subscribe(status=>{
                          if(status > 0){
                          const position = this.sexes.indexOf(sexe);
                          position > -1 ? this.sexes.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Sexe Supprimé',
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


public async duplicateSexe(sexe: SexeVo) {

     this.sexeService.findByIdWithAssociatedList(sexe).subscribe(
	 res => {
	       this.initDuplicateSexe(res);
	       this.selectedSexe = res;
	       this.selectedSexe.id = null;
            this.createSexeDialog = true;

});

	}

	initDuplicateSexe(res: SexeVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.sexes.map(e => {
    return {
                    'Code': e.code ,
                    'Libelle': e.libelle ,
     }
      });

      this.criteriaData = [{
            'Code': this.searchSexe.code ? this.searchSexe.code : environment.emptyForExport ,
            'Libelle': this.searchSexe.libelle ? this.searchSexe.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get sexes(): Array<SexeVo> {
           return this.sexeService.sexes;
       }
    set sexes(value: Array<SexeVo>) {
        this.sexeService.sexes = value;
       }

    get sexeSelections(): Array<SexeVo> {
           return this.sexeService.sexeSelections;
       }
    set sexeSelections(value: Array<SexeVo>) {
        this.sexeService.sexeSelections = value;
       }
   
     


    get selectedSexe():SexeVo {
           return this.sexeService.selectedSexe;
       }
    set selectedSexe(value: SexeVo) {
        this.sexeService.selectedSexe = value;
       }
    
    get createSexeDialog():boolean {
           return this.sexeService.createSexeDialog;
       }
    set createSexeDialog(value: boolean) {
        this.sexeService.createSexeDialog= value;
       }
    
    get editSexeDialog():boolean {
           return this.sexeService.editSexeDialog;
       }
    set editSexeDialog(value: boolean) {
        this.sexeService.editSexeDialog= value;
       }
    get viewSexeDialog():boolean {
           return this.sexeService.viewSexeDialog;
       }
    set viewSexeDialog(value: boolean) {
        this.sexeService.viewSexeDialog = value;
       }
       
     get searchSexe(): SexeVo {
        return this.sexeService.searchSexe;
       }
    set searchSexe(value: SexeVo) {
        this.sexeService.searchSexe = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
