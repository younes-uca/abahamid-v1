import {Component, OnInit} from '@angular/core';
import {EvoSuivService} from '../../../../../controller/service/EvoSuiv.service';
import {EvoSuivVo} from '../../../../../controller/model/EvoSuiv.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';

@Component({
  selector: 'app-evo-suiv-view-chercheur',
  templateUrl: './evo-suiv-view-chercheur.component.html',
  styleUrls: ['./evo-suiv-view-chercheur.component.css']
})
export class EvoSuivViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private evoSuivService: EvoSuivService
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
    this.viewEvoSuivDialog  = false;
}

// getters and setters

get evoSuivs(): Array<EvoSuivVo> {
    return this.evoSuivService.evoSuivs;
       }
set evoSuivs(value: Array<EvoSuivVo>) {
        this.evoSuivService.evoSuivs = value;
       }

 get selectedEvoSuiv():EvoSuivVo {
           return this.evoSuivService.selectedEvoSuiv;
       }
    set selectedEvoSuiv(value: EvoSuivVo) {
        this.evoSuivService.selectedEvoSuiv = value;
       }

   get viewEvoSuivDialog():boolean {
           return this.evoSuivService.viewEvoSuivDialog;

       }
    set viewEvoSuivDialog(value: boolean) {
        this.evoSuivService.viewEvoSuivDialog= value;
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
