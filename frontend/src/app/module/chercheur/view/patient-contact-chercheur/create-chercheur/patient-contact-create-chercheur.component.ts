import {Component, OnInit, Input} from '@angular/core';
import {PatientContactService} from '../../../../../controller/service/PatientContact.service';
import {PatientContactVo} from '../../../../../controller/model/PatientContact.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {RelationVo} from '../../../../../controller/model/Relation.model';
import {RelationService} from '../../../../../controller/service/Relation.service';
@Component({
  selector: 'app-patient-contact-create-chercheur',
  templateUrl: './patient-contact-create-chercheur.component.html',
  styleUrls: ['./patient-contact-create-chercheur.component.css']
})
export class PatientContactCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validPatientContactRef = true;
   _validPatientContactNom = true;
   _validPatientContactPrenom = true;
   _validPatientContactRelation = true;
   _validPatientContactTelephone = true;

    _validRelationCode = true;
    _validRelationLibelle = true;



constructor(private datePipe: DatePipe, private patientContactService: PatientContactService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private relationService :RelationService
) {

}


// methods
ngOnInit(): void {

    this.selectedRelation = new RelationVo();
    this.relationService.findAll().subscribe((data) => this.relations = data);
}




private setValidation(value : boolean){
    this.validPatientContactRef = value;
    this.validPatientContactNom = value;
    this.validPatientContactPrenom = value;
    this.validPatientContactRelation = value;
    this.validPatientContactTelephone = value;
    }


public save(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.saveWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs sur le formulaire'});
  }
}

public saveWithShowOption(showList: boolean){
     this.patientContactService.save().subscribe(patientContact=>{
       this.patientContacts.push({...patientContact});
       this.createPatientContactDialog = false;
       this.submitted = false;
       this.selectedPatientContact = new PatientContactVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validatePatientContactRef();
this.validatePatientContactNom();
this.validatePatientContactPrenom();
this.validatePatientContactRelation();
this.validatePatientContactTelephone();

    }

private validatePatientContactRef(){
        if (this.stringUtilService.isEmpty(this.selectedPatientContact.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validPatientContactRef = false;
        } else {
            this.validPatientContactRef = true;
        }
    }
private validatePatientContactNom(){
        if (this.stringUtilService.isEmpty(this.selectedPatientContact.nom)) {
            this.errorMessages.push('Nom non valide');
            this.validPatientContactNom = false;
        } else {
            this.validPatientContactNom = true;
        }
    }
private validatePatientContactPrenom(){
        if (this.stringUtilService.isEmpty(this.selectedPatientContact.prenom)) {
            this.errorMessages.push('Prenom non valide');
            this.validPatientContactPrenom = false;
        } else {
            this.validPatientContactPrenom = true;
        }
    }
private validatePatientContactRelation(){
        if (this.stringUtilService.isEmpty(this.selectedPatientContact.relationVo)) {
            this.errorMessages.push('Relation non valide');
            this.validPatientContactRelation = false;
        } else {
            this.validPatientContactRelation = true;
        }
    }
private validatePatientContactTelephone(){
        if (this.stringUtilService.isEmpty(this.selectedPatientContact.telephone)) {
            this.errorMessages.push('Telephone non valide');
            this.validPatientContactTelephone = false;
        } else {
            this.validPatientContactTelephone = true;
        }
    }











//openPopup
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

hideCreateDialog(){
    this.createPatientContactDialog  = false;
    this.setValidation(true);
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

   get createPatientContactDialog(): boolean {
           return this.patientContactService.createPatientContactDialog;

       }
    set createPatientContactDialog(value: boolean) {
        this.patientContactService.createPatientContactDialog= value;
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
            return environment.dateFormatCreate;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }

     get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }




    get errorMessages(): string[] {
    return this._errorMessages;
    }

    set errorMessages(value: string[]) {
    this._errorMessages = value;
    }

    get validPatientContactRef(): boolean {
    return this._validPatientContactRef;
    }

    set validPatientContactRef(value: boolean) {
    this._validPatientContactRef = value;
    }
    get validPatientContactNom(): boolean {
    return this._validPatientContactNom;
    }

    set validPatientContactNom(value: boolean) {
    this._validPatientContactNom = value;
    }
    get validPatientContactPrenom(): boolean {
    return this._validPatientContactPrenom;
    }

    set validPatientContactPrenom(value: boolean) {
    this._validPatientContactPrenom = value;
    }
    get validPatientContactRelation(): boolean {
    return this._validPatientContactRelation;
    }

    set validPatientContactRelation(value: boolean) {
    this._validPatientContactRelation = value;
    }
    get validPatientContactTelephone(): boolean {
    return this._validPatientContactTelephone;
    }

    set validPatientContactTelephone(value: boolean) {
    this._validPatientContactTelephone = value;
    }

    get validRelationCode(): boolean {
    return this._validRelationCode;
    }

    set validRelationCode(value: boolean) {
    this._validRelationCode = value;
    }
    get validRelationLibelle(): boolean {
    return this._validRelationLibelle;
    }

    set validRelationLibelle(value: boolean) {
    this._validRelationLibelle = value;
    }

}
