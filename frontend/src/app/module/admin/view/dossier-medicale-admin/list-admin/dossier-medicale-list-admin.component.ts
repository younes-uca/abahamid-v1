import {Component, OnInit} from '@angular/core';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';
import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { PatientService } from '../../../../../controller/service/Patient.service';
import { PatientContactService } from '../../../../../controller/service/PatientContact.service';
import { TraitementService } from '../../../../../controller/service/Traitement.service';

import {PatientContactVo} from '../../../../../controller/model/PatientContact.model';
import {EvoSuivVo} from '../../../../../controller/model/EvoSuiv.model';
import {CompteRenduVo} from '../../../../../controller/model/CompteRendu.model';
import {TraitementVo} from '../../../../../controller/model/Traitement.model';
import {DossierMedicaleTagVo} from '../../../../../controller/model/DossierMedicaleTag.model';
import {PatientVo} from '../../../../../controller/model/Patient.model';
import {DiagnosticVo} from '../../../../../controller/model/Diagnostic.model';
import {CliniqueVo} from '../../../../../controller/model/Clinique.model';
import {BiologieVo} from '../../../../../controller/model/Biologie.model';
import {ImagerieVo} from '../../../../../controller/model/Imagerie.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-dossier-medicale-list-admin',
  templateUrl: './dossier-medicale-list-admin.component.html',
  styleUrls: ['./dossier-medicale-list-admin.component.css']
})
export class DossierMedicaleListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'DossierMedicale';
    patients :Array<PatientVo>;
    patientContacts :Array<PatientContactVo>;
    traitements :Array<TraitementVo>;


    constructor(private datePipe: DatePipe, private dossierMedicaleService: DossierMedicaleService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private patientService: PatientService
        , private patientContactService: PatientContactService
        , private traitementService: TraitementService
) { }

    ngOnInit(): void {
      this.loadDossierMedicales();
      this.initExport();
      this.initCol();
      this.loadPatient();
      this.loadPatientContact();
      this.loadTraitement();
    }
    
    // methods
      public async loadDossierMedicales(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DossierMedicale', 'list');
        isPermistted ? this.dossierMedicaleService.findAll().subscribe(dossierMedicales => this.dossierMedicales = dossierMedicales,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.dossierMedicaleService.findByCriteria(this.searchDossierMedicale).subscribe(dossierMedicales=>{
            
            this.dossierMedicales = dossierMedicales;
           // this.searchDossierMedicale = new DossierMedicaleVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'ref', header: 'Ref'},
                        {field: 'patient?.cin', header: 'Patient'},
                        {field: 'patientContact?.ref', header: 'Patient contact'},
                        {field: 'traitement?.dossierMedicaleRef', header: 'Traitement'},
        ];
    }
    
    public async editDossierMedicale(dossierMedicale:DossierMedicaleVo){
        const isPermistted = await this.roleService.isPermitted('DossierMedicale', 'edit');
         if(isPermistted){
          this.dossierMedicaleService.findByIdWithAssociatedList(dossierMedicale).subscribe(res => {
           this.selectedDossierMedicale = res;
            this.editDossierMedicaleDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewDossierMedicale(dossierMedicale:DossierMedicaleVo){
        const isPermistted = await this.roleService.isPermitted('DossierMedicale', 'view');
        if(isPermistted){
           this.dossierMedicaleService.findByIdWithAssociatedList(dossierMedicale).subscribe(res => {
           this.selectedDossierMedicale = res;
            this.viewDossierMedicaleDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateDossierMedicale(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedDossierMedicale = new DossierMedicaleVo();
            this.createDossierMedicaleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteDossierMedicale(dossierMedicale:DossierMedicaleVo){
       const isPermistted = await this.roleService.isPermitted('DossierMedicale', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Dossier medicale) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.dossierMedicaleService.delete(dossierMedicale).subscribe(status=>{
                          if(status > 0){
                          const position = this.dossierMedicales.indexOf(dossierMedicale);
                          position > -1 ? this.dossierMedicales.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Dossier medicale Supprimé',
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

public async loadPatient(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DossierMedicale', 'list');
    isPermistted ? this.patientService.findAll().subscribe(patients => this.patients = patients,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadPatientContact(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DossierMedicale', 'list');
    isPermistted ? this.patientContactService.findAll().subscribe(patientContacts => this.patientContacts = patientContacts,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadTraitement(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('DossierMedicale', 'list');
    isPermistted ? this.traitementService.findAll().subscribe(traitements => this.traitements = traitements,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateDossierMedicale(dossierMedicale: DossierMedicaleVo) {

     this.dossierMedicaleService.findByIdWithAssociatedList(dossierMedicale).subscribe(
	 res => {
	       this.initDuplicateDossierMedicale(res);
	       this.selectedDossierMedicale = res;
	       this.selectedDossierMedicale.id = null;
            this.createDossierMedicaleDialog = true;

});

	}

	initDuplicateDossierMedicale(res: DossierMedicaleVo) {
        if (res.diagnosticsVo != null) {
             res.diagnosticsVo.forEach(d => { d.dossierMedicaleVo = null; d.id = null; });
                }
        if (res.cliniquesVo != null) {
             res.cliniquesVo.forEach(d => { d.dossierMedicaleVo = null; d.id = null; });
                }
        if (res.biologiesVo != null) {
             res.biologiesVo.forEach(d => { d.dossierMedicaleVo = null; d.id = null; });
                }
        if (res.imageriesVo != null) {
             res.imageriesVo.forEach(d => { d.dossierMedicaleVo = null; d.id = null; });
                }
        if (res.compteRendusVo != null) {
             res.compteRendusVo.forEach(d => { d.dossierMedicaleVo = null; d.id = null; });
                }
        if (res.evoSuivsVo != null) {
             res.evoSuivsVo.forEach(d => { d.dossierMedicaleVo = null; d.id = null; });
                }
        if (res.dossierMedicaleTagsVo != null) {
             res.dossierMedicaleTagsVo.forEach(d => { d.dossierMedicaleVo = null; d.id = null; });
                }


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.dossierMedicales.map(e => {
    return {
                    'Ref': e.ref ,
            'Patient': e.patientVo?.cin ,
            'Patient contact': e.patientContactVo?.ref ,
            'Traitement': e.traitementVo?.dossierMedicaleRef ,
     }
      });

      this.criteriaData = [{
            'Ref': this.searchDossierMedicale.ref ? this.searchDossierMedicale.ref : environment.emptyForExport ,
        'Patient': this.searchDossierMedicale.patientVo?.cin ? this.searchDossierMedicale.patientVo?.cin : environment.emptyForExport ,
        'Patient contact': this.searchDossierMedicale.patientContactVo?.ref ? this.searchDossierMedicale.patientContactVo?.ref : environment.emptyForExport ,
        'Traitement': this.searchDossierMedicale.traitementVo?.dossierMedicaleRef ? this.searchDossierMedicale.traitementVo?.dossierMedicaleRef : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get dossierMedicales(): Array<DossierMedicaleVo> {
           return this.dossierMedicaleService.dossierMedicales;
       }
    set dossierMedicales(value: Array<DossierMedicaleVo>) {
        this.dossierMedicaleService.dossierMedicales = value;
       }

    get dossierMedicaleSelections(): Array<DossierMedicaleVo> {
           return this.dossierMedicaleService.dossierMedicaleSelections;
       }
    set dossierMedicaleSelections(value: Array<DossierMedicaleVo>) {
        this.dossierMedicaleService.dossierMedicaleSelections = value;
       }
   
     


    get selectedDossierMedicale():DossierMedicaleVo {
           return this.dossierMedicaleService.selectedDossierMedicale;
       }
    set selectedDossierMedicale(value: DossierMedicaleVo) {
        this.dossierMedicaleService.selectedDossierMedicale = value;
       }
    
    get createDossierMedicaleDialog():boolean {
           return this.dossierMedicaleService.createDossierMedicaleDialog;
       }
    set createDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.createDossierMedicaleDialog= value;
       }
    
    get editDossierMedicaleDialog():boolean {
           return this.dossierMedicaleService.editDossierMedicaleDialog;
       }
    set editDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.editDossierMedicaleDialog= value;
       }
    get viewDossierMedicaleDialog():boolean {
           return this.dossierMedicaleService.viewDossierMedicaleDialog;
       }
    set viewDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.viewDossierMedicaleDialog = value;
       }
       
     get searchDossierMedicale(): DossierMedicaleVo {
        return this.dossierMedicaleService.searchDossierMedicale;
       }
    set searchDossierMedicale(value: DossierMedicaleVo) {
        this.dossierMedicaleService.searchDossierMedicale = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
