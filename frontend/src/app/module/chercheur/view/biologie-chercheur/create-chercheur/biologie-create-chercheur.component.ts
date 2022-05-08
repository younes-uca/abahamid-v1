import {Component, OnInit, Input} from '@angular/core';
import {BiologieService} from '../../../../../controller/service/Biologie.service';
import {BiologieVo} from '../../../../../controller/model/Biologie.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';
import {ExamenVo} from '../../../../../controller/model/Examen.model';
import {ExamenService} from '../../../../../controller/service/Examen.service';
@Component({
  selector: 'app-biologie-create-chercheur',
  templateUrl: './biologie-create-chercheur.component.html',
  styleUrls: ['./biologie-create-chercheur.component.css']
})
export class BiologieCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validBiologieDateBiologie = true;
   _validBiologieExamen = true;
   _validBiologieResultat = true;
   _validBiologieDossierMedicale = true;

    _validExamenCode = true;
    _validExamenLibelle = true;
    _validDossierMedicaleRef = true;
    _validDossierMedicalePatient = true;
    _validDossierMedicaleDiagnostics = true;



constructor(private datePipe: DatePipe, private biologieService: BiologieService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private dossierMedicaleService :DossierMedicaleService
,       private examenService :ExamenService
) {

}


// methods
ngOnInit(): void {

    this.selectedExamen = new ExamenVo();
    this.examenService.findAll().subscribe((data) => this.examens = data);
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}




private setValidation(value : boolean){
    this.validBiologieDateBiologie = value;
    this.validBiologieExamen = value;
    this.validBiologieResultat = value;
    this.validBiologieDossierMedicale = value;
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
     this.biologieService.save().subscribe(biologie=>{
       this.biologies.push({...biologie});
       this.createBiologieDialog = false;
       this.submitted = false;
       this.selectedBiologie = new BiologieVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateBiologieDateBiologie();
this.validateBiologieExamen();
this.validateBiologieResultat();
this.validateBiologieDossierMedicale();

    }

private validateBiologieDateBiologie(){
        if (this.stringUtilService.isEmpty(this.selectedBiologie.dateBiologie)) {
            this.errorMessages.push('Date biologie non valide');
            this.validBiologieDateBiologie = false;
        } else {
            this.validBiologieDateBiologie = true;
        }
    }
private validateBiologieExamen(){
        if (this.stringUtilService.isEmpty(this.selectedBiologie.examenVo)) {
            this.errorMessages.push('Examen non valide');
            this.validBiologieExamen = false;
        } else {
            this.validBiologieExamen = true;
        }
    }
private validateBiologieResultat(){
        if (this.stringUtilService.isEmpty(this.selectedBiologie.resultat)) {
            this.errorMessages.push('Resultat non valide');
            this.validBiologieResultat = false;
        } else {
            this.validBiologieResultat = true;
        }
    }
private validateBiologieDossierMedicale(){
        if (this.stringUtilService.isEmpty(this.selectedBiologie.dossierMedicaleVo)) {
            this.errorMessages.push('Dossier medicale non valide');
            this.validBiologieDossierMedicale = false;
        } else {
            this.validBiologieDossierMedicale = true;
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
              public async openCreateexamen(examen: string) {
                      const isPermistted = await this.roleService.isPermitted('Examen', 'add');
                       if(isPermistted){
         this.selectedExamen = new ExamenVo();
        this.createExamenDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideCreateDialog(){
    this.createBiologieDialog  = false;
    this.setValidation(true);
}

// getters and setters

get biologies(): Array<BiologieVo> {
    return this.biologieService.biologies;
       }
set biologies(value: Array<BiologieVo>) {
        this.biologieService.biologies = value;
       }

 get selectedBiologie():BiologieVo {
           return this.biologieService.selectedBiologie;
       }
    set selectedBiologie(value: BiologieVo) {
        this.biologieService.selectedBiologie = value;
       }

   get createBiologieDialog(): boolean {
           return this.biologieService.createBiologieDialog;

       }
    set createBiologieDialog(value: boolean) {
        this.biologieService.createBiologieDialog= value;
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
       get selectedExamen(): ExamenVo {
           return this.examenService.selectedExamen;
       }
      set selectedExamen(value: ExamenVo) {
        this.examenService.selectedExamen = value;
       }
       get examens(): Array<ExamenVo> {
           return this.examenService.examens;
       }
       set examens(value: Array<ExamenVo>) {
        this.examenService.examens = value;
       }
       get createExamenDialog(): boolean {
           return this.examenService.createExamenDialog;
       }
      set createExamenDialog(value: boolean) {
        this.examenService.createExamenDialog= value;
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

    get validBiologieDateBiologie(): boolean {
    return this._validBiologieDateBiologie;
    }

    set validBiologieDateBiologie(value: boolean) {
    this._validBiologieDateBiologie = value;
    }
    get validBiologieExamen(): boolean {
    return this._validBiologieExamen;
    }

    set validBiologieExamen(value: boolean) {
    this._validBiologieExamen = value;
    }
    get validBiologieResultat(): boolean {
    return this._validBiologieResultat;
    }

    set validBiologieResultat(value: boolean) {
    this._validBiologieResultat = value;
    }
    get validBiologieDossierMedicale(): boolean {
    return this._validBiologieDossierMedicale;
    }

    set validBiologieDossierMedicale(value: boolean) {
    this._validBiologieDossierMedicale = value;
    }

    get validExamenCode(): boolean {
    return this._validExamenCode;
    }

    set validExamenCode(value: boolean) {
    this._validExamenCode = value;
    }
    get validExamenLibelle(): boolean {
    return this._validExamenLibelle;
    }

    set validExamenLibelle(value: boolean) {
    this._validExamenLibelle = value;
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
