import {Component, OnInit, Input} from '@angular/core';
import {TraitementService} from '../../../../../controller/service/Traitement.service';
import {TraitementVo} from '../../../../../controller/model/Traitement.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {RecueilDeDonnesVo} from '../../../../../controller/model/RecueilDeDonnes.model';
import {RecueilDeDonnesService} from '../../../../../controller/service/RecueilDeDonnes.service';
import {SoinVo} from '../../../../../controller/model/Soin.model';
import {SoinService} from '../../../../../controller/service/Soin.service';
import {InfirmierVo} from '../../../../../controller/model/Infirmier.model';
import {InfirmierService} from '../../../../../controller/service/Infirmier.service';
@Component({
  selector: 'app-traitement-create-chercheur',
  templateUrl: './traitement-create-chercheur.component.html',
  styleUrls: ['./traitement-create-chercheur.component.css']
})
export class TraitementCreateChercheurComponent implements OnInit {

        selectedSoins: SoinVo = new SoinVo();
    _submitted = false;
    private _errorMessages = new Array<string>();

   _validTraitementRecueilDeDonnes = true;
   _validTraitementDossierMedicaleRef = true;

    _validRecueilDeDonnesAllergie = true;
    _validRecueilDeDonnesEtatPsy = true;
    _validRecueilDeDonnesRespiration = true;
    _validRecueilDeDonnesAlimentation = true;
    _validRecueilDeDonnesMouvement = true;
    _validRecueilDeDonnesSommeil = true;
    _validRecueilDeDonnesRegulation = true;
    _validRecueilDeDonnesTraitementRef = true;
    _validSoinDateSoin = true;
    _validSoinInfirmier = true;
    _validSoinSoinsProd = true;
    _validSoinTraitement = true;



constructor(private datePipe: DatePipe, private traitementService: TraitementService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private recueilDeDonnesService :RecueilDeDonnesService
,       private soinService :SoinService
,       private infirmierService :InfirmierService
) {

}


// methods
ngOnInit(): void {


                this.selectedSoins.infirmierVo = new InfirmierVo();
                this.infirmierService.findAll().subscribe((data) => this.infirmiers = data);


    this.selectedRecueilDeDonnes = new RecueilDeDonnesVo();
    this.recueilDeDonnesService.findAll().subscribe((data) => this.recueilDeDonness = data);
}


    validateSoins(){
    this.errorMessages = new Array();
    this.validateSoinDateSoin();
    this.validateSoinInfirmier();
    this.validateSoinSoinsProd();
    this.validateSoinTraitement();
    }


private setValidation(value : boolean){
    this.validTraitementRecueilDeDonnes = value;
    this.validSoinDateSoin = value;
    this.validSoinInfirmier = value;
    this.validSoinSoinsProd = value;
    this.validSoinTraitement = value;
    this.validTraitementDossierMedicaleRef = value;
    }

        addSoins() {
        if( this.selectedTraitement.soinsVo == null ){
            this.selectedTraitement.soinsVo = new Array<SoinVo>();
        }
       this.validateSoins();
       if (this.errorMessages.length === 0) {
              this.selectedTraitement.soinsVo.push(this.selectedSoins);
              this.selectedSoins = new SoinVo();
           }else{
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
            });
        }
       }

        deleteSoins(p: SoinVo) {
        this.selectedTraitement.soinsVo.forEach((element, index) => {
            if (element === p) { this.selectedTraitement.soinsVo.splice(index, 1); }
        });
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
     this.traitementService.save().subscribe(traitement=>{
       this.traitements.push({...traitement});
       this.createTraitementDialog = false;
       this.submitted = false;
       this.selectedTraitement = new TraitementVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateTraitementRecueilDeDonnes();
this.validateTraitementDossierMedicaleRef();

    }

private validateTraitementRecueilDeDonnes(){
        if (this.stringUtilService.isEmpty(this.selectedTraitement.recueilDeDonnesVo)) {
            this.errorMessages.push('Recueil de donnes non valide');
            this.validTraitementRecueilDeDonnes = false;
        } else {
            this.validTraitementRecueilDeDonnes = true;
        }
    }
private validateTraitementDossierMedicaleRef(){
        if (this.stringUtilService.isEmpty(this.selectedTraitement.dossierMedicaleRef)) {
            this.errorMessages.push('Dossier medicale ref non valide');
            this.validTraitementDossierMedicaleRef = false;
        } else {
            this.validTraitementDossierMedicaleRef = true;
        }
    }






            private validateSoinDateSoin(){
            if (this.selectedSoins.dateSoin == null) {
            this.errorMessages.push('DateSoin de la soin est  invalide');
             this.validSoinDateSoin = false;
            } else {
            this.validSoinDateSoin = true;
            }
            }

            private validateSoinInfirmier(){
            if (this.selectedSoins.infirmierVo == null) {
            this.errorMessages.push('Infirmier de la soin est  invalide');
             this.validSoinInfirmier = false;
            } else {
            this.validSoinInfirmier = true;
            }
            }

            private validateSoinSoinsProd(){
            if (this.selectedSoins.soinsProd == null) {
            this.errorMessages.push('SoinsProd de la soin est  invalide');
             this.validSoinSoinsProd = false;
            } else {
            this.validSoinSoinsProd = true;
            }
            }


            private validateSoinTraitement(){
            if (this.selectedSoins.traitementVo == null) {
            this.errorMessages.push('Traitement de la soin est  invalide');
             this.validSoinTraitement = false;
            } else {
            this.validSoinTraitement = true;
            }
            }





//openPopup
              public async openCreateinfirmier(infirmier: string) {
                      const isPermistted = await this.roleService.isPermitted('Infirmier', 'add');
                       if(isPermistted){
         this.selectedInfirmier = new InfirmierVo();
        this.createInfirmierDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreaterecueilDeDonnes(recueilDeDonnes: string) {
                      const isPermistted = await this.roleService.isPermitted('RecueilDeDonnes', 'add');
                       if(isPermistted){
         this.selectedRecueilDeDonnes = new RecueilDeDonnesVo();
        this.createRecueilDeDonnesDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideCreateDialog(){
    this.createTraitementDialog  = false;
    this.setValidation(true);
}

// getters and setters

get traitements(): Array<TraitementVo> {
    return this.traitementService.traitements;
       }
set traitements(value: Array<TraitementVo>) {
        this.traitementService.traitements = value;
       }

 get selectedTraitement():TraitementVo {
           return this.traitementService.selectedTraitement;
       }
    set selectedTraitement(value: TraitementVo) {
        this.traitementService.selectedTraitement = value;
       }

   get createTraitementDialog(): boolean {
           return this.traitementService.createTraitementDialog;

       }
    set createTraitementDialog(value: boolean) {
        this.traitementService.createTraitementDialog= value;
       }

       get selectedInfirmier(): InfirmierVo {
           return this.infirmierService.selectedInfirmier;
       }
      set selectedInfirmier(value: InfirmierVo) {
        this.infirmierService.selectedInfirmier = value;
       }
       get infirmiers(): Array<InfirmierVo> {
           return this.infirmierService.infirmiers;
       }
       set infirmiers(value: Array<InfirmierVo>) {
        this.infirmierService.infirmiers = value;
       }
       get createInfirmierDialog(): boolean {
           return this.infirmierService.createInfirmierDialog;
       }
      set createInfirmierDialog(value: boolean) {
        this.infirmierService.createInfirmierDialog= value;
       }
       get selectedRecueilDeDonnes(): RecueilDeDonnesVo {
           return this.recueilDeDonnesService.selectedRecueilDeDonnes;
       }
      set selectedRecueilDeDonnes(value: RecueilDeDonnesVo) {
        this.recueilDeDonnesService.selectedRecueilDeDonnes = value;
       }
       get recueilDeDonness(): Array<RecueilDeDonnesVo> {
           return this.recueilDeDonnesService.recueilDeDonness;
       }
       set recueilDeDonness(value: Array<RecueilDeDonnesVo>) {
        this.recueilDeDonnesService.recueilDeDonness = value;
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

    get validTraitementRecueilDeDonnes(): boolean {
    return this._validTraitementRecueilDeDonnes;
    }

    set validTraitementRecueilDeDonnes(value: boolean) {
    this._validTraitementRecueilDeDonnes = value;
    }
    get validTraitementDossierMedicaleRef(): boolean {
    return this._validTraitementDossierMedicaleRef;
    }

    set validTraitementDossierMedicaleRef(value: boolean) {
    this._validTraitementDossierMedicaleRef = value;
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
    get validSoinDateSoin(): boolean {
    return this._validSoinDateSoin;
    }

    set validSoinDateSoin(value: boolean) {
    this._validSoinDateSoin = value;
    }
    get validSoinInfirmier(): boolean {
    return this._validSoinInfirmier;
    }

    set validSoinInfirmier(value: boolean) {
    this._validSoinInfirmier = value;
    }
    get validSoinSoinsProd(): boolean {
    return this._validSoinSoinsProd;
    }

    set validSoinSoinsProd(value: boolean) {
    this._validSoinSoinsProd = value;
    }
    get validSoinTraitement(): boolean {
    return this._validSoinTraitement;
    }

    set validSoinTraitement(value: boolean) {
    this._validSoinTraitement = value;
    }

}
