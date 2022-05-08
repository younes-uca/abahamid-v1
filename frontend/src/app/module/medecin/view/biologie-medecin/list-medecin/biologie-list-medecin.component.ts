import {Component, OnInit} from '@angular/core';
import {BiologieService} from '../../../../../controller/service/Biologie.service';
import {BiologieVo} from '../../../../../controller/model/Biologie.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { ExamenService } from '../../../../../controller/service/Examen.service';
import { DossierMedicaleService } from '../../../../../controller/service/DossierMedicale.service';

import {ExamenVo} from '../../../../../controller/model/Examen.model';
import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-biologie-list-medecin',
  templateUrl: './biologie-list-medecin.component.html',
  styleUrls: ['./biologie-list-medecin.component.css']
})
export class BiologieListMedecinComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Biologie';
    examens :Array<ExamenVo>;
    dossierMedicales :Array<DossierMedicaleVo>;


    constructor(private datePipe: DatePipe, private biologieService: BiologieService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private examenService: ExamenService
        , private dossierMedicaleService: DossierMedicaleService
) { }

    ngOnInit(): void {
      this.loadBiologies();
      this.initExport();
      this.initCol();
      this.loadExamen();
      this.loadDossierMedicale();
    }
    
    // methods
      public async loadBiologies(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Biologie', 'list');
        isPermistted ? this.biologieService.findAll().subscribe(biologies => this.biologies = biologies,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.biologieService.findByCriteria(this.searchBiologie).subscribe(biologies=>{
            
            this.biologies = biologies;
           // this.searchBiologie = new BiologieVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'dateBiologie', header: 'Date biologie'},
                        {field: 'examen?.libelle', header: 'Examen'},
                            {field: 'resultat', header: 'Resultat'},
                        {field: 'dossierMedicale?.ref', header: 'Dossier medicale'},
        ];
    }
    
    public async editBiologie(biologie:BiologieVo){
        const isPermistted = await this.roleService.isPermitted('Biologie', 'edit');
         if(isPermistted){
          this.biologieService.findByIdWithAssociatedList(biologie).subscribe(res => {
           this.selectedBiologie = res;
            this.selectedBiologie.dateBiologie = new Date(biologie.dateBiologie);
            this.editBiologieDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewBiologie(biologie:BiologieVo){
        const isPermistted = await this.roleService.isPermitted('Biologie', 'view');
        if(isPermistted){
           this.biologieService.findByIdWithAssociatedList(biologie).subscribe(res => {
           this.selectedBiologie = res;
            this.selectedBiologie.dateBiologie = new Date(biologie.dateBiologie);
            this.viewBiologieDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateBiologie(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedBiologie = new BiologieVo();
            this.createBiologieDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteBiologie(biologie:BiologieVo){
       const isPermistted = await this.roleService.isPermitted('Biologie', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Biologie) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.biologieService.delete(biologie).subscribe(status=>{
                          if(status > 0){
                          const position = this.biologies.indexOf(biologie);
                          position > -1 ? this.biologies.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Biologie Supprimé',
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

public async loadExamen(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Biologie', 'list');
    isPermistted ? this.examenService.findAll().subscribe(examens => this.examens = examens,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadDossierMedicale(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Biologie', 'list');
    isPermistted ? this.dossierMedicaleService.findAll().subscribe(dossierMedicales => this.dossierMedicales = dossierMedicales,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateBiologie(biologie: BiologieVo) {

     this.biologieService.findByIdWithAssociatedList(biologie).subscribe(
	 res => {
	       this.initDuplicateBiologie(res);
	       this.selectedBiologie = res;
	       this.selectedBiologie.id = null;
            this.createBiologieDialog = true;

});

	}

	initDuplicateBiologie(res: BiologieVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.biologies.map(e => {
    return {
                    'Date biologie': this.datePipe.transform(e.dateBiologie , 'dd-MM-yyyy'),
            'Examen': e.examenVo?.libelle ,
                    'Resultat': e.resultat ,
            'Dossier medicale': e.dossierMedicaleVo?.ref ,
     }
      });

      this.criteriaData = [{
            'Date biologie Min': this.searchBiologie.dateBiologieMin ? this.datePipe.transform(this.searchBiologie.dateBiologieMin , this.dateFormat) : environment.emptyForExport ,
            'Date biologie Max': this.searchBiologie.dateBiologieMax ? this.datePipe.transform(this.searchBiologie.dateBiologieMax , this.dateFormat) : environment.emptyForExport ,
        'Examen': this.searchBiologie.examenVo?.libelle ? this.searchBiologie.examenVo?.libelle : environment.emptyForExport ,
            'Resultat': this.searchBiologie.resultat ? this.searchBiologie.resultat : environment.emptyForExport ,
        'Dossier medicale': this.searchBiologie.dossierMedicaleVo?.ref ? this.searchBiologie.dossierMedicaleVo?.ref : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get biologies(): Array<BiologieVo> {
           return this.biologieService.biologies;
       }
    set biologies(value: Array<BiologieVo>) {
        this.biologieService.biologies = value;
       }

    get biologieSelections(): Array<BiologieVo> {
           return this.biologieService.biologieSelections;
       }
    set biologieSelections(value: Array<BiologieVo>) {
        this.biologieService.biologieSelections = value;
       }
   
     


    get selectedBiologie():BiologieVo {
           return this.biologieService.selectedBiologie;
       }
    set selectedBiologie(value: BiologieVo) {
        this.biologieService.selectedBiologie = value;
       }
    
    get createBiologieDialog():boolean {
           return this.biologieService.createBiologieDialog;
       }
    set createBiologieDialog(value: boolean) {
        this.biologieService.createBiologieDialog= value;
       }
    
    get editBiologieDialog():boolean {
           return this.biologieService.editBiologieDialog;
       }
    set editBiologieDialog(value: boolean) {
        this.biologieService.editBiologieDialog= value;
       }
    get viewBiologieDialog():boolean {
           return this.biologieService.viewBiologieDialog;
       }
    set viewBiologieDialog(value: boolean) {
        this.biologieService.viewBiologieDialog = value;
       }
       
     get searchBiologie(): BiologieVo {
        return this.biologieService.searchBiologie;
       }
    set searchBiologie(value: BiologieVo) {
        this.biologieService.searchBiologie = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
