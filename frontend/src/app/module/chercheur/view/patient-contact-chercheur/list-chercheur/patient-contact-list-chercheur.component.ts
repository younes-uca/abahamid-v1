import {Component, OnInit} from '@angular/core';
import {PatientContactService} from '../../../../../controller/service/PatientContact.service';
import {PatientContactVo} from '../../../../../controller/model/PatientContact.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { RelationService } from '../../../../../controller/service/Relation.service';

import {RelationVo} from '../../../../../controller/model/Relation.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-patient-contact-list-chercheur',
  templateUrl: './patient-contact-list-chercheur.component.html',
  styleUrls: ['./patient-contact-list-chercheur.component.css']
})
export class PatientContactListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'PatientContact';
    relations :Array<RelationVo>;


    constructor(private datePipe: DatePipe, private patientContactService: PatientContactService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private relationService: RelationService
) { }

    ngOnInit(): void {
      this.loadPatientContacts();
      this.initExport();
      this.initCol();
      this.loadRelation();
    }
    
    // methods
      public async loadPatientContacts(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PatientContact', 'list');
        isPermistted ? this.patientContactService.findAll().subscribe(patientContacts => this.patientContacts = patientContacts,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.patientContactService.findByCriteria(this.searchPatientContact).subscribe(patientContacts=>{
            
            this.patientContacts = patientContacts;
           // this.searchPatientContact = new PatientContactVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'ref', header: 'Ref'},
                            {field: 'nom', header: 'Nom'},
                            {field: 'prenom', header: 'Prenom'},
                        {field: 'relation?.libelle', header: 'Relation'},
                            {field: 'adresse', header: 'Adresse'},
                            {field: 'telephone', header: 'Telephone'},
                            {field: 'mail', header: 'Mail'},
        ];
    }
    
    public async editPatientContact(patientContact:PatientContactVo){
        const isPermistted = await this.roleService.isPermitted('PatientContact', 'edit');
         if(isPermistted){
          this.patientContactService.findByIdWithAssociatedList(patientContact).subscribe(res => {
           this.selectedPatientContact = res;
            this.editPatientContactDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewPatientContact(patientContact:PatientContactVo){
        const isPermistted = await this.roleService.isPermitted('PatientContact', 'view');
        if(isPermistted){
           this.patientContactService.findByIdWithAssociatedList(patientContact).subscribe(res => {
           this.selectedPatientContact = res;
            this.viewPatientContactDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreatePatientContact(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedPatientContact = new PatientContactVo();
            this.createPatientContactDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deletePatientContact(patientContact:PatientContactVo){
       const isPermistted = await this.roleService.isPermitted('PatientContact', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Patient contact) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.patientContactService.delete(patientContact).subscribe(status=>{
                          if(status > 0){
                          const position = this.patientContacts.indexOf(patientContact);
                          position > -1 ? this.patientContacts.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Patient contact Supprimé',
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

public async loadRelation(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('PatientContact', 'list');
    isPermistted ? this.relationService.findAll().subscribe(relations => this.relations = relations,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicatePatientContact(patientContact: PatientContactVo) {

     this.patientContactService.findByIdWithAssociatedList(patientContact).subscribe(
	 res => {
	       this.initDuplicatePatientContact(res);
	       this.selectedPatientContact = res;
	       this.selectedPatientContact.id = null;
            this.createPatientContactDialog = true;

});

	}

	initDuplicatePatientContact(res: PatientContactVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.patientContacts.map(e => {
    return {
                    'Ref': e.ref ,
                    'Nom': e.nom ,
                    'Prenom': e.prenom ,
            'Relation': e.relationVo?.libelle ,
                    'Adresse': e.adresse ,
                    'Telephone': e.telephone ,
                    'Mail': e.mail ,
     }
      });

      this.criteriaData = [{
            'Ref': this.searchPatientContact.ref ? this.searchPatientContact.ref : environment.emptyForExport ,
            'Nom': this.searchPatientContact.nom ? this.searchPatientContact.nom : environment.emptyForExport ,
            'Prenom': this.searchPatientContact.prenom ? this.searchPatientContact.prenom : environment.emptyForExport ,
        'Relation': this.searchPatientContact.relationVo?.libelle ? this.searchPatientContact.relationVo?.libelle : environment.emptyForExport ,
            'Adresse': this.searchPatientContact.adresse ? this.searchPatientContact.adresse : environment.emptyForExport ,
            'Telephone': this.searchPatientContact.telephone ? this.searchPatientContact.telephone : environment.emptyForExport ,
            'Mail': this.searchPatientContact.mail ? this.searchPatientContact.mail : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get patientContacts(): Array<PatientContactVo> {
           return this.patientContactService.patientContacts;
       }
    set patientContacts(value: Array<PatientContactVo>) {
        this.patientContactService.patientContacts = value;
       }

    get patientContactSelections(): Array<PatientContactVo> {
           return this.patientContactService.patientContactSelections;
       }
    set patientContactSelections(value: Array<PatientContactVo>) {
        this.patientContactService.patientContactSelections = value;
       }
   
     


    get selectedPatientContact():PatientContactVo {
           return this.patientContactService.selectedPatientContact;
       }
    set selectedPatientContact(value: PatientContactVo) {
        this.patientContactService.selectedPatientContact = value;
       }
    
    get createPatientContactDialog():boolean {
           return this.patientContactService.createPatientContactDialog;
       }
    set createPatientContactDialog(value: boolean) {
        this.patientContactService.createPatientContactDialog= value;
       }
    
    get editPatientContactDialog():boolean {
           return this.patientContactService.editPatientContactDialog;
       }
    set editPatientContactDialog(value: boolean) {
        this.patientContactService.editPatientContactDialog= value;
       }
    get viewPatientContactDialog():boolean {
           return this.patientContactService.viewPatientContactDialog;
       }
    set viewPatientContactDialog(value: boolean) {
        this.patientContactService.viewPatientContactDialog = value;
       }
       
     get searchPatientContact(): PatientContactVo {
        return this.patientContactService.searchPatientContact;
       }
    set searchPatientContact(value: PatientContactVo) {
        this.patientContactService.searchPatientContact = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
