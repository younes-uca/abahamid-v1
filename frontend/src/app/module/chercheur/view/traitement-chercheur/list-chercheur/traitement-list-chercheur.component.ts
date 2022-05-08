import {Component, OnInit} from '@angular/core';
import {TraitementService} from '../../../../../controller/service/Traitement.service';
import {TraitementVo} from '../../../../../controller/model/Traitement.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { RecueilDeDonnesService } from '../../../../../controller/service/RecueilDeDonnes.service';

import {RecueilDeDonnesVo} from '../../../../../controller/model/RecueilDeDonnes.model';
import {SoinVo} from '../../../../../controller/model/Soin.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-traitement-list-chercheur',
  templateUrl: './traitement-list-chercheur.component.html',
  styleUrls: ['./traitement-list-chercheur.component.css']
})
export class TraitementListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Traitement';
    recueilDeDonness :Array<RecueilDeDonnesVo>;


    constructor(private datePipe: DatePipe, private traitementService: TraitementService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private recueilDeDonnesService: RecueilDeDonnesService
) { }

    ngOnInit(): void {
      this.loadTraitements();
      this.initExport();
      this.initCol();
      this.loadRecueilDeDonnes();
    }
    
    // methods
      public async loadTraitements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Traitement', 'list');
        isPermistted ? this.traitementService.findAll().subscribe(traitements => this.traitements = traitements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.traitementService.findByCriteria(this.searchTraitement).subscribe(traitements=>{
            
            this.traitements = traitements;
           // this.searchTraitement = new TraitementVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                        {field: 'recueilDeDonnes?.traitementRef', header: 'Recueil de donnes'},
                            {field: 'imageOrdonnance', header: 'Image ordonnance'},
                            {field: 'dossierMedicaleRef', header: 'Dossier medicale ref'},
        ];
    }
    
    public async editTraitement(traitement:TraitementVo){
        const isPermistted = await this.roleService.isPermitted('Traitement', 'edit');
         if(isPermistted){
          this.traitementService.findByIdWithAssociatedList(traitement).subscribe(res => {
           this.selectedTraitement = res;
            this.editTraitementDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewTraitement(traitement:TraitementVo){
        const isPermistted = await this.roleService.isPermitted('Traitement', 'view');
        if(isPermistted){
           this.traitementService.findByIdWithAssociatedList(traitement).subscribe(res => {
           this.selectedTraitement = res;
            this.viewTraitementDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateTraitement(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedTraitement = new TraitementVo();
            this.createTraitementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteTraitement(traitement:TraitementVo){
       const isPermistted = await this.roleService.isPermitted('Traitement', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Traitement) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.traitementService.delete(traitement).subscribe(status=>{
                          if(status > 0){
                          const position = this.traitements.indexOf(traitement);
                          position > -1 ? this.traitements.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Traitement Supprimé',
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

public async loadRecueilDeDonnes(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Traitement', 'list');
    isPermistted ? this.recueilDeDonnesService.findAll().subscribe(recueilDeDonness => this.recueilDeDonness = recueilDeDonness,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateTraitement(traitement: TraitementVo) {

     this.traitementService.findByIdWithAssociatedList(traitement).subscribe(
	 res => {
	       this.initDuplicateTraitement(res);
	       this.selectedTraitement = res;
	       this.selectedTraitement.id = null;
            this.createTraitementDialog = true;

});

	}

	initDuplicateTraitement(res: TraitementVo) {
        if (res.soinsVo != null) {
             res.soinsVo.forEach(d => { d.traitementVo = null; d.id = null; });
                }


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.traitements.map(e => {
    return {
            'Recueil de donnes': e.recueilDeDonnesVo?.traitementRef ,
                    'Image ordonnance': e.imageOrdonnance ,
                    'Dossier medicale ref': e.dossierMedicaleRef ,
     }
      });

      this.criteriaData = [{
        'Recueil de donnes': this.searchTraitement.recueilDeDonnesVo?.traitementRef ? this.searchTraitement.recueilDeDonnesVo?.traitementRef : environment.emptyForExport ,
            'Image ordonnance': this.searchTraitement.imageOrdonnance ? this.searchTraitement.imageOrdonnance : environment.emptyForExport ,
            'Dossier medicale ref': this.searchTraitement.dossierMedicaleRef ? this.searchTraitement.dossierMedicaleRef : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get traitements(): Array<TraitementVo> {
           return this.traitementService.traitements;
       }
    set traitements(value: Array<TraitementVo>) {
        this.traitementService.traitements = value;
       }

    get traitementSelections(): Array<TraitementVo> {
           return this.traitementService.traitementSelections;
       }
    set traitementSelections(value: Array<TraitementVo>) {
        this.traitementService.traitementSelections = value;
       }
   
     


    get selectedTraitement():TraitementVo {
           return this.traitementService.selectedTraitement;
       }
    set selectedTraitement(value: TraitementVo) {
        this.traitementService.selectedTraitement = value;
       }
    
    get createTraitementDialog():boolean {
           return this.traitementService.createTraitementDialog;
       }
    set createTraitementDialog(value: boolean) {
        this.traitementService.createTraitementDialog= value;
       }
    
    get editTraitementDialog():boolean {
           return this.traitementService.editTraitementDialog;
       }
    set editTraitementDialog(value: boolean) {
        this.traitementService.editTraitementDialog= value;
       }
    get viewTraitementDialog():boolean {
           return this.traitementService.viewTraitementDialog;
       }
    set viewTraitementDialog(value: boolean) {
        this.traitementService.viewTraitementDialog = value;
       }
       
     get searchTraitement(): TraitementVo {
        return this.traitementService.searchTraitement;
       }
    set searchTraitement(value: TraitementVo) {
        this.traitementService.searchTraitement = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
