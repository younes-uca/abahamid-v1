import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './controller/service/Auth.service';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { RoleService } from './controller/service/role.service';
@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modelchercheur : any[];
  modeladmin : any[];
  modelmedecin : any[];
  modeletudiant : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modelchercheur =
      [
              {
                label: 'Traitement',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Traitement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/traitement/list']
                    },
                    {
                      label: 'Liste Recueil de donnes',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/recueil-de-donnes/list']
                    },
                    {
                      label: 'Liste Soin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/soin/list']
                    },
                ]
              },
              {
                label: 'Biologie',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Biologie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/biologie/list']
                    },
                    {
                      label: 'Liste Examen',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/examen/list']
                    },
                ]
              },
              {
                label: 'Etc',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Tag',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/tag/list']
                    },
                    {
                      label: 'Liste Dossier medicale tag',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/dossier-medicale-tag/list']
                    },
                ]
              },
              {
                label: 'Staff',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Infirmier',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/infirmier/list']
                    },
                    {
                      label: 'Liste Chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/chercheur/list']
                    },
                    {
                      label: 'Liste Medecin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/medecin/list']
                    },
                    {
                      label: 'Liste Etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/etudiant/list']
                    },
                ]
              },
              {
                label: 'Dossier Medicale',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Clinique',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/clinique/list']
                    },
                    {
                      label: 'Liste Dossier medicale',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/dossier-medicale/list']
                    },
                    {
                      label: 'Liste Diagnostic',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/diagnostic/list']
                    },
                    {
                      label: 'Liste Compte rendu',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/compte-rendu/list']
                    },
                    {
                      label: 'Liste Evo suiv',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/evo-suiv/list']
                    },
                ]
              },
              {
                label: 'Imagerie',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Imagerie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/imagerie/list']
                    },
                    {
                      label: 'Liste Type image',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/type-image/list']
                    },
                    {
                      label: 'Liste Phase image',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/phase-image/list']
                    },
                ]
              },
              {
                label: 'Patient Details',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Relation',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/relation/list']
                    },
                    {
                      label: 'Liste Sexe',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/sexe/list']
                    },
                    {
                      label: 'Liste Patient contact',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/patient-contact/list']
                    },
                    {
                      label: 'Liste Patient',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/patient/list']
                    },
                    {
                      label: 'Liste Ville',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/chercheur/ville/list']
                    },
                ]
              },
    ]
    this.modeladmin =
      [
              {
                label: 'Traitement',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Traitement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/traitement/list']
                    },
                    {
                      label: 'Liste Recueil de donnes',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/recueil-de-donnes/list']
                    },
                    {
                      label: 'Liste Soin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/soin/list']
                    },
                ]
              },
              {
                label: 'Biologie',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Biologie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/biologie/list']
                    },
                    {
                      label: 'Liste Examen',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/examen/list']
                    },
                ]
              },
              {
                label: 'Etc',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Tag',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/tag/list']
                    },
                    {
                      label: 'Liste Dossier medicale tag',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/dossier-medicale-tag/list']
                    },
                ]
              },
              {
                label: 'Staff',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Infirmier',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/infirmier/list']
                    },
                    {
                      label: 'Liste Chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/chercheur/list']
                    },
                    {
                      label: 'Liste Medecin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/medecin/list']
                    },
                    {
                      label: 'Liste Etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/etudiant/list']
                    },
                ]
              },
              {
                label: 'Dossier Medicale',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Clinique',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/clinique/list']
                    },
                    {
                      label: 'Liste Dossier medicale',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/dossier-medicale/list']
                    },
                    {
                      label: 'Liste Diagnostic',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/diagnostic/list']
                    },
                    {
                      label: 'Liste Compte rendu',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/compte-rendu/list']
                    },
                    {
                      label: 'Liste Evo suiv',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/evo-suiv/list']
                    },
                ]
              },
              {
                label: 'Imagerie',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Imagerie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/imagerie/list']
                    },
                    {
                      label: 'Liste Type image',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/type-image/list']
                    },
                    {
                      label: 'Liste Phase image',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/phase-image/list']
                    },
                ]
              },
              {
                label: 'Patient Details',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Relation',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/relation/list']
                    },
                    {
                      label: 'Liste Sexe',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/sexe/list']
                    },
                    {
                      label: 'Liste Patient contact',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/patient-contact/list']
                    },
                    {
                      label: 'Liste Patient',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/patient/list']
                    },
                    {
                      label: 'Liste Ville',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/ville/list']
                    },
                ]
              },
    ]
    this.modelmedecin =
      [
              {
                label: 'Traitement',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Traitement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/traitement/list']
                    },
                    {
                      label: 'Liste Recueil de donnes',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/recueil-de-donnes/list']
                    },
                    {
                      label: 'Liste Soin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/soin/list']
                    },
                ]
              },
              {
                label: 'Biologie',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Biologie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/biologie/list']
                    },
                    {
                      label: 'Liste Examen',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/examen/list']
                    },
                ]
              },
              {
                label: 'Etc',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Tag',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/tag/list']
                    },
                    {
                      label: 'Liste Dossier medicale tag',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/dossier-medicale-tag/list']
                    },
                ]
              },
              {
                label: 'Staff',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Infirmier',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/infirmier/list']
                    },
                    {
                      label: 'Liste Chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/chercheur/list']
                    },
                    {
                      label: 'Liste Medecin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/medecin/list']
                    },
                    {
                      label: 'Liste Etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/etudiant/list']
                    },
                ]
              },
              {
                label: 'Dossier Medicale',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Clinique',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/clinique/list']
                    },
                    {
                      label: 'Liste Dossier medicale',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/dossier-medicale/list']
                    },
                    {
                      label: 'Liste Diagnostic',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/diagnostic/list']
                    },
                    {
                      label: 'Liste Compte rendu',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/compte-rendu/list']
                    },
                    {
                      label: 'Liste Evo suiv',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/evo-suiv/list']
                    },
                ]
              },
              {
                label: 'Imagerie',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Imagerie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/imagerie/list']
                    },
                    {
                      label: 'Liste Type image',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/type-image/list']
                    },
                    {
                      label: 'Liste Phase image',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/phase-image/list']
                    },
                ]
              },
              {
                label: 'Patient Details',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Relation',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/relation/list']
                    },
                    {
                      label: 'Liste Sexe',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/sexe/list']
                    },
                    {
                      label: 'Liste Patient contact',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/patient-contact/list']
                    },
                    {
                      label: 'Liste Patient',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/patient/list']
                    },
                    {
                      label: 'Liste Ville',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/medecin/ville/list']
                    },
                ]
              },
    ]
    this.modeletudiant =
      [
              {
                label: 'Traitement',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Traitement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/traitement/list']
                    },
                    {
                      label: 'Liste Recueil de donnes',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/recueil-de-donnes/list']
                    },
                    {
                      label: 'Liste Soin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/soin/list']
                    },
                ]
              },
              {
                label: 'Biologie',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Biologie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/biologie/list']
                    },
                    {
                      label: 'Liste Examen',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/examen/list']
                    },
                ]
              },
              {
                label: 'Etc',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Tag',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/tag/list']
                    },
                    {
                      label: 'Liste Dossier medicale tag',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/dossier-medicale-tag/list']
                    },
                ]
              },
              {
                label: 'Staff',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Infirmier',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/infirmier/list']
                    },
                    {
                      label: 'Liste Chercheur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/chercheur/list']
                    },
                    {
                      label: 'Liste Medecin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/medecin/list']
                    },
                    {
                      label: 'Liste Etudiant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/etudiant/list']
                    },
                ]
              },
              {
                label: 'Dossier Medicale',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Clinique',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/clinique/list']
                    },
                    {
                      label: 'Liste Dossier medicale',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/dossier-medicale/list']
                    },
                    {
                      label: 'Liste Diagnostic',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/diagnostic/list']
                    },
                    {
                      label: 'Liste Compte rendu',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/compte-rendu/list']
                    },
                    {
                      label: 'Liste Evo suiv',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/evo-suiv/list']
                    },
                ]
              },
              {
                label: 'Imagerie',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Imagerie',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/imagerie/list']
                    },
                    {
                      label: 'Liste Type image',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/type-image/list']
                    },
                    {
                      label: 'Liste Phase image',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/phase-image/list']
                    },
                ]
              },
              {
                label: 'Patient Details',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste Relation',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/relation/list']
                    },
                    {
                      label: 'Liste Sexe',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/sexe/list']
                    },
                    {
                      label: 'Liste Patient contact',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/patient-contact/list']
                    },
                    {
                      label: 'Liste Patient',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/patient/list']
                    },
                    {
                      label: 'Liste Ville',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/etudiant/ville/list']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
