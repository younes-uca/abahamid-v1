import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../../../controller/service/Patient.service';
import {PatientVo} from '../../../../../controller/model/Patient.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {SexeVo} from '../../../../../controller/model/Sexe.model';
import {SexeService} from '../../../../../controller/service/Sexe.service';
import {VilleVo} from '../../../../../controller/model/Ville.model';
import {VilleService} from '../../../../../controller/service/Ville.service';

@Component({
  selector: 'app-patient-edit-etudiant',
  templateUrl: './patient-edit-etudiant.component.html',
  styleUrls: ['./patient-edit-etudiant.component.css']
})
export class PatientEditEtudiantComponent implements OnInit {


constructor(private datePipe: DatePipe, private patientService: PatientService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private sexeService: SexeService
 ,       private villeService: VilleService
) {
}

// methods
ngOnInit(): void {
    this.selectedVille = new VilleVo();
    this.villeService.findAll().subscribe((data) => this.villes = data);
    this.selectedSexe = new SexeVo();
    this.sexeService.findAll().subscribe((data) => this.sexes = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedPatient.dateDeNaissance = DateUtils.toDate(this.selectedPatient.dateDeNaissance);
    this.patientService.edit().subscribe(patient=>{
    const myIndex = this.patients.findIndex(e => e.id === this.selectedPatient.id);
    this.patients[myIndex] = this.selectedPatient;
    this.editPatientDialog = false;
    this.selectedPatient = new PatientVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreateville(ville: string) {
                      const isPermistted = await this.roleService.isPermitted('Ville', 'add');
                       if(isPermistted){
         this.selectedVille = new VilleVo();
        this.createVilleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatesexe(sexe: string) {
                      const isPermistted = await this.roleService.isPermitted('Sexe', 'add');
                       if(isPermistted){
         this.selectedSexe = new SexeVo();
        this.createSexeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editPatientDialog  = false;
}

// getters and setters

get patients(): Array<PatientVo> {
    return this.patientService.patients;
       }
set patients(value: Array<PatientVo>) {
        this.patientService.patients = value;
       }

 get selectedPatient(): PatientVo {
           return this.patientService.selectedPatient;
       }
    set selectedPatient(value: PatientVo) {
        this.patientService.selectedPatient = value;
       }

   get editPatientDialog(): boolean {
           return this.patientService.editPatientDialog;

       }
    set editPatientDialog(value: boolean) {
        this.patientService.editPatientDialog = value;
       }

       get selectedVille(): VilleVo {
           return this.villeService.selectedVille;
       }
      set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }
       get villes(): Array<VilleVo> {
           return this.villeService.villes;
       }
       set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       }
       get createVilleDialog(): boolean {
           return this.villeService.createVilleDialog;
       }
      set createVilleDialog(value: boolean) {
        this.villeService.createVilleDialog= value;
       }
       get selectedSexe(): SexeVo {
           return this.sexeService.selectedSexe;
       }
      set selectedSexe(value: SexeVo) {
        this.sexeService.selectedSexe = value;
       }
       get sexes(): Array<SexeVo> {
           return this.sexeService.sexes;
       }
       set sexes(value: Array<SexeVo>) {
        this.sexeService.sexes = value;
       }
       get createSexeDialog(): boolean {
           return this.sexeService.createSexeDialog;
       }
      set createSexeDialog(value: boolean) {
        this.sexeService.createSexeDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
