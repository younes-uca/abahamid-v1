import {Component, OnInit, Input} from '@angular/core';
import {ExamenService} from '../../../../../controller/service/Examen.service';
import {ExamenVo} from '../../../../../controller/model/Examen.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


@Component({
  selector: 'app-examen-create-chercheur',
  templateUrl: './examen-create-chercheur.component.html',
  styleUrls: ['./examen-create-chercheur.component.css']
})
export class ExamenCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validExamenCode = true;
   _validExamenLibelle = true;




constructor(private datePipe: DatePipe, private examenService: ExamenService
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
    this.validExamenCode = value;
    this.validExamenLibelle = value;
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
     this.examenService.save().subscribe(examen=>{
       this.examens.push({...examen});
       this.createExamenDialog = false;
       this.submitted = false;
       this.selectedExamen = new ExamenVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateExamenCode();
this.validateExamenLibelle();

    }

private validateExamenCode(){
        if (this.stringUtilService.isEmpty(this.selectedExamen.code)) {
            this.errorMessages.push('Code non valide');
            this.validExamenCode = false;
        } else {
            this.validExamenCode = true;
        }
    }
private validateExamenLibelle(){
        if (this.stringUtilService.isEmpty(this.selectedExamen.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validExamenLibelle = false;
        } else {
            this.validExamenLibelle = true;
        }
    }






//openPopup
// methods

hideCreateDialog(){
    this.createExamenDialog  = false;
    this.setValidation(true);
}

// getters and setters

get examens(): Array<ExamenVo> {
    return this.examenService.examens;
       }
set examens(value: Array<ExamenVo>) {
        this.examenService.examens = value;
       }

 get selectedExamen():ExamenVo {
           return this.examenService.selectedExamen;
       }
    set selectedExamen(value: ExamenVo) {
        this.examenService.selectedExamen = value;
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


}
