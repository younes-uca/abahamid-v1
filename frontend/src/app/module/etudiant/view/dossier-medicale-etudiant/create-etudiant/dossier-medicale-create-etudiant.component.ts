import {Component, OnInit, Input} from '@angular/core';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';
import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';
import {StringUtilService} from '../../../../../controller/service/StringUtil.service';


import {PatientContactVo} from '../../../../../controller/model/PatientContact.model';
import {PatientContactService} from '../../../../../controller/service/PatientContact.service';
import {ExamenVo} from '../../../../../controller/model/Examen.model';
import {ExamenService} from '../../../../../controller/service/Examen.service';
import {ImagerieVo} from '../../../../../controller/model/Imagerie.model';
import {ImagerieService} from '../../../../../controller/service/Imagerie.service';
import {CliniqueVo} from '../../../../../controller/model/Clinique.model';
import {CliniqueService} from '../../../../../controller/service/Clinique.service';
import {TypeImageVo} from '../../../../../controller/model/TypeImage.model';
import {TypeImageService} from '../../../../../controller/service/TypeImage.service';
import {CompteRenduVo} from '../../../../../controller/model/CompteRendu.model';
import {CompteRenduService} from '../../../../../controller/service/CompteRendu.service';
import {TagVo} from '../../../../../controller/model/Tag.model';
import {TagService} from '../../../../../controller/service/Tag.service';
import {DossierMedicaleTagVo} from '../../../../../controller/model/DossierMedicaleTag.model';
import {DossierMedicaleTagService} from '../../../../../controller/service/DossierMedicaleTag.service';
import {PhaseImageVo} from '../../../../../controller/model/PhaseImage.model';
import {PhaseImageService} from '../../../../../controller/service/PhaseImage.service';
import {BiologieVo} from '../../../../../controller/model/Biologie.model';
import {BiologieService} from '../../../../../controller/service/Biologie.service';
import {DiagnosticVo} from '../../../../../controller/model/Diagnostic.model';
import {DiagnosticService} from '../../../../../controller/service/Diagnostic.service';
import {PatientVo} from '../../../../../controller/model/Patient.model';
import {PatientService} from '../../../../../controller/service/Patient.service';
import {TraitementVo} from '../../../../../controller/model/Traitement.model';
import {TraitementService} from '../../../../../controller/service/Traitement.service';
import {EvoSuivVo} from '../../../../../controller/model/EvoSuiv.model';
import {EvoSuivService} from '../../../../../controller/service/EvoSuiv.service';
@Component({
  selector: 'app-dossier-medicale-create-etudiant',
  templateUrl: './dossier-medicale-create-etudiant.component.html',
  styleUrls: ['./dossier-medicale-create-etudiant.component.css']
})
export class DossierMedicaleCreateEtudiantComponent implements OnInit {

        selectedDiagnostics: DiagnosticVo = new DiagnosticVo();
        selectedCliniques: CliniqueVo = new CliniqueVo();
        selectedBiologies: BiologieVo = new BiologieVo();
        selectedImageries: ImagerieVo = new ImagerieVo();
        selectedCompteRendus: CompteRenduVo = new CompteRenduVo();
        selectedEvoSuivs: EvoSuivVo = new EvoSuivVo();
        selectedDossierMedicaleTags: DossierMedicaleTagVo = new DossierMedicaleTagVo();
    _submitted = false;
    private _errorMessages = new Array<string>();

   _validDossierMedicaleRef = true;
   _validDossierMedicalePatient = true;
   _validDossierMedicaleDiagnostics = true;

    _validPatientCin = true;
    _validPatientNom = true;
    _validPatientPrenom = true;
    _validPatientDateDeNaissance = true;
    _validPatientProfession = true;
    _validPatientVille = true;
    _validPatientSexe = true;
    _validPatientContactRef = true;
    _validPatientContactNom = true;
    _validPatientContactPrenom = true;
    _validPatientContactRelation = true;
    _validPatientContactTelephone = true;
    _validDiagnosticDateDiagnostic = true;
    _validDiagnosticDiag = true;
    _validDiagnosticDossierMedicale = true;
    _validCliniqueDateClinique = true;
    _validCliniqueHistoireMaladie = true;
    _validCliniqueDossierMedicale = true;
    _validBiologieDateBiologie = true;
    _validBiologieExamen = true;
    _validBiologieResultat = true;
    _validBiologieDossierMedicale = true;
    _validImagerieTypeImage = true;
    _validImageriePhaseImage = true;
    _validImagerieImageScan = true;
    _validImagerieDossierMedicale = true;
    _validCompteRenduDateCompteR = true;
    _validCompteRenduCompteR = true;
    _validCompteRenduDossierMedicale = true;
    _validTraitementRecueilDeDonnes = true;
    _validTraitementDossierMedicaleRef = true;
    _validEvoSuivDateEvoS = true;
    _validEvoSuivEvoS = true;
    _validEvoSuivDossierMedicale = true;
    _validDossierMedicaleTagTag = true;
    _validDossierMedicaleTagDossierMedicale = true;


private _dossierMedicaleTagsVo: Array<DossierMedicaleTagVo> = [];

constructor(private datePipe: DatePipe, private dossierMedicaleService: DossierMedicaleService
 ,       private stringUtilService: StringUtilService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 
,       private patientContactService :PatientContactService
,       private dossierMedicaleTagService :DossierMedicaleTagService
,       private examenService :ExamenService
,       private imagerieService :ImagerieService
,       private phaseImageService :PhaseImageService
,       private biologieService :BiologieService
,       private diagnosticService :DiagnosticService
,       private cliniqueService :CliniqueService
,       private typeImageService :TypeImageService
,       private patientService :PatientService
,       private compteRenduService :CompteRenduService
,       private tagService :TagService
,       private traitementService :TraitementService
,       private evoSuivService :EvoSuivService
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








            this.tagService.findAll().subscribe(data => this.prepareDossierMedicaleTags(data));

                this.selectedDossierMedicaleTags.tagVo = new TagVo();
                this.tagService.findAll().subscribe((data) => this.tags = data);


    this.selectedPatient = new PatientVo();
    this.patientService.findAll().subscribe((data) => this.patients = data);
    this.selectedPatientContact = new PatientContactVo();
    this.patientContactService.findAll().subscribe((data) => this.patientContacts = data);
    this.selectedTraitement = new TraitementVo();
    this.traitementService.findAll().subscribe((data) => this.traitements = data);
}

         prepareDossierMedicaleTags(tags: Array<TagVo>): void{
        if( tags != null){
        tags.forEach(e => {
        const dossierMedicaleTag = new DossierMedicaleTagVo();
        dossierMedicaleTag.tagVo = e;
        this.dossierMedicaleTagsVo.push(dossierMedicaleTag);
        });
        }
    }

    validateDiagnostics(){
    this.errorMessages = new Array();
    this.validateDiagnosticDateDiagnostic();
    this.validateDiagnosticDiag();
    this.validateDiagnosticDossierMedicale();
    }
    validateCliniques(){
    this.errorMessages = new Array();
    this.validateCliniqueDateClinique();
    this.validateCliniqueHistoireMaladie();
    this.validateCliniqueDossierMedicale();
    }
    validateBiologies(){
    this.errorMessages = new Array();
    this.validateBiologieDateBiologie();
    this.validateBiologieExamen();
    this.validateBiologieResultat();
    this.validateBiologieDossierMedicale();
    }
    validateImageries(){
    this.errorMessages = new Array();
    this.validateImagerieTypeImage();
    this.validateImageriePhaseImage();
    this.validateImagerieImageScan();
    this.validateImagerieDossierMedicale();
    }
    validateCompteRendus(){
    this.errorMessages = new Array();
    this.validateCompteRenduDateCompteR();
    this.validateCompteRenduCompteR();
    this.validateCompteRenduDossierMedicale();
    }
    validateEvoSuivs(){
    this.errorMessages = new Array();
    this.validateEvoSuivDateEvoS();
    this.validateEvoSuivEvoS();
    this.validateEvoSuivDossierMedicale();
    }


private setValidation(value : boolean){
    this.validDossierMedicaleRef = value;
    this.validDossierMedicalePatient = value;
    this.validDossierMedicaleDiagnostics = value;
    this.validDiagnosticDateDiagnostic = value;
    this.validDiagnosticDiag = value;
    this.validDiagnosticDossierMedicale = value;
    this.validCliniqueDateClinique = value;
    this.validCliniqueHistoireMaladie = value;
    this.validCliniqueDossierMedicale = value;
    this.validBiologieDateBiologie = value;
    this.validBiologieExamen = value;
    this.validBiologieResultat = value;
    this.validBiologieDossierMedicale = value;
    this.validImagerieTypeImage = value;
    this.validImageriePhaseImage = value;
    this.validImagerieImageScan = value;
    this.validImagerieDossierMedicale = value;
    this.validCompteRenduDateCompteR = value;
    this.validCompteRenduCompteR = value;
    this.validCompteRenduDossierMedicale = value;
    this.validEvoSuivDateEvoS = value;
    this.validEvoSuivEvoS = value;
    this.validEvoSuivDossierMedicale = value;
    }

        addDiagnostics() {
        if( this.selectedDossierMedicale.diagnosticsVo == null ){
            this.selectedDossierMedicale.diagnosticsVo = new Array<DiagnosticVo>();
        }
       this.validateDiagnostics();
       if (this.errorMessages.length === 0) {
              this.selectedDossierMedicale.diagnosticsVo.push(this.selectedDiagnostics);
              this.selectedDiagnostics = new DiagnosticVo();
           }else{
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
            });
        }
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
       this.validateCliniques();
       if (this.errorMessages.length === 0) {
              this.selectedDossierMedicale.cliniquesVo.push(this.selectedCliniques);
              this.selectedCliniques = new CliniqueVo();
           }else{
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
            });
        }
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
       this.validateBiologies();
       if (this.errorMessages.length === 0) {
              this.selectedDossierMedicale.biologiesVo.push(this.selectedBiologies);
              this.selectedBiologies = new BiologieVo();
           }else{
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
            });
        }
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
       this.validateImageries();
       if (this.errorMessages.length === 0) {
              this.selectedDossierMedicale.imageriesVo.push(this.selectedImageries);
              this.selectedImageries = new ImagerieVo();
           }else{
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
            });
        }
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
       this.validateCompteRendus();
       if (this.errorMessages.length === 0) {
              this.selectedDossierMedicale.compteRendusVo.push(this.selectedCompteRendus);
              this.selectedCompteRendus = new CompteRenduVo();
           }else{
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
            });
        }
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
       this.validateEvoSuivs();
       if (this.errorMessages.length === 0) {
              this.selectedDossierMedicale.evoSuivsVo.push(this.selectedEvoSuivs);
              this.selectedEvoSuivs = new EvoSuivVo();
           }else{
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages
            });
        }
       }

        deleteEvoSuivs(p: EvoSuivVo) {
        this.selectedDossierMedicale.evoSuivsVo.forEach((element, index) => {
            if (element === p) { this.selectedDossierMedicale.evoSuivsVo.splice(index, 1); }
        });
    }

public save(){
  this.submitted = true;
  this.validateForm();
  if (this.errorMessages.length === 0) {
        this.saveWithShowOption(false);
  } else {
        this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs sur le formulaire'});
  }
}

public saveWithShowOption(showList: boolean){
     this.dossierMedicaleService.save().subscribe(dossierMedicale=>{
       this.dossierMedicales.push({...dossierMedicale});
       this.createDossierMedicaleDialog = false;
       this.submitted = false;
       this.selectedDossierMedicale = new DossierMedicaleVo();


    } , error =>{
        console.log(error);
    });

}
//validation methods
private validateForm(): void{
this.errorMessages = new Array<string>();
this.validateDossierMedicaleRef();
this.validateDossierMedicalePatient();
this.validateDossierMedicaleDiagnostics();

    }

private validateDossierMedicaleRef(){
        if (this.stringUtilService.isEmpty(this.selectedDossierMedicale.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validDossierMedicaleRef = false;
        } else {
            this.validDossierMedicaleRef = true;
        }
    }
private validateDossierMedicalePatient(){
        if (this.stringUtilService.isEmpty(this.selectedDossierMedicale.patientVo)) {
            this.errorMessages.push('Patient non valide');
            this.validDossierMedicalePatient = false;
        } else {
            this.validDossierMedicalePatient = true;
        }
    }
private validateDossierMedicaleDiagnostics(){
        if (this.stringUtilService.isEmpty(this.selectedDossierMedicale.diagnosticsVo)) {
            this.errorMessages.push('Diagnostics non valide');
            this.validDossierMedicaleDiagnostics = false;
        } else {
            this.validDossierMedicaleDiagnostics = true;
        }
    }








            private validateDiagnosticDateDiagnostic(){
            if (this.selectedDiagnostics.dateDiagnostic == null) {
            this.errorMessages.push('DateDiagnostic de la diagnostic est  invalide');
             this.validDiagnosticDateDiagnostic = false;
            } else {
            this.validDiagnosticDateDiagnostic = true;
            }
            }

            private validateDiagnosticDiag(){
            if (this.selectedDiagnostics.diag == null) {
            this.errorMessages.push('Diag de la diagnostic est  invalide');
             this.validDiagnosticDiag = false;
            } else {
            this.validDiagnosticDiag = true;
            }
            }

            private validateDiagnosticDossierMedicale(){
            if (this.selectedDiagnostics.dossierMedicaleVo == null) {
            this.errorMessages.push('DossierMedicale de la diagnostic est  invalide');
             this.validDiagnosticDossierMedicale = false;
            } else {
            this.validDiagnosticDossierMedicale = true;
            }
            }




            private validateCliniqueDateClinique(){
            if (this.selectedCliniques.dateClinique == null) {
            this.errorMessages.push('DateClinique de la clinique est  invalide');
             this.validCliniqueDateClinique = false;
            } else {
            this.validCliniqueDateClinique = true;
            }
            }



            private validateCliniqueHistoireMaladie(){
            if (this.selectedCliniques.histoireMaladie == null) {
            this.errorMessages.push('HistoireMaladie de la clinique est  invalide');
             this.validCliniqueHistoireMaladie = false;
            } else {
            this.validCliniqueHistoireMaladie = true;
            }
            }



            private validateCliniqueDossierMedicale(){
            if (this.selectedCliniques.dossierMedicaleVo == null) {
            this.errorMessages.push('DossierMedicale de la clinique est  invalide');
             this.validCliniqueDossierMedicale = false;
            } else {
            this.validCliniqueDossierMedicale = true;
            }
            }




            private validateBiologieDateBiologie(){
            if (this.selectedBiologies.dateBiologie == null) {
            this.errorMessages.push('DateBiologie de la biologie est  invalide');
             this.validBiologieDateBiologie = false;
            } else {
            this.validBiologieDateBiologie = true;
            }
            }

            private validateBiologieExamen(){
            if (this.selectedBiologies.examenVo == null) {
            this.errorMessages.push('Examen de la biologie est  invalide');
             this.validBiologieExamen = false;
            } else {
            this.validBiologieExamen = true;
            }
            }

            private validateBiologieResultat(){
            if (this.selectedBiologies.resultat == null) {
            this.errorMessages.push('Resultat de la biologie est  invalide');
             this.validBiologieResultat = false;
            } else {
            this.validBiologieResultat = true;
            }
            }

            private validateBiologieDossierMedicale(){
            if (this.selectedBiologies.dossierMedicaleVo == null) {
            this.errorMessages.push('DossierMedicale de la biologie est  invalide');
             this.validBiologieDossierMedicale = false;
            } else {
            this.validBiologieDossierMedicale = true;
            }
            }





            private validateImagerieTypeImage(){
            if (this.selectedImageries.typeImageVo == null) {
            this.errorMessages.push('TypeImage de la imagerie est  invalide');
             this.validImagerieTypeImage = false;
            } else {
            this.validImagerieTypeImage = true;
            }
            }

            private validateImageriePhaseImage(){
            if (this.selectedImageries.phaseImageVo == null) {
            this.errorMessages.push('PhaseImage de la imagerie est  invalide');
             this.validImageriePhaseImage = false;
            } else {
            this.validImageriePhaseImage = true;
            }
            }

            private validateImagerieImageScan(){
            if (this.selectedImageries.imageScan == null) {
            this.errorMessages.push('ImageScan de la imagerie est  invalide');
             this.validImagerieImageScan = false;
            } else {
            this.validImagerieImageScan = true;
            }
            }


            private validateImagerieDossierMedicale(){
            if (this.selectedImageries.dossierMedicaleVo == null) {
            this.errorMessages.push('DossierMedicale de la imagerie est  invalide');
             this.validImagerieDossierMedicale = false;
            } else {
            this.validImagerieDossierMedicale = true;
            }
            }




            private validateCompteRenduDateCompteR(){
            if (this.selectedCompteRendus.dateCompteR == null) {
            this.errorMessages.push('DateCompteR de la compteRendu est  invalide');
             this.validCompteRenduDateCompteR = false;
            } else {
            this.validCompteRenduDateCompteR = true;
            }
            }

            private validateCompteRenduCompteR(){
            if (this.selectedCompteRendus.compteR == null) {
            this.errorMessages.push('CompteR de la compteRendu est  invalide');
             this.validCompteRenduCompteR = false;
            } else {
            this.validCompteRenduCompteR = true;
            }
            }

            private validateCompteRenduDossierMedicale(){
            if (this.selectedCompteRendus.dossierMedicaleVo == null) {
            this.errorMessages.push('DossierMedicale de la compteRendu est  invalide');
             this.validCompteRenduDossierMedicale = false;
            } else {
            this.validCompteRenduDossierMedicale = true;
            }
            }





            private validateEvoSuivDateEvoS(){
            if (this.selectedEvoSuivs.dateEvoS == null) {
            this.errorMessages.push('DateEvoS de la evoSuiv est  invalide');
             this.validEvoSuivDateEvoS = false;
            } else {
            this.validEvoSuivDateEvoS = true;
            }
            }

            private validateEvoSuivEvoS(){
            if (this.selectedEvoSuivs.evoS == null) {
            this.errorMessages.push('EvoS de la evoSuiv est  invalide');
             this.validEvoSuivEvoS = false;
            } else {
            this.validEvoSuivEvoS = true;
            }
            }

            private validateEvoSuivDossierMedicale(){
            if (this.selectedEvoSuivs.dossierMedicaleVo == null) {
            this.errorMessages.push('DossierMedicale de la evoSuiv est  invalide');
             this.validEvoSuivDossierMedicale = false;
            } else {
            this.validEvoSuivDossierMedicale = true;
            }
            }




            private validateDossierMedicaleTagTag(){
            if (this.selectedDossierMedicaleTags.tagVo == null) {
            this.errorMessages.push('Tag de la dossierMedicaleTag est  invalide');
             this.validDossierMedicaleTagTag = false;
            } else {
            this.validDossierMedicaleTagTag = true;
            }
            }

            private validateDossierMedicaleTagDossierMedicale(){
            if (this.selectedDossierMedicaleTags.dossierMedicaleVo == null) {
            this.errorMessages.push('DossierMedicale de la dossierMedicaleTag est  invalide');
             this.validDossierMedicaleTagDossierMedicale = false;
            } else {
            this.validDossierMedicaleTagDossierMedicale = true;
            }
            }



//openPopup
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

hideCreateDialog(){
    this.createDossierMedicaleDialog  = false;
    this.setValidation(true);
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

   get createDossierMedicaleDialog(): boolean {
           return this.dossierMedicaleService.createDossierMedicaleDialog;

       }
    set createDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.createDossierMedicaleDialog= value;
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
            return environment.dateFormatCreate;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }

     get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }


    get dossierMedicaleTagsVo(): Array<DossierMedicaleTagVo> {
    if( this._dossierMedicaleTagsVo == null )
    this._dossierMedicaleTagsVo = new Array();
    return this._dossierMedicaleTagsVo;
    }

    set dossierMedicaleTagsVo(value: Array<DossierMedicaleTagVo>) {
    this._dossierMedicaleTagsVo = value;
    }


    get errorMessages(): string[] {
    return this._errorMessages;
    }

    set errorMessages(value: string[]) {
    this._errorMessages = value;
    }

    get validDossierMedicaleRef(): boolean {
    return this._validDossierMedicaleRef;
    }

    set validDossierMedicaleRef(value: boolean) {
    this._validDossierMedicaleRef = value;
    }
    get validDossierMedicalePatient(): boolean {
    return this._validDossierMedicalePatient;
    }

    set validDossierMedicalePatient(value: boolean) {
    this._validDossierMedicalePatient = value;
    }
    get validDossierMedicaleDiagnostics(): boolean {
    return this._validDossierMedicaleDiagnostics;
    }

    set validDossierMedicaleDiagnostics(value: boolean) {
    this._validDossierMedicaleDiagnostics = value;
    }

    get validPatientCin(): boolean {
    return this._validPatientCin;
    }

    set validPatientCin(value: boolean) {
    this._validPatientCin = value;
    }
    get validPatientNom(): boolean {
    return this._validPatientNom;
    }

    set validPatientNom(value: boolean) {
    this._validPatientNom = value;
    }
    get validPatientPrenom(): boolean {
    return this._validPatientPrenom;
    }

    set validPatientPrenom(value: boolean) {
    this._validPatientPrenom = value;
    }
    get validPatientDateDeNaissance(): boolean {
    return this._validPatientDateDeNaissance;
    }

    set validPatientDateDeNaissance(value: boolean) {
    this._validPatientDateDeNaissance = value;
    }
    get validPatientProfession(): boolean {
    return this._validPatientProfession;
    }

    set validPatientProfession(value: boolean) {
    this._validPatientProfession = value;
    }
    get validPatientVille(): boolean {
    return this._validPatientVille;
    }

    set validPatientVille(value: boolean) {
    this._validPatientVille = value;
    }
    get validPatientSexe(): boolean {
    return this._validPatientSexe;
    }

    set validPatientSexe(value: boolean) {
    this._validPatientSexe = value;
    }
    get validPatientContactRef(): boolean {
    return this._validPatientContactRef;
    }

    set validPatientContactRef(value: boolean) {
    this._validPatientContactRef = value;
    }
    get validPatientContactNom(): boolean {
    return this._validPatientContactNom;
    }

    set validPatientContactNom(value: boolean) {
    this._validPatientContactNom = value;
    }
    get validPatientContactPrenom(): boolean {
    return this._validPatientContactPrenom;
    }

    set validPatientContactPrenom(value: boolean) {
    this._validPatientContactPrenom = value;
    }
    get validPatientContactRelation(): boolean {
    return this._validPatientContactRelation;
    }

    set validPatientContactRelation(value: boolean) {
    this._validPatientContactRelation = value;
    }
    get validPatientContactTelephone(): boolean {
    return this._validPatientContactTelephone;
    }

    set validPatientContactTelephone(value: boolean) {
    this._validPatientContactTelephone = value;
    }
    get validDiagnosticDateDiagnostic(): boolean {
    return this._validDiagnosticDateDiagnostic;
    }

    set validDiagnosticDateDiagnostic(value: boolean) {
    this._validDiagnosticDateDiagnostic = value;
    }
    get validDiagnosticDiag(): boolean {
    return this._validDiagnosticDiag;
    }

    set validDiagnosticDiag(value: boolean) {
    this._validDiagnosticDiag = value;
    }
    get validDiagnosticDossierMedicale(): boolean {
    return this._validDiagnosticDossierMedicale;
    }

    set validDiagnosticDossierMedicale(value: boolean) {
    this._validDiagnosticDossierMedicale = value;
    }
    get validCliniqueDateClinique(): boolean {
    return this._validCliniqueDateClinique;
    }

    set validCliniqueDateClinique(value: boolean) {
    this._validCliniqueDateClinique = value;
    }
    get validCliniqueHistoireMaladie(): boolean {
    return this._validCliniqueHistoireMaladie;
    }

    set validCliniqueHistoireMaladie(value: boolean) {
    this._validCliniqueHistoireMaladie = value;
    }
    get validCliniqueDossierMedicale(): boolean {
    return this._validCliniqueDossierMedicale;
    }

    set validCliniqueDossierMedicale(value: boolean) {
    this._validCliniqueDossierMedicale = value;
    }
    get validBiologieDateBiologie(): boolean {
    return this._validBiologieDateBiologie;
    }

    set validBiologieDateBiologie(value: boolean) {
    this._validBiologieDateBiologie = value;
    }
    get validBiologieExamen(): boolean {
    return this._validBiologieExamen;
    }

    set validBiologieExamen(value: boolean) {
    this._validBiologieExamen = value;
    }
    get validBiologieResultat(): boolean {
    return this._validBiologieResultat;
    }

    set validBiologieResultat(value: boolean) {
    this._validBiologieResultat = value;
    }
    get validBiologieDossierMedicale(): boolean {
    return this._validBiologieDossierMedicale;
    }

    set validBiologieDossierMedicale(value: boolean) {
    this._validBiologieDossierMedicale = value;
    }
    get validImagerieTypeImage(): boolean {
    return this._validImagerieTypeImage;
    }

    set validImagerieTypeImage(value: boolean) {
    this._validImagerieTypeImage = value;
    }
    get validImageriePhaseImage(): boolean {
    return this._validImageriePhaseImage;
    }

    set validImageriePhaseImage(value: boolean) {
    this._validImageriePhaseImage = value;
    }
    get validImagerieImageScan(): boolean {
    return this._validImagerieImageScan;
    }

    set validImagerieImageScan(value: boolean) {
    this._validImagerieImageScan = value;
    }
    get validImagerieDossierMedicale(): boolean {
    return this._validImagerieDossierMedicale;
    }

    set validImagerieDossierMedicale(value: boolean) {
    this._validImagerieDossierMedicale = value;
    }
    get validCompteRenduDateCompteR(): boolean {
    return this._validCompteRenduDateCompteR;
    }

    set validCompteRenduDateCompteR(value: boolean) {
    this._validCompteRenduDateCompteR = value;
    }
    get validCompteRenduCompteR(): boolean {
    return this._validCompteRenduCompteR;
    }

    set validCompteRenduCompteR(value: boolean) {
    this._validCompteRenduCompteR = value;
    }
    get validCompteRenduDossierMedicale(): boolean {
    return this._validCompteRenduDossierMedicale;
    }

    set validCompteRenduDossierMedicale(value: boolean) {
    this._validCompteRenduDossierMedicale = value;
    }
    get validTraitementRecueilDeDonnes(): boolean {
    return this._validTraitementRecueilDeDonnes;
    }

    set validTraitementRecueilDeDonnes(value: boolean) {
    this._validTraitementRecueilDeDonnes = value;
    }
    get validTraitementDossierMedicaleRef(): boolean {
    return this._validTraitementDossierMedicaleRef;
    }

    set validTraitementDossierMedicaleRef(value: boolean) {
    this._validTraitementDossierMedicaleRef = value;
    }
    get validEvoSuivDateEvoS(): boolean {
    return this._validEvoSuivDateEvoS;
    }

    set validEvoSuivDateEvoS(value: boolean) {
    this._validEvoSuivDateEvoS = value;
    }
    get validEvoSuivEvoS(): boolean {
    return this._validEvoSuivEvoS;
    }

    set validEvoSuivEvoS(value: boolean) {
    this._validEvoSuivEvoS = value;
    }
    get validEvoSuivDossierMedicale(): boolean {
    return this._validEvoSuivDossierMedicale;
    }

    set validEvoSuivDossierMedicale(value: boolean) {
    this._validEvoSuivDossierMedicale = value;
    }
    get validDossierMedicaleTagTag(): boolean {
    return this._validDossierMedicaleTagTag;
    }

    set validDossierMedicaleTagTag(value: boolean) {
    this._validDossierMedicaleTagTag = value;
    }
    get validDossierMedicaleTagDossierMedicale(): boolean {
    return this._validDossierMedicaleTagDossierMedicale;
    }

    set validDossierMedicaleTagDossierMedicale(value: boolean) {
    this._validDossierMedicaleTagDossierMedicale = value;
    }

}
