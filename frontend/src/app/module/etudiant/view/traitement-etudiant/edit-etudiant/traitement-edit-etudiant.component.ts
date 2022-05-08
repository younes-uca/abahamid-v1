import {Component, OnInit} from '@angular/core';
import {TraitementService} from '../../../../../controller/service/Traitement.service';
import {TraitementVo} from '../../../../../controller/model/Traitement.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {RecueilDeDonnesVo} from '../../../../../controller/model/RecueilDeDonnes.model';
import {RecueilDeDonnesService} from '../../../../../controller/service/RecueilDeDonnes.service';
import {InfirmierVo} from '../../../../../controller/model/Infirmier.model';
import {InfirmierService} from '../../../../../controller/service/Infirmier.service';
import {SoinVo} from '../../../../../controller/model/Soin.model';
import {SoinService} from '../../../../../controller/service/Soin.service';

@Component({
  selector: 'app-traitement-edit-etudiant',
  templateUrl: './traitement-edit-etudiant.component.html',
  styleUrls: ['./traitement-edit-etudiant.component.css']
})
export class TraitementEditEtudiantComponent implements OnInit {

        selectedSoins: SoinVo = new SoinVo();
        soinsListe: Array<SoinVo> = [];

        myInfirmiers: Array<InfirmierVo> = [];


constructor(private datePipe: DatePipe, private traitementService: TraitementService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private recueilDeDonnesService: RecueilDeDonnesService
 ,       private infirmierService: InfirmierService
 ,       private soinService: SoinService
) {
}

// methods
ngOnInit(): void {
                this.selectedSoins.infirmierVo = new InfirmierVo();
                this.infirmierService.findAll().subscribe((data) => this.infirmiers = data);
    this.selectedRecueilDeDonnes = new RecueilDeDonnesVo();
    this.recueilDeDonnesService.findAll().subscribe((data) => this.recueilDeDonness = data);
}
        addSoins() {
        if( this.selectedTraitement.soinsVo == null ){
            this.selectedTraitement.soinsVo = new Array<SoinVo>();
        }
        this.selectedTraitement.soinsVo.push(this.selectedSoins);
        this.selectedSoins = new SoinVo();
        }

       deleteSoins(p: SoinVo) {
        this.selectedTraitement.soinsVo.forEach((element, index) => {
            if (element === p) { this.selectedTraitement.soinsVo.splice(index, 1); }
        });
    }

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.traitementService.edit().subscribe(traitement=>{
    const myIndex = this.traitements.findIndex(e => e.id === this.selectedTraitement.id);
    this.traitements[myIndex] = this.selectedTraitement;
    this.editTraitementDialog = false;
    this.selectedTraitement = new TraitementVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreateinfirmier(infirmier: string) {
                      const isPermistted = await this.roleService.isPermitted('Infirmier', 'add');
                       if(isPermistted){
         this.selectedInfirmier = new InfirmierVo();
        this.createInfirmierDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
              public async openCreaterecueilDeDonnes(recueilDeDonnes: string) {
                      const isPermistted = await this.roleService.isPermitted('RecueilDeDonnes', 'add');
                       if(isPermistted){
         this.selectedRecueilDeDonnes = new RecueilDeDonnesVo();
        this.createRecueilDeDonnesDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editTraitementDialog  = false;
}

// getters and setters

get traitements(): Array<TraitementVo> {
    return this.traitementService.traitements;
       }
set traitements(value: Array<TraitementVo>) {
        this.traitementService.traitements = value;
       }

 get selectedTraitement(): TraitementVo {
           return this.traitementService.selectedTraitement;
       }
    set selectedTraitement(value: TraitementVo) {
        this.traitementService.selectedTraitement = value;
       }

   get editTraitementDialog(): boolean {
           return this.traitementService.editTraitementDialog;

       }
    set editTraitementDialog(value: boolean) {
        this.traitementService.editTraitementDialog = value;
       }

       get selectedInfirmier(): InfirmierVo {
           return this.infirmierService.selectedInfirmier;
       }
      set selectedInfirmier(value: InfirmierVo) {
        this.infirmierService.selectedInfirmier = value;
       }
       get infirmiers(): Array<InfirmierVo> {
           return this.infirmierService.infirmiers;
       }
       set infirmiers(value: Array<InfirmierVo>) {
        this.infirmierService.infirmiers = value;
       }
       get createInfirmierDialog(): boolean {
           return this.infirmierService.createInfirmierDialog;
       }
      set createInfirmierDialog(value: boolean) {
        this.infirmierService.createInfirmierDialog= value;
       }
       get selectedRecueilDeDonnes(): RecueilDeDonnesVo {
           return this.recueilDeDonnesService.selectedRecueilDeDonnes;
       }
      set selectedRecueilDeDonnes(value: RecueilDeDonnesVo) {
        this.recueilDeDonnesService.selectedRecueilDeDonnes = value;
       }
       get recueilDeDonness(): Array<RecueilDeDonnesVo> {
           return this.recueilDeDonnesService.recueilDeDonness;
       }
       set recueilDeDonness(value: Array<RecueilDeDonnesVo>) {
        this.recueilDeDonnesService.recueilDeDonness = value;
       }
       get createRecueilDeDonnesDialog(): boolean {
           return this.recueilDeDonnesService.createRecueilDeDonnesDialog;
       }
      set createRecueilDeDonnesDialog(value: boolean) {
        this.recueilDeDonnesService.createRecueilDeDonnesDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
