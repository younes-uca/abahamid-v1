import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../../../controller/service/Patient.service';
import {PatientVo} from '../../../../../controller/model/Patient.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {SexeVo} from '../../../../../controller/model/Sexe.model';
import {SexeService} from '../../../../../controller/service/Sexe.service';
import {VilleVo} from '../../../../../controller/model/Ville.model';
import {VilleService} from '../../../../../controller/service/Ville.service';

@Component({
  selector: 'app-patient-view-admin',
  templateUrl: './patient-view-admin.component.html',
  styleUrls: ['./patient-view-admin.component.css']
})
export class PatientViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private patientService: PatientService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private sexeService :SexeService
    ,private villeService :VilleService
) {
}

// methods
ngOnInit(): void {
    this.selectedVille = new VilleVo();
    this.villeService.findAll().subscribe((data) => this.villes = data);
    this.selectedSexe = new SexeVo();
    this.sexeService.findAll().subscribe((data) => this.sexes = data);
}

hideViewDialog(){
    this.viewPatientDialog  = false;
}

// getters and setters

get patients(): Array<PatientVo> {
    return this.patientService.patients;
       }
set patients(value: Array<PatientVo>) {
        this.patientService.patients = value;
       }

 get selectedPatient():PatientVo {
           return this.patientService.selectedPatient;
       }
    set selectedPatient(value: PatientVo) {
        this.patientService.selectedPatient = value;
       }

   get viewPatientDialog():boolean {
           return this.patientService.viewPatientDialog;

       }
    set viewPatientDialog(value: boolean) {
        this.patientService.viewPatientDialog= value;
       }

       get selectedVille():VilleVo {
           return this.villeService.selectedVille;
       }
      set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }
       get villes():Array<VilleVo> {
           return this.villeService.villes;
       }
       set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       }
       get editVilleDialog():boolean {
           return this.villeService.editVilleDialog;
       }
      set editVilleDialog(value: boolean) {
        this.villeService.editVilleDialog= value;
       }
       get selectedSexe():SexeVo {
           return this.sexeService.selectedSexe;
       }
      set selectedSexe(value: SexeVo) {
        this.sexeService.selectedSexe = value;
       }
       get sexes():Array<SexeVo> {
           return this.sexeService.sexes;
       }
       set sexes(value: Array<SexeVo>) {
        this.sexeService.sexes = value;
       }
       get editSexeDialog():boolean {
           return this.sexeService.editSexeDialog;
       }
      set editSexeDialog(value: boolean) {
        this.sexeService.editSexeDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
