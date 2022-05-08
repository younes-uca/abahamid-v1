import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../../../controller/service/Patient.service';
import {PatientVo} from '../../../../../controller/model/Patient.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { VilleService } from '../../../../../controller/service/Ville.service';
import { SexeService } from '../../../../../controller/service/Sexe.service';

import {SexeVo} from '../../../../../controller/model/Sexe.model';
import {VilleVo} from '../../../../../controller/model/Ville.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-patient-list-admin',
  templateUrl: './patient-list-admin.component.html',
  styleUrls: ['./patient-list-admin.component.css']
})
export class PatientListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Patient';
    villes :Array<VilleVo>;
    sexes :Array<SexeVo>;


    constructor(private datePipe: DatePipe, private patientService: PatientService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private villeService: VilleService
        , private sexeService: SexeService
) { }

    ngOnInit(): void {
      this.loadPatients();
      this.initExport();
      this.initCol();
      this.loadVille();
      this.loadSexe();
    }
    
    // methods
      public async loadPatients(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Patient', 'list');
        isPermistted ? this.patientService.findAll().subscribe(patients => this.patients = patients,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.patientService.findByCriteria(this.searchPatient).subscribe(patients=>{
            
            this.patients = patients;
           // this.searchPatient = new PatientVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'cin', header: 'Cin'},
                            {field: 'nom', header: 'Nom'},
                            {field: 'prenom', header: 'Prenom'},
                            {field: 'dateDeNaissance', header: 'Date de naissance'},
                            {field: 'profession', header: 'Profession'},
                            {field: 'adresse', header: 'Adresse'},
                        {field: 'ville?.libelle', header: 'Ville'},
                            {field: 'telephone', header: 'Telephone'},
                        {field: 'sexe?.libelle', header: 'Sexe'},
        ];
    }
    
    public async editPatient(patient:PatientVo){
        const isPermistted = await this.roleService.isPermitted('Patient', 'edit');
         if(isPermistted){
          this.patientService.findByIdWithAssociatedList(patient).subscribe(res => {
           this.selectedPatient = res;
            this.selectedPatient.dateDeNaissance = new Date(patient.dateDeNaissance);
            this.editPatientDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewPatient(patient:PatientVo){
        const isPermistted = await this.roleService.isPermitted('Patient', 'view');
        if(isPermistted){
           this.patientService.findByIdWithAssociatedList(patient).subscribe(res => {
           this.selectedPatient = res;
            this.selectedPatient.dateDeNaissance = new Date(patient.dateDeNaissance);
            this.viewPatientDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreatePatient(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedPatient = new PatientVo();
            this.createPatientDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deletePatient(patient:PatientVo){
       const isPermistted = await this.roleService.isPermitted('Patient', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Patient) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.patientService.delete(patient).subscribe(status=>{
                          if(status > 0){
                          const position = this.patients.indexOf(patient);
                          position > -1 ? this.patients.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Patient Supprimé',
                        life: 3000
                    });
                                     }

                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
              });
             }
    }

public async loadVille(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Patient', 'list');
    isPermistted ? this.villeService.findAll().subscribe(villes => this.villes = villes,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadSexe(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Patient', 'list');
    isPermistted ? this.sexeService.findAll().subscribe(sexes => this.sexes = sexes,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicatePatient(patient: PatientVo) {

     this.patientService.findByIdWithAssociatedList(patient).subscribe(
	 res => {
	       this.initDuplicatePatient(res);
	       this.selectedPatient = res;
	       this.selectedPatient.id = null;
            this.createPatientDialog = true;

});

	}

	initDuplicatePatient(res: PatientVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.patients.map(e => {
    return {
                    'Cin': e.cin ,
                    'Nom': e.nom ,
                    'Prenom': e.prenom ,
                    'Date de naissance': this.datePipe.transform(e.dateDeNaissance , 'dd-MM-yyyy'),
                    'Profession': e.profession ,
                    'Adresse': e.adresse ,
            'Ville': e.villeVo?.libelle ,
                    'Telephone': e.telephone ,
            'Sexe': e.sexeVo?.libelle ,
     }
      });

      this.criteriaData = [{
            'Cin': this.searchPatient.cin ? this.searchPatient.cin : environment.emptyForExport ,
            'Nom': this.searchPatient.nom ? this.searchPatient.nom : environment.emptyForExport ,
            'Prenom': this.searchPatient.prenom ? this.searchPatient.prenom : environment.emptyForExport ,
            'Date de naissance Min': this.searchPatient.dateDeNaissanceMin ? this.datePipe.transform(this.searchPatient.dateDeNaissanceMin , this.dateFormat) : environment.emptyForExport ,
            'Date de naissance Max': this.searchPatient.dateDeNaissanceMax ? this.datePipe.transform(this.searchPatient.dateDeNaissanceMax , this.dateFormat) : environment.emptyForExport ,
            'Profession': this.searchPatient.profession ? this.searchPatient.profession : environment.emptyForExport ,
            'Adresse': this.searchPatient.adresse ? this.searchPatient.adresse : environment.emptyForExport ,
        'Ville': this.searchPatient.villeVo?.libelle ? this.searchPatient.villeVo?.libelle : environment.emptyForExport ,
            'Telephone': this.searchPatient.telephone ? this.searchPatient.telephone : environment.emptyForExport ,
        'Sexe': this.searchPatient.sexeVo?.libelle ? this.searchPatient.sexeVo?.libelle : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get patients(): Array<PatientVo> {
           return this.patientService.patients;
       }
    set patients(value: Array<PatientVo>) {
        this.patientService.patients = value;
       }

    get patientSelections(): Array<PatientVo> {
           return this.patientService.patientSelections;
       }
    set patientSelections(value: Array<PatientVo>) {
        this.patientService.patientSelections = value;
       }
   
     


    get selectedPatient():PatientVo {
           return this.patientService.selectedPatient;
       }
    set selectedPatient(value: PatientVo) {
        this.patientService.selectedPatient = value;
       }
    
    get createPatientDialog():boolean {
           return this.patientService.createPatientDialog;
       }
    set createPatientDialog(value: boolean) {
        this.patientService.createPatientDialog= value;
       }
    
    get editPatientDialog():boolean {
           return this.patientService.editPatientDialog;
       }
    set editPatientDialog(value: boolean) {
        this.patientService.editPatientDialog= value;
       }
    get viewPatientDialog():boolean {
           return this.patientService.viewPatientDialog;
       }
    set viewPatientDialog(value: boolean) {
        this.patientService.viewPatientDialog = value;
       }
       
     get searchPatient(): PatientVo {
        return this.patientService.searchPatient;
       }
    set searchPatient(value: PatientVo) {
        this.patientService.searchPatient = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
