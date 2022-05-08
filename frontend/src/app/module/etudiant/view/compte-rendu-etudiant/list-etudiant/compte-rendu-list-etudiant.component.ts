import {Component, OnInit} from '@angular/core';
import {CompteRenduService} from '../../../../../controller/service/CompteRendu.service';
import {CompteRenduVo} from '../../../../../controller/model/CompteRendu.model';
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
  selector: 'app-compte-rendu-list-etudiant',
  templateUrl: './compte-rendu-list-etudiant.component.html',
  styleUrls: ['./compte-rendu-list-etudiant.component.css']
})
export class CompteRenduListEtudiantComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'CompteRendu';
    dossierMedicales :Array<DossierMedicaleVo>;


    constructor(private datePipe: DatePipe, private compteRenduService: CompteRenduService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private dossierMedicaleService: DossierMedicaleService
) { }

    ngOnInit(): void {
      this.loadCompteRendus();
      this.initExport();
      this.initCol();
      this.loadDossierMedicale();
    }
    
    // methods
      public async loadCompteRendus(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CompteRendu', 'list');
        isPermistted ? this.compteRenduService.findAll().subscribe(compteRendus => this.compteRendus = compteRendus,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.compteRenduService.findByCriteria(this.searchCompteRendu).subscribe(compteRendus=>{
            
            this.compteRendus = compteRendus;
           // this.searchCompteRendu = new CompteRenduVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'dateCompteR', header: 'Date compte r'},
                        {field: 'dossierMedicale?.ref', header: 'Dossier medicale'},
        ];
    }
    
    public async editCompteRendu(compteRendu:CompteRenduVo){
        const isPermistted = await this.roleService.isPermitted('CompteRendu', 'edit');
         if(isPermistted){
          this.compteRenduService.findByIdWithAssociatedList(compteRendu).subscribe(res => {
           this.selectedCompteRendu = res;
            this.selectedCompteRendu.dateCompteR = new Date(compteRendu.dateCompteR);
            this.editCompteRenduDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewCompteRendu(compteRendu:CompteRenduVo){
        const isPermistted = await this.roleService.isPermitted('CompteRendu', 'view');
        if(isPermistted){
           this.compteRenduService.findByIdWithAssociatedList(compteRendu).subscribe(res => {
           this.selectedCompteRendu = res;
            this.selectedCompteRendu.dateCompteR = new Date(compteRendu.dateCompteR);
            this.viewCompteRenduDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateCompteRendu(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedCompteRendu = new CompteRenduVo();
            this.createCompteRenduDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteCompteRendu(compteRendu:CompteRenduVo){
       const isPermistted = await this.roleService.isPermitted('CompteRendu', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Compte rendu) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.compteRenduService.delete(compteRendu).subscribe(status=>{
                          if(status > 0){
                          const position = this.compteRendus.indexOf(compteRendu);
                          position > -1 ? this.compteRendus.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Compte rendu Supprimé',
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
    const isPermistted = await this.roleService.isPermitted('CompteRendu', 'list');
    isPermistted ? this.dossierMedicaleService.findAll().subscribe(dossierMedicales => this.dossierMedicales = dossierMedicales,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateCompteRendu(compteRendu: CompteRenduVo) {

     this.compteRenduService.findByIdWithAssociatedList(compteRendu).subscribe(
	 res => {
	       this.initDuplicateCompteRendu(res);
	       this.selectedCompteRendu = res;
	       this.selectedCompteRendu.id = null;
            this.createCompteRenduDialog = true;

});

	}

	initDuplicateCompteRendu(res: CompteRenduVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.compteRendus.map(e => {
    return {
                    'Date compte r': this.datePipe.transform(e.dateCompteR , 'dd-MM-yyyy'),
                    'Compte r': e.compteR ,
            'Dossier medicale': e.dossierMedicaleVo?.ref ,
     }
      });

      this.criteriaData = [{
            'Date compte r Min': this.searchCompteRendu.dateCompteRMin ? this.datePipe.transform(this.searchCompteRendu.dateCompteRMin , this.dateFormat) : environment.emptyForExport ,
            'Date compte r Max': this.searchCompteRendu.dateCompteRMax ? this.datePipe.transform(this.searchCompteRendu.dateCompteRMax , this.dateFormat) : environment.emptyForExport ,
            'Compte r': this.searchCompteRendu.compteR ? this.searchCompteRendu.compteR : environment.emptyForExport ,
        'Dossier medicale': this.searchCompteRendu.dossierMedicaleVo?.ref ? this.searchCompteRendu.dossierMedicaleVo?.ref : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get compteRendus(): Array<CompteRenduVo> {
           return this.compteRenduService.compteRendus;
       }
    set compteRendus(value: Array<CompteRenduVo>) {
        this.compteRenduService.compteRendus = value;
       }

    get compteRenduSelections(): Array<CompteRenduVo> {
           return this.compteRenduService.compteRenduSelections;
       }
    set compteRenduSelections(value: Array<CompteRenduVo>) {
        this.compteRenduService.compteRenduSelections = value;
       }
   
     


    get selectedCompteRendu():CompteRenduVo {
           return this.compteRenduService.selectedCompteRendu;
       }
    set selectedCompteRendu(value: CompteRenduVo) {
        this.compteRenduService.selectedCompteRendu = value;
       }
    
    get createCompteRenduDialog():boolean {
           return this.compteRenduService.createCompteRenduDialog;
       }
    set createCompteRenduDialog(value: boolean) {
        this.compteRenduService.createCompteRenduDialog= value;
       }
    
    get editCompteRenduDialog():boolean {
           return this.compteRenduService.editCompteRenduDialog;
       }
    set editCompteRenduDialog(value: boolean) {
        this.compteRenduService.editCompteRenduDialog= value;
       }
    get viewCompteRenduDialog():boolean {
           return this.compteRenduService.viewCompteRenduDialog;
       }
    set viewCompteRenduDialog(value: boolean) {
        this.compteRenduService.viewCompteRenduDialog = value;
       }
       
     get searchCompteRendu(): CompteRenduVo {
        return this.compteRenduService.searchCompteRendu;
       }
    set searchCompteRendu(value: CompteRenduVo) {
        this.compteRenduService.searchCompteRendu = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
