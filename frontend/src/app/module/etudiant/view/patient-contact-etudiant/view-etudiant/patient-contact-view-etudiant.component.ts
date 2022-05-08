import {Component, OnInit} from '@angular/core';
import {PatientContactService} from '../../../../../controller/service/PatientContact.service';
import {PatientContactVo} from '../../../../../controller/model/PatientContact.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {RelationVo} from '../../../../../controller/model/Relation.model';
import {RelationService} from '../../../../../controller/service/Relation.service';

@Component({
  selector: 'app-patient-contact-view-etudiant',
  templateUrl: './patient-contact-view-etudiant.component.html',
  styleUrls: ['./patient-contact-view-etudiant.component.css']
})
export class PatientContactViewEtudiantComponent implements OnInit {


constructor(private datePipe: DatePipe, private patientContactService: PatientContactService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private relationService :RelationService
) {
}

// methods
ngOnInit(): void {
    this.selectedRelation = new RelationVo();
    this.relationService.findAll().subscribe((data) => this.relations = data);
}

hideViewDialog(){
    this.viewPatientContactDialog  = false;
}

// getters and setters

get patientContacts(): Array<PatientContactVo> {
    return this.patientContactService.patientContacts;
       }
set patientContacts(value: Array<PatientContactVo>) {
        this.patientContactService.patientContacts = value;
       }

 get selectedPatientContact():PatientContactVo {
           return this.patientContactService.selectedPatientContact;
       }
    set selectedPatientContact(value: PatientContactVo) {
        this.patientContactService.selectedPatientContact = value;
       }

   get viewPatientContactDialog():boolean {
           return this.patientContactService.viewPatientContactDialog;

       }
    set viewPatientContactDialog(value: boolean) {
        this.patientContactService.viewPatientContactDialog= value;
       }

       get selectedRelation():RelationVo {
           return this.relationService.selectedRelation;
       }
      set selectedRelation(value: RelationVo) {
        this.relationService.selectedRelation = value;
       }
       get relations():Array<RelationVo> {
           return this.relationService.relations;
       }
       set relations(value: Array<RelationVo>) {
        this.relationService.relations = value;
       }
       get editRelationDialog():boolean {
           return this.relationService.editRelationDialog;
       }
      set editRelationDialog(value: boolean) {
        this.relationService.editRelationDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
