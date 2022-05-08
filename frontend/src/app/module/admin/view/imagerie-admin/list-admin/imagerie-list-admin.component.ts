import {Component, OnInit} from '@angular/core';
import {ImagerieService} from '../../../../../controller/service/Imagerie.service';
import {ImagerieVo} from '../../../../../controller/model/Imagerie.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { TypeImageService } from '../../../../../controller/service/TypeImage.service';
import { PhaseImageService } from '../../../../../controller/service/PhaseImage.service';
import { DossierMedicaleService } from '../../../../../controller/service/DossierMedicale.service';

import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {TypeImageVo} from '../../../../../controller/model/TypeImage.model';
import {PhaseImageVo} from '../../../../../controller/model/PhaseImage.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-imagerie-list-admin',
  templateUrl: './imagerie-list-admin.component.html',
  styleUrls: ['./imagerie-list-admin.component.css']
})
export class ImagerieListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Imagerie';
    typeImages :Array<TypeImageVo>;
    phaseImages :Array<PhaseImageVo>;
    dossierMedicales :Array<DossierMedicaleVo>;


    constructor(private datePipe: DatePipe, private imagerieService: ImagerieService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private typeImageService: TypeImageService
        , private phaseImageService: PhaseImageService
        , private dossierMedicaleService: DossierMedicaleService
) { }

    ngOnInit(): void {
      this.loadImageries();
      this.initExport();
      this.initCol();
      this.loadTypeImage();
      this.loadPhaseImage();
      this.loadDossierMedicale();
    }
    
    // methods
      public async loadImageries(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Imagerie', 'list');
        isPermistted ? this.imagerieService.findAll().subscribe(imageries => this.imageries = imageries,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.imagerieService.findByCriteria(this.searchImagerie).subscribe(imageries=>{
            
            this.imageries = imageries;
           // this.searchImagerie = new ImagerieVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'dateImagerie', header: 'Date imagerie'},
                        {field: 'typeImage?.libelle', header: 'Type image'},
                        {field: 'phaseImage?.libelle', header: 'Phase image'},
                            {field: 'imageScan', header: 'Image scan'},
                        {field: 'dossierMedicale?.ref', header: 'Dossier medicale'},
        ];
    }
    
    public async editImagerie(imagerie:ImagerieVo){
        const isPermistted = await this.roleService.isPermitted('Imagerie', 'edit');
         if(isPermistted){
          this.imagerieService.findByIdWithAssociatedList(imagerie).subscribe(res => {
           this.selectedImagerie = res;
            this.selectedImagerie.dateImagerie = new Date(imagerie.dateImagerie);
            this.editImagerieDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewImagerie(imagerie:ImagerieVo){
        const isPermistted = await this.roleService.isPermitted('Imagerie', 'view');
        if(isPermistted){
           this.imagerieService.findByIdWithAssociatedList(imagerie).subscribe(res => {
           this.selectedImagerie = res;
            this.selectedImagerie.dateImagerie = new Date(imagerie.dateImagerie);
            this.viewImagerieDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateImagerie(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedImagerie = new ImagerieVo();
            this.createImagerieDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteImagerie(imagerie:ImagerieVo){
       const isPermistted = await this.roleService.isPermitted('Imagerie', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Imagerie) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.imagerieService.delete(imagerie).subscribe(status=>{
                          if(status > 0){
                          const position = this.imageries.indexOf(imagerie);
                          position > -1 ? this.imageries.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Imagerie Supprimé',
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

public async loadTypeImage(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Imagerie', 'list');
    isPermistted ? this.typeImageService.findAll().subscribe(typeImages => this.typeImages = typeImages,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadPhaseImage(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Imagerie', 'list');
    isPermistted ? this.phaseImageService.findAll().subscribe(phaseImages => this.phaseImages = phaseImages,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadDossierMedicale(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Imagerie', 'list');
    isPermistted ? this.dossierMedicaleService.findAll().subscribe(dossierMedicales => this.dossierMedicales = dossierMedicales,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateImagerie(imagerie: ImagerieVo) {

     this.imagerieService.findByIdWithAssociatedList(imagerie).subscribe(
	 res => {
	       this.initDuplicateImagerie(res);
	       this.selectedImagerie = res;
	       this.selectedImagerie.id = null;
            this.createImagerieDialog = true;

});

	}

	initDuplicateImagerie(res: ImagerieVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.imageries.map(e => {
    return {
                    'Date imagerie': this.datePipe.transform(e.dateImagerie , 'dd-MM-yyyy'),
            'Type image': e.typeImageVo?.libelle ,
            'Phase image': e.phaseImageVo?.libelle ,
                    'Image scan': e.imageScan ,
                    'Commanetaire': e.commanetaire ,
            'Dossier medicale': e.dossierMedicaleVo?.ref ,
     }
      });

      this.criteriaData = [{
            'Date imagerie Min': this.searchImagerie.dateImagerieMin ? this.datePipe.transform(this.searchImagerie.dateImagerieMin , this.dateFormat) : environment.emptyForExport ,
            'Date imagerie Max': this.searchImagerie.dateImagerieMax ? this.datePipe.transform(this.searchImagerie.dateImagerieMax , this.dateFormat) : environment.emptyForExport ,
        'Type image': this.searchImagerie.typeImageVo?.libelle ? this.searchImagerie.typeImageVo?.libelle : environment.emptyForExport ,
        'Phase image': this.searchImagerie.phaseImageVo?.libelle ? this.searchImagerie.phaseImageVo?.libelle : environment.emptyForExport ,
            'Image scan': this.searchImagerie.imageScan ? this.searchImagerie.imageScan : environment.emptyForExport ,
            'Commanetaire': this.searchImagerie.commanetaire ? this.searchImagerie.commanetaire : environment.emptyForExport ,
        'Dossier medicale': this.searchImagerie.dossierMedicaleVo?.ref ? this.searchImagerie.dossierMedicaleVo?.ref : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get imageries(): Array<ImagerieVo> {
           return this.imagerieService.imageries;
       }
    set imageries(value: Array<ImagerieVo>) {
        this.imagerieService.imageries = value;
       }

    get imagerieSelections(): Array<ImagerieVo> {
           return this.imagerieService.imagerieSelections;
       }
    set imagerieSelections(value: Array<ImagerieVo>) {
        this.imagerieService.imagerieSelections = value;
       }
   
     


    get selectedImagerie():ImagerieVo {
           return this.imagerieService.selectedImagerie;
       }
    set selectedImagerie(value: ImagerieVo) {
        this.imagerieService.selectedImagerie = value;
       }
    
    get createImagerieDialog():boolean {
           return this.imagerieService.createImagerieDialog;
       }
    set createImagerieDialog(value: boolean) {
        this.imagerieService.createImagerieDialog= value;
       }
    
    get editImagerieDialog():boolean {
           return this.imagerieService.editImagerieDialog;
       }
    set editImagerieDialog(value: boolean) {
        this.imagerieService.editImagerieDialog= value;
       }
    get viewImagerieDialog():boolean {
           return this.imagerieService.viewImagerieDialog;
       }
    set viewImagerieDialog(value: boolean) {
        this.imagerieService.viewImagerieDialog = value;
       }
       
     get searchImagerie(): ImagerieVo {
        return this.imagerieService.searchImagerie;
       }
    set searchImagerie(value: ImagerieVo) {
        this.imagerieService.searchImagerie = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
