import {Component, OnInit, Input} from '@angular/core';
import {SoinService} from '../../../../../controller/service/Soin.service';
import {SoinVo} from '../../../../../controller/model/Soin.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {InfirmierVo} from '../../../../../controller/model/Infirmier.model';
import {InfirmierService} from '../../../../../controller/service/Infirmier.service';
import {TraitementVo} from '../../../../../controller/model/Traitement.model';
import {TraitementService} from '../../../../../controller/service/Traitement.service';
@Component({
  selector: 'app-soin-create-medecin',
  templateUrl: './soin-create-medecin.component.html',
  styleUrls: ['./soin-create-medecin.component.css']
})
export class SoinCreateMedecinComponent implements OnInit {

    _submitted = false;
    private _errorMessages = new Array<string>();

   _validSoinDateSoin = true;
   _validSoinInfirmier = true;
   _validSoinSoinsProd = true;
   _validSoinTraitement = true;

    _validInfirmierRef = true;
    _validInfirmierNom = true;
    _validInfirmierPrenom = true;
    _validInfirmierSexe = true;
    _validInfirmierTelephone = true;
    _validTraitementRecueilDeDonnes = true;
    _validTraitementDossierMedicaleRef = true;



constructor(private datePipe: DatePipe, private soinService: SoinService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private infirmierService :InfirmierService
,       private traitementService :TraitementService
) {

}


// methods
ngOnInit(): void {

    this.selectedInfirmier = new InfirmierVo();
    this.infirmierService.findAll().subscribe((data) => this.infirmiers = data);
    this.selectedTraitement = new TraitementVo();
    this.traitementService.findAll().subscribe((data) => this.traitements = data);
}




private setValidation(value : boolean){
    this.validSoinDateSoin = value;
    this.validSoinInfirmier = value;
    this.validSoinSoinsProd = value;
    this.validSoinTraitement = value;
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
     this.soinService.save().subscribe(soin=>{
       this.soins.push({...soin});
       this.createSoinDialog = false;
       this.submitted = false;
       this.selectedSoin = new SoinVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateSoinDateSoin();
this.validateSoinInfirmier();
this.validateSoinSoinsProd();
this.validateSoinTraitement();

    }

private validateSoinDateSoin(){
        if (this.stringUtilService.isEmpty(this.selectedSoin.dateSoin)) {
            this.errorMessages.push('Date soin non valide');
            this.validSoinDateSoin = false;
        } else {
            this.validSoinDateSoin = true;
        }
    }
private validateSoinInfirmier(){
        if (this.stringUtilService.isEmpty(this.selectedSoin.infirmierVo)) {
            this.errorMessages.push('Infirmier non valide');
            this.validSoinInfirmier = false;
        } else {
            this.validSoinInfirmier = true;
        }
    }
private validateSoinSoinsProd(){
        if (this.stringUtilService.isEmpty(this.selectedSoin.soinsProd)) {
            this.errorMessages.push('Soins prod non valide');
            this.validSoinSoinsProd = false;
        } else {
            this.validSoinSoinsProd = true;
        }
    }
private validateSoinTraitement(){
        if (this.stringUtilService.isEmpty(this.selectedSoin.traitementVo)) {
            this.errorMessages.push('Traitement non valide');
            this.validSoinTraitement = false;
        } else {
            this.validSoinTraitement = true;
        }
    }









//openPopup
              public async openCreatetraitement(traitement: string) {
                      const isPermistted = await this.roleService.isPermitted('Traitement', 'add');
                       if(isPermistted){
         this.selectedTraitement = new TraitementVo();
        this.createTraitementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
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
// methods

hideCreateDialog(){
    this.createSoinDialog  = false;
    this.setValidation(true);
}

// getters and setters

get soins(): Array<SoinVo> {
    return this.soinService.soins;
       }
set soins(value: Array<SoinVo>) {
        this.soinService.soins = value;
       }

 get selectedSoin():SoinVo {
           return this.soinService.selectedSoin;
       }
    set selectedSoin(value: SoinVo) {
        this.soinService.selectedSoin = value;
       }

   get createSoinDialog(): boolean {
           return this.soinService.createSoinDialog;

       }
    set createSoinDialog(value: boolean) {
        this.soinService.createSoinDialog= value;
       }

       get selectedTraitement(): TraitementVo {
           return this.traitementService.selectedTraitement;
       }
      set selectedTraitement(value: TraitementVo) {
        this.traitementService.selectedTraitement = value;
       }
       get traitements(): Array<TraitementVo> {
           return this.traitementService.traitements;
       }
       set traitements(value: Array<TraitementVo>) {
        this.traitementService.traitements = value;
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

    get validInfirmierRef(): boolean {
    return this._validInfirmierRef;
    }

    set validInfirmierRef(value: boolean) {
    this._validInfirmierRef = value;
    }
    get validInfirmierNom(): boolean {
    return this._validInfirmierNom;
    }

    set validInfirmierNom(value: boolean) {
    this._validInfirmierNom = value;
    }
    get validInfirmierPrenom(): boolean {
    return this._validInfirmierPrenom;
    }

    set validInfirmierPrenom(value: boolean) {
    this._validInfirmierPrenom = value;
    }
    get validInfirmierSexe(): boolean {
    return this._validInfirmierSexe;
    }

    set validInfirmierSexe(value: boolean) {
    this._validInfirmierSexe = value;
    }
    get validInfirmierTelephone(): boolean {
    return this._validInfirmierTelephone;
    }

    set validInfirmierTelephone(value: boolean) {
    this._validInfirmierTelephone = value;
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

}
