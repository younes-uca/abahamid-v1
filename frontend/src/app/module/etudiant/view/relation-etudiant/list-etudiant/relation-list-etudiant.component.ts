import {Component, OnInit} from '@angular/core';
import {RelationService} from '../../../../../controller/service/Relation.service';
import {RelationVo} from '../../../../../controller/model/Relation.model';
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
  selector: 'app-relation-list-etudiant',
  templateUrl: './relation-list-etudiant.component.html',
  styleUrls: ['./relation-list-etudiant.component.css']
})
export class RelationListEtudiantComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Relation';


    constructor(private datePipe: DatePipe, private relationService: RelationService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadRelations();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadRelations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Relation', 'list');
        isPermistted ? this.relationService.findAll().subscribe(relations => this.relations = relations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.relationService.findByCriteria(this.searchRelation).subscribe(relations=>{
            
            this.relations = relations;
           // this.searchRelation = new RelationVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'code', header: 'Code'},
                            {field: 'libelle', header: 'Libelle'},
        ];
    }
    
    public async editRelation(relation:RelationVo){
        const isPermistted = await this.roleService.isPermitted('Relation', 'edit');
         if(isPermistted){
          this.relationService.findByIdWithAssociatedList(relation).subscribe(res => {
           this.selectedRelation = res;
            this.editRelationDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewRelation(relation:RelationVo){
        const isPermistted = await this.roleService.isPermitted('Relation', 'view');
        if(isPermistted){
           this.relationService.findByIdWithAssociatedList(relation).subscribe(res => {
           this.selectedRelation = res;
            this.viewRelationDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateRelation(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedRelation = new RelationVo();
            this.createRelationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteRelation(relation:RelationVo){
       const isPermistted = await this.roleService.isPermitted('Relation', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Relation) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.relationService.delete(relation).subscribe(status=>{
                          if(status > 0){
                          const position = this.relations.indexOf(relation);
                          position > -1 ? this.relations.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Relation Supprimé',
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


public async duplicateRelation(relation: RelationVo) {

     this.relationService.findByIdWithAssociatedList(relation).subscribe(
	 res => {
	       this.initDuplicateRelation(res);
	       this.selectedRelation = res;
	       this.selectedRelation.id = null;
            this.createRelationDialog = true;

});

	}

	initDuplicateRelation(res: RelationVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.relations.map(e => {
    return {
                    'Code': e.code ,
                    'Libelle': e.libelle ,
     }
      });

      this.criteriaData = [{
            'Code': this.searchRelation.code ? this.searchRelation.code : environment.emptyForExport ,
            'Libelle': this.searchRelation.libelle ? this.searchRelation.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get relations(): Array<RelationVo> {
           return this.relationService.relations;
       }
    set relations(value: Array<RelationVo>) {
        this.relationService.relations = value;
       }

    get relationSelections(): Array<RelationVo> {
           return this.relationService.relationSelections;
       }
    set relationSelections(value: Array<RelationVo>) {
        this.relationService.relationSelections = value;
       }
   
     


    get selectedRelation():RelationVo {
           return this.relationService.selectedRelation;
       }
    set selectedRelation(value: RelationVo) {
        this.relationService.selectedRelation = value;
       }
    
    get createRelationDialog():boolean {
           return this.relationService.createRelationDialog;
       }
    set createRelationDialog(value: boolean) {
        this.relationService.createRelationDialog= value;
       }
    
    get editRelationDialog():boolean {
           return this.relationService.editRelationDialog;
       }
    set editRelationDialog(value: boolean) {
        this.relationService.editRelationDialog= value;
       }
    get viewRelationDialog():boolean {
           return this.relationService.viewRelationDialog;
       }
    set viewRelationDialog(value: boolean) {
        this.relationService.viewRelationDialog = value;
       }
       
     get searchRelation(): RelationVo {
        return this.relationService.searchRelation;
       }
    set searchRelation(value: RelationVo) {
        this.relationService.searchRelation = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
