import {Component, OnInit, Input} from '@angular/core';
import {DiagnosticService} from '../../../../../controller/service/Diagnostic.service';
import {DiagnosticVo} from '../../../../../controller/model/Diagnostic.model';
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
  selector: 'app-diagnostic-create-chercheur',
  templateUrl: './diagnostic-create-chercheur.component.html',
  styleUrls: ['./diagnostic-create-chercheur.component.css']
})
export class DiagnosticCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validDiagnosticDateDiagnostic = true;
   _validDiagnosticDiag = true;
   _validDiagnosticDossierMedicale = true;

    _validDossierMedicaleRef = true;
    _validDossierMedicalePatient = true;
    _validDossierMedicaleDiagnostics = true;



constructor(private datePipe: DatePipe, private diagnosticService: DiagnosticService
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
    this.validDiagnosticDateDiagnostic = value;
    this.validDiagnosticDiag = value;
    this.validDiagnosticDossierMedicale = value;
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
     this.diagnosticService.save().subscribe(diagnostic=>{
       this.diagnostics.push({...diagnostic});
       this.createDiagnosticDialog = false;
       this.submitted = false;
       this.selectedDiagnostic = new DiagnosticVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateDiagnosticDateDiagnostic();
this.validateDiagnosticDiag();
this.validateDiagnosticDossierMedicale();

    }

private validateDiagnosticDateDiagnostic(){
        if (this.stringUtilService.isEmpty(this.selectedDiagnostic.dateDiagnostic)) {
            this.errorMessages.push('Date diagnostic non valide');
            this.validDiagnosticDateDiagnostic = false;
        } else {
            this.validDiagnosticDateDiagnostic = true;
        }
    }
private validateDiagnosticDiag(){
        if (this.stringUtilService.isEmpty(this.selectedDiagnostic.diag)) {
            this.errorMessages.push('Diag non valide');
            this.validDiagnosticDiag = false;
        } else {
            this.validDiagnosticDiag = true;
        }
    }
private validateDiagnosticDossierMedicale(){
        if (this.stringUtilService.isEmpty(this.selectedDiagnostic.dossierMedicaleVo)) {
            this.errorMessages.push('Dossier medicale non valide');
            this.validDiagnosticDossierMedicale = false;
        } else {
            this.validDiagnosticDossierMedicale = true;
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
    this.createDiagnosticDialog  = false;
    this.setValidation(true);
}

// getters and setters

get diagnostics(): Array<DiagnosticVo> {
    return this.diagnosticService.diagnostics;
       }
set diagnostics(value: Array<DiagnosticVo>) {
        this.diagnosticService.diagnostics = value;
       }

 get selectedDiagnostic():DiagnosticVo {
           return this.diagnosticService.selectedDiagnostic;
       }
    set selectedDiagnostic(value: DiagnosticVo) {
        this.diagnosticService.selectedDiagnostic = value;
       }

   get createDiagnosticDialog(): boolean {
           return this.diagnosticService.createDiagnosticDialog;

       }
    set createDiagnosticDialog(value: boolean) {
        this.diagnosticService.createDiagnosticDialog= value;
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

    get validDiagnosticDateDiagnostic(): boolean {
    return this._validDiagnosticDateDiagnostic;
    }

    set validDiagnosticDateDiagnostic(value: boolean) {
    this._validDiagnosticDateDiagnostic = value;
    }
    get validDiagnosticDiag(): boolean {
    return this._validDiagnosticDiag;
    }

    set validDiagnosticDiag(value: boolean) {
    this._validDiagnosticDiag = value;
    }
    get validDiagnosticDossierMedicale(): boolean {
    return this._validDiagnosticDossierMedicale;
    }

    set validDiagnosticDossierMedicale(value: boolean) {
    this._validDiagnosticDossierMedicale = value;
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
