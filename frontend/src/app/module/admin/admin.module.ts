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
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';


import { BiologieCreateAdminComponent } from './view/biologie-admin/create-admin/biologie-create-admin.component';
import { BiologieEditAdminComponent } from './view/biologie-admin/edit-admin/biologie-edit-admin.component';
import { BiologieViewAdminComponent } from './view/biologie-admin/view-admin/biologie-view-admin.component';
import { BiologieListAdminComponent } from './view/biologie-admin/list-admin/biologie-list-admin.component';
import { BiologieAdminComponent } from './view/biologie-admin/biologie-admin.component';
import { InfirmierCreateAdminComponent } from './view/infirmier-admin/create-admin/infirmier-create-admin.component';
import { InfirmierEditAdminComponent } from './view/infirmier-admin/edit-admin/infirmier-edit-admin.component';
import { InfirmierViewAdminComponent } from './view/infirmier-admin/view-admin/infirmier-view-admin.component';
import { InfirmierListAdminComponent } from './view/infirmier-admin/list-admin/infirmier-list-admin.component';
import { InfirmierAdminComponent } from './view/infirmier-admin/infirmier-admin.component';
import { RelationCreateAdminComponent } from './view/relation-admin/create-admin/relation-create-admin.component';
import { RelationEditAdminComponent } from './view/relation-admin/edit-admin/relation-edit-admin.component';
import { RelationViewAdminComponent } from './view/relation-admin/view-admin/relation-view-admin.component';
import { RelationListAdminComponent } from './view/relation-admin/list-admin/relation-list-admin.component';
import { RelationAdminComponent } from './view/relation-admin/relation-admin.component';
import { ExamenCreateAdminComponent } from './view/examen-admin/create-admin/examen-create-admin.component';
import { ExamenEditAdminComponent } from './view/examen-admin/edit-admin/examen-edit-admin.component';
import { ExamenViewAdminComponent } from './view/examen-admin/view-admin/examen-view-admin.component';
import { ExamenListAdminComponent } from './view/examen-admin/list-admin/examen-list-admin.component';
import { ExamenAdminComponent } from './view/examen-admin/examen-admin.component';
import { ChercheurCreateAdminComponent } from './view/chercheur-admin/create-admin/chercheur-create-admin.component';
import { ChercheurEditAdminComponent } from './view/chercheur-admin/edit-admin/chercheur-edit-admin.component';
import { ChercheurViewAdminComponent } from './view/chercheur-admin/view-admin/chercheur-view-admin.component';
import { ChercheurListAdminComponent } from './view/chercheur-admin/list-admin/chercheur-list-admin.component';
import { ChercheurAdminComponent } from './view/chercheur-admin/chercheur-admin.component';
import { CliniqueCreateAdminComponent } from './view/clinique-admin/create-admin/clinique-create-admin.component';
import { CliniqueEditAdminComponent } from './view/clinique-admin/edit-admin/clinique-edit-admin.component';
import { CliniqueViewAdminComponent } from './view/clinique-admin/view-admin/clinique-view-admin.component';
import { CliniqueListAdminComponent } from './view/clinique-admin/list-admin/clinique-list-admin.component';
import { CliniqueAdminComponent } from './view/clinique-admin/clinique-admin.component';
import { TagCreateAdminComponent } from './view/tag-admin/create-admin/tag-create-admin.component';
import { TagEditAdminComponent } from './view/tag-admin/edit-admin/tag-edit-admin.component';
import { TagViewAdminComponent } from './view/tag-admin/view-admin/tag-view-admin.component';
import { TagListAdminComponent } from './view/tag-admin/list-admin/tag-list-admin.component';
import { TagAdminComponent } from './view/tag-admin/tag-admin.component';
import { ImagerieCreateAdminComponent } from './view/imagerie-admin/create-admin/imagerie-create-admin.component';
import { ImagerieEditAdminComponent } from './view/imagerie-admin/edit-admin/imagerie-edit-admin.component';
import { ImagerieViewAdminComponent } from './view/imagerie-admin/view-admin/imagerie-view-admin.component';
import { ImagerieListAdminComponent } from './view/imagerie-admin/list-admin/imagerie-list-admin.component';
import { ImagerieAdminComponent } from './view/imagerie-admin/imagerie-admin.component';
import { TraitementCreateAdminComponent } from './view/traitement-admin/create-admin/traitement-create-admin.component';
import { TraitementEditAdminComponent } from './view/traitement-admin/edit-admin/traitement-edit-admin.component';
import { TraitementViewAdminComponent } from './view/traitement-admin/view-admin/traitement-view-admin.component';
import { TraitementListAdminComponent } from './view/traitement-admin/list-admin/traitement-list-admin.component';
import { TraitementAdminComponent } from './view/traitement-admin/traitement-admin.component';
import { DossierMedicaleCreateAdminComponent } from './view/dossier-medicale-admin/create-admin/dossier-medicale-create-admin.component';
import { DossierMedicaleEditAdminComponent } from './view/dossier-medicale-admin/edit-admin/dossier-medicale-edit-admin.component';
import { DossierMedicaleViewAdminComponent } from './view/dossier-medicale-admin/view-admin/dossier-medicale-view-admin.component';
import { DossierMedicaleListAdminComponent } from './view/dossier-medicale-admin/list-admin/dossier-medicale-list-admin.component';
import { DossierMedicaleAdminComponent } from './view/dossier-medicale-admin/dossier-medicale-admin.component';
import { DiagnosticCreateAdminComponent } from './view/diagnostic-admin/create-admin/diagnostic-create-admin.component';
import { DiagnosticEditAdminComponent } from './view/diagnostic-admin/edit-admin/diagnostic-edit-admin.component';
import { DiagnosticViewAdminComponent } from './view/diagnostic-admin/view-admin/diagnostic-view-admin.component';
import { DiagnosticListAdminComponent } from './view/diagnostic-admin/list-admin/diagnostic-list-admin.component';
import { DiagnosticAdminComponent } from './view/diagnostic-admin/diagnostic-admin.component';
import { CompteRenduCreateAdminComponent } from './view/compte-rendu-admin/create-admin/compte-rendu-create-admin.component';
import { CompteRenduEditAdminComponent } from './view/compte-rendu-admin/edit-admin/compte-rendu-edit-admin.component';
import { CompteRenduViewAdminComponent } from './view/compte-rendu-admin/view-admin/compte-rendu-view-admin.component';
import { CompteRenduListAdminComponent } from './view/compte-rendu-admin/list-admin/compte-rendu-list-admin.component';
import { CompteRenduAdminComponent } from './view/compte-rendu-admin/compte-rendu-admin.component';
import { RecueilDeDonnesCreateAdminComponent } from './view/recueil-de-donnes-admin/create-admin/recueil-de-donnes-create-admin.component';
import { RecueilDeDonnesEditAdminComponent } from './view/recueil-de-donnes-admin/edit-admin/recueil-de-donnes-edit-admin.component';
import { RecueilDeDonnesViewAdminComponent } from './view/recueil-de-donnes-admin/view-admin/recueil-de-donnes-view-admin.component';
import { RecueilDeDonnesListAdminComponent } from './view/recueil-de-donnes-admin/list-admin/recueil-de-donnes-list-admin.component';
import { RecueilDeDonnesAdminComponent } from './view/recueil-de-donnes-admin/recueil-de-donnes-admin.component';
import { SexeCreateAdminComponent } from './view/sexe-admin/create-admin/sexe-create-admin.component';
import { SexeEditAdminComponent } from './view/sexe-admin/edit-admin/sexe-edit-admin.component';
import { SexeViewAdminComponent } from './view/sexe-admin/view-admin/sexe-view-admin.component';
import { SexeListAdminComponent } from './view/sexe-admin/list-admin/sexe-list-admin.component';
import { SexeAdminComponent } from './view/sexe-admin/sexe-admin.component';
import { MedecinCreateAdminComponent } from './view/medecin-admin/create-admin/medecin-create-admin.component';
import { MedecinEditAdminComponent } from './view/medecin-admin/edit-admin/medecin-edit-admin.component';
import { MedecinViewAdminComponent } from './view/medecin-admin/view-admin/medecin-view-admin.component';
import { MedecinListAdminComponent } from './view/medecin-admin/list-admin/medecin-list-admin.component';
import { MedecinAdminComponent } from './view/medecin-admin/medecin-admin.component';
import { PatientContactCreateAdminComponent } from './view/patient-contact-admin/create-admin/patient-contact-create-admin.component';
import { PatientContactEditAdminComponent } from './view/patient-contact-admin/edit-admin/patient-contact-edit-admin.component';
import { PatientContactViewAdminComponent } from './view/patient-contact-admin/view-admin/patient-contact-view-admin.component';
import { PatientContactListAdminComponent } from './view/patient-contact-admin/list-admin/patient-contact-list-admin.component';
import { PatientContactAdminComponent } from './view/patient-contact-admin/patient-contact-admin.component';
import { EvoSuivCreateAdminComponent } from './view/evo-suiv-admin/create-admin/evo-suiv-create-admin.component';
import { EvoSuivEditAdminComponent } from './view/evo-suiv-admin/edit-admin/evo-suiv-edit-admin.component';
import { EvoSuivViewAdminComponent } from './view/evo-suiv-admin/view-admin/evo-suiv-view-admin.component';
import { EvoSuivListAdminComponent } from './view/evo-suiv-admin/list-admin/evo-suiv-list-admin.component';
import { EvoSuivAdminComponent } from './view/evo-suiv-admin/evo-suiv-admin.component';
import { SoinCreateAdminComponent } from './view/soin-admin/create-admin/soin-create-admin.component';
import { SoinEditAdminComponent } from './view/soin-admin/edit-admin/soin-edit-admin.component';
import { SoinViewAdminComponent } from './view/soin-admin/view-admin/soin-view-admin.component';
import { SoinListAdminComponent } from './view/soin-admin/list-admin/soin-list-admin.component';
import { SoinAdminComponent } from './view/soin-admin/soin-admin.component';
import { PatientCreateAdminComponent } from './view/patient-admin/create-admin/patient-create-admin.component';
import { PatientEditAdminComponent } from './view/patient-admin/edit-admin/patient-edit-admin.component';
import { PatientViewAdminComponent } from './view/patient-admin/view-admin/patient-view-admin.component';
import { PatientListAdminComponent } from './view/patient-admin/list-admin/patient-list-admin.component';
import { PatientAdminComponent } from './view/patient-admin/patient-admin.component';
import { TypeImageCreateAdminComponent } from './view/type-image-admin/create-admin/type-image-create-admin.component';
import { TypeImageEditAdminComponent } from './view/type-image-admin/edit-admin/type-image-edit-admin.component';
import { TypeImageViewAdminComponent } from './view/type-image-admin/view-admin/type-image-view-admin.component';
import { TypeImageListAdminComponent } from './view/type-image-admin/list-admin/type-image-list-admin.component';
import { TypeImageAdminComponent } from './view/type-image-admin/type-image-admin.component';
import { EtudiantCreateAdminComponent } from './view/etudiant-admin/create-admin/etudiant-create-admin.component';
import { EtudiantEditAdminComponent } from './view/etudiant-admin/edit-admin/etudiant-edit-admin.component';
import { EtudiantViewAdminComponent } from './view/etudiant-admin/view-admin/etudiant-view-admin.component';
import { EtudiantListAdminComponent } from './view/etudiant-admin/list-admin/etudiant-list-admin.component';
import { EtudiantAdminComponent } from './view/etudiant-admin/etudiant-admin.component';
import { DossierMedicaleTagCreateAdminComponent } from './view/dossier-medicale-tag-admin/create-admin/dossier-medicale-tag-create-admin.component';
import { DossierMedicaleTagEditAdminComponent } from './view/dossier-medicale-tag-admin/edit-admin/dossier-medicale-tag-edit-admin.component';
import { DossierMedicaleTagViewAdminComponent } from './view/dossier-medicale-tag-admin/view-admin/dossier-medicale-tag-view-admin.component';
import { DossierMedicaleTagListAdminComponent } from './view/dossier-medicale-tag-admin/list-admin/dossier-medicale-tag-list-admin.component';
import { DossierMedicaleTagAdminComponent } from './view/dossier-medicale-tag-admin/dossier-medicale-tag-admin.component';
import { VilleCreateAdminComponent } from './view/ville-admin/create-admin/ville-create-admin.component';
import { VilleEditAdminComponent } from './view/ville-admin/edit-admin/ville-edit-admin.component';
import { VilleViewAdminComponent } from './view/ville-admin/view-admin/ville-view-admin.component';
import { VilleListAdminComponent } from './view/ville-admin/list-admin/ville-list-admin.component';
import { VilleAdminComponent } from './view/ville-admin/ville-admin.component';
import { PhaseImageCreateAdminComponent } from './view/phase-image-admin/create-admin/phase-image-create-admin.component';
import { PhaseImageEditAdminComponent } from './view/phase-image-admin/edit-admin/phase-image-edit-admin.component';
import { PhaseImageViewAdminComponent } from './view/phase-image-admin/view-admin/phase-image-view-admin.component';
import { PhaseImageListAdminComponent } from './view/phase-image-admin/list-admin/phase-image-list-admin.component';
import { PhaseImageAdminComponent } from './view/phase-image-admin/phase-image-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {SwitchChercheurAdminComponent} from './view/switch_chercheur/switch-chercheur-admin.component';

@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent,
     SwitchChercheurAdminComponent,
    BiologieCreateAdminComponent,
    BiologieListAdminComponent,
    BiologieViewAdminComponent,
    BiologieEditAdminComponent,
    BiologieAdminComponent,
    InfirmierCreateAdminComponent,
    InfirmierListAdminComponent,
    InfirmierViewAdminComponent,
    InfirmierEditAdminComponent,
    InfirmierAdminComponent,
    RelationCreateAdminComponent,
    RelationListAdminComponent,
    RelationViewAdminComponent,
    RelationEditAdminComponent,
    RelationAdminComponent,
    ExamenCreateAdminComponent,
    ExamenListAdminComponent,
    ExamenViewAdminComponent,
    ExamenEditAdminComponent,
    ExamenAdminComponent,
    ChercheurCreateAdminComponent,
    ChercheurListAdminComponent,
    ChercheurViewAdminComponent,
    ChercheurEditAdminComponent,
    ChercheurAdminComponent,
    CliniqueCreateAdminComponent,
    CliniqueListAdminComponent,
    CliniqueViewAdminComponent,
    CliniqueEditAdminComponent,
    CliniqueAdminComponent,
    TagCreateAdminComponent,
    TagListAdminComponent,
    TagViewAdminComponent,
    TagEditAdminComponent,
    TagAdminComponent,
    ImagerieCreateAdminComponent,
    ImagerieListAdminComponent,
    ImagerieViewAdminComponent,
    ImagerieEditAdminComponent,
    ImagerieAdminComponent,
    TraitementCreateAdminComponent,
    TraitementListAdminComponent,
    TraitementViewAdminComponent,
    TraitementEditAdminComponent,
    TraitementAdminComponent,
    DossierMedicaleCreateAdminComponent,
    DossierMedicaleListAdminComponent,
    DossierMedicaleViewAdminComponent,
    DossierMedicaleEditAdminComponent,
    DossierMedicaleAdminComponent,
    DiagnosticCreateAdminComponent,
    DiagnosticListAdminComponent,
    DiagnosticViewAdminComponent,
    DiagnosticEditAdminComponent,
    DiagnosticAdminComponent,
    CompteRenduCreateAdminComponent,
    CompteRenduListAdminComponent,
    CompteRenduViewAdminComponent,
    CompteRenduEditAdminComponent,
    CompteRenduAdminComponent,
    RecueilDeDonnesCreateAdminComponent,
    RecueilDeDonnesListAdminComponent,
    RecueilDeDonnesViewAdminComponent,
    RecueilDeDonnesEditAdminComponent,
    RecueilDeDonnesAdminComponent,
    SexeCreateAdminComponent,
    SexeListAdminComponent,
    SexeViewAdminComponent,
    SexeEditAdminComponent,
    SexeAdminComponent,
    MedecinCreateAdminComponent,
    MedecinListAdminComponent,
    MedecinViewAdminComponent,
    MedecinEditAdminComponent,
    MedecinAdminComponent,
    PatientContactCreateAdminComponent,
    PatientContactListAdminComponent,
    PatientContactViewAdminComponent,
    PatientContactEditAdminComponent,
    PatientContactAdminComponent,
    EvoSuivCreateAdminComponent,
    EvoSuivListAdminComponent,
    EvoSuivViewAdminComponent,
    EvoSuivEditAdminComponent,
    EvoSuivAdminComponent,
    SoinCreateAdminComponent,
    SoinListAdminComponent,
    SoinViewAdminComponent,
    SoinEditAdminComponent,
    SoinAdminComponent,
    PatientCreateAdminComponent,
    PatientListAdminComponent,
    PatientViewAdminComponent,
    PatientEditAdminComponent,
    PatientAdminComponent,
    TypeImageCreateAdminComponent,
    TypeImageListAdminComponent,
    TypeImageViewAdminComponent,
    TypeImageEditAdminComponent,
    TypeImageAdminComponent,
    EtudiantCreateAdminComponent,
    EtudiantListAdminComponent,
    EtudiantViewAdminComponent,
    EtudiantEditAdminComponent,
    EtudiantAdminComponent,
    DossierMedicaleTagCreateAdminComponent,
    DossierMedicaleTagListAdminComponent,
    DossierMedicaleTagViewAdminComponent,
    DossierMedicaleTagEditAdminComponent,
    DossierMedicaleTagAdminComponent,
    VilleCreateAdminComponent,
    VilleListAdminComponent,
    VilleViewAdminComponent,
    VilleEditAdminComponent,
    VilleAdminComponent,
    PhaseImageCreateAdminComponent,
    PhaseImageListAdminComponent,
    PhaseImageViewAdminComponent,
    PhaseImageEditAdminComponent,
    PhaseImageAdminComponent,
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
  LoginAdminComponent,
  RegisterAdminComponent,
    SwitchChercheurAdminComponent,
  BiologieCreateAdminComponent,
  BiologieListAdminComponent,
  BiologieViewAdminComponent,
  BiologieEditAdminComponent,
  BiologieAdminComponent,
  InfirmierCreateAdminComponent,
  InfirmierListAdminComponent,
  InfirmierViewAdminComponent,
  InfirmierEditAdminComponent,
  InfirmierAdminComponent,
  RelationCreateAdminComponent,
  RelationListAdminComponent,
  RelationViewAdminComponent,
  RelationEditAdminComponent,
  RelationAdminComponent,
  ExamenCreateAdminComponent,
  ExamenListAdminComponent,
  ExamenViewAdminComponent,
  ExamenEditAdminComponent,
  ExamenAdminComponent,
  ChercheurCreateAdminComponent,
  ChercheurListAdminComponent,
  ChercheurViewAdminComponent,
  ChercheurEditAdminComponent,
  ChercheurAdminComponent,
  CliniqueCreateAdminComponent,
  CliniqueListAdminComponent,
  CliniqueViewAdminComponent,
  CliniqueEditAdminComponent,
  CliniqueAdminComponent,
  TagCreateAdminComponent,
  TagListAdminComponent,
  TagViewAdminComponent,
  TagEditAdminComponent,
  TagAdminComponent,
  ImagerieCreateAdminComponent,
  ImagerieListAdminComponent,
  ImagerieViewAdminComponent,
  ImagerieEditAdminComponent,
  ImagerieAdminComponent,
  TraitementCreateAdminComponent,
  TraitementListAdminComponent,
  TraitementViewAdminComponent,
  TraitementEditAdminComponent,
  TraitementAdminComponent,
  DossierMedicaleCreateAdminComponent,
  DossierMedicaleListAdminComponent,
  DossierMedicaleViewAdminComponent,
  DossierMedicaleEditAdminComponent,
  DossierMedicaleAdminComponent,
  DiagnosticCreateAdminComponent,
  DiagnosticListAdminComponent,
  DiagnosticViewAdminComponent,
  DiagnosticEditAdminComponent,
  DiagnosticAdminComponent,
  CompteRenduCreateAdminComponent,
  CompteRenduListAdminComponent,
  CompteRenduViewAdminComponent,
  CompteRenduEditAdminComponent,
  CompteRenduAdminComponent,
  RecueilDeDonnesCreateAdminComponent,
  RecueilDeDonnesListAdminComponent,
  RecueilDeDonnesViewAdminComponent,
  RecueilDeDonnesEditAdminComponent,
  RecueilDeDonnesAdminComponent,
  SexeCreateAdminComponent,
  SexeListAdminComponent,
  SexeViewAdminComponent,
  SexeEditAdminComponent,
  SexeAdminComponent,
  MedecinCreateAdminComponent,
  MedecinListAdminComponent,
  MedecinViewAdminComponent,
  MedecinEditAdminComponent,
  MedecinAdminComponent,
  PatientContactCreateAdminComponent,
  PatientContactListAdminComponent,
  PatientContactViewAdminComponent,
  PatientContactEditAdminComponent,
  PatientContactAdminComponent,
  EvoSuivCreateAdminComponent,
  EvoSuivListAdminComponent,
  EvoSuivViewAdminComponent,
  EvoSuivEditAdminComponent,
  EvoSuivAdminComponent,
  SoinCreateAdminComponent,
  SoinListAdminComponent,
  SoinViewAdminComponent,
  SoinEditAdminComponent,
  SoinAdminComponent,
  PatientCreateAdminComponent,
  PatientListAdminComponent,
  PatientViewAdminComponent,
  PatientEditAdminComponent,
  PatientAdminComponent,
  TypeImageCreateAdminComponent,
  TypeImageListAdminComponent,
  TypeImageViewAdminComponent,
  TypeImageEditAdminComponent,
  TypeImageAdminComponent,
  EtudiantCreateAdminComponent,
  EtudiantListAdminComponent,
  EtudiantViewAdminComponent,
  EtudiantEditAdminComponent,
  EtudiantAdminComponent,
  DossierMedicaleTagCreateAdminComponent,
  DossierMedicaleTagListAdminComponent,
  DossierMedicaleTagViewAdminComponent,
  DossierMedicaleTagEditAdminComponent,
  DossierMedicaleTagAdminComponent,
  VilleCreateAdminComponent,
  VilleListAdminComponent,
  VilleViewAdminComponent,
  VilleEditAdminComponent,
  VilleAdminComponent,
  PhaseImageCreateAdminComponent,
  PhaseImageListAdminComponent,
  PhaseImageViewAdminComponent,
  PhaseImageEditAdminComponent,
  PhaseImageAdminComponent,
  ],
  entryComponents: [],
})
export class AdminModule { }
