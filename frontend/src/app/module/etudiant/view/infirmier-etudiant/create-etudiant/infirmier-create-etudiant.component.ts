import {Component, OnInit, Input} from '@angular/core';
import {InfirmierService} from '../../../../../controller/service/Infirmier.service';
import {InfirmierVo} from '../../../../../controller/model/Infirmier.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


@Component({
  selector: 'app-infirmier-create-etudiant',
  templateUrl: './infirmier-create-etudiant.component.html',
  styleUrls: ['./infirmier-create-etudiant.component.css']
})
export class InfirmierCreateEtudiantComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validInfirmierRef = true;
   _validInfirmierNom = true;
   _validInfirmierPrenom = true;
   _validInfirmierSexe = true;
   _validInfirmierTelephone = true;




constructor(private datePipe: DatePipe, private infirmierService: InfirmierService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
) {

}


// methods
ngOnInit(): void {

}




private setValidation(value : boolean){
    this.validInfirmierRef = value;
    this.validInfirmierNom = value;
    this.validInfirmierPrenom = value;
    this.validInfirmierSexe = value;
    this.validInfirmierTelephone = value;
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
     this.infirmierService.save().subscribe(infirmier=>{
       this.infirmiers.push({...infirmier});
       this.createInfirmierDialog = false;
       this.submitted = false;
       this.selectedInfirmier = new InfirmierVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateInfirmierRef();
this.validateInfirmierNom();
this.validateInfirmierPrenom();
this.validateInfirmierSexe();
this.validateInfirmierTelephone();

    }

private validateInfirmierRef(){
        if (this.stringUtilService.isEmpty(this.selectedInfirmier.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validInfirmierRef = false;
        } else {
            this.validInfirmierRef = true;
        }
    }
private validateInfirmierNom(){
        if (this.stringUtilService.isEmpty(this.selectedInfirmier.nom)) {
            this.errorMessages.push('Nom non valide');
            this.validInfirmierNom = false;
        } else {
            this.validInfirmierNom = true;
        }
    }
private validateInfirmierPrenom(){
        if (this.stringUtilService.isEmpty(this.selectedInfirmier.prenom)) {
            this.errorMessages.push('Prenom non valide');
            this.validInfirmierPrenom = false;
        } else {
            this.validInfirmierPrenom = true;
        }
    }
private validateInfirmierSexe(){
        if (this.stringUtilService.isEmpty(this.selectedInfirmier.sexe)) {
            this.errorMessages.push('Sexe non valide');
            this.validInfirmierSexe = false;
        } else {
            this.validInfirmierSexe = true;
        }
    }
private validateInfirmierTelephone(){
        if (this.stringUtilService.isEmpty(this.selectedInfirmier.telephone)) {
            this.errorMessages.push('Telephone non valide');
            this.validInfirmierTelephone = false;
        } else {
            this.validInfirmierTelephone = true;
        }
    }










//openPopup
// methods

hideCreateDialog(){
    this.createInfirmierDialog  = false;
    this.setValidation(true);
}

// getters and setters

get infirmiers(): Array<InfirmierVo> {
    return this.infirmierService.infirmiers;
       }
set infirmiers(value: Array<InfirmierVo>) {
        this.infirmierService.infirmiers = value;
       }

 get selectedInfirmier():InfirmierVo {
           return this.infirmierService.selectedInfirmier;
       }
    set selectedInfirmier(value: InfirmierVo) {
        this.infirmierService.selectedInfirmier = value;
       }

   get createInfirmierDialog(): boolean {
           return this.infirmierService.createInfirmierDialog;

       }
    set createInfirmierDialog(value: boolean) {
        this.infirmierService.createInfirmierDialog= value;
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

    get validInfirmierRef(): boolean {
    return this._validInfirmierRef;
    }

    set validInfirmierRef(value: boolean) {
    this._validInfirmierRef = value;
    }
    get validInfirmierNom(): boolean {
    return this._validInfirmierNom;
    }

    set validInfirmierNom(value: boolean) {
    this._validInfirmierNom = value;
    }
    get validInfirmierPrenom(): boolean {
    return this._validInfirmierPrenom;
    }

    set validInfirmierPrenom(value: boolean) {
    this._validInfirmierPrenom = value;
    }
    get validInfirmierSexe(): boolean {
    return this._validInfirmierSexe;
    }

    set validInfirmierSexe(value: boolean) {
    this._validInfirmierSexe = value;
    }
    get validInfirmierTelephone(): boolean {
    return this._validInfirmierTelephone;
    }

    set validInfirmierTelephone(value: boolean) {
    this._validInfirmierTelephone = value;
    }


}
