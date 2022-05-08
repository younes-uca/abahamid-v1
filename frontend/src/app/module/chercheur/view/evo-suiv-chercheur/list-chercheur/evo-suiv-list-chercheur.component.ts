import {Component, OnInit} from '@angular/core';
import {EvoSuivService} from '../../../../../controller/service/EvoSuiv.service';
import {EvoSuivVo} from '../../../../../controller/model/EvoSuiv.model';
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
  selector: 'app-evo-suiv-list-chercheur',
  templateUrl: './evo-suiv-list-chercheur.component.html',
  styleUrls: ['./evo-suiv-list-chercheur.component.css']
})
export class EvoSuivListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'EvoSuiv';
    dossierMedicales :Array<DossierMedicaleVo>;


    constructor(private datePipe: DatePipe, private evoSuivService: EvoSuivService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private dossierMedicaleService: DossierMedicaleService
) { }

    ngOnInit(): void {
      this.loadEvoSuivs();
      this.initExport();
      this.initCol();
      this.loadDossierMedicale();
    }
    
    // methods
      public async loadEvoSuivs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EvoSuiv', 'list');
        isPermistted ? this.evoSuivService.findAll().subscribe(evoSuivs => this.evoSuivs = evoSuivs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.evoSuivService.findByCriteria(this.searchEvoSuiv).subscribe(evoSuivs=>{
            
            this.evoSuivs = evoSuivs;
           // this.searchEvoSuiv = new EvoSuivVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'dateEvoS', header: 'Date evo s'},
                        {field: 'dossierMedicale?.ref', header: 'Dossier medicale'},
        ];
    }
    
    public async editEvoSuiv(evoSuiv:EvoSuivVo){
        const isPermistted = await this.roleService.isPermitted('EvoSuiv', 'edit');
         if(isPermistted){
          this.evoSuivService.findByIdWithAssociatedList(evoSuiv).subscribe(res => {
           this.selectedEvoSuiv = res;
            this.selectedEvoSuiv.dateEvoS = new Date(evoSuiv.dateEvoS);
            this.editEvoSuivDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewEvoSuiv(evoSuiv:EvoSuivVo){
        const isPermistted = await this.roleService.isPermitted('EvoSuiv', 'view');
        if(isPermistted){
           this.evoSuivService.findByIdWithAssociatedList(evoSuiv).subscribe(res => {
           this.selectedEvoSuiv = res;
            this.selectedEvoSuiv.dateEvoS = new Date(evoSuiv.dateEvoS);
            this.viewEvoSuivDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateEvoSuiv(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedEvoSuiv = new EvoSuivVo();
            this.createEvoSuivDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteEvoSuiv(evoSuiv:EvoSuivVo){
       const isPermistted = await this.roleService.isPermitted('EvoSuiv', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Evo suiv) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.evoSuivService.delete(evoSuiv).subscribe(status=>{
                          if(status > 0){
                          const position = this.evoSuivs.indexOf(evoSuiv);
                          position > -1 ? this.evoSuivs.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Evo suiv Supprimé',
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
    const isPermistted = await this.roleService.isPermitted('EvoSuiv', 'list');
    isPermistted ? this.dossierMedicaleService.findAll().subscribe(dossierMedicales => this.dossierMedicales = dossierMedicales,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateEvoSuiv(evoSuiv: EvoSuivVo) {

     this.evoSuivService.findByIdWithAssociatedList(evoSuiv).subscribe(
	 res => {
	       this.initDuplicateEvoSuiv(res);
	       this.selectedEvoSuiv = res;
	       this.selectedEvoSuiv.id = null;
            this.createEvoSuivDialog = true;

});

	}

	initDuplicateEvoSuiv(res: EvoSuivVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.evoSuivs.map(e => {
    return {
                    'Date evo s': this.datePipe.transform(e.dateEvoS , 'dd-MM-yyyy'),
                    'Evo s': e.evoS ,
            'Dossier medicale': e.dossierMedicaleVo?.ref ,
     }
      });

      this.criteriaData = [{
            'Date evo s Min': this.searchEvoSuiv.dateEvoSMin ? this.datePipe.transform(this.searchEvoSuiv.dateEvoSMin , this.dateFormat) : environment.emptyForExport ,
            'Date evo s Max': this.searchEvoSuiv.dateEvoSMax ? this.datePipe.transform(this.searchEvoSuiv.dateEvoSMax , this.dateFormat) : environment.emptyForExport ,
            'Evo s': this.searchEvoSuiv.evoS ? this.searchEvoSuiv.evoS : environment.emptyForExport ,
        'Dossier medicale': this.searchEvoSuiv.dossierMedicaleVo?.ref ? this.searchEvoSuiv.dossierMedicaleVo?.ref : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get evoSuivs(): Array<EvoSuivVo> {
           return this.evoSuivService.evoSuivs;
       }
    set evoSuivs(value: Array<EvoSuivVo>) {
        this.evoSuivService.evoSuivs = value;
       }

    get evoSuivSelections(): Array<EvoSuivVo> {
           return this.evoSuivService.evoSuivSelections;
       }
    set evoSuivSelections(value: Array<EvoSuivVo>) {
        this.evoSuivService.evoSuivSelections = value;
       }
   
     


    get selectedEvoSuiv():EvoSuivVo {
           return this.evoSuivService.selectedEvoSuiv;
       }
    set selectedEvoSuiv(value: EvoSuivVo) {
        this.evoSuivService.selectedEvoSuiv = value;
       }
    
    get createEvoSuivDialog():boolean {
           return this.evoSuivService.createEvoSuivDialog;
       }
    set createEvoSuivDialog(value: boolean) {
        this.evoSuivService.createEvoSuivDialog= value;
       }
    
    get editEvoSuivDialog():boolean {
           return this.evoSuivService.editEvoSuivDialog;
       }
    set editEvoSuivDialog(value: boolean) {
        this.evoSuivService.editEvoSuivDialog= value;
       }
    get viewEvoSuivDialog():boolean {
           return this.evoSuivService.viewEvoSuivDialog;
       }
    set viewEvoSuivDialog(value: boolean) {
        this.evoSuivService.viewEvoSuivDialog = value;
       }
       
     get searchEvoSuiv(): EvoSuivVo {
        return this.evoSuivService.searchEvoSuiv;
       }
    set searchEvoSuiv(value: EvoSuivVo) {
        this.evoSuivService.searchEvoSuiv = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
