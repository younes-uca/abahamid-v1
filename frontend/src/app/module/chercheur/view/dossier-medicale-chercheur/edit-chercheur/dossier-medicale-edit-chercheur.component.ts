import {Component, OnInit} from '@angular/core';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';
import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {PatientContactVo} from '../../../../../controller/model/PatientContact.model';
import {PatientContactService} from '../../../../../controller/service/PatientContact.service';
import {EvoSuivVo} from '../../../../../controller/model/EvoSuiv.model';
import {EvoSuivService} from '../../../../../controller/service/EvoSuiv.service';
import {PhaseImageVo} from '../../../../../controller/model/PhaseImage.model';
import {PhaseImageService} from '../../../../../controller/service/PhaseImage.service';
import {ExamenVo} from '../../../../../controller/model/Examen.model';
import {ExamenService} from '../../../../../controller/service/Examen.service';
import {PatientVo} from '../../../../../controller/model/Patient.model';
import {PatientService} from '../../../../../controller/service/Patient.service';
import {DiagnosticVo} from '../../../../../controller/model/Diagnostic.model';
import {DiagnosticService} from '../../../../../controller/service/Diagnostic.service';
import {ImagerieVo} from '../../../../../controller/model/Imagerie.model';
import {ImagerieService} from '../../../../../controller/service/Imagerie.service';
import {CompteRenduVo} from '../../../../../controller/model/CompteRendu.model';
import {CompteRenduService} from '../../../../../controller/service/CompteRendu.service';
import {TraitementVo} from '../../../../../controller/model/Traitement.model';
import {TraitementService} from '../../../../../controller/service/Traitement.service';
import {DossierMedicaleTagVo} from '../../../../../controller/model/DossierMedicaleTag.model';
import {DossierMedicaleTagService} from '../../../../../controller/service/DossierMedicaleTag.service';
import {TagVo} from '../../../../../controller/model/Tag.model';
import {TagService} from '../../../../../controller/service/Tag.service';
import {CliniqueVo} from '../../../../../controller/model/Clinique.model';
import {CliniqueService} from '../../../../../controller/service/Clinique.service';
import {TypeImageVo} from '../../../../../controller/model/TypeImage.model';
import {TypeImageService} from '../../../../../controller/service/TypeImage.service';
import {BiologieVo} from '../../../../../controller/model/Biologie.model';
import {BiologieService} from '../../../../../controller/service/Biologie.service';

@Component({
  selector: 'app-dossier-medicale-edit-chercheur',
  templateUrl: './dossier-medicale-edit-chercheur.component.html',
  styleUrls: ['./dossier-medicale-edit-chercheur.component.css']
})
export class DossierMedicaleEditChercheurComponent implements OnInit {

        selectedDiagnostics: DiagnosticVo = new DiagnosticVo();
        diagnosticsListe: Array<DiagnosticVo> = [];


        selectedCliniques: CliniqueVo = new CliniqueVo();
        cliniquesListe: Array<CliniqueVo> = [];


        selectedBiologies: BiologieVo = new BiologieVo();
        biologiesListe: Array<BiologieVo> = [];

        myExamens: Array<ExamenVo> = [];

        selectedImageries: ImagerieVo = new ImagerieVo();
        imageriesListe: Array<ImagerieVo> = [];

        myTypeImages: Array<TypeImageVo> = [];
        myPhaseImages: Array<PhaseImageVo> = [];

        selectedCompteRendus: CompteRenduVo = new CompteRenduVo();
        compteRendusListe: Array<CompteRenduVo> = [];


        selectedEvoSuivs: EvoSuivVo = new EvoSuivVo();
        evoSuivsListe: Array<EvoSuivVo> = [];


        selectedDossierMedicaleTags: DossierMedicaleTagVo = new DossierMedicaleTagVo();
        dossierMedicaleTagsListe: Array<DossierMedicaleTagVo> = [];

        myTags: Array<TagVo> = [];


constructor(private datePipe: DatePipe, private dossierMedicaleService: DossierMedicaleService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private patientContactService: PatientContactService
 ,       private evoSuivService: EvoSuivService
 ,       private phaseImageService: PhaseImageService
 ,       private examenService: ExamenService
 ,       private patientService: PatientService
 ,       private diagnosticService: DiagnosticService
 ,       private imagerieService: ImagerieService
 ,       private compteRenduService: CompteRenduService
 ,       private traitementService: TraitementService
 ,       private dossierMedicaleTagService: DossierMedicaleTagService
 ,       private tagService: TagService
 ,       private cliniqueService: CliniqueService
 ,       private typeImageService: TypeImageService
 ,       private biologieService: BiologieService
) {
}

// methods
ngOnInit(): void {
                this.selectedBiologies.examenVo = new ExamenVo();
                this.examenService.findAll().subscribe((data) => this.examens = data);
                this.selectedImageries.typeImageVo = new TypeImageVo();
                this.typeImageService.findAll().subscribe((data) => this.typeImages = data);
                this.selectedImageries.phaseImageVo = new PhaseImageVo();
                this.phaseImageService.findAll().subscribe((data) => this.phaseImages = data);
                this.selectedDossierMedicaleTags.tagVo = new TagVo();
                this.tagService.findAll().subscribe((data) => this.tags = data);
    this.selectedPatient = new PatientVo();
    this.patientService.findAll().subscribe((data) => this.patients = data);
    this.selectedPatientContact = new PatientContactVo();
    this.patientContactService.findAll().subscribe((data) => this.patientContacts = data);
    this.selectedTraitement = new TraitementVo();
    this.traitementService.findAll().subscribe((data) => this.traitements = data);
}
        addDiagnostics() {
        if( this.selectedDossierMedicale.diagnosticsVo == null ){
            this.selectedDossierMedicale.diagnosticsVo = new Array<DiagnosticVo>();
        }
        this.selectedDossierMedicale.diagnosticsVo.push(this.selectedDiagnostics);
        this.selectedDiagnostics = new DiagnosticVo();
        }

       deleteDiagnostics(p: DiagnosticVo) {
        this.selectedDossierMedicale.diagnosticsVo.forEach((element, index) => {
            if (element === p) { this.selectedDossierMedicale.diagnosticsVo.splice(index, 1); }
        });
    }
        addCliniques() {
        if( this.selectedDossierMedicale.cliniquesVo == null ){
            this.selectedDossierMedicale.cliniquesVo = new Array<CliniqueVo>();
        }
        this.selectedDossierMedicale.cliniquesVo.push(this.selectedCliniques);
        this.selectedCliniques = new CliniqueVo();
        }

       deleteCliniques(p: CliniqueVo) {
        this.selectedDossierMedicale.cliniquesVo.forEach((element, index) => {
            if (element === p) { this.selectedDossierMedicale.cliniquesVo.splice(index, 1); }
        });
    }
        addBiologies() {
        if( this.selectedDossierMedicale.biologiesVo == null ){
            this.selectedDossierMedicale.biologiesVo = new Array<BiologieVo>();
        }
        this.selectedDossierMedicale.biologiesVo.push(this.selectedBiologies);
        this.selectedBiologies = new BiologieVo();
        }

       deleteBiologies(p: BiologieVo) {
        this.selectedDossierMedicale.biologiesVo.forEach((element, index) => {
            if (element === p) { this.selectedDossierMedicale.biologiesVo.splice(index, 1); }
        });
    }
        addImageries() {
        if( this.selectedDossierMedicale.imageriesVo == null ){
            this.selectedDossierMedicale.imageriesVo = new Array<ImagerieVo>();
        }
        this.selectedDossierMedicale.imageriesVo.push(this.selectedImageries);
        this.selectedImageries = new ImagerieVo();
        }

       deleteImageries(p: ImagerieVo) {
        this.selectedDossierMedicale.imageriesVo.forEach((element, index) => {
            if (element === p) { this.selectedDossierMedicale.imageriesVo.splice(index, 1); }
        });
    }
        addCompteRendus() {
        if( this.selectedDossierMedicale.compteRendusVo == null ){
            this.selectedDossierMedicale.compteRendusVo = new Array<CompteRenduVo>();
        }
        this.selectedDossierMedicale.compteRendusVo.push(this.selectedCompteRendus);
        this.selectedCompteRendus = new CompteRenduVo();
        }

       deleteCompteRendus(p: CompteRenduVo) {
        this.selectedDossierMedicale.compteRendusVo.forEach((element, index) => {
            if (element === p) { this.selectedDossierMedicale.compteRendusVo.splice(index, 1); }
        });
    }
        addEvoSuivs() {
        if( this.selectedDossierMedicale.evoSuivsVo == null ){
            this.selectedDossierMedicale.evoSuivsVo = new Array<EvoSuivVo>();
        }
        this.selectedDossierMedicale.evoSuivsVo.push(this.selectedEvoSuivs);
        this.selectedEvoSuivs = new EvoSuivVo();
        }

       deleteEvoSuivs(p: EvoSuivVo) {
        this.selectedDossierMedicale.evoSuivsVo.forEach((element, index) => {
            if (element === p) { this.selectedDossierMedicale.evoSuivsVo.splice(index, 1); }
        });
    }
        addDossierMedicaleTags() {
        if( this.selectedDossierMedicale.dossierMedicaleTagsVo == null ){
            this.selectedDossierMedicale.dossierMedicaleTagsVo = new Array<DossierMedicaleTagVo>();
        }
        this.selectedDossierMedicale.dossierMedicaleTagsVo.push(this.selectedDossierMedicaleTags);
        this.selectedDossierMedicaleTags = new DossierMedicaleTagVo();
        }

       deleteDossierMedicaleTags(p: DossierMedicaleTagVo) {
        this.selectedDossierMedicale.dossierMedicaleTagsVo.forEach((element, index) => {
            if (element === p) { this.selectedDossierMedicale.dossierMedicaleTagsVo.splice(index, 1); }
        });
    }

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.dossierMedicaleService.edit().subscribe(dossierMedicale=>{
    const myIndex = this.dossierMedicales.findIndex(e => e.id === this.selectedDossierMedicale.id);
    this.dossierMedicales[myIndex] = this.selectedDossierMedicale;
    this.editDossierMedicaleDialog = false;
    this.selectedDossierMedicale = new DossierMedicaleVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreatepatientContact(patientContact: string) {
                      const isPermistted = await this.roleService.isPermitted('PatientContact', 'add');
                       if(isPermistted){
         this.selectedPatientContact = new PatientContactVo();
        this.createPatientContactDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatetraitement(traitement: string) {
                      const isPermistted = await this.roleService.isPermitted('Traitement', 'add');
                       if(isPermistted){
         this.selectedTraitement = new TraitementVo();
        this.createTraitementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatepatient(patient: string) {
                      const isPermistted = await this.roleService.isPermitted('Patient', 'add');
                       if(isPermistted){
         this.selectedPatient = new PatientVo();
        this.createPatientDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatetypeImage(typeImage: string) {
                      const isPermistted = await this.roleService.isPermitted('TypeImage', 'add');
                       if(isPermistted){
         this.selectedTypeImage = new TypeImageVo();
        this.createTypeImageDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatetag(tag: string) {
                      const isPermistted = await this.roleService.isPermitted('Tag', 'add');
                       if(isPermistted){
         this.selectedTag = new TagVo();
        this.createTagDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreateexamen(examen: string) {
                      const isPermistted = await this.roleService.isPermitted('Examen', 'add');
                       if(isPermistted){
         this.selectedExamen = new ExamenVo();
        this.createExamenDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreatephaseImage(phaseImage: string) {
                      const isPermistted = await this.roleService.isPermitted('PhaseImage', 'add');
                       if(isPermistted){
         this.selectedPhaseImage = new PhaseImageVo();
        this.createPhaseImageDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editDossierMedicaleDialog  = false;
}

// getters and setters

get dossierMedicales(): Array<DossierMedicaleVo> {
    return this.dossierMedicaleService.dossierMedicales;
       }
set dossierMedicales(value: Array<DossierMedicaleVo>) {
        this.dossierMedicaleService.dossierMedicales = value;
       }

 get selectedDossierMedicale(): DossierMedicaleVo {
           return this.dossierMedicaleService.selectedDossierMedicale;
       }
    set selectedDossierMedicale(value: DossierMedicaleVo) {
        this.dossierMedicaleService.selectedDossierMedicale = value;
       }

   get editDossierMedicaleDialog(): boolean {
           return this.dossierMedicaleService.editDossierMedicaleDialog;

       }
    set editDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.editDossierMedicaleDialog = value;
       }

       get selectedPatientContact(): PatientContactVo {
           return this.patientContactService.selectedPatientContact;
       }
      set selectedPatientContact(value: PatientContactVo) {
        this.patientContactService.selectedPatientContact = value;
       }
       get patientContacts(): Array<PatientContactVo> {
           return this.patientContactService.patientContacts;
       }
       set patientContacts(value: Array<PatientContactVo>) {
        this.patientContactService.patientContacts = value;
       }
       get createPatientContactDialog(): boolean {
           return this.patientContactService.createPatientContactDialog;
       }
      set createPatientContactDialog(value: boolean) {
        this.patientContactService.createPatientContactDialog= value;
       }
       get selectedTraitement(): TraitementVo {
           return this.traitementService.selectedTraitement;
       }
      set selectedTraitement(value: TraitementVo) {
        this.traitementService.selectedTraitement = value;
       }
       get traitements(): Array<TraitementVo> {
           return this.traitementService.traitements;
       }
       set traitements(value: Array<TraitementVo>) {
        this.traitementService.traitements = value;
       }
       get createTraitementDialog(): boolean {
           return this.traitementService.createTraitementDialog;
       }
      set createTraitementDialog(value: boolean) {
        this.traitementService.createTraitementDialog= value;
       }
       get selectedPatient(): PatientVo {
           return this.patientService.selectedPatient;
       }
      set selectedPatient(value: PatientVo) {
        this.patientService.selectedPatient = value;
       }
       get patients(): Array<PatientVo> {
           return this.patientService.patients;
       }
       set patients(value: Array<PatientVo>) {
        this.patientService.patients = value;
       }
       get createPatientDialog(): boolean {
           return this.patientService.createPatientDialog;
       }
      set createPatientDialog(value: boolean) {
        this.patientService.createPatientDialog= value;
       }
       get selectedTypeImage(): TypeImageVo {
           return this.typeImageService.selectedTypeImage;
       }
      set selectedTypeImage(value: TypeImageVo) {
        this.typeImageService.selectedTypeImage = value;
       }
       get typeImages(): Array<TypeImageVo> {
           return this.typeImageService.typeImages;
       }
       set typeImages(value: Array<TypeImageVo>) {
        this.typeImageService.typeImages = value;
       }
       get createTypeImageDialog(): boolean {
           return this.typeImageService.createTypeImageDialog;
       }
      set createTypeImageDialog(value: boolean) {
        this.typeImageService.createTypeImageDialog= value;
       }
       get selectedTag(): TagVo {
           return this.tagService.selectedTag;
       }
      set selectedTag(value: TagVo) {
        this.tagService.selectedTag = value;
       }
       get tags(): Array<TagVo> {
           return this.tagService.tags;
       }
       set tags(value: Array<TagVo>) {
        this.tagService.tags = value;
       }
       get createTagDialog(): boolean {
           return this.tagService.createTagDialog;
       }
      set createTagDialog(value: boolean) {
        this.tagService.createTagDialog= value;
       }
       get selectedExamen(): ExamenVo {
           return this.examenService.selectedExamen;
       }
      set selectedExamen(value: ExamenVo) {
        this.examenService.selectedExamen = value;
       }
       get examens(): Array<ExamenVo> {
           return this.examenService.examens;
       }
       set examens(value: Array<ExamenVo>) {
        this.examenService.examens = value;
       }
       get createExamenDialog(): boolean {
           return this.examenService.createExamenDialog;
       }
      set createExamenDialog(value: boolean) {
        this.examenService.createExamenDialog= value;
       }
       get selectedPhaseImage(): PhaseImageVo {
           return this.phaseImageService.selectedPhaseImage;
       }
      set selectedPhaseImage(value: PhaseImageVo) {
        this.phaseImageService.selectedPhaseImage = value;
       }
       get phaseImages(): Array<PhaseImageVo> {
           return this.phaseImageService.phaseImages;
       }
       set phaseImages(value: Array<PhaseImageVo>) {
        this.phaseImageService.phaseImages = value;
       }
       get createPhaseImageDialog(): boolean {
           return this.phaseImageService.createPhaseImageDialog;
       }
      set createPhaseImageDialog(value: boolean) {
        this.phaseImageService.createPhaseImageDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
