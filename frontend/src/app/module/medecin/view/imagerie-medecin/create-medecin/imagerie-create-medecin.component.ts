import {Component, OnInit, Input} from '@angular/core';
import {ImagerieService} from '../../../../../controller/service/Imagerie.service';
import {ImagerieVo} from '../../../../../controller/model/Imagerie.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';
import {TypeImageVo} from '../../../../../controller/model/TypeImage.model';
import {TypeImageService} from '../../../../../controller/service/TypeImage.service';
import {PhaseImageVo} from '../../../../../controller/model/PhaseImage.model';
import {PhaseImageService} from '../../../../../controller/service/PhaseImage.service';
@Component({
  selector: 'app-imagerie-create-medecin',
  templateUrl: './imagerie-create-medecin.component.html',
  styleUrls: ['./imagerie-create-medecin.component.css']
})
export class ImagerieCreateMedecinComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validImagerieTypeImage = true;
   _validImageriePhaseImage = true;
   _validImagerieImageScan = true;
   _validImagerieDossierMedicale = true;

    _validTypeImageCode = true;
    _validTypeImageLibelle = true;
    _validPhaseImageCode = true;
    _validPhaseImageLibelle = true;
    _validDossierMedicaleRef = true;
    _validDossierMedicalePatient = true;
    _validDossierMedicaleDiagnostics = true;



constructor(private datePipe: DatePipe, private imagerieService: ImagerieService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private dossierMedicaleService :DossierMedicaleService
,       private typeImageService :TypeImageService
,       private phaseImageService :PhaseImageService
) {

}


// methods
ngOnInit(): void {

    this.selectedTypeImage = new TypeImageVo();
    this.typeImageService.findAll().subscribe((data) => this.typeImages = data);
    this.selectedPhaseImage = new PhaseImageVo();
    this.phaseImageService.findAll().subscribe((data) => this.phaseImages = data);
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}




private setValidation(value : boolean){
    this.validImagerieTypeImage = value;
    this.validImageriePhaseImage = value;
    this.validImagerieImageScan = value;
    this.validImagerieDossierMedicale = value;
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
     this.imagerieService.save().subscribe(imagerie=>{
       this.imageries.push({...imagerie});
       this.createImagerieDialog = false;
       this.submitted = false;
       this.selectedImagerie = new ImagerieVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateImagerieTypeImage();
this.validateImageriePhaseImage();
this.validateImagerieImageScan();
this.validateImagerieDossierMedicale();

    }

private validateImagerieTypeImage(){
        if (this.stringUtilService.isEmpty(this.selectedImagerie.typeImageVo)) {
            this.errorMessages.push('Type image non valide');
            this.validImagerieTypeImage = false;
        } else {
            this.validImagerieTypeImage = true;
        }
    }
private validateImageriePhaseImage(){
        if (this.stringUtilService.isEmpty(this.selectedImagerie.phaseImageVo)) {
            this.errorMessages.push('Phase image non valide');
            this.validImageriePhaseImage = false;
        } else {
            this.validImageriePhaseImage = true;
        }
    }
private validateImagerieImageScan(){
        if (this.stringUtilService.isEmpty(this.selectedImagerie.imageScan)) {
            this.errorMessages.push('Image scan non valide');
            this.validImagerieImageScan = false;
        } else {
            this.validImagerieImageScan = true;
        }
    }
private validateImagerieDossierMedicale(){
        if (this.stringUtilService.isEmpty(this.selectedImagerie.dossierMedicaleVo)) {
            this.errorMessages.push('Dossier medicale non valide');
            this.validImagerieDossierMedicale = false;
        } else {
            this.validImagerieDossierMedicale = true;
        }
    }










//openPopup
              public async openCreatetypeImage(typeImage: string) {
                      const isPermistted = await this.roleService.isPermitted('TypeImage', 'add');
                       if(isPermistted){
         this.selectedTypeImage = new TypeImageVo();
        this.createTypeImageDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
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
              public async openCreatephaseImage(phaseImage: string) {
                      const isPermistted = await this.roleService.isPermitted('PhaseImage', 'add');
                       if(isPermistted){
         this.selectedPhaseImage = new PhaseImageVo();
        this.createPhaseImageDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideCreateDialog(){
    this.createImagerieDialog  = false;
    this.setValidation(true);
}

// getters and setters

get imageries(): Array<ImagerieVo> {
    return this.imagerieService.imageries;
       }
set imageries(value: Array<ImagerieVo>) {
        this.imagerieService.imageries = value;
       }

 get selectedImagerie():ImagerieVo {
           return this.imagerieService.selectedImagerie;
       }
    set selectedImagerie(value: ImagerieVo) {
        this.imagerieService.selectedImagerie = value;
       }

   get createImagerieDialog(): boolean {
           return this.imagerieService.createImagerieDialog;

       }
    set createImagerieDialog(value: boolean) {
        this.imagerieService.createImagerieDialog= value;
       }

       get selectedTypeImage(): TypeImageVo {
           return this.typeImageService.selectedTypeImage;
       }
      set selectedTypeImage(value: TypeImageVo) {
        this.typeImageService.selectedTypeImage = value;
       }
       get typeImages(): Array<TypeImageVo> {
           return this.typeImageService.typeImages;
       }
       set typeImages(value: Array<TypeImageVo>) {
        this.typeImageService.typeImages = value;
       }
       get createTypeImageDialog(): boolean {
           return this.typeImageService.createTypeImageDialog;
       }
      set createTypeImageDialog(value: boolean) {
        this.typeImageService.createTypeImageDialog= value;
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
       get selectedPhaseImage(): PhaseImageVo {
           return this.phaseImageService.selectedPhaseImage;
       }
      set selectedPhaseImage(value: PhaseImageVo) {
        this.phaseImageService.selectedPhaseImage = value;
       }
       get phaseImages(): Array<PhaseImageVo> {
           return this.phaseImageService.phaseImages;
       }
       set phaseImages(value: Array<PhaseImageVo>) {
        this.phaseImageService.phaseImages = value;
       }
       get createPhaseImageDialog(): boolean {
           return this.phaseImageService.createPhaseImageDialog;
       }
      set createPhaseImageDialog(value: boolean) {
        this.phaseImageService.createPhaseImageDialog= value;
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

    get validImagerieTypeImage(): boolean {
    return this._validImagerieTypeImage;
    }

    set validImagerieTypeImage(value: boolean) {
    this._validImagerieTypeImage = value;
    }
    get validImageriePhaseImage(): boolean {
    return this._validImageriePhaseImage;
    }

    set validImageriePhaseImage(value: boolean) {
    this._validImageriePhaseImage = value;
    }
    get validImagerieImageScan(): boolean {
    return this._validImagerieImageScan;
    }

    set validImagerieImageScan(value: boolean) {
    this._validImagerieImageScan = value;
    }
    get validImagerieDossierMedicale(): boolean {
    return this._validImagerieDossierMedicale;
    }

    set validImagerieDossierMedicale(value: boolean) {
    this._validImagerieDossierMedicale = value;
    }

    get validTypeImageCode(): boolean {
    return this._validTypeImageCode;
    }

    set validTypeImageCode(value: boolean) {
    this._validTypeImageCode = value;
    }
    get validTypeImageLibelle(): boolean {
    return this._validTypeImageLibelle;
    }

    set validTypeImageLibelle(value: boolean) {
    this._validTypeImageLibelle = value;
    }
    get validPhaseImageCode(): boolean {
    return this._validPhaseImageCode;
    }

    set validPhaseImageCode(value: boolean) {
    this._validPhaseImageCode = value;
    }
    get validPhaseImageLibelle(): boolean {
    return this._validPhaseImageLibelle;
    }

    set validPhaseImageLibelle(value: boolean) {
    this._validPhaseImageLibelle = value;
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
