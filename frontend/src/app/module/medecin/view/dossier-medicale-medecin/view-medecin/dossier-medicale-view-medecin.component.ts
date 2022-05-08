import {Component, OnInit} from '@angular/core';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';
import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
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
  selector: 'app-dossier-medicale-view-medecin',
  templateUrl: './dossier-medicale-view-medecin.component.html',
  styleUrls: ['./dossier-medicale-view-medecin.component.css']
})
export class DossierMedicaleViewMedecinComponent implements OnInit {

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
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private patientContactService :PatientContactService
    ,private evoSuivService :EvoSuivService
    ,private phaseImageService :PhaseImageService
    ,private examenService :ExamenService
    ,private patientService :PatientService
    ,private diagnosticService :DiagnosticService
    ,private imagerieService :ImagerieService
    ,private compteRenduService :CompteRenduService
    ,private traitementService :TraitementService
    ,private dossierMedicaleTagService :DossierMedicaleTagService
    ,private tagService :TagService
    ,private cliniqueService :CliniqueService
    ,private typeImageService :TypeImageService
    ,private biologieService :BiologieService
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

hideViewDialog(){
    this.viewDossierMedicaleDialog  = false;
}

// getters and setters

get dossierMedicales(): Array<DossierMedicaleVo> {
    return this.dossierMedicaleService.dossierMedicales;
       }
set dossierMedicales(value: Array<DossierMedicaleVo>) {
        this.dossierMedicaleService.dossierMedicales = value;
       }

 get selectedDossierMedicale():DossierMedicaleVo {
           return this.dossierMedicaleService.selectedDossierMedicale;
       }
    set selectedDossierMedicale(value: DossierMedicaleVo) {
        this.dossierMedicaleService.selectedDossierMedicale = value;
       }

   get viewDossierMedicaleDialog():boolean {
           return this.dossierMedicaleService.viewDossierMedicaleDialog;

       }
    set viewDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.viewDossierMedicaleDialog= value;
       }

       get selectedPatientContact():PatientContactVo {
           return this.patientContactService.selectedPatientContact;
       }
      set selectedPatientContact(value: PatientContactVo) {
        this.patientContactService.selectedPatientContact = value;
       }
       get patientContacts():Array<PatientContactVo> {
           return this.patientContactService.patientContacts;
       }
       set patientContacts(value: Array<PatientContactVo>) {
        this.patientContactService.patientContacts = value;
       }
       get editPatientContactDialog():boolean {
           return this.patientContactService.editPatientContactDialog;
       }
      set editPatientContactDialog(value: boolean) {
        this.patientContactService.editPatientContactDialog= value;
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
       get selectedPatient():PatientVo {
           return this.patientService.selectedPatient;
       }
      set selectedPatient(value: PatientVo) {
        this.patientService.selectedPatient = value;
       }
       get patients():Array<PatientVo> {
           return this.patientService.patients;
       }
       set patients(value: Array<PatientVo>) {
        this.patientService.patients = value;
       }
       get editPatientDialog():boolean {
           return this.patientService.editPatientDialog;
       }
      set editPatientDialog(value: boolean) {
        this.patientService.editPatientDialog= value;
       }
       get selectedTypeImage():TypeImageVo {
           return this.typeImageService.selectedTypeImage;
       }
      set selectedTypeImage(value: TypeImageVo) {
        this.typeImageService.selectedTypeImage = value;
       }
       get typeImages():Array<TypeImageVo> {
           return this.typeImageService.typeImages;
       }
       set typeImages(value: Array<TypeImageVo>) {
        this.typeImageService.typeImages = value;
       }
       get editTypeImageDialog():boolean {
           return this.typeImageService.editTypeImageDialog;
       }
      set editTypeImageDialog(value: boolean) {
        this.typeImageService.editTypeImageDialog= value;
       }
       get selectedTag():TagVo {
           return this.tagService.selectedTag;
       }
      set selectedTag(value: TagVo) {
        this.tagService.selectedTag = value;
       }
       get tags():Array<TagVo> {
           return this.tagService.tags;
       }
       set tags(value: Array<TagVo>) {
        this.tagService.tags = value;
       }
       get editTagDialog():boolean {
           return this.tagService.editTagDialog;
       }
      set editTagDialog(value: boolean) {
        this.tagService.editTagDialog= value;
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
       get selectedPhaseImage():PhaseImageVo {
           return this.phaseImageService.selectedPhaseImage;
       }
      set selectedPhaseImage(value: PhaseImageVo) {
        this.phaseImageService.selectedPhaseImage = value;
       }
       get phaseImages():Array<PhaseImageVo> {
           return this.phaseImageService.phaseImages;
       }
       set phaseImages(value: Array<PhaseImageVo>) {
        this.phaseImageService.phaseImages = value;
       }
       get editPhaseImageDialog():boolean {
           return this.phaseImageService.editPhaseImageDialog;
       }
      set editPhaseImageDialog(value: boolean) {
        this.phaseImageService.editPhaseImageDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
