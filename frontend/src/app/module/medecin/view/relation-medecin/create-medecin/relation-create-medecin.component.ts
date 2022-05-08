import {Component, OnInit, Input} from '@angular/core';
import {RelationService} from '../../../../../controller/service/Relation.service';
import {RelationVo} from '../../../../../controller/model/Relation.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


@Component({
  selector: 'app-relation-create-medecin',
  templateUrl: './relation-create-medecin.component.html',
  styleUrls: ['./relation-create-medecin.component.css']
})
export class RelationCreateMedecinComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validRelationCode = true;
   _validRelationLibelle = true;




constructor(private datePipe: DatePipe, private relationService: RelationService
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
    this.validRelationCode = value;
    this.validRelationLibelle = value;
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
     this.relationService.save().subscribe(relation=>{
       this.relations.push({...relation});
       this.createRelationDialog = false;
       this.submitted = false;
       this.selectedRelation = new RelationVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateRelationCode();
this.validateRelationLibelle();

    }

private validateRelationCode(){
        if (this.stringUtilService.isEmpty(this.selectedRelation.code)) {
            this.errorMessages.push('Code non valide');
            this.validRelationCode = false;
        } else {
            this.validRelationCode = true;
        }
    }
private validateRelationLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedRelation.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validRelationLibelle = false;
        } else {
            this.validRelationLibelle = true;
        }
    }






//openPopup
// methods

hideCreateDialog(){
    this.createRelationDialog  = false;
    this.setValidation(true);
}

// getters and setters

get relations(): Array<RelationVo> {
    return this.relationService.relations;
       }
set relations(value: Array<RelationVo>) {
        this.relationService.relations = value;
       }

 get selectedRelation():RelationVo {
           return this.relationService.selectedRelation;
       }
    set selectedRelation(value: RelationVo) {
        this.relationService.selectedRelation = value;
       }

   get createRelationDialog(): boolean {
           return this.relationService.createRelationDialog;

       }
    set createRelationDialog(value: boolean) {
        this.relationService.createRelationDialog= value;
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

    get validRelationCode(): boolean {
    return this._validRelationCode;
    }

    set validRelationCode(value: boolean) {
    this._validRelationCode = value;
    }
    get validRelationLibelle(): boolean {
    return this._validRelationLibelle;
    }

    set validRelationLibelle(value: boolean) {
    this._validRelationLibelle = value;
    }


}
