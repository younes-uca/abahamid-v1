import {Component, OnInit, Input} from '@angular/core';
import {DossierMedicaleTagService} from '../../../../../controller/service/DossierMedicaleTag.service';
import {DossierMedicaleTagVo} from '../../../../../controller/model/DossierMedicaleTag.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';
import {TagVo} from '../../../../../controller/model/Tag.model';
import {TagService} from '../../../../../controller/service/Tag.service';
@Component({
  selector: 'app-dossier-medicale-tag-create-medecin',
  templateUrl: './dossier-medicale-tag-create-medecin.component.html',
  styleUrls: ['./dossier-medicale-tag-create-medecin.component.css']
})
export class DossierMedicaleTagCreateMedecinComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validDossierMedicaleTagTag = true;
   _validDossierMedicaleTagDossierMedicale = true;

    _validTagReference = true;
    _validTagLibelle = true;
    _validDossierMedicaleRef = true;
    _validDossierMedicalePatient = true;
    _validDossierMedicaleDiagnostics = true;



constructor(private datePipe: DatePipe, private dossierMedicaleTagService: DossierMedicaleTagService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private dossierMedicaleService :DossierMedicaleService
,       private tagService :TagService
) {

}


// methods
ngOnInit(): void {

    this.selectedTag = new TagVo();
    this.tagService.findAll().subscribe((data) => this.tags = data);
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}




private setValidation(value : boolean){
    this.validDossierMedicaleTagTag = value;
    this.validDossierMedicaleTagDossierMedicale = value;
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
     this.dossierMedicaleTagService.save().subscribe(dossierMedicaleTag=>{
       this.dossierMedicaleTags.push({...dossierMedicaleTag});
       this.createDossierMedicaleTagDialog = false;
       this.submitted = false;
       this.selectedDossierMedicaleTag = new DossierMedicaleTagVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateDossierMedicaleTagTag();
this.validateDossierMedicaleTagDossierMedicale();

    }

private validateDossierMedicaleTagTag(){
        if (this.stringUtilService.isEmpty(this.selectedDossierMedicaleTag.tagVo)) {
            this.errorMessages.push('Tag non valide');
            this.validDossierMedicaleTagTag = false;
        } else {
            this.validDossierMedicaleTagTag = true;
        }
    }
private validateDossierMedicaleTagDossierMedicale(){
        if (this.stringUtilService.isEmpty(this.selectedDossierMedicaleTag.dossierMedicaleVo)) {
            this.errorMessages.push('Dossier medicale non valide');
            this.validDossierMedicaleTagDossierMedicale = false;
        } else {
            this.validDossierMedicaleTagDossierMedicale = true;
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
              public async openCreatetag(tag: string) {
                      const isPermistted = await this.roleService.isPermitted('Tag', 'add');
                       if(isPermistted){
         this.selectedTag = new TagVo();
        this.createTagDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideCreateDialog(){
    this.createDossierMedicaleTagDialog  = false;
    this.setValidation(true);
}

// getters and setters

get dossierMedicaleTags(): Array<DossierMedicaleTagVo> {
    return this.dossierMedicaleTagService.dossierMedicaleTags;
       }
set dossierMedicaleTags(value: Array<DossierMedicaleTagVo>) {
        this.dossierMedicaleTagService.dossierMedicaleTags = value;
       }

 get selectedDossierMedicaleTag():DossierMedicaleTagVo {
           return this.dossierMedicaleTagService.selectedDossierMedicaleTag;
       }
    set selectedDossierMedicaleTag(value: DossierMedicaleTagVo) {
        this.dossierMedicaleTagService.selectedDossierMedicaleTag = value;
       }

   get createDossierMedicaleTagDialog(): boolean {
           return this.dossierMedicaleTagService.createDossierMedicaleTagDialog;

       }
    set createDossierMedicaleTagDialog(value: boolean) {
        this.dossierMedicaleTagService.createDossierMedicaleTagDialog= value;
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
       get selectedTag(): TagVo {
           return this.tagService.selectedTag;
       }
      set selectedTag(value: TagVo) {
        this.tagService.selectedTag = value;
       }
       get tags(): Array<TagVo> {
           return this.tagService.tags;
       }
       set tags(value: Array<TagVo>) {
        this.tagService.tags = value;
       }
       get createTagDialog(): boolean {
           return this.tagService.createTagDialog;
       }
      set createTagDialog(value: boolean) {
        this.tagService.createTagDialog= value;
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

    get validDossierMedicaleTagTag(): boolean {
    return this._validDossierMedicaleTagTag;
    }

    set validDossierMedicaleTagTag(value: boolean) {
    this._validDossierMedicaleTagTag = value;
    }
    get validDossierMedicaleTagDossierMedicale(): boolean {
    return this._validDossierMedicaleTagDossierMedicale;
    }

    set validDossierMedicaleTagDossierMedicale(value: boolean) {
    this._validDossierMedicaleTagDossierMedicale = value;
    }

    get validTagReference(): boolean {
    return this._validTagReference;
    }

    set validTagReference(value: boolean) {
    this._validTagReference = value;
    }
    get validTagLibelle(): boolean {
    return this._validTagLibelle;
    }

    set validTagLibelle(value: boolean) {
    this._validTagLibelle = value;
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
