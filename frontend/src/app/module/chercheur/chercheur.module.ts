import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginChercheurComponent } from './login-chercheur/login-chercheur.component';
import { RegisterChercheurComponent } from './register-chercheur/register-chercheur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';



import { BiologieCreateChercheurComponent } from './view/biologie-chercheur/create-chercheur/biologie-create-chercheur.component';
import { BiologieEditChercheurComponent } from './view/biologie-chercheur/edit-chercheur/biologie-edit-chercheur.component';
import { BiologieViewChercheurComponent } from './view/biologie-chercheur/view-chercheur/biologie-view-chercheur.component';
import { BiologieListChercheurComponent } from './view/biologie-chercheur/list-chercheur/biologie-list-chercheur.component';
import { BiologieChercheurComponent } from './view/biologie-chercheur/biologie-chercheur.component';
import { InfirmierCreateChercheurComponent } from './view/infirmier-chercheur/create-chercheur/infirmier-create-chercheur.component';
import { InfirmierEditChercheurComponent } from './view/infirmier-chercheur/edit-chercheur/infirmier-edit-chercheur.component';
import { InfirmierViewChercheurComponent } from './view/infirmier-chercheur/view-chercheur/infirmier-view-chercheur.component';
import { InfirmierListChercheurComponent } from './view/infirmier-chercheur/list-chercheur/infirmier-list-chercheur.component';
import { InfirmierChercheurComponent } from './view/infirmier-chercheur/infirmier-chercheur.component';
import { RelationCreateChercheurComponent } from './view/relation-chercheur/create-chercheur/relation-create-chercheur.component';
import { RelationEditChercheurComponent } from './view/relation-chercheur/edit-chercheur/relation-edit-chercheur.component';
import { RelationViewChercheurComponent } from './view/relation-chercheur/view-chercheur/relation-view-chercheur.component';
import { RelationListChercheurComponent } from './view/relation-chercheur/list-chercheur/relation-list-chercheur.component';
import { RelationChercheurComponent } from './view/relation-chercheur/relation-chercheur.component';
import { ExamenCreateChercheurComponent } from './view/examen-chercheur/create-chercheur/examen-create-chercheur.component';
import { ExamenEditChercheurComponent } from './view/examen-chercheur/edit-chercheur/examen-edit-chercheur.component';
import { ExamenViewChercheurComponent } from './view/examen-chercheur/view-chercheur/examen-view-chercheur.component';
import { ExamenListChercheurComponent } from './view/examen-chercheur/list-chercheur/examen-list-chercheur.component';
import { ExamenChercheurComponent } from './view/examen-chercheur/examen-chercheur.component';
import { ChercheurCreateChercheurComponent } from './view/chercheur-chercheur/create-chercheur/chercheur-create-chercheur.component';
import { ChercheurEditChercheurComponent } from './view/chercheur-chercheur/edit-chercheur/chercheur-edit-chercheur.component';
import { ChercheurViewChercheurComponent } from './view/chercheur-chercheur/view-chercheur/chercheur-view-chercheur.component';
import { ChercheurListChercheurComponent } from './view/chercheur-chercheur/list-chercheur/chercheur-list-chercheur.component';
import { ChercheurChercheurComponent } from './view/chercheur-chercheur/chercheur-chercheur.component';
import { CliniqueCreateChercheurComponent } from './view/clinique-chercheur/create-chercheur/clinique-create-chercheur.component';
import { CliniqueEditChercheurComponent } from './view/clinique-chercheur/edit-chercheur/clinique-edit-chercheur.component';
import { CliniqueViewChercheurComponent } from './view/clinique-chercheur/view-chercheur/clinique-view-chercheur.component';
import { CliniqueListChercheurComponent } from './view/clinique-chercheur/list-chercheur/clinique-list-chercheur.component';
import { CliniqueChercheurComponent } from './view/clinique-chercheur/clinique-chercheur.component';
import { TagCreateChercheurComponent } from './view/tag-chercheur/create-chercheur/tag-create-chercheur.component';
import { TagEditChercheurComponent } from './view/tag-chercheur/edit-chercheur/tag-edit-chercheur.component';
import { TagViewChercheurComponent } from './view/tag-chercheur/view-chercheur/tag-view-chercheur.component';
import { TagListChercheurComponent } from './view/tag-chercheur/list-chercheur/tag-list-chercheur.component';
import { TagChercheurComponent } from './view/tag-chercheur/tag-chercheur.component';
import { ImagerieCreateChercheurComponent } from './view/imagerie-chercheur/create-chercheur/imagerie-create-chercheur.component';
import { ImagerieEditChercheurComponent } from './view/imagerie-chercheur/edit-chercheur/imagerie-edit-chercheur.component';
import { ImagerieViewChercheurComponent } from './view/imagerie-chercheur/view-chercheur/imagerie-view-chercheur.component';
import { ImagerieListChercheurComponent } from './view/imagerie-chercheur/list-chercheur/imagerie-list-chercheur.component';
import { ImagerieChercheurComponent } from './view/imagerie-chercheur/imagerie-chercheur.component';
import { TraitementCreateChercheurComponent } from './view/traitement-chercheur/create-chercheur/traitement-create-chercheur.component';
import { TraitementEditChercheurComponent } from './view/traitement-chercheur/edit-chercheur/traitement-edit-chercheur.component';
import { TraitementViewChercheurComponent } from './view/traitement-chercheur/view-chercheur/traitement-view-chercheur.component';
import { TraitementListChercheurComponent } from './view/traitement-chercheur/list-chercheur/traitement-list-chercheur.component';
import { TraitementChercheurComponent } from './view/traitement-chercheur/traitement-chercheur.component';
import { DossierMedicaleCreateChercheurComponent } from './view/dossier-medicale-chercheur/create-chercheur/dossier-medicale-create-chercheur.component';
import { DossierMedicaleEditChercheurComponent } from './view/dossier-medicale-chercheur/edit-chercheur/dossier-medicale-edit-chercheur.component';
import { DossierMedicaleViewChercheurComponent } from './view/dossier-medicale-chercheur/view-chercheur/dossier-medicale-view-chercheur.component';
import { DossierMedicaleListChercheurComponent } from './view/dossier-medicale-chercheur/list-chercheur/dossier-medicale-list-chercheur.component';
import { DossierMedicaleChercheurComponent } from './view/dossier-medicale-chercheur/dossier-medicale-chercheur.component';
import { DiagnosticCreateChercheurComponent } from './view/diagnostic-chercheur/create-chercheur/diagnostic-create-chercheur.component';
import { DiagnosticEditChercheurComponent } from './view/diagnostic-chercheur/edit-chercheur/diagnostic-edit-chercheur.component';
import { DiagnosticViewChercheurComponent } from './view/diagnostic-chercheur/view-chercheur/diagnostic-view-chercheur.component';
import { DiagnosticListChercheurComponent } from './view/diagnostic-chercheur/list-chercheur/diagnostic-list-chercheur.component';
import { DiagnosticChercheurComponent } from './view/diagnostic-chercheur/diagnostic-chercheur.component';
import { CompteRenduCreateChercheurComponent } from './view/compte-rendu-chercheur/create-chercheur/compte-rendu-create-chercheur.component';
import { CompteRenduEditChercheurComponent } from './view/compte-rendu-chercheur/edit-chercheur/compte-rendu-edit-chercheur.component';
import { CompteRenduViewChercheurComponent } from './view/compte-rendu-chercheur/view-chercheur/compte-rendu-view-chercheur.component';
import { CompteRenduListChercheurComponent } from './view/compte-rendu-chercheur/list-chercheur/compte-rendu-list-chercheur.component';
import { CompteRenduChercheurComponent } from './view/compte-rendu-chercheur/compte-rendu-chercheur.component';
import { RecueilDeDonnesCreateChercheurComponent } from './view/recueil-de-donnes-chercheur/create-chercheur/recueil-de-donnes-create-chercheur.component';
import { RecueilDeDonnesEditChercheurComponent } from './view/recueil-de-donnes-chercheur/edit-chercheur/recueil-de-donnes-edit-chercheur.component';
import { RecueilDeDonnesViewChercheurComponent } from './view/recueil-de-donnes-chercheur/view-chercheur/recueil-de-donnes-view-chercheur.component';
import { RecueilDeDonnesListChercheurComponent } from './view/recueil-de-donnes-chercheur/list-chercheur/recueil-de-donnes-list-chercheur.component';
import { RecueilDeDonnesChercheurComponent } from './view/recueil-de-donnes-chercheur/recueil-de-donnes-chercheur.component';
import { SexeCreateChercheurComponent } from './view/sexe-chercheur/create-chercheur/sexe-create-chercheur.component';
import { SexeEditChercheurComponent } from './view/sexe-chercheur/edit-chercheur/sexe-edit-chercheur.component';
import { SexeViewChercheurComponent } from './view/sexe-chercheur/view-chercheur/sexe-view-chercheur.component';
import { SexeListChercheurComponent } from './view/sexe-chercheur/list-chercheur/sexe-list-chercheur.component';
import { SexeChercheurComponent } from './view/sexe-chercheur/sexe-chercheur.component';
import { MedecinCreateChercheurComponent } from './view/medecin-chercheur/create-chercheur/medecin-create-chercheur.component';
import { MedecinEditChercheurComponent } from './view/medecin-chercheur/edit-chercheur/medecin-edit-chercheur.component';
import { MedecinViewChercheurComponent } from './view/medecin-chercheur/view-chercheur/medecin-view-chercheur.component';
import { MedecinListChercheurComponent } from './view/medecin-chercheur/list-chercheur/medecin-list-chercheur.component';
import { MedecinChercheurComponent } from './view/medecin-chercheur/medecin-chercheur.component';
import { PatientContactCreateChercheurComponent } from './view/patient-contact-chercheur/create-chercheur/patient-contact-create-chercheur.component';
import { PatientContactEditChercheurComponent } from './view/patient-contact-chercheur/edit-chercheur/patient-contact-edit-chercheur.component';
import { PatientContactViewChercheurComponent } from './view/patient-contact-chercheur/view-chercheur/patient-contact-view-chercheur.component';
import { PatientContactListChercheurComponent } from './view/patient-contact-chercheur/list-chercheur/patient-contact-list-chercheur.component';
import { PatientContactChercheurComponent } from './view/patient-contact-chercheur/patient-contact-chercheur.component';
import { EvoSuivCreateChercheurComponent } from './view/evo-suiv-chercheur/create-chercheur/evo-suiv-create-chercheur.component';
import { EvoSuivEditChercheurComponent } from './view/evo-suiv-chercheur/edit-chercheur/evo-suiv-edit-chercheur.component';
import { EvoSuivViewChercheurComponent } from './view/evo-suiv-chercheur/view-chercheur/evo-suiv-view-chercheur.component';
import { EvoSuivListChercheurComponent } from './view/evo-suiv-chercheur/list-chercheur/evo-suiv-list-chercheur.component';
import { EvoSuivChercheurComponent } from './view/evo-suiv-chercheur/evo-suiv-chercheur.component';
import { SoinCreateChercheurComponent } from './view/soin-chercheur/create-chercheur/soin-create-chercheur.component';
import { SoinEditChercheurComponent } from './view/soin-chercheur/edit-chercheur/soin-edit-chercheur.component';
import { SoinViewChercheurComponent } from './view/soin-chercheur/view-chercheur/soin-view-chercheur.component';
import { SoinListChercheurComponent } from './view/soin-chercheur/list-chercheur/soin-list-chercheur.component';
import { SoinChercheurComponent } from './view/soin-chercheur/soin-chercheur.component';
import { PatientCreateChercheurComponent } from './view/patient-chercheur/create-chercheur/patient-create-chercheur.component';
import { PatientEditChercheurComponent } from './view/patient-chercheur/edit-chercheur/patient-edit-chercheur.component';
import { PatientViewChercheurComponent } from './view/patient-chercheur/view-chercheur/patient-view-chercheur.component';
import { PatientListChercheurComponent } from './view/patient-chercheur/list-chercheur/patient-list-chercheur.component';
import { PatientChercheurComponent } from './view/patient-chercheur/patient-chercheur.component';
import { TypeImageCreateChercheurComponent } from './view/type-image-chercheur/create-chercheur/type-image-create-chercheur.component';
import { TypeImageEditChercheurComponent } from './view/type-image-chercheur/edit-chercheur/type-image-edit-chercheur.component';
import { TypeImageViewChercheurComponent } from './view/type-image-chercheur/view-chercheur/type-image-view-chercheur.component';
import { TypeImageListChercheurComponent } from './view/type-image-chercheur/list-chercheur/type-image-list-chercheur.component';
import { TypeImageChercheurComponent } from './view/type-image-chercheur/type-image-chercheur.component';
import { EtudiantCreateChercheurComponent } from './view/etudiant-chercheur/create-chercheur/etudiant-create-chercheur.component';
import { EtudiantEditChercheurComponent } from './view/etudiant-chercheur/edit-chercheur/etudiant-edit-chercheur.component';
import { EtudiantViewChercheurComponent } from './view/etudiant-chercheur/view-chercheur/etudiant-view-chercheur.component';
import { EtudiantListChercheurComponent } from './view/etudiant-chercheur/list-chercheur/etudiant-list-chercheur.component';
import { EtudiantChercheurComponent } from './view/etudiant-chercheur/etudiant-chercheur.component';
import { DossierMedicaleTagCreateChercheurComponent } from './view/dossier-medicale-tag-chercheur/create-chercheur/dossier-medicale-tag-create-chercheur.component';
import { DossierMedicaleTagEditChercheurComponent } from './view/dossier-medicale-tag-chercheur/edit-chercheur/dossier-medicale-tag-edit-chercheur.component';
import { DossierMedicaleTagViewChercheurComponent } from './view/dossier-medicale-tag-chercheur/view-chercheur/dossier-medicale-tag-view-chercheur.component';
import { DossierMedicaleTagListChercheurComponent } from './view/dossier-medicale-tag-chercheur/list-chercheur/dossier-medicale-tag-list-chercheur.component';
import { DossierMedicaleTagChercheurComponent } from './view/dossier-medicale-tag-chercheur/dossier-medicale-tag-chercheur.component';
import { VilleCreateChercheurComponent } from './view/ville-chercheur/create-chercheur/ville-create-chercheur.component';
import { VilleEditChercheurComponent } from './view/ville-chercheur/edit-chercheur/ville-edit-chercheur.component';
import { VilleViewChercheurComponent } from './view/ville-chercheur/view-chercheur/ville-view-chercheur.component';
import { VilleListChercheurComponent } from './view/ville-chercheur/list-chercheur/ville-list-chercheur.component';
import { VilleChercheurComponent } from './view/ville-chercheur/ville-chercheur.component';
import { PhaseImageCreateChercheurComponent } from './view/phase-image-chercheur/create-chercheur/phase-image-create-chercheur.component';
import { PhaseImageEditChercheurComponent } from './view/phase-image-chercheur/edit-chercheur/phase-image-edit-chercheur.component';
import { PhaseImageViewChercheurComponent } from './view/phase-image-chercheur/view-chercheur/phase-image-view-chercheur.component';
import { PhaseImageListChercheurComponent } from './view/phase-image-chercheur/list-chercheur/phase-image-list-chercheur.component';
import { PhaseImageChercheurComponent } from './view/phase-image-chercheur/phase-image-chercheur.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

@NgModule({
  declarations: [
   LoginChercheurComponent,
   RegisterChercheurComponent,
    BiologieCreateChercheurComponent,
    BiologieListChercheurComponent,
    BiologieViewChercheurComponent,
    BiologieEditChercheurComponent,
    BiologieChercheurComponent,
    InfirmierCreateChercheurComponent,
    InfirmierListChercheurComponent,
    InfirmierViewChercheurComponent,
    InfirmierEditChercheurComponent,
    InfirmierChercheurComponent,
    RelationCreateChercheurComponent,
    RelationListChercheurComponent,
    RelationViewChercheurComponent,
    RelationEditChercheurComponent,
    RelationChercheurComponent,
    ExamenCreateChercheurComponent,
    ExamenListChercheurComponent,
    ExamenViewChercheurComponent,
    ExamenEditChercheurComponent,
    ExamenChercheurComponent,
    ChercheurCreateChercheurComponent,
    ChercheurListChercheurComponent,
    ChercheurViewChercheurComponent,
    ChercheurEditChercheurComponent,
    ChercheurChercheurComponent,
    CliniqueCreateChercheurComponent,
    CliniqueListChercheurComponent,
    CliniqueViewChercheurComponent,
    CliniqueEditChercheurComponent,
    CliniqueChercheurComponent,
    TagCreateChercheurComponent,
    TagListChercheurComponent,
    TagViewChercheurComponent,
    TagEditChercheurComponent,
    TagChercheurComponent,
    ImagerieCreateChercheurComponent,
    ImagerieListChercheurComponent,
    ImagerieViewChercheurComponent,
    ImagerieEditChercheurComponent,
    ImagerieChercheurComponent,
    TraitementCreateChercheurComponent,
    TraitementListChercheurComponent,
    TraitementViewChercheurComponent,
    TraitementEditChercheurComponent,
    TraitementChercheurComponent,
    DossierMedicaleCreateChercheurComponent,
    DossierMedicaleListChercheurComponent,
    DossierMedicaleViewChercheurComponent,
    DossierMedicaleEditChercheurComponent,
    DossierMedicaleChercheurComponent,
    DiagnosticCreateChercheurComponent,
    DiagnosticListChercheurComponent,
    DiagnosticViewChercheurComponent,
    DiagnosticEditChercheurComponent,
    DiagnosticChercheurComponent,
    CompteRenduCreateChercheurComponent,
    CompteRenduListChercheurComponent,
    CompteRenduViewChercheurComponent,
    CompteRenduEditChercheurComponent,
    CompteRenduChercheurComponent,
    RecueilDeDonnesCreateChercheurComponent,
    RecueilDeDonnesListChercheurComponent,
    RecueilDeDonnesViewChercheurComponent,
    RecueilDeDonnesEditChercheurComponent,
    RecueilDeDonnesChercheurComponent,
    SexeCreateChercheurComponent,
    SexeListChercheurComponent,
    SexeViewChercheurComponent,
    SexeEditChercheurComponent,
    SexeChercheurComponent,
    MedecinCreateChercheurComponent,
    MedecinListChercheurComponent,
    MedecinViewChercheurComponent,
    MedecinEditChercheurComponent,
    MedecinChercheurComponent,
    PatientContactCreateChercheurComponent,
    PatientContactListChercheurComponent,
    PatientContactViewChercheurComponent,
    PatientContactEditChercheurComponent,
    PatientContactChercheurComponent,
    EvoSuivCreateChercheurComponent,
    EvoSuivListChercheurComponent,
    EvoSuivViewChercheurComponent,
    EvoSuivEditChercheurComponent,
    EvoSuivChercheurComponent,
    SoinCreateChercheurComponent,
    SoinListChercheurComponent,
    SoinViewChercheurComponent,
    SoinEditChercheurComponent,
    SoinChercheurComponent,
    PatientCreateChercheurComponent,
    PatientListChercheurComponent,
    PatientViewChercheurComponent,
    PatientEditChercheurComponent,
    PatientChercheurComponent,
    TypeImageCreateChercheurComponent,
    TypeImageListChercheurComponent,
    TypeImageViewChercheurComponent,
    TypeImageEditChercheurComponent,
    TypeImageChercheurComponent,
    EtudiantCreateChercheurComponent,
    EtudiantListChercheurComponent,
    EtudiantViewChercheurComponent,
    EtudiantEditChercheurComponent,
    EtudiantChercheurComponent,
    DossierMedicaleTagCreateChercheurComponent,
    DossierMedicaleTagListChercheurComponent,
    DossierMedicaleTagViewChercheurComponent,
    DossierMedicaleTagEditChercheurComponent,
    DossierMedicaleTagChercheurComponent,
    VilleCreateChercheurComponent,
    VilleListChercheurComponent,
    VilleViewChercheurComponent,
    VilleEditChercheurComponent,
    VilleChercheurComponent,
    PhaseImageCreateChercheurComponent,
    PhaseImageListChercheurComponent,
    PhaseImageViewChercheurComponent,
    PhaseImageEditChercheurComponent,
    PhaseImageChercheurComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule
  ],
  exports: [
  LoginChercheurComponent,
  RegisterChercheurComponent,
  BiologieCreateChercheurComponent,
  BiologieListChercheurComponent,
  BiologieViewChercheurComponent,
  BiologieEditChercheurComponent,
  BiologieChercheurComponent,
  InfirmierCreateChercheurComponent,
  InfirmierListChercheurComponent,
  InfirmierViewChercheurComponent,
  InfirmierEditChercheurComponent,
  InfirmierChercheurComponent,
  RelationCreateChercheurComponent,
  RelationListChercheurComponent,
  RelationViewChercheurComponent,
  RelationEditChercheurComponent,
  RelationChercheurComponent,
  ExamenCreateChercheurComponent,
  ExamenListChercheurComponent,
  ExamenViewChercheurComponent,
  ExamenEditChercheurComponent,
  ExamenChercheurComponent,
  ChercheurCreateChercheurComponent,
  ChercheurListChercheurComponent,
  ChercheurViewChercheurComponent,
  ChercheurEditChercheurComponent,
  ChercheurChercheurComponent,
  CliniqueCreateChercheurComponent,
  CliniqueListChercheurComponent,
  CliniqueViewChercheurComponent,
  CliniqueEditChercheurComponent,
  CliniqueChercheurComponent,
  TagCreateChercheurComponent,
  TagListChercheurComponent,
  TagViewChercheurComponent,
  TagEditChercheurComponent,
  TagChercheurComponent,
  ImagerieCreateChercheurComponent,
  ImagerieListChercheurComponent,
  ImagerieViewChercheurComponent,
  ImagerieEditChercheurComponent,
  ImagerieChercheurComponent,
  TraitementCreateChercheurComponent,
  TraitementListChercheurComponent,
  TraitementViewChercheurComponent,
  TraitementEditChercheurComponent,
  TraitementChercheurComponent,
  DossierMedicaleCreateChercheurComponent,
  DossierMedicaleListChercheurComponent,
  DossierMedicaleViewChercheurComponent,
  DossierMedicaleEditChercheurComponent,
  DossierMedicaleChercheurComponent,
  DiagnosticCreateChercheurComponent,
  DiagnosticListChercheurComponent,
  DiagnosticViewChercheurComponent,
  DiagnosticEditChercheurComponent,
  DiagnosticChercheurComponent,
  CompteRenduCreateChercheurComponent,
  CompteRenduListChercheurComponent,
  CompteRenduViewChercheurComponent,
  CompteRenduEditChercheurComponent,
  CompteRenduChercheurComponent,
  RecueilDeDonnesCreateChercheurComponent,
  RecueilDeDonnesListChercheurComponent,
  RecueilDeDonnesViewChercheurComponent,
  RecueilDeDonnesEditChercheurComponent,
  RecueilDeDonnesChercheurComponent,
  SexeCreateChercheurComponent,
  SexeListChercheurComponent,
  SexeViewChercheurComponent,
  SexeEditChercheurComponent,
  SexeChercheurComponent,
  MedecinCreateChercheurComponent,
  MedecinListChercheurComponent,
  MedecinViewChercheurComponent,
  MedecinEditChercheurComponent,
  MedecinChercheurComponent,
  PatientContactCreateChercheurComponent,
  PatientContactListChercheurComponent,
  PatientContactViewChercheurComponent,
  PatientContactEditChercheurComponent,
  PatientContactChercheurComponent,
  EvoSuivCreateChercheurComponent,
  EvoSuivListChercheurComponent,
  EvoSuivViewChercheurComponent,
  EvoSuivEditChercheurComponent,
  EvoSuivChercheurComponent,
  SoinCreateChercheurComponent,
  SoinListChercheurComponent,
  SoinViewChercheurComponent,
  SoinEditChercheurComponent,
  SoinChercheurComponent,
  PatientCreateChercheurComponent,
  PatientListChercheurComponent,
  PatientViewChercheurComponent,
  PatientEditChercheurComponent,
  PatientChercheurComponent,
  TypeImageCreateChercheurComponent,
  TypeImageListChercheurComponent,
  TypeImageViewChercheurComponent,
  TypeImageEditChercheurComponent,
  TypeImageChercheurComponent,
  EtudiantCreateChercheurComponent,
  EtudiantListChercheurComponent,
  EtudiantViewChercheurComponent,
  EtudiantEditChercheurComponent,
  EtudiantChercheurComponent,
  DossierMedicaleTagCreateChercheurComponent,
  DossierMedicaleTagListChercheurComponent,
  DossierMedicaleTagViewChercheurComponent,
  DossierMedicaleTagEditChercheurComponent,
  DossierMedicaleTagChercheurComponent,
  VilleCreateChercheurComponent,
  VilleListChercheurComponent,
  VilleViewChercheurComponent,
  VilleEditChercheurComponent,
  VilleChercheurComponent,
  PhaseImageCreateChercheurComponent,
  PhaseImageListChercheurComponent,
  PhaseImageViewChercheurComponent,
  PhaseImageEditChercheurComponent,
  PhaseImageChercheurComponent,
  ],
  entryComponents: [],
})
export class ChercheurModule { }
