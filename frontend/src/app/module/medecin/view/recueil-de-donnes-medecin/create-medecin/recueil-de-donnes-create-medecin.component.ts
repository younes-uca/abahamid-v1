import {Component, OnInit, Input} from '@angular/core';
import {RecueilDeDonnesService} from '../../../../../controller/service/RecueilDeDonnes.service';
import {RecueilDeDonnesVo} from '../../../../../controller/model/RecueilDeDonnes.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


@Component({
  selector: 'app-recueil-de-donnes-create-medecin',
  templateUrl: './recueil-de-donnes-create-medecin.component.html',
  styleUrls: ['./recueil-de-donnes-create-medecin.component.css']
})
export class RecueilDeDonnesCreateMedecinComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validRecueilDeDonnesAllergie = true;
   _validRecueilDeDonnesEtatPsy = true;
   _validRecueilDeDonnesRespiration = true;
   _validRecueilDeDonnesAlimentation = true;
   _validRecueilDeDonnesMouvement = true;
   _validRecueilDeDonnesSommeil = true;
   _validRecueilDeDonnesRegulation = true;
   _validRecueilDeDonnesTraitementRef = true;




constructor(private datePipe: DatePipe, private recueilDeDonnesService: RecueilDeDonnesService
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
    this.validRecueilDeDonnesAllergie = value;
    this.validRecueilDeDonnesEtatPsy = value;
    this.validRecueilDeDonnesRespiration = value;
    this.validRecueilDeDonnesAlimentation = value;
    this.validRecueilDeDonnesMouvement = value;
    this.validRecueilDeDonnesSommeil = value;
    this.validRecueilDeDonnesRegulation = value;
    this.validRecueilDeDonnesTraitementRef = value;
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
     this.recueilDeDonnesService.save().subscribe(recueilDeDonnes=>{
       this.recueilDeDonness.push({...recueilDeDonnes});
       this.createRecueilDeDonnesDialog = false;
       this.submitted = false;
       this.selectedRecueilDeDonnes = new RecueilDeDonnesVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateRecueilDeDonnesAllergie();
this.validateRecueilDeDonnesEtatPsy();
this.validateRecueilDeDonnesRespiration();
this.validateRecueilDeDonnesAlimentation();
this.validateRecueilDeDonnesMouvement();
this.validateRecueilDeDonnesSommeil();
this.validateRecueilDeDonnesRegulation();
this.validateRecueilDeDonnesTraitementRef();

    }

private validateRecueilDeDonnesAllergie(){
        if (this.stringUtilService.isEmpty(this.selectedRecueilDeDonnes.allergie)) {
            this.errorMessages.push('Allergie non valide');
            this.validRecueilDeDonnesAllergie = false;
        } else {
            this.validRecueilDeDonnesAllergie = true;
        }
    }
private validateRecueilDeDonnesEtatPsy(){
        if (this.stringUtilService.isEmpty(this.selectedRecueilDeDonnes.etatPsy)) {
            this.errorMessages.push('Etat psy non valide');
            this.validRecueilDeDonnesEtatPsy = false;
        } else {
            this.validRecueilDeDonnesEtatPsy = true;
        }
    }
private validateRecueilDeDonnesRespiration(){
        if (this.stringUtilService.isEmpty(this.selectedRecueilDeDonnes.respiration)) {
            this.errorMessages.push('Respiration non valide');
            this.validRecueilDeDonnesRespiration = false;
        } else {
            this.validRecueilDeDonnesRespiration = true;
        }
    }
private validateRecueilDeDonnesAlimentation(){
        if (this.stringUtilService.isEmpty(this.selectedRecueilDeDonnes.alimentation)) {
            this.errorMessages.push('Alimentation non valide');
            this.validRecueilDeDonnesAlimentation = false;
        } else {
            this.validRecueilDeDonnesAlimentation = true;
        }
    }
private validateRecueilDeDonnesMouvement(){
        if (this.stringUtilService.isEmpty(this.selectedRecueilDeDonnes.mouvement)) {
            this.errorMessages.push('Mouvement non valide');
            this.validRecueilDeDonnesMouvement = false;
        } else {
            this.validRecueilDeDonnesMouvement = true;
        }
    }
private validateRecueilDeDonnesSommeil(){
        if (this.stringUtilService.isEmpty(this.selectedRecueilDeDonnes.sommeil)) {
            this.errorMessages.push('Sommeil non valide');
            this.validRecueilDeDonnesSommeil = false;
        } else {
            this.validRecueilDeDonnesSommeil = true;
        }
    }
private validateRecueilDeDonnesRegulation(){
        if (this.stringUtilService.isEmpty(this.selectedRecueilDeDonnes.regulation)) {
            this.errorMessages.push('Regulation non valide');
            this.validRecueilDeDonnesRegulation = false;
        } else {
            this.validRecueilDeDonnesRegulation = true;
        }
    }
private validateRecueilDeDonnesTraitementRef(){
        if (this.stringUtilService.isEmpty(this.selectedRecueilDeDonnes.traitementRef)) {
            this.errorMessages.push('Traitement ref non valide');
            this.validRecueilDeDonnesTraitementRef = false;
        } else {
            this.validRecueilDeDonnesTraitementRef = true;
        }
    }













//openPopup
// methods

hideCreateDialog(){
    this.createRecueilDeDonnesDialog  = false;
    this.setValidation(true);
}

// getters and setters

get recueilDeDonness(): Array<RecueilDeDonnesVo> {
    return this.recueilDeDonnesService.recueilDeDonness;
       }
set recueilDeDonness(value: Array<RecueilDeDonnesVo>) {
        this.recueilDeDonnesService.recueilDeDonness = value;
       }

 get selectedRecueilDeDonnes():RecueilDeDonnesVo {
           return this.recueilDeDonnesService.selectedRecueilDeDonnes;
       }
    set selectedRecueilDeDonnes(value: RecueilDeDonnesVo) {
        this.recueilDeDonnesService.selectedRecueilDeDonnes = value;
       }

   get createRecueilDeDonnesDialog(): boolean {
           return this.recueilDeDonnesService.createRecueilDeDonnesDialog;

       }
    set createRecueilDeDonnesDialog(value: boolean) {
        this.recueilDeDonnesService.createRecueilDeDonnesDialog= value;
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

    get validRecueilDeDonnesAllergie(): boolean {
    return this._validRecueilDeDonnesAllergie;
    }

    set validRecueilDeDonnesAllergie(value: boolean) {
    this._validRecueilDeDonnesAllergie = value;
    }
    get validRecueilDeDonnesEtatPsy(): boolean {
    return this._validRecueilDeDonnesEtatPsy;
    }

    set validRecueilDeDonnesEtatPsy(value: boolean) {
    this._validRecueilDeDonnesEtatPsy = value;
    }
    get validRecueilDeDonnesRespiration(): boolean {
    return this._validRecueilDeDonnesRespiration;
    }

    set validRecueilDeDonnesRespiration(value: boolean) {
    this._validRecueilDeDonnesRespiration = value;
    }
    get validRecueilDeDonnesAlimentation(): boolean {
    return this._validRecueilDeDonnesAlimentation;
    }

    set validRecueilDeDonnesAlimentation(value: boolean) {
    this._validRecueilDeDonnesAlimentation = value;
    }
    get validRecueilDeDonnesMouvement(): boolean {
    return this._validRecueilDeDonnesMouvement;
    }

    set validRecueilDeDonnesMouvement(value: boolean) {
    this._validRecueilDeDonnesMouvement = value;
    }
    get validRecueilDeDonnesSommeil(): boolean {
    return this._validRecueilDeDonnesSommeil;
    }

    set validRecueilDeDonnesSommeil(value: boolean) {
    this._validRecueilDeDonnesSommeil = value;
    }
    get validRecueilDeDonnesRegulation(): boolean {
    return this._validRecueilDeDonnesRegulation;
    }

    set validRecueilDeDonnesRegulation(value: boolean) {
    this._validRecueilDeDonnesRegulation = value;
    }
    get validRecueilDeDonnesTraitementRef(): boolean {
    return this._validRecueilDeDonnesTraitementRef;
    }

    set validRecueilDeDonnesTraitementRef(value: boolean) {
    this._validRecueilDeDonnesTraitementRef = value;
    }


}
