import {Component, OnInit} from '@angular/core';
import {CliniqueService} from '../../../../../controller/service/Clinique.service';
import {CliniqueVo} from '../../../../../controller/model/Clinique.model';
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
  selector: 'app-clinique-list-medecin',
  templateUrl: './clinique-list-medecin.component.html',
  styleUrls: ['./clinique-list-medecin.component.css']
})
export class CliniqueListMedecinComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Clinique';
    dossierMedicales :Array<DossierMedicaleVo>;


    constructor(private datePipe: DatePipe, private cliniqueService: CliniqueService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private dossierMedicaleService: DossierMedicaleService
) { }

    ngOnInit(): void {
      this.loadCliniques();
      this.initExport();
      this.initCol();
      this.loadDossierMedicale();
    }
    
    // methods
      public async loadCliniques(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Clinique', 'list');
        isPermistted ? this.cliniqueService.findAll().subscribe(cliniques => this.cliniques = cliniques,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.cliniqueService.findByCriteria(this.searchClinique).subscribe(cliniques=>{
            
            this.cliniques = cliniques;
           // this.searchClinique = new CliniqueVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'dateClinique', header: 'Date clinique'},
                        {field: 'dossierMedicale?.ref', header: 'Dossier medicale'},
        ];
    }
    
    public async editClinique(clinique:CliniqueVo){
        const isPermistted = await this.roleService.isPermitted('Clinique', 'edit');
         if(isPermistted){
          this.cliniqueService.findByIdWithAssociatedList(clinique).subscribe(res => {
           this.selectedClinique = res;
            this.selectedClinique.dateClinique = new Date(clinique.dateClinique);
            this.editCliniqueDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewClinique(clinique:CliniqueVo){
        const isPermistted = await this.roleService.isPermitted('Clinique', 'view');
        if(isPermistted){
           this.cliniqueService.findByIdWithAssociatedList(clinique).subscribe(res => {
           this.selectedClinique = res;
            this.selectedClinique.dateClinique = new Date(clinique.dateClinique);
            this.viewCliniqueDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateClinique(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedClinique = new CliniqueVo();
            this.createCliniqueDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteClinique(clinique:CliniqueVo){
       const isPermistted = await this.roleService.isPermitted('Clinique', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Clinique) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.cliniqueService.delete(clinique).subscribe(status=>{
                          if(status > 0){
                          const position = this.cliniques.indexOf(clinique);
                          position > -1 ? this.cliniques.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Clinique Supprimé',
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
    const isPermistted = await this.roleService.isPermitted('Clinique', 'list');
    isPermistted ? this.dossierMedicaleService.findAll().subscribe(dossierMedicales => this.dossierMedicales = dossierMedicales,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateClinique(clinique: CliniqueVo) {

     this.cliniqueService.findByIdWithAssociatedList(clinique).subscribe(
	 res => {
	       this.initDuplicateClinique(res);
	       this.selectedClinique = res;
	       this.selectedClinique.id = null;
            this.createCliniqueDialog = true;

});

	}

	initDuplicateClinique(res: CliniqueVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.cliniques.map(e => {
    return {
                    'Date clinique': this.datePipe.transform(e.dateClinique , 'dd-MM-yyyy'),
                    'Antecedents personnels': e.antecedentsPersonnels ,
                    'Antecedents familiaux': e.antecedentsFamiliaux ,
                    'Histoire maladie': e.histoireMaladie ,
                    'Examen clinique': e.examenClinique ,
                    'Conclusion clinique': e.conclusionClinique ,
            'Dossier medicale': e.dossierMedicaleVo?.ref ,
     }
      });

      this.criteriaData = [{
            'Date clinique Min': this.searchClinique.dateCliniqueMin ? this.datePipe.transform(this.searchClinique.dateCliniqueMin , this.dateFormat) : environment.emptyForExport ,
            'Date clinique Max': this.searchClinique.dateCliniqueMax ? this.datePipe.transform(this.searchClinique.dateCliniqueMax , this.dateFormat) : environment.emptyForExport ,
            'Antecedents personnels': this.searchClinique.antecedentsPersonnels ? this.searchClinique.antecedentsPersonnels : environment.emptyForExport ,
            'Antecedents familiaux': this.searchClinique.antecedentsFamiliaux ? this.searchClinique.antecedentsFamiliaux : environment.emptyForExport ,
            'Histoire maladie': this.searchClinique.histoireMaladie ? this.searchClinique.histoireMaladie : environment.emptyForExport ,
            'Examen clinique': this.searchClinique.examenClinique ? this.searchClinique.examenClinique : environment.emptyForExport ,
            'Conclusion clinique': this.searchClinique.conclusionClinique ? this.searchClinique.conclusionClinique : environment.emptyForExport ,
        'Dossier medicale': this.searchClinique.dossierMedicaleVo?.ref ? this.searchClinique.dossierMedicaleVo?.ref : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get cliniques(): Array<CliniqueVo> {
           return this.cliniqueService.cliniques;
       }
    set cliniques(value: Array<CliniqueVo>) {
        this.cliniqueService.cliniques = value;
       }

    get cliniqueSelections(): Array<CliniqueVo> {
           return this.cliniqueService.cliniqueSelections;
       }
    set cliniqueSelections(value: Array<CliniqueVo>) {
        this.cliniqueService.cliniqueSelections = value;
       }
   
     


    get selectedClinique():CliniqueVo {
           return this.cliniqueService.selectedClinique;
       }
    set selectedClinique(value: CliniqueVo) {
        this.cliniqueService.selectedClinique = value;
       }
    
    get createCliniqueDialog():boolean {
           return this.cliniqueService.createCliniqueDialog;
       }
    set createCliniqueDialog(value: boolean) {
        this.cliniqueService.createCliniqueDialog= value;
       }
    
    get editCliniqueDialog():boolean {
           return this.cliniqueService.editCliniqueDialog;
       }
    set editCliniqueDialog(value: boolean) {
        this.cliniqueService.editCliniqueDialog= value;
       }
    get viewCliniqueDialog():boolean {
           return this.cliniqueService.viewCliniqueDialog;
       }
    set viewCliniqueDialog(value: boolean) {
        this.cliniqueService.viewCliniqueDialog = value;
       }
       
     get searchClinique(): CliniqueVo {
        return this.cliniqueService.searchClinique;
       }
    set searchClinique(value: CliniqueVo) {
        this.cliniqueService.searchClinique = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
