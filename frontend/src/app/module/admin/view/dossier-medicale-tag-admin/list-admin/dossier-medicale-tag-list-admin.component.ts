import {Component, OnInit} from '@angular/core';
import {DossierMedicaleTagService} from '../../../../../controller/service/DossierMedicaleTag.service';
import {DossierMedicaleTagVo} from '../../../../../controller/model/DossierMedicaleTag.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { TagService } from '../../../../../controller/service/Tag.service';
import { DossierMedicaleService } from '../../../../../controller/service/DossierMedicale.service';

import {TagVo} from '../../../../../controller/model/Tag.model';
import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-dossier-medicale-tag-list-admin',
  templateUrl: './dossier-medicale-tag-list-admin.component.html',
  styleUrls: ['./dossier-medicale-tag-list-admin.component.css']
})
export class DossierMedicaleTagListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'DossierMedicaleTag';
    tags :Array<TagVo>;
    dossierMedicales :Array<DossierMedicaleVo>;


    constructor(private datePipe: DatePipe, private dossierMedicaleTagService: DossierMedicaleTagService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private tagService: TagService
        , private dossierMedicaleService: DossierMedicaleService
) { }

    ngOnInit(): void {
      this.loadDossierMedicaleTags();
      this.initExport();
      this.initCol();
      this.loadTag();
      this.loadDossierMedicale();
    }
    
    // methods
      public async loadDossierMedicaleTags(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DossierMedicaleTag', 'list');
        isPermistted ? this.dossierMedicaleTagService.findAll().subscribe(dossierMedicaleTags => this.dossierMedicaleTags = dossierMedicaleTags,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.dossierMedicaleTagService.findByCriteria(this.searchDossierMedicaleTag).subscribe(dossierMedicaleTags=>{
            
            this.dossierMedicaleTags = dossierMedicaleTags;
           // this.searchDossierMedicaleTag = new DossierMedicaleTagVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                        {field: 'tag?.reference', header: 'Tag'},
                        {field: 'dossierMedicale?.ref', header: 'Dossier medicale'},
        ];
    }
    
    public async editDossierMedicaleTag(dossierMedicaleTag:DossierMedicaleTagVo){
        const isPermistted = await this.roleService.isPermitted('DossierMedicaleTag', 'edit');
         if(isPermistted){
          this.dossierMedicaleTagService.findByIdWithAssociatedList(dossierMedicaleTag).subscribe(res => {
           this.selectedDossierMedicaleTag = res;
            this.editDossierMedicaleTagDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewDossierMedicaleTag(dossierMedicaleTag:DossierMedicaleTagVo){
        const isPermistted = await this.roleService.isPermitted('DossierMedicaleTag', 'view');
        if(isPermistted){
           this.dossierMedicaleTagService.findByIdWithAssociatedList(dossierMedicaleTag).subscribe(res => {
           this.selectedDossierMedicaleTag = res;
            this.viewDossierMedicaleTagDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateDossierMedicaleTag(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedDossierMedicaleTag = new DossierMedicaleTagVo();
            this.createDossierMedicaleTagDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteDossierMedicaleTag(dossierMedicaleTag:DossierMedicaleTagVo){
       const isPermistted = await this.roleService.isPermitted('DossierMedicaleTag', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Dossier medicale tag) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.dossierMedicaleTagService.delete(dossierMedicaleTag).subscribe(status=>{
                          if(status > 0){
                          const position = this.dossierMedicaleTags.indexOf(dossierMedicaleTag);
                          position > -1 ? this.dossierMedicaleTags.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Dossier medicale tag Supprimé',
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

public async loadTag(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DossierMedicaleTag', 'list');
    isPermistted ? this.tagService.findAll().subscribe(tags => this.tags = tags,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadDossierMedicale(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DossierMedicaleTag', 'list');
    isPermistted ? this.dossierMedicaleService.findAll().subscribe(dossierMedicales => this.dossierMedicales = dossierMedicales,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateDossierMedicaleTag(dossierMedicaleTag: DossierMedicaleTagVo) {

     this.dossierMedicaleTagService.findByIdWithAssociatedList(dossierMedicaleTag).subscribe(
	 res => {
	       this.initDuplicateDossierMedicaleTag(res);
	       this.selectedDossierMedicaleTag = res;
	       this.selectedDossierMedicaleTag.id = null;
            this.createDossierMedicaleTagDialog = true;

});

	}

	initDuplicateDossierMedicaleTag(res: DossierMedicaleTagVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.dossierMedicaleTags.map(e => {
    return {
            'Tag': e.tagVo?.reference ,
            'Dossier medicale': e.dossierMedicaleVo?.ref ,
     }
      });

      this.criteriaData = [{
        'Tag': this.searchDossierMedicaleTag.tagVo?.reference ? this.searchDossierMedicaleTag.tagVo?.reference : environment.emptyForExport ,
        'Dossier medicale': this.searchDossierMedicaleTag.dossierMedicaleVo?.ref ? this.searchDossierMedicaleTag.dossierMedicaleVo?.ref : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get dossierMedicaleTags(): Array<DossierMedicaleTagVo> {
           return this.dossierMedicaleTagService.dossierMedicaleTags;
       }
    set dossierMedicaleTags(value: Array<DossierMedicaleTagVo>) {
        this.dossierMedicaleTagService.dossierMedicaleTags = value;
       }

    get dossierMedicaleTagSelections(): Array<DossierMedicaleTagVo> {
           return this.dossierMedicaleTagService.dossierMedicaleTagSelections;
       }
    set dossierMedicaleTagSelections(value: Array<DossierMedicaleTagVo>) {
        this.dossierMedicaleTagService.dossierMedicaleTagSelections = value;
       }
   
     


    get selectedDossierMedicaleTag():DossierMedicaleTagVo {
           return this.dossierMedicaleTagService.selectedDossierMedicaleTag;
       }
    set selectedDossierMedicaleTag(value: DossierMedicaleTagVo) {
        this.dossierMedicaleTagService.selectedDossierMedicaleTag = value;
       }
    
    get createDossierMedicaleTagDialog():boolean {
           return this.dossierMedicaleTagService.createDossierMedicaleTagDialog;
       }
    set createDossierMedicaleTagDialog(value: boolean) {
        this.dossierMedicaleTagService.createDossierMedicaleTagDialog= value;
       }
    
    get editDossierMedicaleTagDialog():boolean {
           return this.dossierMedicaleTagService.editDossierMedicaleTagDialog;
       }
    set editDossierMedicaleTagDialog(value: boolean) {
        this.dossierMedicaleTagService.editDossierMedicaleTagDialog= value;
       }
    get viewDossierMedicaleTagDialog():boolean {
           return this.dossierMedicaleTagService.viewDossierMedicaleTagDialog;
       }
    set viewDossierMedicaleTagDialog(value: boolean) {
        this.dossierMedicaleTagService.viewDossierMedicaleTagDialog = value;
       }
       
     get searchDossierMedicaleTag(): DossierMedicaleTagVo {
        return this.dossierMedicaleTagService.searchDossierMedicaleTag;
       }
    set searchDossierMedicaleTag(value: DossierMedicaleTagVo) {
        this.dossierMedicaleTagService.searchDossierMedicaleTag = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
