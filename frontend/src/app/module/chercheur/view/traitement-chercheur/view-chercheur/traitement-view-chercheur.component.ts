import {Component, OnInit} from '@angular/core';
import {TraitementService} from '../../../../../controller/service/Traitement.service';
import {TraitementVo} from '../../../../../controller/model/Traitement.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {RecueilDeDonnesVo} from '../../../../../controller/model/RecueilDeDonnes.model';
import {RecueilDeDonnesService} from '../../../../../controller/service/RecueilDeDonnes.service';
import {InfirmierVo} from '../../../../../controller/model/Infirmier.model';
import {InfirmierService} from '../../../../../controller/service/Infirmier.service';
import {SoinVo} from '../../../../../controller/model/Soin.model';
import {SoinService} from '../../../../../controller/service/Soin.service';

@Component({
  selector: 'app-traitement-view-chercheur',
  templateUrl: './traitement-view-chercheur.component.html',
  styleUrls: ['./traitement-view-chercheur.component.css']
})
export class TraitementViewChercheurComponent implements OnInit {

        selectedSoins: SoinVo = new SoinVo();
        soinsListe: Array<SoinVo> = [];

        myInfirmiers: Array<InfirmierVo> = [];


constructor(private datePipe: DatePipe, private traitementService: TraitementService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private recueilDeDonnesService :RecueilDeDonnesService
    ,private infirmierService :InfirmierService
    ,private soinService :SoinService
) {
}

// methods
ngOnInit(): void {
                this.selectedSoins.infirmierVo = new InfirmierVo();
                this.infirmierService.findAll().subscribe((data) => this.infirmiers = data);
    this.selectedRecueilDeDonnes = new RecueilDeDonnesVo();
    this.recueilDeDonnesService.findAll().subscribe((data) => this.recueilDeDonness = data);
}

hideViewDialog(){
    this.viewTraitementDialog  = false;
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

   get viewTraitementDialog():boolean {
           return this.traitementService.viewTraitementDialog;

       }
    set viewTraitementDialog(value: boolean) {
        this.traitementService.viewTraitementDialog= value;
       }

       get selectedInfirmier():InfirmierVo {
           return this.infirmierService.selectedInfirmier;
       }
      set selectedInfirmier(value: InfirmierVo) {
        this.infirmierService.selectedInfirmier = value;
       }
       get infirmiers():Array<InfirmierVo> {
           return this.infirmierService.infirmiers;
       }
       set infirmiers(value: Array<InfirmierVo>) {
        this.infirmierService.infirmiers = value;
       }
       get editInfirmierDialog():boolean {
           return this.infirmierService.editInfirmierDialog;
       }
      set editInfirmierDialog(value: boolean) {
        this.infirmierService.editInfirmierDialog= value;
       }
       get selectedRecueilDeDonnes():RecueilDeDonnesVo {
           return this.recueilDeDonnesService.selectedRecueilDeDonnes;
       }
      set selectedRecueilDeDonnes(value: RecueilDeDonnesVo) {
        this.recueilDeDonnesService.selectedRecueilDeDonnes = value;
       }
       get recueilDeDonness():Array<RecueilDeDonnesVo> {
           return this.recueilDeDonnesService.recueilDeDonness;
       }
       set recueilDeDonness(value: Array<RecueilDeDonnesVo>) {
        this.recueilDeDonnesService.recueilDeDonness = value;
       }
       get editRecueilDeDonnesDialog():boolean {
           return this.recueilDeDonnesService.editRecueilDeDonnesDialog;
       }
      set editRecueilDeDonnesDialog(value: boolean) {
        this.recueilDeDonnesService.editRecueilDeDonnesDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
