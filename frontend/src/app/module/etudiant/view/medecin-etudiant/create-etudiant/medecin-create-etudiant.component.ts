import {Component, OnInit, Input} from '@angular/core';
import {MedecinService} from '../../../../../controller/service/Medecin.service';
import {MedecinVo} from '../../../../../controller/model/Medecin.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


@Component({
  selector: 'app-medecin-create-etudiant',
  templateUrl: './medecin-create-etudiant.component.html',
  styleUrls: ['./medecin-create-etudiant.component.css']
})
export class MedecinCreateEtudiantComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();





constructor(private datePipe: DatePipe, private medecinService: MedecinService
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
     this.medecinService.save().subscribe(medecin=>{
       this.medecins.push({...medecin});
       this.createMedecinDialog = false;
       this.submitted = false;
       this.selectedMedecin = new MedecinVo();


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
    this.createMedecinDialog  = false;
    this.setValidation(true);
}

// getters and setters

get medecins(): Array<MedecinVo> {
    return this.medecinService.medecins;
       }
set medecins(value: Array<MedecinVo>) {
        this.medecinService.medecins = value;
       }

 get selectedMedecin():MedecinVo {
           return this.medecinService.selectedMedecin;
       }
    set selectedMedecin(value: MedecinVo) {
        this.medecinService.selectedMedecin = value;
       }

   get createMedecinDialog(): boolean {
           return this.medecinService.createMedecinDialog;

       }
    set createMedecinDialog(value: boolean) {
        this.medecinService.createMedecinDialog= value;
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
