
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

import { BiologieAdminComponent } from './view/biologie-admin/biologie-admin.component';


import { InfirmierAdminComponent } from './view/infirmier-admin/infirmier-admin.component';


import { RelationAdminComponent } from './view/relation-admin/relation-admin.component';


import { ExamenAdminComponent } from './view/examen-admin/examen-admin.component';


import { ChercheurAdminComponent } from './view/chercheur-admin/chercheur-admin.component';


import { CliniqueAdminComponent } from './view/clinique-admin/clinique-admin.component';


import { TagAdminComponent } from './view/tag-admin/tag-admin.component';


import { ImagerieAdminComponent } from './view/imagerie-admin/imagerie-admin.component';


import { TraitementAdminComponent } from './view/traitement-admin/traitement-admin.component';


import { DossierMedicaleAdminComponent } from './view/dossier-medicale-admin/dossier-medicale-admin.component';


import { DiagnosticAdminComponent } from './view/diagnostic-admin/diagnostic-admin.component';


import { CompteRenduAdminComponent } from './view/compte-rendu-admin/compte-rendu-admin.component';


import { RecueilDeDonnesAdminComponent } from './view/recueil-de-donnes-admin/recueil-de-donnes-admin.component';


import { SexeAdminComponent } from './view/sexe-admin/sexe-admin.component';


import { MedecinAdminComponent } from './view/medecin-admin/medecin-admin.component';


import { PatientContactAdminComponent } from './view/patient-contact-admin/patient-contact-admin.component';


import { EvoSuivAdminComponent } from './view/evo-suiv-admin/evo-suiv-admin.component';


import { SoinAdminComponent } from './view/soin-admin/soin-admin.component';


import { PatientAdminComponent } from './view/patient-admin/patient-admin.component';


import { TypeImageAdminComponent } from './view/type-image-admin/type-image-admin.component';


import { EtudiantAdminComponent } from './view/etudiant-admin/etudiant-admin.component';


import { DossierMedicaleTagAdminComponent } from './view/dossier-medicale-tag-admin/dossier-medicale-tag-admin.component';


import { VilleAdminComponent } from './view/ville-admin/ville-admin.component';


import { PhaseImageAdminComponent } from './view/phase-image-admin/phase-image-admin.component';


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
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'biologie',
                            children: [
                                {
                                    path: 'list',
                                    component: BiologieAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'infirmier',
                            children: [
                                {
                                    path: 'list',
                                    component: InfirmierAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'relation',
                            children: [
                                {
                                    path: 'list',
                                    component: RelationAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'examen',
                            children: [
                                {
                                    path: 'list',
                                    component: ExamenAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'clinique',
                            children: [
                                {
                                    path: 'list',
                                    component: CliniqueAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'tag',
                            children: [
                                {
                                    path: 'list',
                                    component: TagAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'imagerie',
                            children: [
                                {
                                    path: 'list',
                                    component: ImagerieAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'traitement',
                            children: [
                                {
                                    path: 'list',
                                    component: TraitementAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'dossier-medicale',
                            children: [
                                {
                                    path: 'list',
                                    component: DossierMedicaleAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'diagnostic',
                            children: [
                                {
                                    path: 'list',
                                    component: DiagnosticAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'compte-rendu',
                            children: [
                                {
                                    path: 'list',
                                    component: CompteRenduAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'recueil-de-donnes',
                            children: [
                                {
                                    path: 'list',
                                    component: RecueilDeDonnesAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'sexe',
                            children: [
                                {
                                    path: 'list',
                                    component: SexeAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'medecin',
                            children: [
                                {
                                    path: 'list',
                                    component: MedecinAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'patient-contact',
                            children: [
                                {
                                    path: 'list',
                                    component: PatientContactAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'evo-suiv',
                            children: [
                                {
                                    path: 'list',
                                    component: EvoSuivAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'soin',
                            children: [
                                {
                                    path: 'list',
                                    component: SoinAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'patient',
                            children: [
                                {
                                    path: 'list',
                                    component: PatientAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'type-image',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeImageAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'dossier-medicale-tag',
                            children: [
                                {
                                    path: 'list',
                                    component: DossierMedicaleTagAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'ville',
                            children: [
                                {
                                    path: 'list',
                                    component: VilleAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'phase-image',
                            children: [
                                {
                                    path: 'list',
                                    component: PhaseImageAdminComponent ,
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
export class AdminRoutingModule { }
