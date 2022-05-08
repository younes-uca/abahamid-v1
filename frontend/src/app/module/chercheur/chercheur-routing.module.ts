
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginChercheurComponent } from './login-chercheur/login-chercheur.component';
import { RegisterChercheurComponent } from './register-chercheur/register-chercheur.component';

import { BiologieChercheurComponent } from './view/biologie-chercheur/biologie-chercheur.component';


import { InfirmierChercheurComponent } from './view/infirmier-chercheur/infirmier-chercheur.component';


import { RelationChercheurComponent } from './view/relation-chercheur/relation-chercheur.component';


import { ExamenChercheurComponent } from './view/examen-chercheur/examen-chercheur.component';


import { ChercheurChercheurComponent } from './view/chercheur-chercheur/chercheur-chercheur.component';


import { CliniqueChercheurComponent } from './view/clinique-chercheur/clinique-chercheur.component';


import { TagChercheurComponent } from './view/tag-chercheur/tag-chercheur.component';


import { ImagerieChercheurComponent } from './view/imagerie-chercheur/imagerie-chercheur.component';


import { TraitementChercheurComponent } from './view/traitement-chercheur/traitement-chercheur.component';


import { DossierMedicaleChercheurComponent } from './view/dossier-medicale-chercheur/dossier-medicale-chercheur.component';


import { DiagnosticChercheurComponent } from './view/diagnostic-chercheur/diagnostic-chercheur.component';


import { CompteRenduChercheurComponent } from './view/compte-rendu-chercheur/compte-rendu-chercheur.component';


import { RecueilDeDonnesChercheurComponent } from './view/recueil-de-donnes-chercheur/recueil-de-donnes-chercheur.component';


import { SexeChercheurComponent } from './view/sexe-chercheur/sexe-chercheur.component';


import { MedecinChercheurComponent } from './view/medecin-chercheur/medecin-chercheur.component';


import { PatientContactChercheurComponent } from './view/patient-contact-chercheur/patient-contact-chercheur.component';


import { EvoSuivChercheurComponent } from './view/evo-suiv-chercheur/evo-suiv-chercheur.component';


import { SoinChercheurComponent } from './view/soin-chercheur/soin-chercheur.component';


import { PatientChercheurComponent } from './view/patient-chercheur/patient-chercheur.component';


import { TypeImageChercheurComponent } from './view/type-image-chercheur/type-image-chercheur.component';


import { EtudiantChercheurComponent } from './view/etudiant-chercheur/etudiant-chercheur.component';


import { DossierMedicaleTagChercheurComponent } from './view/dossier-medicale-tag-chercheur/dossier-medicale-tag-chercheur.component';


import { VilleChercheurComponent } from './view/ville-chercheur/ville-chercheur.component';


import { PhaseImageChercheurComponent } from './view/phase-image-chercheur/phase-image-chercheur.component';


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
                                    component: LoginChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterChercheurComponent ,
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
                                    component: BiologieChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'infirmier',
                            children: [
                                {
                                    path: 'list',
                                    component: InfirmierChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'relation',
                            children: [
                                {
                                    path: 'list',
                                    component: RelationChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'examen',
                            children: [
                                {
                                    path: 'list',
                                    component: ExamenChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'clinique',
                            children: [
                                {
                                    path: 'list',
                                    component: CliniqueChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'tag',
                            children: [
                                {
                                    path: 'list',
                                    component: TagChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'imagerie',
                            children: [
                                {
                                    path: 'list',
                                    component: ImagerieChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'traitement',
                            children: [
                                {
                                    path: 'list',
                                    component: TraitementChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'dossier-medicale',
                            children: [
                                {
                                    path: 'list',
                                    component: DossierMedicaleChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'diagnostic',
                            children: [
                                {
                                    path: 'list',
                                    component: DiagnosticChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'compte-rendu',
                            children: [
                                {
                                    path: 'list',
                                    component: CompteRenduChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'recueil-de-donnes',
                            children: [
                                {
                                    path: 'list',
                                    component: RecueilDeDonnesChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'sexe',
                            children: [
                                {
                                    path: 'list',
                                    component: SexeChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'medecin',
                            children: [
                                {
                                    path: 'list',
                                    component: MedecinChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'patient-contact',
                            children: [
                                {
                                    path: 'list',
                                    component: PatientContactChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'evo-suiv',
                            children: [
                                {
                                    path: 'list',
                                    component: EvoSuivChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'soin',
                            children: [
                                {
                                    path: 'list',
                                    component: SoinChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'patient',
                            children: [
                                {
                                    path: 'list',
                                    component: PatientChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'type-image',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeImageChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'dossier-medicale-tag',
                            children: [
                                {
                                    path: 'list',
                                    component: DossierMedicaleTagChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'ville',
                            children: [
                                {
                                    path: 'list',
                                    component: VilleChercheurComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'phase-image',
                            children: [
                                {
                                    path: 'list',
                                    component: PhaseImageChercheurComponent ,
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
export class ChercheurRoutingModule { }
