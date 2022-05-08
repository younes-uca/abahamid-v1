import {Component, OnInit} from '@angular/core';
import {SoinService} from '../../../../../controller/service/Soin.service';
import {SoinVo} from '../../../../../controller/model/Soin.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {TraitementVo} from '../../../../../controller/model/Traitement.model';
import {TraitementService} from '../../../../../controller/service/Traitement.service';
import {InfirmierVo} from '../../../../../controller/model/Infirmier.model';
import {InfirmierService} from '../../../../../controller/service/Infirmier.service';

@Component({
  selector: 'app-soin-view-admin',
  templateUrl: './soin-view-admin.component.html',
  styleUrls: ['./soin-view-admin.component.css']
})
export class SoinViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private soinService: SoinService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private traitementService :TraitementService
    ,private infirmierService :InfirmierService
) {
}

// methods
ngOnInit(): void {
    this.selectedInfirmier = new InfirmierVo();
    this.infirmierService.findAll().subscribe((data) => this.infirmiers = data);
    this.selectedTraitement = new TraitementVo();
    this.traitementService.findAll().subscribe((data) => this.traitements = data);
}

hideViewDialog(){
    this.viewSoinDialog  = false;
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

   get viewSoinDialog():boolean {
           return this.soinService.viewSoinDialog;

       }
    set viewSoinDialog(value: boolean) {
        this.soinService.viewSoinDialog= value;
       }

       get selectedTraitement():TraitementVo {
           return this.traitementService.selectedTraitement;
       }
      set selectedTraitement(value: TraitementVo) {
        this.traitementService.selectedTraitement = value;
       }
       get traitements():Array<TraitementVo> {
           return this.traitementService.traitements;
       }
       set traitements(value: Array<TraitementVo>) {
        this.traitementService.traitements = value;
       }
       get editTraitementDialog():boolean {
           return this.traitementService.editTraitementDialog;
       }
      set editTraitementDialog(value: boolean) {
        this.traitementService.editTraitementDialog= value;
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

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
