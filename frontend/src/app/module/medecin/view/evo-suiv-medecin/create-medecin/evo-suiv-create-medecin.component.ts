import {Component, OnInit, Input} from '@angular/core';
import {EvoSuivService} from '../../../../../controller/service/EvoSuiv.service';
import {EvoSuivVo} from '../../../../../controller/model/EvoSuiv.model';
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
  selector: 'app-evo-suiv-create-medecin',
  templateUrl: './evo-suiv-create-medecin.component.html',
  styleUrls: ['./evo-suiv-create-medecin.component.css']
})
export class EvoSuivCreateMedecinComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validEvoSuivDateEvoS = true;
   _validEvoSuivEvoS = true;
   _validEvoSuivDossierMedicale = true;

    _validDossierMedicaleRef = true;
    _validDossierMedicalePatient = true;
    _validDossierMedicaleDiagnostics = true;



constructor(private datePipe: DatePipe, private evoSuivService: EvoSuivService
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
    this.validEvoSuivDateEvoS = value;
    this.validEvoSuivEvoS = value;
    this.validEvoSuivDossierMedicale = value;
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
     this.evoSuivService.save().subscribe(evoSuiv=>{
       this.evoSuivs.push({...evoSuiv});
       this.createEvoSuivDialog = false;
       this.submitted = false;
       this.selectedEvoSuiv = new EvoSuivVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateEvoSuivDateEvoS();
this.validateEvoSuivEvoS();
this.validateEvoSuivDossierMedicale();

    }

private validateEvoSuivDateEvoS(){
        if (this.stringUtilService.isEmpty(this.selectedEvoSuiv.dateEvoS)) {
            this.errorMessages.push('Date evo s non valide');
            this.validEvoSuivDateEvoS = false;
        } else {
            this.validEvoSuivDateEvoS = true;
        }
    }
private validateEvoSuivEvoS(){
        if (this.stringUtilService.isEmpty(this.selectedEvoSuiv.evoS)) {
            this.errorMessages.push('Evo s non valide');
            this.validEvoSuivEvoS = false;
        } else {
            this.validEvoSuivEvoS = true;
        }
    }
private validateEvoSuivDossierMedicale(){
        if (this.stringUtilService.isEmpty(this.selectedEvoSuiv.dossierMedicaleVo)) {
            this.errorMessages.push('Dossier medicale non valide');
            this.validEvoSuivDossierMedicale = false;
        } else {
            this.validEvoSuivDossierMedicale = true;
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
    this.createEvoSuivDialog  = false;
    this.setValidation(true);
}

// getters and setters

get evoSuivs(): Array<EvoSuivVo> {
    return this.evoSuivService.evoSuivs;
       }
set evoSuivs(value: Array<EvoSuivVo>) {
        this.evoSuivService.evoSuivs = value;
       }

 get selectedEvoSuiv():EvoSuivVo {
           return this.evoSuivService.selectedEvoSuiv;
       }
    set selectedEvoSuiv(value: EvoSuivVo) {
        this.evoSuivService.selectedEvoSuiv = value;
       }

   get createEvoSuivDialog(): boolean {
           return this.evoSuivService.createEvoSuivDialog;

       }
    set createEvoSuivDialog(value: boolean) {
        this.evoSuivService.createEvoSuivDialog= value;
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

    get validEvoSuivDateEvoS(): boolean {
    return this._validEvoSuivDateEvoS;
    }

    set validEvoSuivDateEvoS(value: boolean) {
    this._validEvoSuivDateEvoS = value;
    }
    get validEvoSuivEvoS(): boolean {
    return this._validEvoSuivEvoS;
    }

    set validEvoSuivEvoS(value: boolean) {
    this._validEvoSuivEvoS = value;
    }
    get validEvoSuivDossierMedicale(): boolean {
    return this._validEvoSuivDossierMedicale;
    }

    set validEvoSuivDossierMedicale(value: boolean) {
    this._validEvoSuivDossierMedicale = value;
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
