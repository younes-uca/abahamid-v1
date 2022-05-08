import {Component, OnInit} from '@angular/core';
import {CompteRenduService} from '../../../../../controller/service/CompteRendu.service';
import {CompteRenduVo} from '../../../../../controller/model/CompteRendu.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';

@Component({
  selector: 'app-compte-rendu-view-etudiant',
  templateUrl: './compte-rendu-view-etudiant.component.html',
  styleUrls: ['./compte-rendu-view-etudiant.component.css']
})
export class CompteRenduViewEtudiantComponent implements OnInit {


constructor(private datePipe: DatePipe, private compteRenduService: CompteRenduService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private dossierMedicaleService :DossierMedicaleService
) {
}

// methods
ngOnInit(): void {
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}

hideViewDialog(){
    this.viewCompteRenduDialog  = false;
}

// getters and setters

get compteRendus(): Array<CompteRenduVo> {
    return this.compteRenduService.compteRendus;
       }
set compteRendus(value: Array<CompteRenduVo>) {
        this.compteRenduService.compteRendus = value;
       }

 get selectedCompteRendu():CompteRenduVo {
           return this.compteRenduService.selectedCompteRendu;
       }
    set selectedCompteRendu(value: CompteRenduVo) {
        this.compteRenduService.selectedCompteRendu = value;
       }

   get viewCompteRenduDialog():boolean {
           return this.compteRenduService.viewCompteRenduDialog;

       }
    set viewCompteRenduDialog(value: boolean) {
        this.compteRenduService.viewCompteRenduDialog= value;
       }

       get selectedDossierMedicale():DossierMedicaleVo {
           return this.dossierMedicaleService.selectedDossierMedicale;
       }
      set selectedDossierMedicale(value: DossierMedicaleVo) {
        this.dossierMedicaleService.selectedDossierMedicale = value;
       }
       get dossierMedicales():Array<DossierMedicaleVo> {
           return this.dossierMedicaleService.dossierMedicales;
       }
       set dossierMedicales(value: Array<DossierMedicaleVo>) {
        this.dossierMedicaleService.dossierMedicales = value;
       }
       get editDossierMedicaleDialog():boolean {
           return this.dossierMedicaleService.editDossierMedicaleDialog;
       }
      set editDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.editDossierMedicaleDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
