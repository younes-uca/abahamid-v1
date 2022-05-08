import {Component, OnInit, Input} from '@angular/core';
import {CliniqueService} from '../../../../../controller/service/Clinique.service';
import {CliniqueVo} from '../../../../../controller/model/Clinique.model';
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
  selector: 'app-clinique-create-chercheur',
  templateUrl: './clinique-create-chercheur.component.html',
  styleUrls: ['./clinique-create-chercheur.component.css']
})
export class CliniqueCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validCliniqueDateClinique = true;
   _validCliniqueHistoireMaladie = true;
   _validCliniqueDossierMedicale = true;

    _validDossierMedicaleRef = true;
    _validDossierMedicalePatient = true;
    _validDossierMedicaleDiagnostics = true;



constructor(private datePipe: DatePipe, private cliniqueService: CliniqueService
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
    this.validCliniqueDateClinique = value;
    this.validCliniqueHistoireMaladie = value;
    this.validCliniqueDossierMedicale = value;
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
     this.cliniqueService.save().subscribe(clinique=>{
       this.cliniques.push({...clinique});
       this.createCliniqueDialog = false;
       this.submitted = false;
       this.selectedClinique = new CliniqueVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateCliniqueDateClinique();
this.validateCliniqueHistoireMaladie();
this.validateCliniqueDossierMedicale();

    }

private validateCliniqueDateClinique(){
        if (this.stringUtilService.isEmpty(this.selectedClinique.dateClinique)) {
            this.errorMessages.push('Date clinique non valide');
            this.validCliniqueDateClinique = false;
        } else {
            this.validCliniqueDateClinique = true;
        }
    }
private validateCliniqueHistoireMaladie(){
        if (this.stringUtilService.isEmpty(this.selectedClinique.histoireMaladie)) {
            this.errorMessages.push('Histoire maladie non valide');
            this.validCliniqueHistoireMaladie = false;
        } else {
            this.validCliniqueHistoireMaladie = true;
        }
    }
private validateCliniqueDossierMedicale(){
        if (this.stringUtilService.isEmpty(this.selectedClinique.dossierMedicaleVo)) {
            this.errorMessages.push('Dossier medicale non valide');
            this.validCliniqueDossierMedicale = false;
        } else {
            this.validCliniqueDossierMedicale = true;
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
    this.createCliniqueDialog  = false;
    this.setValidation(true);
}

// getters and setters

get cliniques(): Array<CliniqueVo> {
    return this.cliniqueService.cliniques;
       }
set cliniques(value: Array<CliniqueVo>) {
        this.cliniqueService.cliniques = value;
       }

 get selectedClinique():CliniqueVo {
           return this.cliniqueService.selectedClinique;
       }
    set selectedClinique(value: CliniqueVo) {
        this.cliniqueService.selectedClinique = value;
       }

   get createCliniqueDialog(): boolean {
           return this.cliniqueService.createCliniqueDialog;

       }
    set createCliniqueDialog(value: boolean) {
        this.cliniqueService.createCliniqueDialog= value;
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

    get validCliniqueDateClinique(): boolean {
    return this._validCliniqueDateClinique;
    }

    set validCliniqueDateClinique(value: boolean) {
    this._validCliniqueDateClinique = value;
    }
    get validCliniqueHistoireMaladie(): boolean {
    return this._validCliniqueHistoireMaladie;
    }

    set validCliniqueHistoireMaladie(value: boolean) {
    this._validCliniqueHistoireMaladie = value;
    }
    get validCliniqueDossierMedicale(): boolean {
    return this._validCliniqueDossierMedicale;
    }

    set validCliniqueDossierMedicale(value: boolean) {
    this._validCliniqueDossierMedicale = value;
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
