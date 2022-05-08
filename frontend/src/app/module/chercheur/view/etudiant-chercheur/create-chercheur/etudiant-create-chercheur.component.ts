import {Component, OnInit, Input} from '@angular/core';
import {EtudiantService} from '../../../../../controller/service/Etudiant.service';
import {EtudiantVo} from '../../../../../controller/model/Etudiant.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


@Component({
  selector: 'app-etudiant-create-chercheur',
  templateUrl: './etudiant-create-chercheur.component.html',
  styleUrls: ['./etudiant-create-chercheur.component.css']
})
export class EtudiantCreateChercheurComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();





constructor(private datePipe: DatePipe, private etudiantService: EtudiantService
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
     this.etudiantService.save().subscribe(etudiant=>{
       this.etudiants.push({...etudiant});
       this.createEtudiantDialog = false;
       this.submitted = false;
       this.selectedEtudiant = new EtudiantVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();

    }



















//openPopup
// methods

hideCreateDialog(){
    this.createEtudiantDialog  = false;
    this.setValidation(true);
}

// getters and setters

get etudiants(): Array<EtudiantVo> {
    return this.etudiantService.etudiants;
       }
set etudiants(value: Array<EtudiantVo>) {
        this.etudiantService.etudiants = value;
       }

 get selectedEtudiant():EtudiantVo {
           return this.etudiantService.selectedEtudiant;
       }
    set selectedEtudiant(value: EtudiantVo) {
        this.etudiantService.selectedEtudiant = value;
       }

   get createEtudiantDialog(): boolean {
           return this.etudiantService.createEtudiantDialog;

       }
    set createEtudiantDialog(value: boolean) {
        this.etudiantService.createEtudiantDialog= value;
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



}
