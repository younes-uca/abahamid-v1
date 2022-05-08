
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginMedecinComponent } from './login-medecin/login-medecin.component';
import { RegisterMedecinComponent } from './register-medecin/register-medecin.component';

import { BiologieMedecinComponent } from './view/biologie-medecin/biologie-medecin.component';


import { InfirmierMedecinComponent } from './view/infirmier-medecin/infirmier-medecin.component';


import { RelationMedecinComponent } from './view/relation-medecin/relation-medecin.component';


import { ExamenMedecinComponent } from './view/examen-medecin/examen-medecin.component';


import { ChercheurMedecinComponent } from './view/chercheur-medecin/chercheur-medecin.component';


import { CliniqueMedecinComponent } from './view/clinique-medecin/clinique-medecin.component';


import { TagMedecinComponent } from './view/tag-medecin/tag-medecin.component';


import { ImagerieMedecinComponent } from './view/imagerie-medecin/imagerie-medecin.component';


import { TraitementMedecinComponent } from './view/traitement-medecin/traitement-medecin.component';


import { DossierMedicaleMedecinComponent } from './view/dossier-medicale-medecin/dossier-medicale-medecin.component';


import { DiagnosticMedecinComponent } from './view/diagnostic-medecin/diagnostic-medecin.component';


import { CompteRenduMedecinComponent } from './view/compte-rendu-medecin/compte-rendu-medecin.component';


import { RecueilDeDonnesMedecinComponent } from './view/recueil-de-donnes-medecin/recueil-de-donnes-medecin.component';


import { SexeMedecinComponent } from './view/sexe-medecin/sexe-medecin.component';


import { MedecinMedecinComponent } from './view/medecin-medecin/medecin-medecin.component';


import { PatientContactMedecinComponent } from './view/patient-contact-medecin/patient-contact-medecin.component';


import { EvoSuivMedecinComponent } from './view/evo-suiv-medecin/evo-suiv-medecin.component';


import { SoinMedecinComponent } from './view/soin-medecin/soin-medecin.component';


import { PatientMedecinComponent } from './view/patient-medecin/patient-medecin.component';


import { TypeImageMedecinComponent } from './view/type-image-medecin/type-image-medecin.component';


import { EtudiantMedecinComponent } from './view/etudiant-medecin/etudiant-medecin.component';


import { DossierMedicaleTagMedecinComponent } from './view/dossier-medicale-tag-medecin/dossier-medicale-tag-medecin.component';


import { VilleMedecinComponent } from './view/ville-medecin/ville-medecin.component';


import { PhaseImageMedecinComponent } from './view/phase-image-medecin/phase-image-medecin.component';


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'archivable',
                            loadChildren: './view/archivable/archivable-routing.module#ArchivableRoutingModule',
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'biologie',
                            children: [
                                {
                                    path: 'list',
                                    component: BiologieMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'infirmier',
                            children: [
                                {
                                    path: 'list',
                                    component: InfirmierMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'relation',
                            children: [
                                {
                                    path: 'list',
                                    component: RelationMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'examen',
                            children: [
                                {
                                    path: 'list',
                                    component: ExamenMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'clinique',
                            children: [
                                {
                                    path: 'list',
                                    component: CliniqueMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'tag',
                            children: [
                                {
                                    path: 'list',
                                    component: TagMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'imagerie',
                            children: [
                                {
                                    path: 'list',
                                    component: ImagerieMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'traitement',
                            children: [
                                {
                                    path: 'list',
                                    component: TraitementMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'dossier-medicale',
                            children: [
                                {
                                    path: 'list',
                                    component: DossierMedicaleMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'diagnostic',
                            children: [
                                {
                                    path: 'list',
                                    component: DiagnosticMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'compte-rendu',
                            children: [
                                {
                                    path: 'list',
                                    component: CompteRenduMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'recueil-de-donnes',
                            children: [
                                {
                                    path: 'list',
                                    component: RecueilDeDonnesMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'sexe',
                            children: [
                                {
                                    path: 'list',
                                    component: SexeMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'medecin',
                            children: [
                                {
                                    path: 'list',
                                    component: MedecinMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'patient-contact',
                            children: [
                                {
                                    path: 'list',
                                    component: PatientContactMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'evo-suiv',
                            children: [
                                {
                                    path: 'list',
                                    component: EvoSuivMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'soin',
                            children: [
                                {
                                    path: 'list',
                                    component: SoinMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'patient',
                            children: [
                                {
                                    path: 'list',
                                    component: PatientMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'type-image',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeImageMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'dossier-medicale-tag',
                            children: [
                                {
                                    path: 'list',
                                    component: DossierMedicaleTagMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'ville',
                            children: [
                                {
                                    path: 'list',
                                    component: VilleMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'phase-image',
                            children: [
                                {
                                    path: 'list',
                                    component: PhaseImageMedecinComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class MedecinRoutingModule { }
