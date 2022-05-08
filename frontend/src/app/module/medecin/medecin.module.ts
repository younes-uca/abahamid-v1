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
import { LoginMedecinComponent } from './login-medecin/login-medecin.component';
import { RegisterMedecinComponent } from './register-medecin/register-medecin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';



import { BiologieCreateMedecinComponent } from './view/biologie-medecin/create-medecin/biologie-create-medecin.component';
import { BiologieEditMedecinComponent } from './view/biologie-medecin/edit-medecin/biologie-edit-medecin.component';
import { BiologieViewMedecinComponent } from './view/biologie-medecin/view-medecin/biologie-view-medecin.component';
import { BiologieListMedecinComponent } from './view/biologie-medecin/list-medecin/biologie-list-medecin.component';
import { BiologieMedecinComponent } from './view/biologie-medecin/biologie-medecin.component';
import { InfirmierCreateMedecinComponent } from './view/infirmier-medecin/create-medecin/infirmier-create-medecin.component';
import { InfirmierEditMedecinComponent } from './view/infirmier-medecin/edit-medecin/infirmier-edit-medecin.component';
import { InfirmierViewMedecinComponent } from './view/infirmier-medecin/view-medecin/infirmier-view-medecin.component';
import { InfirmierListMedecinComponent } from './view/infirmier-medecin/list-medecin/infirmier-list-medecin.component';
import { InfirmierMedecinComponent } from './view/infirmier-medecin/infirmier-medecin.component';
import { RelationCreateMedecinComponent } from './view/relation-medecin/create-medecin/relation-create-medecin.component';
import { RelationEditMedecinComponent } from './view/relation-medecin/edit-medecin/relation-edit-medecin.component';
import { RelationViewMedecinComponent } from './view/relation-medecin/view-medecin/relation-view-medecin.component';
import { RelationListMedecinComponent } from './view/relation-medecin/list-medecin/relation-list-medecin.component';
import { RelationMedecinComponent } from './view/relation-medecin/relation-medecin.component';
import { ExamenCreateMedecinComponent } from './view/examen-medecin/create-medecin/examen-create-medecin.component';
import { ExamenEditMedecinComponent } from './view/examen-medecin/edit-medecin/examen-edit-medecin.component';
import { ExamenViewMedecinComponent } from './view/examen-medecin/view-medecin/examen-view-medecin.component';
import { ExamenListMedecinComponent } from './view/examen-medecin/list-medecin/examen-list-medecin.component';
import { ExamenMedecinComponent } from './view/examen-medecin/examen-medecin.component';
import { ChercheurCreateMedecinComponent } from './view/chercheur-medecin/create-medecin/chercheur-create-medecin.component';
import { ChercheurEditMedecinComponent } from './view/chercheur-medecin/edit-medecin/chercheur-edit-medecin.component';
import { ChercheurViewMedecinComponent } from './view/chercheur-medecin/view-medecin/chercheur-view-medecin.component';
import { ChercheurListMedecinComponent } from './view/chercheur-medecin/list-medecin/chercheur-list-medecin.component';
import { ChercheurMedecinComponent } from './view/chercheur-medecin/chercheur-medecin.component';
import { CliniqueCreateMedecinComponent } from './view/clinique-medecin/create-medecin/clinique-create-medecin.component';
import { CliniqueEditMedecinComponent } from './view/clinique-medecin/edit-medecin/clinique-edit-medecin.component';
import { CliniqueViewMedecinComponent } from './view/clinique-medecin/view-medecin/clinique-view-medecin.component';
import { CliniqueListMedecinComponent } from './view/clinique-medecin/list-medecin/clinique-list-medecin.component';
import { CliniqueMedecinComponent } from './view/clinique-medecin/clinique-medecin.component';
import { TagCreateMedecinComponent } from './view/tag-medecin/create-medecin/tag-create-medecin.component';
import { TagEditMedecinComponent } from './view/tag-medecin/edit-medecin/tag-edit-medecin.component';
import { TagViewMedecinComponent } from './view/tag-medecin/view-medecin/tag-view-medecin.component';
import { TagListMedecinComponent } from './view/tag-medecin/list-medecin/tag-list-medecin.component';
import { TagMedecinComponent } from './view/tag-medecin/tag-medecin.component';
import { ImagerieCreateMedecinComponent } from './view/imagerie-medecin/create-medecin/imagerie-create-medecin.component';
import { ImagerieEditMedecinComponent } from './view/imagerie-medecin/edit-medecin/imagerie-edit-medecin.component';
import { ImagerieViewMedecinComponent } from './view/imagerie-medecin/view-medecin/imagerie-view-medecin.component';
import { ImagerieListMedecinComponent } from './view/imagerie-medecin/list-medecin/imagerie-list-medecin.component';
import { ImagerieMedecinComponent } from './view/imagerie-medecin/imagerie-medecin.component';
import { TraitementCreateMedecinComponent } from './view/traitement-medecin/create-medecin/traitement-create-medecin.component';
import { TraitementEditMedecinComponent } from './view/traitement-medecin/edit-medecin/traitement-edit-medecin.component';
import { TraitementViewMedecinComponent } from './view/traitement-medecin/view-medecin/traitement-view-medecin.component';
import { TraitementListMedecinComponent } from './view/traitement-medecin/list-medecin/traitement-list-medecin.component';
import { TraitementMedecinComponent } from './view/traitement-medecin/traitement-medecin.component';
import { DossierMedicaleCreateMedecinComponent } from './view/dossier-medicale-medecin/create-medecin/dossier-medicale-create-medecin.component';
import { DossierMedicaleEditMedecinComponent } from './view/dossier-medicale-medecin/edit-medecin/dossier-medicale-edit-medecin.component';
import { DossierMedicaleViewMedecinComponent } from './view/dossier-medicale-medecin/view-medecin/dossier-medicale-view-medecin.component';
import { DossierMedicaleListMedecinComponent } from './view/dossier-medicale-medecin/list-medecin/dossier-medicale-list-medecin.component';
import { DossierMedicaleMedecinComponent } from './view/dossier-medicale-medecin/dossier-medicale-medecin.component';
import { DiagnosticCreateMedecinComponent } from './view/diagnostic-medecin/create-medecin/diagnostic-create-medecin.component';
import { DiagnosticEditMedecinComponent } from './view/diagnostic-medecin/edit-medecin/diagnostic-edit-medecin.component';
import { DiagnosticViewMedecinComponent } from './view/diagnostic-medecin/view-medecin/diagnostic-view-medecin.component';
import { DiagnosticListMedecinComponent } from './view/diagnostic-medecin/list-medecin/diagnostic-list-medecin.component';
import { DiagnosticMedecinComponent } from './view/diagnostic-medecin/diagnostic-medecin.component';
import { CompteRenduCreateMedecinComponent } from './view/compte-rendu-medecin/create-medecin/compte-rendu-create-medecin.component';
import { CompteRenduEditMedecinComponent } from './view/compte-rendu-medecin/edit-medecin/compte-rendu-edit-medecin.component';
import { CompteRenduViewMedecinComponent } from './view/compte-rendu-medecin/view-medecin/compte-rendu-view-medecin.component';
import { CompteRenduListMedecinComponent } from './view/compte-rendu-medecin/list-medecin/compte-rendu-list-medecin.component';
import { CompteRenduMedecinComponent } from './view/compte-rendu-medecin/compte-rendu-medecin.component';
import { RecueilDeDonnesCreateMedecinComponent } from './view/recueil-de-donnes-medecin/create-medecin/recueil-de-donnes-create-medecin.component';
import { RecueilDeDonnesEditMedecinComponent } from './view/recueil-de-donnes-medecin/edit-medecin/recueil-de-donnes-edit-medecin.component';
import { RecueilDeDonnesViewMedecinComponent } from './view/recueil-de-donnes-medecin/view-medecin/recueil-de-donnes-view-medecin.component';
import { RecueilDeDonnesListMedecinComponent } from './view/recueil-de-donnes-medecin/list-medecin/recueil-de-donnes-list-medecin.component';
import { RecueilDeDonnesMedecinComponent } from './view/recueil-de-donnes-medecin/recueil-de-donnes-medecin.component';
import { SexeCreateMedecinComponent } from './view/sexe-medecin/create-medecin/sexe-create-medecin.component';
import { SexeEditMedecinComponent } from './view/sexe-medecin/edit-medecin/sexe-edit-medecin.component';
import { SexeViewMedecinComponent } from './view/sexe-medecin/view-medecin/sexe-view-medecin.component';
import { SexeListMedecinComponent } from './view/sexe-medecin/list-medecin/sexe-list-medecin.component';
import { SexeMedecinComponent } from './view/sexe-medecin/sexe-medecin.component';
import { MedecinCreateMedecinComponent } from './view/medecin-medecin/create-medecin/medecin-create-medecin.component';
import { MedecinEditMedecinComponent } from './view/medecin-medecin/edit-medecin/medecin-edit-medecin.component';
import { MedecinViewMedecinComponent } from './view/medecin-medecin/view-medecin/medecin-view-medecin.component';
import { MedecinListMedecinComponent } from './view/medecin-medecin/list-medecin/medecin-list-medecin.component';
import { MedecinMedecinComponent } from './view/medecin-medecin/medecin-medecin.component';
import { PatientContactCreateMedecinComponent } from './view/patient-contact-medecin/create-medecin/patient-contact-create-medecin.component';
import { PatientContactEditMedecinComponent } from './view/patient-contact-medecin/edit-medecin/patient-contact-edit-medecin.component';
import { PatientContactViewMedecinComponent } from './view/patient-contact-medecin/view-medecin/patient-contact-view-medecin.component';
import { PatientContactListMedecinComponent } from './view/patient-contact-medecin/list-medecin/patient-contact-list-medecin.component';
import { PatientContactMedecinComponent } from './view/patient-contact-medecin/patient-contact-medecin.component';
import { EvoSuivCreateMedecinComponent } from './view/evo-suiv-medecin/create-medecin/evo-suiv-create-medecin.component';
import { EvoSuivEditMedecinComponent } from './view/evo-suiv-medecin/edit-medecin/evo-suiv-edit-medecin.component';
import { EvoSuivViewMedecinComponent } from './view/evo-suiv-medecin/view-medecin/evo-suiv-view-medecin.component';
import { EvoSuivListMedecinComponent } from './view/evo-suiv-medecin/list-medecin/evo-suiv-list-medecin.component';
import { EvoSuivMedecinComponent } from './view/evo-suiv-medecin/evo-suiv-medecin.component';
import { SoinCreateMedecinComponent } from './view/soin-medecin/create-medecin/soin-create-medecin.component';
import { SoinEditMedecinComponent } from './view/soin-medecin/edit-medecin/soin-edit-medecin.component';
import { SoinViewMedecinComponent } from './view/soin-medecin/view-medecin/soin-view-medecin.component';
import { SoinListMedecinComponent } from './view/soin-medecin/list-medecin/soin-list-medecin.component';
import { SoinMedecinComponent } from './view/soin-medecin/soin-medecin.component';
import { PatientCreateMedecinComponent } from './view/patient-medecin/create-medecin/patient-create-medecin.component';
import { PatientEditMedecinComponent } from './view/patient-medecin/edit-medecin/patient-edit-medecin.component';
import { PatientViewMedecinComponent } from './view/patient-medecin/view-medecin/patient-view-medecin.component';
import { PatientListMedecinComponent } from './view/patient-medecin/list-medecin/patient-list-medecin.component';
import { PatientMedecinComponent } from './view/patient-medecin/patient-medecin.component';
import { TypeImageCreateMedecinComponent } from './view/type-image-medecin/create-medecin/type-image-create-medecin.component';
import { TypeImageEditMedecinComponent } from './view/type-image-medecin/edit-medecin/type-image-edit-medecin.component';
import { TypeImageViewMedecinComponent } from './view/type-image-medecin/view-medecin/type-image-view-medecin.component';
import { TypeImageListMedecinComponent } from './view/type-image-medecin/list-medecin/type-image-list-medecin.component';
import { TypeImageMedecinComponent } from './view/type-image-medecin/type-image-medecin.component';
import { EtudiantCreateMedecinComponent } from './view/etudiant-medecin/create-medecin/etudiant-create-medecin.component';
import { EtudiantEditMedecinComponent } from './view/etudiant-medecin/edit-medecin/etudiant-edit-medecin.component';
import { EtudiantViewMedecinComponent } from './view/etudiant-medecin/view-medecin/etudiant-view-medecin.component';
import { EtudiantListMedecinComponent } from './view/etudiant-medecin/list-medecin/etudiant-list-medecin.component';
import { EtudiantMedecinComponent } from './view/etudiant-medecin/etudiant-medecin.component';
import { DossierMedicaleTagCreateMedecinComponent } from './view/dossier-medicale-tag-medecin/create-medecin/dossier-medicale-tag-create-medecin.component';
import { DossierMedicaleTagEditMedecinComponent } from './view/dossier-medicale-tag-medecin/edit-medecin/dossier-medicale-tag-edit-medecin.component';
import { DossierMedicaleTagViewMedecinComponent } from './view/dossier-medicale-tag-medecin/view-medecin/dossier-medicale-tag-view-medecin.component';
import { DossierMedicaleTagListMedecinComponent } from './view/dossier-medicale-tag-medecin/list-medecin/dossier-medicale-tag-list-medecin.component';
import { DossierMedicaleTagMedecinComponent } from './view/dossier-medicale-tag-medecin/dossier-medicale-tag-medecin.component';
import { VilleCreateMedecinComponent } from './view/ville-medecin/create-medecin/ville-create-medecin.component';
import { VilleEditMedecinComponent } from './view/ville-medecin/edit-medecin/ville-edit-medecin.component';
import { VilleViewMedecinComponent } from './view/ville-medecin/view-medecin/ville-view-medecin.component';
import { VilleListMedecinComponent } from './view/ville-medecin/list-medecin/ville-list-medecin.component';
import { VilleMedecinComponent } from './view/ville-medecin/ville-medecin.component';
import { PhaseImageCreateMedecinComponent } from './view/phase-image-medecin/create-medecin/phase-image-create-medecin.component';
import { PhaseImageEditMedecinComponent } from './view/phase-image-medecin/edit-medecin/phase-image-edit-medecin.component';
import { PhaseImageViewMedecinComponent } from './view/phase-image-medecin/view-medecin/phase-image-view-medecin.component';
import { PhaseImageListMedecinComponent } from './view/phase-image-medecin/list-medecin/phase-image-list-medecin.component';
import { PhaseImageMedecinComponent } from './view/phase-image-medecin/phase-image-medecin.component';

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
   LoginMedecinComponent,
   RegisterMedecinComponent,
    BiologieCreateMedecinComponent,
    BiologieListMedecinComponent,
    BiologieViewMedecinComponent,
    BiologieEditMedecinComponent,
    BiologieMedecinComponent,
    InfirmierCreateMedecinComponent,
    InfirmierListMedecinComponent,
    InfirmierViewMedecinComponent,
    InfirmierEditMedecinComponent,
    InfirmierMedecinComponent,
    RelationCreateMedecinComponent,
    RelationListMedecinComponent,
    RelationViewMedecinComponent,
    RelationEditMedecinComponent,
    RelationMedecinComponent,
    ExamenCreateMedecinComponent,
    ExamenListMedecinComponent,
    ExamenViewMedecinComponent,
    ExamenEditMedecinComponent,
    ExamenMedecinComponent,
    ChercheurCreateMedecinComponent,
    ChercheurListMedecinComponent,
    ChercheurViewMedecinComponent,
    ChercheurEditMedecinComponent,
    ChercheurMedecinComponent,
    CliniqueCreateMedecinComponent,
    CliniqueListMedecinComponent,
    CliniqueViewMedecinComponent,
    CliniqueEditMedecinComponent,
    CliniqueMedecinComponent,
    TagCreateMedecinComponent,
    TagListMedecinComponent,
    TagViewMedecinComponent,
    TagEditMedecinComponent,
    TagMedecinComponent,
    ImagerieCreateMedecinComponent,
    ImagerieListMedecinComponent,
    ImagerieViewMedecinComponent,
    ImagerieEditMedecinComponent,
    ImagerieMedecinComponent,
    TraitementCreateMedecinComponent,
    TraitementListMedecinComponent,
    TraitementViewMedecinComponent,
    TraitementEditMedecinComponent,
    TraitementMedecinComponent,
    DossierMedicaleCreateMedecinComponent,
    DossierMedicaleListMedecinComponent,
    DossierMedicaleViewMedecinComponent,
    DossierMedicaleEditMedecinComponent,
    DossierMedicaleMedecinComponent,
    DiagnosticCreateMedecinComponent,
    DiagnosticListMedecinComponent,
    DiagnosticViewMedecinComponent,
    DiagnosticEditMedecinComponent,
    DiagnosticMedecinComponent,
    CompteRenduCreateMedecinComponent,
    CompteRenduListMedecinComponent,
    CompteRenduViewMedecinComponent,
    CompteRenduEditMedecinComponent,
    CompteRenduMedecinComponent,
    RecueilDeDonnesCreateMedecinComponent,
    RecueilDeDonnesListMedecinComponent,
    RecueilDeDonnesViewMedecinComponent,
    RecueilDeDonnesEditMedecinComponent,
    RecueilDeDonnesMedecinComponent,
    SexeCreateMedecinComponent,
    SexeListMedecinComponent,
    SexeViewMedecinComponent,
    SexeEditMedecinComponent,
    SexeMedecinComponent,
    MedecinCreateMedecinComponent,
    MedecinListMedecinComponent,
    MedecinViewMedecinComponent,
    MedecinEditMedecinComponent,
    MedecinMedecinComponent,
    PatientContactCreateMedecinComponent,
    PatientContactListMedecinComponent,
    PatientContactViewMedecinComponent,
    PatientContactEditMedecinComponent,
    PatientContactMedecinComponent,
    EvoSuivCreateMedecinComponent,
    EvoSuivListMedecinComponent,
    EvoSuivViewMedecinComponent,
    EvoSuivEditMedecinComponent,
    EvoSuivMedecinComponent,
    SoinCreateMedecinComponent,
    SoinListMedecinComponent,
    SoinViewMedecinComponent,
    SoinEditMedecinComponent,
    SoinMedecinComponent,
    PatientCreateMedecinComponent,
    PatientListMedecinComponent,
    PatientViewMedecinComponent,
    PatientEditMedecinComponent,
    PatientMedecinComponent,
    TypeImageCreateMedecinComponent,
    TypeImageListMedecinComponent,
    TypeImageViewMedecinComponent,
    TypeImageEditMedecinComponent,
    TypeImageMedecinComponent,
    EtudiantCreateMedecinComponent,
    EtudiantListMedecinComponent,
    EtudiantViewMedecinComponent,
    EtudiantEditMedecinComponent,
    EtudiantMedecinComponent,
    DossierMedicaleTagCreateMedecinComponent,
    DossierMedicaleTagListMedecinComponent,
    DossierMedicaleTagViewMedecinComponent,
    DossierMedicaleTagEditMedecinComponent,
    DossierMedicaleTagMedecinComponent,
    VilleCreateMedecinComponent,
    VilleListMedecinComponent,
    VilleViewMedecinComponent,
    VilleEditMedecinComponent,
    VilleMedecinComponent,
    PhaseImageCreateMedecinComponent,
    PhaseImageListMedecinComponent,
    PhaseImageViewMedecinComponent,
    PhaseImageEditMedecinComponent,
    PhaseImageMedecinComponent,
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
  LoginMedecinComponent,
  RegisterMedecinComponent,
  BiologieCreateMedecinComponent,
  BiologieListMedecinComponent,
  BiologieViewMedecinComponent,
  BiologieEditMedecinComponent,
  BiologieMedecinComponent,
  InfirmierCreateMedecinComponent,
  InfirmierListMedecinComponent,
  InfirmierViewMedecinComponent,
  InfirmierEditMedecinComponent,
  InfirmierMedecinComponent,
  RelationCreateMedecinComponent,
  RelationListMedecinComponent,
  RelationViewMedecinComponent,
  RelationEditMedecinComponent,
  RelationMedecinComponent,
  ExamenCreateMedecinComponent,
  ExamenListMedecinComponent,
  ExamenViewMedecinComponent,
  ExamenEditMedecinComponent,
  ExamenMedecinComponent,
  ChercheurCreateMedecinComponent,
  ChercheurListMedecinComponent,
  ChercheurViewMedecinComponent,
  ChercheurEditMedecinComponent,
  ChercheurMedecinComponent,
  CliniqueCreateMedecinComponent,
  CliniqueListMedecinComponent,
  CliniqueViewMedecinComponent,
  CliniqueEditMedecinComponent,
  CliniqueMedecinComponent,
  TagCreateMedecinComponent,
  TagListMedecinComponent,
  TagViewMedecinComponent,
  TagEditMedecinComponent,
  TagMedecinComponent,
  ImagerieCreateMedecinComponent,
  ImagerieListMedecinComponent,
  ImagerieViewMedecinComponent,
  ImagerieEditMedecinComponent,
  ImagerieMedecinComponent,
  TraitementCreateMedecinComponent,
  TraitementListMedecinComponent,
  TraitementViewMedecinComponent,
  TraitementEditMedecinComponent,
  TraitementMedecinComponent,
  DossierMedicaleCreateMedecinComponent,
  DossierMedicaleListMedecinComponent,
  DossierMedicaleViewMedecinComponent,
  DossierMedicaleEditMedecinComponent,
  DossierMedicaleMedecinComponent,
  DiagnosticCreateMedecinComponent,
  DiagnosticListMedecinComponent,
  DiagnosticViewMedecinComponent,
  DiagnosticEditMedecinComponent,
  DiagnosticMedecinComponent,
  CompteRenduCreateMedecinComponent,
  CompteRenduListMedecinComponent,
  CompteRenduViewMedecinComponent,
  CompteRenduEditMedecinComponent,
  CompteRenduMedecinComponent,
  RecueilDeDonnesCreateMedecinComponent,
  RecueilDeDonnesListMedecinComponent,
  RecueilDeDonnesViewMedecinComponent,
  RecueilDeDonnesEditMedecinComponent,
  RecueilDeDonnesMedecinComponent,
  SexeCreateMedecinComponent,
  SexeListMedecinComponent,
  SexeViewMedecinComponent,
  SexeEditMedecinComponent,
  SexeMedecinComponent,
  MedecinCreateMedecinComponent,
  MedecinListMedecinComponent,
  MedecinViewMedecinComponent,
  MedecinEditMedecinComponent,
  MedecinMedecinComponent,
  PatientContactCreateMedecinComponent,
  PatientContactListMedecinComponent,
  PatientContactViewMedecinComponent,
  PatientContactEditMedecinComponent,
  PatientContactMedecinComponent,
  EvoSuivCreateMedecinComponent,
  EvoSuivListMedecinComponent,
  EvoSuivViewMedecinComponent,
  EvoSuivEditMedecinComponent,
  EvoSuivMedecinComponent,
  SoinCreateMedecinComponent,
  SoinListMedecinComponent,
  SoinViewMedecinComponent,
  SoinEditMedecinComponent,
  SoinMedecinComponent,
  PatientCreateMedecinComponent,
  PatientListMedecinComponent,
  PatientViewMedecinComponent,
  PatientEditMedecinComponent,
  PatientMedecinComponent,
  TypeImageCreateMedecinComponent,
  TypeImageListMedecinComponent,
  TypeImageViewMedecinComponent,
  TypeImageEditMedecinComponent,
  TypeImageMedecinComponent,
  EtudiantCreateMedecinComponent,
  EtudiantListMedecinComponent,
  EtudiantViewMedecinComponent,
  EtudiantEditMedecinComponent,
  EtudiantMedecinComponent,
  DossierMedicaleTagCreateMedecinComponent,
  DossierMedicaleTagListMedecinComponent,
  DossierMedicaleTagViewMedecinComponent,
  DossierMedicaleTagEditMedecinComponent,
  DossierMedicaleTagMedecinComponent,
  VilleCreateMedecinComponent,
  VilleListMedecinComponent,
  VilleViewMedecinComponent,
  VilleEditMedecinComponent,
  VilleMedecinComponent,
  PhaseImageCreateMedecinComponent,
  PhaseImageListMedecinComponent,
  PhaseImageViewMedecinComponent,
  PhaseImageEditMedecinComponent,
  PhaseImageMedecinComponent,
  ],
  entryComponents: [],
})
export class MedecinModule { }
