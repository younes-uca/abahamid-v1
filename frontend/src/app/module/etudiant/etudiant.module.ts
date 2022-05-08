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
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { ArchivableEtudiantModule } from './view/archivable/archivable.module';


import { BiologieCreateEtudiantComponent } from './view/biologie-etudiant/create-etudiant/biologie-create-etudiant.component';
import { BiologieEditEtudiantComponent } from './view/biologie-etudiant/edit-etudiant/biologie-edit-etudiant.component';
import { BiologieViewEtudiantComponent } from './view/biologie-etudiant/view-etudiant/biologie-view-etudiant.component';
import { BiologieListEtudiantComponent } from './view/biologie-etudiant/list-etudiant/biologie-list-etudiant.component';
import { BiologieEtudiantComponent } from './view/biologie-etudiant/biologie-etudiant.component';
import { InfirmierCreateEtudiantComponent } from './view/infirmier-etudiant/create-etudiant/infirmier-create-etudiant.component';
import { InfirmierEditEtudiantComponent } from './view/infirmier-etudiant/edit-etudiant/infirmier-edit-etudiant.component';
import { InfirmierViewEtudiantComponent } from './view/infirmier-etudiant/view-etudiant/infirmier-view-etudiant.component';
import { InfirmierListEtudiantComponent } from './view/infirmier-etudiant/list-etudiant/infirmier-list-etudiant.component';
import { InfirmierEtudiantComponent } from './view/infirmier-etudiant/infirmier-etudiant.component';
import { RelationCreateEtudiantComponent } from './view/relation-etudiant/create-etudiant/relation-create-etudiant.component';
import { RelationEditEtudiantComponent } from './view/relation-etudiant/edit-etudiant/relation-edit-etudiant.component';
import { RelationViewEtudiantComponent } from './view/relation-etudiant/view-etudiant/relation-view-etudiant.component';
import { RelationListEtudiantComponent } from './view/relation-etudiant/list-etudiant/relation-list-etudiant.component';
import { RelationEtudiantComponent } from './view/relation-etudiant/relation-etudiant.component';
import { ExamenCreateEtudiantComponent } from './view/examen-etudiant/create-etudiant/examen-create-etudiant.component';
import { ExamenEditEtudiantComponent } from './view/examen-etudiant/edit-etudiant/examen-edit-etudiant.component';
import { ExamenViewEtudiantComponent } from './view/examen-etudiant/view-etudiant/examen-view-etudiant.component';
import { ExamenListEtudiantComponent } from './view/examen-etudiant/list-etudiant/examen-list-etudiant.component';
import { ExamenEtudiantComponent } from './view/examen-etudiant/examen-etudiant.component';
import { ChercheurCreateEtudiantComponent } from './view/chercheur-etudiant/create-etudiant/chercheur-create-etudiant.component';
import { ChercheurEditEtudiantComponent } from './view/chercheur-etudiant/edit-etudiant/chercheur-edit-etudiant.component';
import { ChercheurViewEtudiantComponent } from './view/chercheur-etudiant/view-etudiant/chercheur-view-etudiant.component';
import { ChercheurListEtudiantComponent } from './view/chercheur-etudiant/list-etudiant/chercheur-list-etudiant.component';
import { ChercheurEtudiantComponent } from './view/chercheur-etudiant/chercheur-etudiant.component';
import { CliniqueCreateEtudiantComponent } from './view/clinique-etudiant/create-etudiant/clinique-create-etudiant.component';
import { CliniqueEditEtudiantComponent } from './view/clinique-etudiant/edit-etudiant/clinique-edit-etudiant.component';
import { CliniqueViewEtudiantComponent } from './view/clinique-etudiant/view-etudiant/clinique-view-etudiant.component';
import { CliniqueListEtudiantComponent } from './view/clinique-etudiant/list-etudiant/clinique-list-etudiant.component';
import { CliniqueEtudiantComponent } from './view/clinique-etudiant/clinique-etudiant.component';
import { TagCreateEtudiantComponent } from './view/tag-etudiant/create-etudiant/tag-create-etudiant.component';
import { TagEditEtudiantComponent } from './view/tag-etudiant/edit-etudiant/tag-edit-etudiant.component';
import { TagViewEtudiantComponent } from './view/tag-etudiant/view-etudiant/tag-view-etudiant.component';
import { TagListEtudiantComponent } from './view/tag-etudiant/list-etudiant/tag-list-etudiant.component';
import { TagEtudiantComponent } from './view/tag-etudiant/tag-etudiant.component';
import { ImagerieCreateEtudiantComponent } from './view/imagerie-etudiant/create-etudiant/imagerie-create-etudiant.component';
import { ImagerieEditEtudiantComponent } from './view/imagerie-etudiant/edit-etudiant/imagerie-edit-etudiant.component';
import { ImagerieViewEtudiantComponent } from './view/imagerie-etudiant/view-etudiant/imagerie-view-etudiant.component';
import { ImagerieListEtudiantComponent } from './view/imagerie-etudiant/list-etudiant/imagerie-list-etudiant.component';
import { ImagerieEtudiantComponent } from './view/imagerie-etudiant/imagerie-etudiant.component';
import { TraitementCreateEtudiantComponent } from './view/traitement-etudiant/create-etudiant/traitement-create-etudiant.component';
import { TraitementEditEtudiantComponent } from './view/traitement-etudiant/edit-etudiant/traitement-edit-etudiant.component';
import { TraitementViewEtudiantComponent } from './view/traitement-etudiant/view-etudiant/traitement-view-etudiant.component';
import { TraitementListEtudiantComponent } from './view/traitement-etudiant/list-etudiant/traitement-list-etudiant.component';
import { TraitementEtudiantComponent } from './view/traitement-etudiant/traitement-etudiant.component';
import { DossierMedicaleCreateEtudiantComponent } from './view/dossier-medicale-etudiant/create-etudiant/dossier-medicale-create-etudiant.component';
import { DossierMedicaleEditEtudiantComponent } from './view/dossier-medicale-etudiant/edit-etudiant/dossier-medicale-edit-etudiant.component';
import { DossierMedicaleViewEtudiantComponent } from './view/dossier-medicale-etudiant/view-etudiant/dossier-medicale-view-etudiant.component';
import { DossierMedicaleListEtudiantComponent } from './view/dossier-medicale-etudiant/list-etudiant/dossier-medicale-list-etudiant.component';
import { DossierMedicaleEtudiantComponent } from './view/dossier-medicale-etudiant/dossier-medicale-etudiant.component';
import { DiagnosticCreateEtudiantComponent } from './view/diagnostic-etudiant/create-etudiant/diagnostic-create-etudiant.component';
import { DiagnosticEditEtudiantComponent } from './view/diagnostic-etudiant/edit-etudiant/diagnostic-edit-etudiant.component';
import { DiagnosticViewEtudiantComponent } from './view/diagnostic-etudiant/view-etudiant/diagnostic-view-etudiant.component';
import { DiagnosticListEtudiantComponent } from './view/diagnostic-etudiant/list-etudiant/diagnostic-list-etudiant.component';
import { DiagnosticEtudiantComponent } from './view/diagnostic-etudiant/diagnostic-etudiant.component';
import { CompteRenduCreateEtudiantComponent } from './view/compte-rendu-etudiant/create-etudiant/compte-rendu-create-etudiant.component';
import { CompteRenduEditEtudiantComponent } from './view/compte-rendu-etudiant/edit-etudiant/compte-rendu-edit-etudiant.component';
import { CompteRenduViewEtudiantComponent } from './view/compte-rendu-etudiant/view-etudiant/compte-rendu-view-etudiant.component';
import { CompteRenduListEtudiantComponent } from './view/compte-rendu-etudiant/list-etudiant/compte-rendu-list-etudiant.component';
import { CompteRenduEtudiantComponent } from './view/compte-rendu-etudiant/compte-rendu-etudiant.component';
import { RecueilDeDonnesCreateEtudiantComponent } from './view/recueil-de-donnes-etudiant/create-etudiant/recueil-de-donnes-create-etudiant.component';
import { RecueilDeDonnesEditEtudiantComponent } from './view/recueil-de-donnes-etudiant/edit-etudiant/recueil-de-donnes-edit-etudiant.component';
import { RecueilDeDonnesViewEtudiantComponent } from './view/recueil-de-donnes-etudiant/view-etudiant/recueil-de-donnes-view-etudiant.component';
import { RecueilDeDonnesListEtudiantComponent } from './view/recueil-de-donnes-etudiant/list-etudiant/recueil-de-donnes-list-etudiant.component';
import { RecueilDeDonnesEtudiantComponent } from './view/recueil-de-donnes-etudiant/recueil-de-donnes-etudiant.component';
import { SexeCreateEtudiantComponent } from './view/sexe-etudiant/create-etudiant/sexe-create-etudiant.component';
import { SexeEditEtudiantComponent } from './view/sexe-etudiant/edit-etudiant/sexe-edit-etudiant.component';
import { SexeViewEtudiantComponent } from './view/sexe-etudiant/view-etudiant/sexe-view-etudiant.component';
import { SexeListEtudiantComponent } from './view/sexe-etudiant/list-etudiant/sexe-list-etudiant.component';
import { SexeEtudiantComponent } from './view/sexe-etudiant/sexe-etudiant.component';
import { MedecinCreateEtudiantComponent } from './view/medecin-etudiant/create-etudiant/medecin-create-etudiant.component';
import { MedecinEditEtudiantComponent } from './view/medecin-etudiant/edit-etudiant/medecin-edit-etudiant.component';
import { MedecinViewEtudiantComponent } from './view/medecin-etudiant/view-etudiant/medecin-view-etudiant.component';
import { MedecinListEtudiantComponent } from './view/medecin-etudiant/list-etudiant/medecin-list-etudiant.component';
import { MedecinEtudiantComponent } from './view/medecin-etudiant/medecin-etudiant.component';
import { PatientContactCreateEtudiantComponent } from './view/patient-contact-etudiant/create-etudiant/patient-contact-create-etudiant.component';
import { PatientContactEditEtudiantComponent } from './view/patient-contact-etudiant/edit-etudiant/patient-contact-edit-etudiant.component';
import { PatientContactViewEtudiantComponent } from './view/patient-contact-etudiant/view-etudiant/patient-contact-view-etudiant.component';
import { PatientContactListEtudiantComponent } from './view/patient-contact-etudiant/list-etudiant/patient-contact-list-etudiant.component';
import { PatientContactEtudiantComponent } from './view/patient-contact-etudiant/patient-contact-etudiant.component';
import { EvoSuivCreateEtudiantComponent } from './view/evo-suiv-etudiant/create-etudiant/evo-suiv-create-etudiant.component';
import { EvoSuivEditEtudiantComponent } from './view/evo-suiv-etudiant/edit-etudiant/evo-suiv-edit-etudiant.component';
import { EvoSuivViewEtudiantComponent } from './view/evo-suiv-etudiant/view-etudiant/evo-suiv-view-etudiant.component';
import { EvoSuivListEtudiantComponent } from './view/evo-suiv-etudiant/list-etudiant/evo-suiv-list-etudiant.component';
import { EvoSuivEtudiantComponent } from './view/evo-suiv-etudiant/evo-suiv-etudiant.component';
import { SoinCreateEtudiantComponent } from './view/soin-etudiant/create-etudiant/soin-create-etudiant.component';
import { SoinEditEtudiantComponent } from './view/soin-etudiant/edit-etudiant/soin-edit-etudiant.component';
import { SoinViewEtudiantComponent } from './view/soin-etudiant/view-etudiant/soin-view-etudiant.component';
import { SoinListEtudiantComponent } from './view/soin-etudiant/list-etudiant/soin-list-etudiant.component';
import { SoinEtudiantComponent } from './view/soin-etudiant/soin-etudiant.component';
import { PatientCreateEtudiantComponent } from './view/patient-etudiant/create-etudiant/patient-create-etudiant.component';
import { PatientEditEtudiantComponent } from './view/patient-etudiant/edit-etudiant/patient-edit-etudiant.component';
import { PatientViewEtudiantComponent } from './view/patient-etudiant/view-etudiant/patient-view-etudiant.component';
import { PatientListEtudiantComponent } from './view/patient-etudiant/list-etudiant/patient-list-etudiant.component';
import { PatientEtudiantComponent } from './view/patient-etudiant/patient-etudiant.component';
import { TypeImageCreateEtudiantComponent } from './view/type-image-etudiant/create-etudiant/type-image-create-etudiant.component';
import { TypeImageEditEtudiantComponent } from './view/type-image-etudiant/edit-etudiant/type-image-edit-etudiant.component';
import { TypeImageViewEtudiantComponent } from './view/type-image-etudiant/view-etudiant/type-image-view-etudiant.component';
import { TypeImageListEtudiantComponent } from './view/type-image-etudiant/list-etudiant/type-image-list-etudiant.component';
import { TypeImageEtudiantComponent } from './view/type-image-etudiant/type-image-etudiant.component';
import { EtudiantCreateEtudiantComponent } from './view/etudiant-etudiant/create-etudiant/etudiant-create-etudiant.component';
import { EtudiantEditEtudiantComponent } from './view/etudiant-etudiant/edit-etudiant/etudiant-edit-etudiant.component';
import { EtudiantViewEtudiantComponent } from './view/etudiant-etudiant/view-etudiant/etudiant-view-etudiant.component';
import { EtudiantListEtudiantComponent } from './view/etudiant-etudiant/list-etudiant/etudiant-list-etudiant.component';
import { EtudiantEtudiantComponent } from './view/etudiant-etudiant/etudiant-etudiant.component';
import { DossierMedicaleTagCreateEtudiantComponent } from './view/dossier-medicale-tag-etudiant/create-etudiant/dossier-medicale-tag-create-etudiant.component';
import { DossierMedicaleTagEditEtudiantComponent } from './view/dossier-medicale-tag-etudiant/edit-etudiant/dossier-medicale-tag-edit-etudiant.component';
import { DossierMedicaleTagViewEtudiantComponent } from './view/dossier-medicale-tag-etudiant/view-etudiant/dossier-medicale-tag-view-etudiant.component';
import { DossierMedicaleTagListEtudiantComponent } from './view/dossier-medicale-tag-etudiant/list-etudiant/dossier-medicale-tag-list-etudiant.component';
import { DossierMedicaleTagEtudiantComponent } from './view/dossier-medicale-tag-etudiant/dossier-medicale-tag-etudiant.component';
import { VilleCreateEtudiantComponent } from './view/ville-etudiant/create-etudiant/ville-create-etudiant.component';
import { VilleEditEtudiantComponent } from './view/ville-etudiant/edit-etudiant/ville-edit-etudiant.component';
import { VilleViewEtudiantComponent } from './view/ville-etudiant/view-etudiant/ville-view-etudiant.component';
import { VilleListEtudiantComponent } from './view/ville-etudiant/list-etudiant/ville-list-etudiant.component';
import { VilleEtudiantComponent } from './view/ville-etudiant/ville-etudiant.component';
import { PhaseImageCreateEtudiantComponent } from './view/phase-image-etudiant/create-etudiant/phase-image-create-etudiant.component';
import { PhaseImageEditEtudiantComponent } from './view/phase-image-etudiant/edit-etudiant/phase-image-edit-etudiant.component';
import { PhaseImageViewEtudiantComponent } from './view/phase-image-etudiant/view-etudiant/phase-image-view-etudiant.component';
import { PhaseImageListEtudiantComponent } from './view/phase-image-etudiant/list-etudiant/phase-image-list-etudiant.component';
import { PhaseImageEtudiantComponent } from './view/phase-image-etudiant/phase-image-etudiant.component';

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
   LoginEtudiantComponent,
   RegisterEtudiantComponent,
    BiologieCreateEtudiantComponent,
    BiologieListEtudiantComponent,
    BiologieViewEtudiantComponent,
    BiologieEditEtudiantComponent,
    BiologieEtudiantComponent,
    InfirmierCreateEtudiantComponent,
    InfirmierListEtudiantComponent,
    InfirmierViewEtudiantComponent,
    InfirmierEditEtudiantComponent,
    InfirmierEtudiantComponent,
    RelationCreateEtudiantComponent,
    RelationListEtudiantComponent,
    RelationViewEtudiantComponent,
    RelationEditEtudiantComponent,
    RelationEtudiantComponent,
    ExamenCreateEtudiantComponent,
    ExamenListEtudiantComponent,
    ExamenViewEtudiantComponent,
    ExamenEditEtudiantComponent,
    ExamenEtudiantComponent,
    ChercheurCreateEtudiantComponent,
    ChercheurListEtudiantComponent,
    ChercheurViewEtudiantComponent,
    ChercheurEditEtudiantComponent,
    ChercheurEtudiantComponent,
    CliniqueCreateEtudiantComponent,
    CliniqueListEtudiantComponent,
    CliniqueViewEtudiantComponent,
    CliniqueEditEtudiantComponent,
    CliniqueEtudiantComponent,
    TagCreateEtudiantComponent,
    TagListEtudiantComponent,
    TagViewEtudiantComponent,
    TagEditEtudiantComponent,
    TagEtudiantComponent,
    ImagerieCreateEtudiantComponent,
    ImagerieListEtudiantComponent,
    ImagerieViewEtudiantComponent,
    ImagerieEditEtudiantComponent,
    ImagerieEtudiantComponent,
    TraitementCreateEtudiantComponent,
    TraitementListEtudiantComponent,
    TraitementViewEtudiantComponent,
    TraitementEditEtudiantComponent,
    TraitementEtudiantComponent,
    DossierMedicaleCreateEtudiantComponent,
    DossierMedicaleListEtudiantComponent,
    DossierMedicaleViewEtudiantComponent,
    DossierMedicaleEditEtudiantComponent,
    DossierMedicaleEtudiantComponent,
    DiagnosticCreateEtudiantComponent,
    DiagnosticListEtudiantComponent,
    DiagnosticViewEtudiantComponent,
    DiagnosticEditEtudiantComponent,
    DiagnosticEtudiantComponent,
    CompteRenduCreateEtudiantComponent,
    CompteRenduListEtudiantComponent,
    CompteRenduViewEtudiantComponent,
    CompteRenduEditEtudiantComponent,
    CompteRenduEtudiantComponent,
    RecueilDeDonnesCreateEtudiantComponent,
    RecueilDeDonnesListEtudiantComponent,
    RecueilDeDonnesViewEtudiantComponent,
    RecueilDeDonnesEditEtudiantComponent,
    RecueilDeDonnesEtudiantComponent,
    SexeCreateEtudiantComponent,
    SexeListEtudiantComponent,
    SexeViewEtudiantComponent,
    SexeEditEtudiantComponent,
    SexeEtudiantComponent,
    MedecinCreateEtudiantComponent,
    MedecinListEtudiantComponent,
    MedecinViewEtudiantComponent,
    MedecinEditEtudiantComponent,
    MedecinEtudiantComponent,
    PatientContactCreateEtudiantComponent,
    PatientContactListEtudiantComponent,
    PatientContactViewEtudiantComponent,
    PatientContactEditEtudiantComponent,
    PatientContactEtudiantComponent,
    EvoSuivCreateEtudiantComponent,
    EvoSuivListEtudiantComponent,
    EvoSuivViewEtudiantComponent,
    EvoSuivEditEtudiantComponent,
    EvoSuivEtudiantComponent,
    SoinCreateEtudiantComponent,
    SoinListEtudiantComponent,
    SoinViewEtudiantComponent,
    SoinEditEtudiantComponent,
    SoinEtudiantComponent,
    PatientCreateEtudiantComponent,
    PatientListEtudiantComponent,
    PatientViewEtudiantComponent,
    PatientEditEtudiantComponent,
    PatientEtudiantComponent,
    TypeImageCreateEtudiantComponent,
    TypeImageListEtudiantComponent,
    TypeImageViewEtudiantComponent,
    TypeImageEditEtudiantComponent,
    TypeImageEtudiantComponent,
    EtudiantCreateEtudiantComponent,
    EtudiantListEtudiantComponent,
    EtudiantViewEtudiantComponent,
    EtudiantEditEtudiantComponent,
    EtudiantEtudiantComponent,
    DossierMedicaleTagCreateEtudiantComponent,
    DossierMedicaleTagListEtudiantComponent,
    DossierMedicaleTagViewEtudiantComponent,
    DossierMedicaleTagEditEtudiantComponent,
    DossierMedicaleTagEtudiantComponent,
    VilleCreateEtudiantComponent,
    VilleListEtudiantComponent,
    VilleViewEtudiantComponent,
    VilleEditEtudiantComponent,
    VilleEtudiantComponent,
    PhaseImageCreateEtudiantComponent,
    PhaseImageListEtudiantComponent,
    PhaseImageViewEtudiantComponent,
    PhaseImageEditEtudiantComponent,
    PhaseImageEtudiantComponent,
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
    MultiSelectModule,
    ArchivableEtudiantModule
  ],
  exports: [
  LoginEtudiantComponent,
  RegisterEtudiantComponent,
  BiologieCreateEtudiantComponent,
  BiologieListEtudiantComponent,
  BiologieViewEtudiantComponent,
  BiologieEditEtudiantComponent,
  BiologieEtudiantComponent,
  InfirmierCreateEtudiantComponent,
  InfirmierListEtudiantComponent,
  InfirmierViewEtudiantComponent,
  InfirmierEditEtudiantComponent,
  InfirmierEtudiantComponent,
  RelationCreateEtudiantComponent,
  RelationListEtudiantComponent,
  RelationViewEtudiantComponent,
  RelationEditEtudiantComponent,
  RelationEtudiantComponent,
  ExamenCreateEtudiantComponent,
  ExamenListEtudiantComponent,
  ExamenViewEtudiantComponent,
  ExamenEditEtudiantComponent,
  ExamenEtudiantComponent,
  ChercheurCreateEtudiantComponent,
  ChercheurListEtudiantComponent,
  ChercheurViewEtudiantComponent,
  ChercheurEditEtudiantComponent,
  ChercheurEtudiantComponent,
  CliniqueCreateEtudiantComponent,
  CliniqueListEtudiantComponent,
  CliniqueViewEtudiantComponent,
  CliniqueEditEtudiantComponent,
  CliniqueEtudiantComponent,
  TagCreateEtudiantComponent,
  TagListEtudiantComponent,
  TagViewEtudiantComponent,
  TagEditEtudiantComponent,
  TagEtudiantComponent,
  ImagerieCreateEtudiantComponent,
  ImagerieListEtudiantComponent,
  ImagerieViewEtudiantComponent,
  ImagerieEditEtudiantComponent,
  ImagerieEtudiantComponent,
  TraitementCreateEtudiantComponent,
  TraitementListEtudiantComponent,
  TraitementViewEtudiantComponent,
  TraitementEditEtudiantComponent,
  TraitementEtudiantComponent,
  DossierMedicaleCreateEtudiantComponent,
  DossierMedicaleListEtudiantComponent,
  DossierMedicaleViewEtudiantComponent,
  DossierMedicaleEditEtudiantComponent,
  DossierMedicaleEtudiantComponent,
  DiagnosticCreateEtudiantComponent,
  DiagnosticListEtudiantComponent,
  DiagnosticViewEtudiantComponent,
  DiagnosticEditEtudiantComponent,
  DiagnosticEtudiantComponent,
  CompteRenduCreateEtudiantComponent,
  CompteRenduListEtudiantComponent,
  CompteRenduViewEtudiantComponent,
  CompteRenduEditEtudiantComponent,
  CompteRenduEtudiantComponent,
  RecueilDeDonnesCreateEtudiantComponent,
  RecueilDeDonnesListEtudiantComponent,
  RecueilDeDonnesViewEtudiantComponent,
  RecueilDeDonnesEditEtudiantComponent,
  RecueilDeDonnesEtudiantComponent,
  SexeCreateEtudiantComponent,
  SexeListEtudiantComponent,
  SexeViewEtudiantComponent,
  SexeEditEtudiantComponent,
  SexeEtudiantComponent,
  MedecinCreateEtudiantComponent,
  MedecinListEtudiantComponent,
  MedecinViewEtudiantComponent,
  MedecinEditEtudiantComponent,
  MedecinEtudiantComponent,
  PatientContactCreateEtudiantComponent,
  PatientContactListEtudiantComponent,
  PatientContactViewEtudiantComponent,
  PatientContactEditEtudiantComponent,
  PatientContactEtudiantComponent,
  EvoSuivCreateEtudiantComponent,
  EvoSuivListEtudiantComponent,
  EvoSuivViewEtudiantComponent,
  EvoSuivEditEtudiantComponent,
  EvoSuivEtudiantComponent,
  SoinCreateEtudiantComponent,
  SoinListEtudiantComponent,
  SoinViewEtudiantComponent,
  SoinEditEtudiantComponent,
  SoinEtudiantComponent,
  PatientCreateEtudiantComponent,
  PatientListEtudiantComponent,
  PatientViewEtudiantComponent,
  PatientEditEtudiantComponent,
  PatientEtudiantComponent,
  TypeImageCreateEtudiantComponent,
  TypeImageListEtudiantComponent,
  TypeImageViewEtudiantComponent,
  TypeImageEditEtudiantComponent,
  TypeImageEtudiantComponent,
  EtudiantCreateEtudiantComponent,
  EtudiantListEtudiantComponent,
  EtudiantViewEtudiantComponent,
  EtudiantEditEtudiantComponent,
  EtudiantEtudiantComponent,
  DossierMedicaleTagCreateEtudiantComponent,
  DossierMedicaleTagListEtudiantComponent,
  DossierMedicaleTagViewEtudiantComponent,
  DossierMedicaleTagEditEtudiantComponent,
  DossierMedicaleTagEtudiantComponent,
  VilleCreateEtudiantComponent,
  VilleListEtudiantComponent,
  VilleViewEtudiantComponent,
  VilleEditEtudiantComponent,
  VilleEtudiantComponent,
  PhaseImageCreateEtudiantComponent,
  PhaseImageListEtudiantComponent,
  PhaseImageViewEtudiantComponent,
  PhaseImageEditEtudiantComponent,
  PhaseImageEtudiantComponent,
  ],
  entryComponents: [],
})
export class EtudiantModule { }
