import {Component, OnInit} from '@angular/core';
import {DiagnosticService} from '../../../../../controller/service/Diagnostic.service';
import {DiagnosticVo} from '../../../../../controller/model/Diagnostic.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { DossierMedicaleService } from '../../../../../controller/service/DossierMedicale.service';

import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-diagnostic-list-chercheur',
  templateUrl: './diagnostic-list-chercheur.component.html',
  styleUrls: ['./diagnostic-list-chercheur.component.css']
})
export class DiagnosticListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Diagnostic';
    dossierMedicales :Array<DossierMedicaleVo>;


    constructor(private datePipe: DatePipe, private diagnosticService: DiagnosticService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private dossierMedicaleService: DossierMedicaleService
) { }

    ngOnInit(): void {
      this.loadDiagnostics();
      this.initExport();
      this.initCol();
      this.loadDossierMedicale();
    }
    
    // methods
      public async loadDiagnostics(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Diagnostic', 'list');
        isPermistted ? this.diagnosticService.findAll().subscribe(diagnostics => this.diagnostics = diagnostics,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.diagnosticService.findByCriteria(this.searchDiagnostic).subscribe(diagnostics=>{
            
            this.diagnostics = diagnostics;
           // this.searchDiagnostic = new DiagnosticVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'dateDiagnostic', header: 'Date diagnostic'},
                        {field: 'dossierMedicale?.ref', header: 'Dossier medicale'},
        ];
    }
    
    public async editDiagnostic(diagnostic:DiagnosticVo){
        const isPermistted = await this.roleService.isPermitted('Diagnostic', 'edit');
         if(isPermistted){
          this.diagnosticService.findByIdWithAssociatedList(diagnostic).subscribe(res => {
           this.selectedDiagnostic = res;
            this.selectedDiagnostic.dateDiagnostic = new Date(diagnostic.dateDiagnostic);
            this.editDiagnosticDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewDiagnostic(diagnostic:DiagnosticVo){
        const isPermistted = await this.roleService.isPermitted('Diagnostic', 'view');
        if(isPermistted){
           this.diagnosticService.findByIdWithAssociatedList(diagnostic).subscribe(res => {
           this.selectedDiagnostic = res;
            this.selectedDiagnostic.dateDiagnostic = new Date(diagnostic.dateDiagnostic);
            this.viewDiagnosticDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateDiagnostic(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedDiagnostic = new DiagnosticVo();
            this.createDiagnosticDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteDiagnostic(diagnostic:DiagnosticVo){
       const isPermistted = await this.roleService.isPermitted('Diagnostic', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Diagnostic) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.diagnosticService.delete(diagnostic).subscribe(status=>{
                          if(status > 0){
                          const position = this.diagnostics.indexOf(diagnostic);
                          position > -1 ? this.diagnostics.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Diagnostic Supprimé',
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

public async loadDossierMedicale(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Diagnostic', 'list');
    isPermistted ? this.dossierMedicaleService.findAll().subscribe(dossierMedicales => this.dossierMedicales = dossierMedicales,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateDiagnostic(diagnostic: DiagnosticVo) {

     this.diagnosticService.findByIdWithAssociatedList(diagnostic).subscribe(
	 res => {
	       this.initDuplicateDiagnostic(res);
	       this.selectedDiagnostic = res;
	       this.selectedDiagnostic.id = null;
            this.createDiagnosticDialog = true;

});

	}

	initDuplicateDiagnostic(res: DiagnosticVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.diagnostics.map(e => {
    return {
                    'Date diagnostic': this.datePipe.transform(e.dateDiagnostic , 'dd-MM-yyyy'),
                    'Diag': e.diag ,
            'Dossier medicale': e.dossierMedicaleVo?.ref ,
     }
      });

      this.criteriaData = [{
            'Date diagnostic Min': this.searchDiagnostic.dateDiagnosticMin ? this.datePipe.transform(this.searchDiagnostic.dateDiagnosticMin , this.dateFormat) : environment.emptyForExport ,
            'Date diagnostic Max': this.searchDiagnostic.dateDiagnosticMax ? this.datePipe.transform(this.searchDiagnostic.dateDiagnosticMax , this.dateFormat) : environment.emptyForExport ,
            'Diag': this.searchDiagnostic.diag ? this.searchDiagnostic.diag : environment.emptyForExport ,
        'Dossier medicale': this.searchDiagnostic.dossierMedicaleVo?.ref ? this.searchDiagnostic.dossierMedicaleVo?.ref : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get diagnostics(): Array<DiagnosticVo> {
           return this.diagnosticService.diagnostics;
       }
    set diagnostics(value: Array<DiagnosticVo>) {
        this.diagnosticService.diagnostics = value;
       }

    get diagnosticSelections(): Array<DiagnosticVo> {
           return this.diagnosticService.diagnosticSelections;
       }
    set diagnosticSelections(value: Array<DiagnosticVo>) {
        this.diagnosticService.diagnosticSelections = value;
       }
   
     


    get selectedDiagnostic():DiagnosticVo {
           return this.diagnosticService.selectedDiagnostic;
       }
    set selectedDiagnostic(value: DiagnosticVo) {
        this.diagnosticService.selectedDiagnostic = value;
       }
    
    get createDiagnosticDialog():boolean {
           return this.diagnosticService.createDiagnosticDialog;
       }
    set createDiagnosticDialog(value: boolean) {
        this.diagnosticService.createDiagnosticDialog= value;
       }
    
    get editDiagnosticDialog():boolean {
           return this.diagnosticService.editDiagnosticDialog;
       }
    set editDiagnosticDialog(value: boolean) {
        this.diagnosticService.editDiagnosticDialog= value;
       }
    get viewDiagnosticDialog():boolean {
           return this.diagnosticService.viewDiagnosticDialog;
       }
    set viewDiagnosticDialog(value: boolean) {
        this.diagnosticService.viewDiagnosticDialog = value;
       }
       
     get searchDiagnostic(): DiagnosticVo {
        return this.diagnosticService.searchDiagnostic;
       }
    set searchDiagnostic(value: DiagnosticVo) {
        this.diagnosticService.searchDiagnostic = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
