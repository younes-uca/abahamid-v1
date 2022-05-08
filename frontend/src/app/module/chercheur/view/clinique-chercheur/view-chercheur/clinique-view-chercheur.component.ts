import {Component, OnInit} from '@angular/core';
import {CliniqueService} from '../../../../../controller/service/Clinique.service';
import {CliniqueVo} from '../../../../../controller/model/Clinique.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';

@Component({
  selector: 'app-clinique-view-chercheur',
  templateUrl: './clinique-view-chercheur.component.html',
  styleUrls: ['./clinique-view-chercheur.component.css']
})
export class CliniqueViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private cliniqueService: CliniqueService
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
    this.viewCliniqueDialog  = false;
}

// getters and setters

get cliniques(): Array<CliniqueVo> {
    return this.cliniqueService.cliniques;
       }
set cliniques(value: Array<CliniqueVo>) {
        this.cliniqueService.cliniques = value;
       }

 get selectedClinique():CliniqueVo {
           return this.cliniqueService.selectedClinique;
       }
    set selectedClinique(value: CliniqueVo) {
        this.cliniqueService.selectedClinique = value;
       }

   get viewCliniqueDialog():boolean {
           return this.cliniqueService.viewCliniqueDialog;

       }
    set viewCliniqueDialog(value: boolean) {
        this.cliniqueService.viewCliniqueDialog= value;
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
