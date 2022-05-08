import {Component, OnInit, Input} from '@angular/core';
import {PhaseImageService} from '../../../../../controller/service/PhaseImage.service';
import {PhaseImageVo} from '../../../../../controller/model/PhaseImage.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


@Component({
  selector: 'app-phase-image-create-medecin',
  templateUrl: './phase-image-create-medecin.component.html',
  styleUrls: ['./phase-image-create-medecin.component.css']
})
export class PhaseImageCreateMedecinComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validPhaseImageCode = true;
   _validPhaseImageLibelle = true;




constructor(private datePipe: DatePipe, private phaseImageService: PhaseImageService
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
    this.validPhaseImageCode = value;
    this.validPhaseImageLibelle = value;
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
     this.phaseImageService.save().subscribe(phaseImage=>{
       this.phaseImages.push({...phaseImage});
       this.createPhaseImageDialog = false;
       this.submitted = false;
       this.selectedPhaseImage = new PhaseImageVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validatePhaseImageCode();
this.validatePhaseImageLibelle();

    }

private validatePhaseImageCode(){
        if (this.stringUtilService.isEmpty(this.selectedPhaseImage.code)) {
            this.errorMessages.push('Code non valide');
            this.validPhaseImageCode = false;
        } else {
            this.validPhaseImageCode = true;
        }
    }
private validatePhaseImageLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedPhaseImage.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validPhaseImageLibelle = false;
        } else {
            this.validPhaseImageLibelle = true;
        }
    }






//openPopup
// methods

hideCreateDialog(){
    this.createPhaseImageDialog  = false;
    this.setValidation(true);
}

// getters and setters

get phaseImages(): Array<PhaseImageVo> {
    return this.phaseImageService.phaseImages;
       }
set phaseImages(value: Array<PhaseImageVo>) {
        this.phaseImageService.phaseImages = value;
       }

 get selectedPhaseImage():PhaseImageVo {
           return this.phaseImageService.selectedPhaseImage;
       }
    set selectedPhaseImage(value: PhaseImageVo) {
        this.phaseImageService.selectedPhaseImage = value;
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


}
