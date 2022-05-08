import {Component, OnInit} from '@angular/core';
import {PhaseImageService} from '../../../../../controller/service/PhaseImage.service';
import {PhaseImageVo} from '../../../../../controller/model/PhaseImage.model';
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
  selector: 'app-phase-image-list-etudiant',
  templateUrl: './phase-image-list-etudiant.component.html',
  styleUrls: ['./phase-image-list-etudiant.component.css']
})
export class PhaseImageListEtudiantComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'PhaseImage';


    constructor(private datePipe: DatePipe, private phaseImageService: PhaseImageService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadPhaseImages();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadPhaseImages(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PhaseImage', 'list');
        isPermistted ? this.phaseImageService.findAll().subscribe(phaseImages => this.phaseImages = phaseImages,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.phaseImageService.findByCriteria(this.searchPhaseImage).subscribe(phaseImages=>{
            
            this.phaseImages = phaseImages;
           // this.searchPhaseImage = new PhaseImageVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'code', header: 'Code'},
                            {field: 'libelle', header: 'Libelle'},
        ];
    }
    
    public async editPhaseImage(phaseImage:PhaseImageVo){
        const isPermistted = await this.roleService.isPermitted('PhaseImage', 'edit');
         if(isPermistted){
          this.phaseImageService.findByIdWithAssociatedList(phaseImage).subscribe(res => {
           this.selectedPhaseImage = res;
            this.editPhaseImageDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewPhaseImage(phaseImage:PhaseImageVo){
        const isPermistted = await this.roleService.isPermitted('PhaseImage', 'view');
        if(isPermistted){
           this.phaseImageService.findByIdWithAssociatedList(phaseImage).subscribe(res => {
           this.selectedPhaseImage = res;
            this.viewPhaseImageDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreatePhaseImage(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedPhaseImage = new PhaseImageVo();
            this.createPhaseImageDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deletePhaseImage(phaseImage:PhaseImageVo){
       const isPermistted = await this.roleService.isPermitted('PhaseImage', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Phase image) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.phaseImageService.delete(phaseImage).subscribe(status=>{
                          if(status > 0){
                          const position = this.phaseImages.indexOf(phaseImage);
                          position > -1 ? this.phaseImages.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Phase image Supprimé',
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


public async duplicatePhaseImage(phaseImage: PhaseImageVo) {

     this.phaseImageService.findByIdWithAssociatedList(phaseImage).subscribe(
	 res => {
	       this.initDuplicatePhaseImage(res);
	       this.selectedPhaseImage = res;
	       this.selectedPhaseImage.id = null;
            this.createPhaseImageDialog = true;

});

	}

	initDuplicatePhaseImage(res: PhaseImageVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.phaseImages.map(e => {
    return {
                    'Code': e.code ,
                    'Libelle': e.libelle ,
     }
      });

      this.criteriaData = [{
            'Code': this.searchPhaseImage.code ? this.searchPhaseImage.code : environment.emptyForExport ,
            'Libelle': this.searchPhaseImage.libelle ? this.searchPhaseImage.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get phaseImages(): Array<PhaseImageVo> {
           return this.phaseImageService.phaseImages;
       }
    set phaseImages(value: Array<PhaseImageVo>) {
        this.phaseImageService.phaseImages = value;
       }

    get phaseImageSelections(): Array<PhaseImageVo> {
           return this.phaseImageService.phaseImageSelections;
       }
    set phaseImageSelections(value: Array<PhaseImageVo>) {
        this.phaseImageService.phaseImageSelections = value;
       }
   
     


    get selectedPhaseImage():PhaseImageVo {
           return this.phaseImageService.selectedPhaseImage;
       }
    set selectedPhaseImage(value: PhaseImageVo) {
        this.phaseImageService.selectedPhaseImage = value;
       }
    
    get createPhaseImageDialog():boolean {
           return this.phaseImageService.createPhaseImageDialog;
       }
    set createPhaseImageDialog(value: boolean) {
        this.phaseImageService.createPhaseImageDialog= value;
       }
    
    get editPhaseImageDialog():boolean {
           return this.phaseImageService.editPhaseImageDialog;
       }
    set editPhaseImageDialog(value: boolean) {
        this.phaseImageService.editPhaseImageDialog= value;
       }
    get viewPhaseImageDialog():boolean {
           return this.phaseImageService.viewPhaseImageDialog;
       }
    set viewPhaseImageDialog(value: boolean) {
        this.phaseImageService.viewPhaseImageDialog = value;
       }
       
     get searchPhaseImage(): PhaseImageVo {
        return this.phaseImageService.searchPhaseImage;
       }
    set searchPhaseImage(value: PhaseImageVo) {
        this.phaseImageService.searchPhaseImage = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
