import {Component, OnInit} from '@angular/core';
import {SoinService} from '../../../../../controller/service/Soin.service';
import {SoinVo} from '../../../../../controller/model/Soin.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {TraitementVo} from '../../../../../controller/model/Traitement.model';
import {TraitementService} from '../../../../../controller/service/Traitement.service';
import {InfirmierVo} from '../../../../../controller/model/Infirmier.model';
import {InfirmierService} from '../../../../../controller/service/Infirmier.service';

@Component({
  selector: 'app-soin-edit-chercheur',
  templateUrl: './soin-edit-chercheur.component.html',
  styleUrls: ['./soin-edit-chercheur.component.css']
})
export class SoinEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private soinService: SoinService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private traitementService: TraitementService
 ,       private infirmierService: InfirmierService
) {
}

// methods
ngOnInit(): void {
    this.selectedInfirmier = new InfirmierVo();
    this.infirmierService.findAll().subscribe((data) => this.infirmiers = data);
    this.selectedTraitement = new TraitementVo();
    this.traitementService.findAll().subscribe((data) => this.traitements = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedSoin.dateSoin = DateUtils.toDate(this.selectedSoin.dateSoin);
    this.soinService.edit().subscribe(soin=>{
    const myIndex = this.soins.findIndex(e => e.id === this.selectedSoin.id);
    this.soins[myIndex] = this.selectedSoin;
    this.editSoinDialog = false;
    this.selectedSoin = new SoinVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreatetraitement(traitement: string) {
                      const isPermistted = await this.roleService.isPermitted('Traitement', 'add');
                       if(isPermistted){
         this.selectedTraitement = new TraitementVo();
        this.createTraitementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
// methods

hideEditDialog(){
    this.editSoinDialog  = false;
}

// getters and setters

get soins(): Array<SoinVo> {
    return this.soinService.soins;
       }
set soins(value: Array<SoinVo>) {
        this.soinService.soins = value;
       }

 get selectedSoin(): SoinVo {
           return this.soinService.selectedSoin;
       }
    set selectedSoin(value: SoinVo) {
        this.soinService.selectedSoin = value;
       }

   get editSoinDialog(): boolean {
           return this.soinService.editSoinDialog;

       }
    set editSoinDialog(value: boolean) {
        this.soinService.editSoinDialog = value;
       }

       get selectedTraitement(): TraitementVo {
           return this.traitementService.selectedTraitement;
       }
      set selectedTraitement(value: TraitementVo) {
        this.traitementService.selectedTraitement = value;
       }
       get traitements(): Array<TraitementVo> {
           return this.traitementService.traitements;
       }
       set traitements(value: Array<TraitementVo>) {
        this.traitementService.traitements = value;
       }
       get createTraitementDialog(): boolean {
           return this.traitementService.createTraitementDialog;
       }
      set createTraitementDialog(value: boolean) {
        this.traitementService.createTraitementDialog= value;
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

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
