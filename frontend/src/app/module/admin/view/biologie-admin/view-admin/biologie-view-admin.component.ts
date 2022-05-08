import {Component, OnInit} from '@angular/core';
import {BiologieService} from '../../../../../controller/service/Biologie.service';
import {BiologieVo} from '../../../../../controller/model/Biologie.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {ExamenVo} from '../../../../../controller/model/Examen.model';
import {ExamenService} from '../../../../../controller/service/Examen.service';
import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';

@Component({
  selector: 'app-biologie-view-admin',
  templateUrl: './biologie-view-admin.component.html',
  styleUrls: ['./biologie-view-admin.component.css']
})
export class BiologieViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private biologieService: BiologieService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private examenService :ExamenService
    ,private dossierMedicaleService :DossierMedicaleService
) {
}

// methods
ngOnInit(): void {
    this.selectedExamen = new ExamenVo();
    this.examenService.findAll().subscribe((data) => this.examens = data);
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}

hideViewDialog(){
    this.viewBiologieDialog  = false;
}

// getters and setters

get biologies(): Array<BiologieVo> {
    return this.biologieService.biologies;
       }
set biologies(value: Array<BiologieVo>) {
        this.biologieService.biologies = value;
       }

 get selectedBiologie():BiologieVo {
           return this.biologieService.selectedBiologie;
       }
    set selectedBiologie(value: BiologieVo) {
        this.biologieService.selectedBiologie = value;
       }

   get viewBiologieDialog():boolean {
           return this.biologieService.viewBiologieDialog;

       }
    set viewBiologieDialog(value: boolean) {
        this.biologieService.viewBiologieDialog= value;
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
       get selectedExamen():ExamenVo {
           return this.examenService.selectedExamen;
       }
      set selectedExamen(value: ExamenVo) {
        this.examenService.selectedExamen = value;
       }
       get examens():Array<ExamenVo> {
           return this.examenService.examens;
       }
       set examens(value: Array<ExamenVo>) {
        this.examenService.examens = value;
       }
       get editExamenDialog():boolean {
           return this.examenService.editExamenDialog;
       }
      set editExamenDialog(value: boolean) {
        this.examenService.editExamenDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
