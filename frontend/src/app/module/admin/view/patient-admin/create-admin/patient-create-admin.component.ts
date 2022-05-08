import {Component, OnInit, Input} from '@angular/core';
import {PatientService} from '../../../../../controller/service/Patient.service';
import {PatientVo} from '../../../../../controller/model/Patient.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {VilleVo} from '../../../../../controller/model/Ville.model';
import {VilleService} from '../../../../../controller/service/Ville.service';
import {SexeVo} from '../../../../../controller/model/Sexe.model';
import {SexeService} from '../../../../../controller/service/Sexe.service';
@Component({
  selector: 'app-patient-create-admin',
  templateUrl: './patient-create-admin.component.html',
  styleUrls: ['./patient-create-admin.component.css']
})
export class PatientCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validPatientCin = true;
   _validPatientNom = true;
   _validPatientPrenom = true;
   _validPatientDateDeNaissance = true;
   _validPatientProfession = true;
   _validPatientVille = true;
   _validPatientSexe = true;

    _validVilleCode = true;
    _validVilleLibelle = true;
    _validSexeCode = true;
    _validSexeLibelle = true;



constructor(private datePipe: DatePipe, private patientService: PatientService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private villeService :VilleService
,       private sexeService :SexeService
) {

}


// methods
ngOnInit(): void {

    this.selectedVille = new VilleVo();
    this.villeService.findAll().subscribe((data) => this.villes = data);
    this.selectedSexe = new SexeVo();
    this.sexeService.findAll().subscribe((data) => this.sexes = data);
}




private setValidation(value : boolean){
    this.validPatientCin = value;
    this.validPatientNom = value;
    this.validPatientPrenom = value;
    this.validPatientDateDeNaissance = value;
    this.validPatientProfession = value;
    this.validPatientVille = value;
    this.validPatientSexe = value;
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
     this.patientService.save().subscribe(patient=>{
       this.patients.push({...patient});
       this.createPatientDialog = false;
       this.submitted = false;
       this.selectedPatient = new PatientVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validatePatientCin();
this.validatePatientNom();
this.validatePatientPrenom();
this.validatePatientDateDeNaissance();
this.validatePatientProfession();
this.validatePatientVille();
this.validatePatientSexe();

    }

private validatePatientCin(){
        if (this.stringUtilService.isEmpty(this.selectedPatient.cin)) {
            this.errorMessages.push('Cin non valide');
            this.validPatientCin = false;
        } else {
            this.validPatientCin = true;
        }
    }
private validatePatientNom(){
        if (this.stringUtilService.isEmpty(this.selectedPatient.nom)) {
            this.errorMessages.push('Nom non valide');
            this.validPatientNom = false;
        } else {
            this.validPatientNom = true;
        }
    }
private validatePatientPrenom(){
        if (this.stringUtilService.isEmpty(this.selectedPatient.prenom)) {
            this.errorMessages.push('Prenom non valide');
            this.validPatientPrenom = false;
        } else {
            this.validPatientPrenom = true;
        }
    }
private validatePatientDateDeNaissance(){
        if (this.stringUtilService.isEmpty(this.selectedPatient.dateDeNaissance)) {
            this.errorMessages.push('Date de naissance non valide');
            this.validPatientDateDeNaissance = false;
        } else {
            this.validPatientDateDeNaissance = true;
        }
    }
private validatePatientProfession(){
        if (this.stringUtilService.isEmpty(this.selectedPatient.profession)) {
            this.errorMessages.push('Profession non valide');
            this.validPatientProfession = false;
        } else {
            this.validPatientProfession = true;
        }
    }
private validatePatientVille(){
        if (this.stringUtilService.isEmpty(this.selectedPatient.villeVo)) {
            this.errorMessages.push('Ville non valide');
            this.validPatientVille = false;
        } else {
            this.validPatientVille = true;
        }
    }
private validatePatientSexe(){
        if (this.stringUtilService.isEmpty(this.selectedPatient.sexeVo)) {
            this.errorMessages.push('Sexe non valide');
            this.validPatientSexe = false;
        } else {
            this.validPatientSexe = true;
        }
    }













//openPopup
              public async openCreateville(ville: string) {
                      const isPermistted = await this.roleService.isPermitted('Ville', 'add');
                       if(isPermistted){
         this.selectedVille = new VilleVo();
        this.createVilleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatesexe(sexe: string) {
                      const isPermistted = await this.roleService.isPermitted('Sexe', 'add');
                       if(isPermistted){
         this.selectedSexe = new SexeVo();
        this.createSexeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideCreateDialog(){
    this.createPatientDialog  = false;
    this.setValidation(true);
}

// getters and setters

get patients(): Array<PatientVo> {
    return this.patientService.patients;
       }
set patients(value: Array<PatientVo>) {
        this.patientService.patients = value;
       }

 get selectedPatient():PatientVo {
           return this.patientService.selectedPatient;
       }
    set selectedPatient(value: PatientVo) {
        this.patientService.selectedPatient = value;
       }

   get createPatientDialog(): boolean {
           return this.patientService.createPatientDialog;

       }
    set createPatientDialog(value: boolean) {
        this.patientService.createPatientDialog= value;
       }

       get selectedVille(): VilleVo {
           return this.villeService.selectedVille;
       }
      set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }
       get villes(): Array<VilleVo> {
           return this.villeService.villes;
       }
       set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       }
       get createVilleDialog(): boolean {
           return this.villeService.createVilleDialog;
       }
      set createVilleDialog(value: boolean) {
        this.villeService.createVilleDialog= value;
       }
       get selectedSexe(): SexeVo {
           return this.sexeService.selectedSexe;
       }
      set selectedSexe(value: SexeVo) {
        this.sexeService.selectedSexe = value;
       }
       get sexes(): Array<SexeVo> {
           return this.sexeService.sexes;
       }
       set sexes(value: Array<SexeVo>) {
        this.sexeService.sexes = value;
       }
       get createSexeDialog(): boolean {
           return this.sexeService.createSexeDialog;
       }
      set createSexeDialog(value: boolean) {
        this.sexeService.createSexeDialog= value;
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

    get validPatientCin(): boolean {
    return this._validPatientCin;
    }

    set validPatientCin(value: boolean) {
    this._validPatientCin = value;
    }
    get validPatientNom(): boolean {
    return this._validPatientNom;
    }

    set validPatientNom(value: boolean) {
    this._validPatientNom = value;
    }
    get validPatientPrenom(): boolean {
    return this._validPatientPrenom;
    }

    set validPatientPrenom(value: boolean) {
    this._validPatientPrenom = value;
    }
    get validPatientDateDeNaissance(): boolean {
    return this._validPatientDateDeNaissance;
    }

    set validPatientDateDeNaissance(value: boolean) {
    this._validPatientDateDeNaissance = value;
    }
    get validPatientProfession(): boolean {
    return this._validPatientProfession;
    }

    set validPatientProfession(value: boolean) {
    this._validPatientProfession = value;
    }
    get validPatientVille(): boolean {
    return this._validPatientVille;
    }

    set validPatientVille(value: boolean) {
    this._validPatientVille = value;
    }
    get validPatientSexe(): boolean {
    return this._validPatientSexe;
    }

    set validPatientSexe(value: boolean) {
    this._validPatientSexe = value;
    }

    get validVilleCode(): boolean {
    return this._validVilleCode;
    }

    set validVilleCode(value: boolean) {
    this._validVilleCode = value;
    }
    get validVilleLibelle(): boolean {
    return this._validVilleLibelle;
    }

    set validVilleLibelle(value: boolean) {
    this._validVilleLibelle = value;
    }
    get validSexeCode(): boolean {
    return this._validSexeCode;
    }

    set validSexeCode(value: boolean) {
    this._validSexeCode = value;
    }
    get validSexeLibelle(): boolean {
    return this._validSexeLibelle;
    }

    set validSexeLibelle(value: boolean) {
    this._validSexeLibelle = value;
    }

}
