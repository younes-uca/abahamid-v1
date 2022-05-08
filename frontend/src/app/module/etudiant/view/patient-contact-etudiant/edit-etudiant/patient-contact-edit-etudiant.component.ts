import {Component, OnInit} from '@angular/core';
import {PatientContactService} from '../../../../../controller/service/PatientContact.service';
import {PatientContactVo} from '../../../../../controller/model/PatientContact.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {RelationVo} from '../../../../../controller/model/Relation.model';
import {RelationService} from '../../../../../controller/service/Relation.service';

@Component({
  selector: 'app-patient-contact-edit-etudiant',
  templateUrl: './patient-contact-edit-etudiant.component.html',
  styleUrls: ['./patient-contact-edit-etudiant.component.css']
})
export class PatientContactEditEtudiantComponent implements OnInit {


constructor(private datePipe: DatePipe, private patientContactService: PatientContactService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private relationService: RelationService
) {
}

// methods
ngOnInit(): void {
    this.selectedRelation = new RelationVo();
    this.relationService.findAll().subscribe((data) => this.relations = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.patientContactService.edit().subscribe(patientContact=>{
    const myIndex = this.patientContacts.findIndex(e => e.id === this.selectedPatientContact.id);
    this.patientContacts[myIndex] = this.selectedPatientContact;
    this.editPatientContactDialog = false;
    this.selectedPatientContact = new PatientContactVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreaterelation(relation: string) {
                      const isPermistted = await this.roleService.isPermitted('Relation', 'add');
                       if(isPermistted){
         this.selectedRelation = new RelationVo();
        this.createRelationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editPatientContactDialog  = false;
}

// getters and setters

get patientContacts(): Array<PatientContactVo> {
    return this.patientContactService.patientContacts;
       }
set patientContacts(value: Array<PatientContactVo>) {
        this.patientContactService.patientContacts = value;
       }

 get selectedPatientContact(): PatientContactVo {
           return this.patientContactService.selectedPatientContact;
       }
    set selectedPatientContact(value: PatientContactVo) {
        this.patientContactService.selectedPatientContact = value;
       }

   get editPatientContactDialog(): boolean {
           return this.patientContactService.editPatientContactDialog;

       }
    set editPatientContactDialog(value: boolean) {
        this.patientContactService.editPatientContactDialog = value;
       }

       get selectedRelation(): RelationVo {
           return this.relationService.selectedRelation;
       }
      set selectedRelation(value: RelationVo) {
        this.relationService.selectedRelation = value;
       }
       get relations(): Array<RelationVo> {
           return this.relationService.relations;
       }
       set relations(value: Array<RelationVo>) {
        this.relationService.relations = value;
       }
       get createRelationDialog(): boolean {
           return this.relationService.createRelationDialog;
       }
      set createRelationDialog(value: boolean) {
        this.relationService.createRelationDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
