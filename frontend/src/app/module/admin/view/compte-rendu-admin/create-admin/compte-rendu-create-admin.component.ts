import {Component, OnInit, Input} from '@angular/core';
import {CompteRenduService} from '../../../../../controller/service/CompteRendu.service';
import {CompteRenduVo} from '../../../../../controller/model/CompteRendu.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';
@Component({
  selector: 'app-compte-rendu-create-admin',
  templateUrl: './compte-rendu-create-admin.component.html',
  styleUrls: ['./compte-rendu-create-admin.component.css']
})
export class CompteRenduCreateAdminComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validCompteRenduDateCompteR = true;
   _validCompteRenduCompteR = true;
   _validCompteRenduDossierMedicale = true;

    _validDossierMedicaleRef = true;
    _validDossierMedicalePatient = true;
    _validDossierMedicaleDiagnostics = true;



constructor(private datePipe: DatePipe, private compteRenduService: CompteRenduService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private dossierMedicaleService :DossierMedicaleService
) {

}


// methods
ngOnInit(): void {

    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}




private setValidation(value : boolean){
    this.validCompteRenduDateCompteR = value;
    this.validCompteRenduCompteR = value;
    this.validCompteRenduDossierMedicale = value;
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
     this.compteRenduService.save().subscribe(compteRendu=>{
       this.compteRendus.push({...compteRendu});
       this.createCompteRenduDialog = false;
       this.submitted = false;
       this.selectedCompteRendu = new CompteRenduVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateCompteRenduDateCompteR();
this.validateCompteRenduCompteR();
this.validateCompteRenduDossierMedicale();

    }

private validateCompteRenduDateCompteR(){
        if (this.stringUtilService.isEmpty(this.selectedCompteRendu.dateCompteR)) {
            this.errorMessages.push('Date compte r non valide');
            this.validCompteRenduDateCompteR = false;
        } else {
            this.validCompteRenduDateCompteR = true;
        }
    }
private validateCompteRenduCompteR(){
        if (this.stringUtilService.isEmpty(this.selectedCompteRendu.compteR)) {
            this.errorMessages.push('Compte r non valide');
            this.validCompteRenduCompteR = false;
        } else {
            this.validCompteRenduCompteR = true;
        }
    }
private validateCompteRenduDossierMedicale(){
        if (this.stringUtilService.isEmpty(this.selectedCompteRendu.dossierMedicaleVo)) {
            this.errorMessages.push('Dossier medicale non valide');
            this.validCompteRenduDossierMedicale = false;
        } else {
            this.validCompteRenduDossierMedicale = true;
        }
    }







//openPopup
              public async openCreatedossierMedicale(dossierMedicale: string) {
                      const isPermistted = await this.roleService.isPermitted('DossierMedicale', 'add');
                       if(isPermistted){
         this.selectedDossierMedicale = new DossierMedicaleVo();
        this.createDossierMedicaleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideCreateDialog(){
    this.createCompteRenduDialog  = false;
    this.setValidation(true);
}

// getters and setters

get compteRendus(): Array<CompteRenduVo> {
    return this.compteRenduService.compteRendus;
       }
set compteRendus(value: Array<CompteRenduVo>) {
        this.compteRenduService.compteRendus = value;
       }

 get selectedCompteRendu():CompteRenduVo {
           return this.compteRenduService.selectedCompteRendu;
       }
    set selectedCompteRendu(value: CompteRenduVo) {
        this.compteRenduService.selectedCompteRendu = value;
       }

   get createCompteRenduDialog(): boolean {
           return this.compteRenduService.createCompteRenduDialog;

       }
    set createCompteRenduDialog(value: boolean) {
        this.compteRenduService.createCompteRenduDialog= value;
       }

       get selectedDossierMedicale(): DossierMedicaleVo {
           return this.dossierMedicaleService.selectedDossierMedicale;
       }
      set selectedDossierMedicale(value: DossierMedicaleVo) {
        this.dossierMedicaleService.selectedDossierMedicale = value;
       }
       get dossierMedicales(): Array<DossierMedicaleVo> {
           return this.dossierMedicaleService.dossierMedicales;
       }
       set dossierMedicales(value: Array<DossierMedicaleVo>) {
        this.dossierMedicaleService.dossierMedicales = value;
       }
       get createDossierMedicaleDialog(): boolean {
           return this.dossierMedicaleService.createDossierMedicaleDialog;
       }
      set createDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.createDossierMedicaleDialog= value;
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

    get validCompteRenduDateCompteR(): boolean {
    return this._validCompteRenduDateCompteR;
    }

    set validCompteRenduDateCompteR(value: boolean) {
    this._validCompteRenduDateCompteR = value;
    }
    get validCompteRenduCompteR(): boolean {
    return this._validCompteRenduCompteR;
    }

    set validCompteRenduCompteR(value: boolean) {
    this._validCompteRenduCompteR = value;
    }
    get validCompteRenduDossierMedicale(): boolean {
    return this._validCompteRenduDossierMedicale;
    }

    set validCompteRenduDossierMedicale(value: boolean) {
    this._validCompteRenduDossierMedicale = value;
    }

    get validDossierMedicaleRef(): boolean {
    return this._validDossierMedicaleRef;
    }

    set validDossierMedicaleRef(value: boolean) {
    this._validDossierMedicaleRef = value;
    }
    get validDossierMedicalePatient(): boolean {
    return this._validDossierMedicalePatient;
    }

    set validDossierMedicalePatient(value: boolean) {
    this._validDossierMedicalePatient = value;
    }
    get validDossierMedicaleDiagnostics(): boolean {
    return this._validDossierMedicaleDiagnostics;
    }

    set validDossierMedicaleDiagnostics(value: boolean) {
    this._validDossierMedicaleDiagnostics = value;
    }

}
