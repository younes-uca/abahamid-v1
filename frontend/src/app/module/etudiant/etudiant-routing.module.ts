
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';

import { BiologieEtudiantComponent } from './view/biologie-etudiant/biologie-etudiant.component';


import { InfirmierEtudiantComponent } from './view/infirmier-etudiant/infirmier-etudiant.component';


import { RelationEtudiantComponent } from './view/relation-etudiant/relation-etudiant.component';


import { ExamenEtudiantComponent } from './view/examen-etudiant/examen-etudiant.component';


import { ChercheurEtudiantComponent } from './view/chercheur-etudiant/chercheur-etudiant.component';


import { CliniqueEtudiantComponent } from './view/clinique-etudiant/clinique-etudiant.component';


import { TagEtudiantComponent } from './view/tag-etudiant/tag-etudiant.component';


import { ImagerieEtudiantComponent } from './view/imagerie-etudiant/imagerie-etudiant.component';


import { TraitementEtudiantComponent } from './view/traitement-etudiant/traitement-etudiant.component';


import { DossierMedicaleEtudiantComponent } from './view/dossier-medicale-etudiant/dossier-medicale-etudiant.component';


import { DiagnosticEtudiantComponent } from './view/diagnostic-etudiant/diagnostic-etudiant.component';


import { CompteRenduEtudiantComponent } from './view/compte-rendu-etudiant/compte-rendu-etudiant.component';


import { RecueilDeDonnesEtudiantComponent } from './view/recueil-de-donnes-etudiant/recueil-de-donnes-etudiant.component';


import { SexeEtudiantComponent } from './view/sexe-etudiant/sexe-etudiant.component';


import { MedecinEtudiantComponent } from './view/medecin-etudiant/medecin-etudiant.component';


import { PatientContactEtudiantComponent } from './view/patient-contact-etudiant/patient-contact-etudiant.component';


import { EvoSuivEtudiantComponent } from './view/evo-suiv-etudiant/evo-suiv-etudiant.component';


import { SoinEtudiantComponent } from './view/soin-etudiant/soin-etudiant.component';


import { PatientEtudiantComponent } from './view/patient-etudiant/patient-etudiant.component';


import { TypeImageEtudiantComponent } from './view/type-image-etudiant/type-image-etudiant.component';


import { EtudiantEtudiantComponent } from './view/etudiant-etudiant/etudiant-etudiant.component';


import { DossierMedicaleTagEtudiantComponent } from './view/dossier-medicale-tag-etudiant/dossier-medicale-tag-etudiant.component';


import { VilleEtudiantComponent } from './view/ville-etudiant/ville-etudiant.component';


import { PhaseImageEtudiantComponent } from './view/phase-image-etudiant/phase-image-etudiant.component';


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
                                    component: LoginEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'biologie',
                            children: [
                                {
                                    path: 'list',
                                    component: BiologieEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'infirmier',
                            children: [
                                {
                                    path: 'list',
                                    component: InfirmierEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'relation',
                            children: [
                                {
                                    path: 'list',
                                    component: RelationEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'examen',
                            children: [
                                {
                                    path: 'list',
                                    component: ExamenEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'clinique',
                            children: [
                                {
                                    path: 'list',
                                    component: CliniqueEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'tag',
                            children: [
                                {
                                    path: 'list',
                                    component: TagEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'imagerie',
                            children: [
                                {
                                    path: 'list',
                                    component: ImagerieEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'traitement',
                            children: [
                                {
                                    path: 'list',
                                    component: TraitementEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'dossier-medicale',
                            children: [
                                {
                                    path: 'list',
                                    component: DossierMedicaleEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'diagnostic',
                            children: [
                                {
                                    path: 'list',
                                    component: DiagnosticEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'compte-rendu',
                            children: [
                                {
                                    path: 'list',
                                    component: CompteRenduEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'recueil-de-donnes',
                            children: [
                                {
                                    path: 'list',
                                    component: RecueilDeDonnesEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'sexe',
                            children: [
                                {
                                    path: 'list',
                                    component: SexeEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'medecin',
                            children: [
                                {
                                    path: 'list',
                                    component: MedecinEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'patient-contact',
                            children: [
                                {
                                    path: 'list',
                                    component: PatientContactEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'evo-suiv',
                            children: [
                                {
                                    path: 'list',
                                    component: EvoSuivEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'soin',
                            children: [
                                {
                                    path: 'list',
                                    component: SoinEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'patient',
                            children: [
                                {
                                    path: 'list',
                                    component: PatientEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'type-image',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeImageEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'dossier-medicale-tag',
                            children: [
                                {
                                    path: 'list',
                                    component: DossierMedicaleTagEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'ville',
                            children: [
                                {
                                    path: 'list',
                                    component: VilleEtudiantComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'phase-image',
                            children: [
                                {
                                    path: 'list',
                                    component: PhaseImageEtudiantComponent ,
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
export class EtudiantRoutingModule { }
