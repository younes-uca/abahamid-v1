import {Component, OnInit} from '@angular/core';
import {CompteRenduService} from '../../../../../controller/service/CompteRendu.service';
import {CompteRenduVo} from '../../../../../controller/model/CompteRendu.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';

@Component({
  selector: 'app-compte-rendu-edit-medecin',
  templateUrl: './compte-rendu-edit-medecin.component.html',
  styleUrls: ['./compte-rendu-edit-medecin.component.css']
})
export class CompteRenduEditMedecinComponent implements OnInit {


constructor(private datePipe: DatePipe, private compteRenduService: CompteRenduService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private dossierMedicaleService: DossierMedicaleService
) {
}

// methods
ngOnInit(): void {
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedCompteRendu.dateCompteR = DateUtils.toDate(this.selectedCompteRendu.dateCompteR);
    this.compteRenduService.edit().subscribe(compteRendu=>{
    const myIndex = this.compteRendus.findIndex(e => e.id === this.selectedCompteRendu.id);
    this.compteRendus[myIndex] = this.selectedCompteRendu;
    this.editCompteRenduDialog = false;
    this.selectedCompteRendu = new CompteRenduVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreatedossierMedicale(dossierMedicale: string) {
                      const isPermistted = await this.roleService.isPermitted('DossierMedicale', 'add');
                       if(isPermistted){
         this.selectedDossierMedicale = new DossierMedicaleVo();
        this.createDossierMedicaleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editCompteRenduDialog  = false;
}

// getters and setters

get compteRendus(): Array<CompteRenduVo> {
    return this.compteRenduService.compteRendus;
       }
set compteRendus(value: Array<CompteRenduVo>) {
        this.compteRenduService.compteRendus = value;
       }

 get selectedCompteRendu(): CompteRenduVo {
           return this.compteRenduService.selectedCompteRendu;
       }
    set selectedCompteRendu(value: CompteRenduVo) {
        this.compteRenduService.selectedCompteRendu = value;
       }

   get editCompteRenduDialog(): boolean {
           return this.compteRenduService.editCompteRenduDialog;

       }
    set editCompteRenduDialog(value: boolean) {
        this.compteRenduService.editCompteRenduDialog = value;
       }

       get selectedDossierMedicale(): DossierMedicaleVo {
           return this.dossierMedicaleService.selectedDossierMedicale;
       }
      set selectedDossierMedicale(value: DossierMedicaleVo) {
        this.dossierMedicaleService.selectedDossierMedicale = value;
       }
       get dossierMedicales(): Array<DossierMedicaleVo> {
           return this.dossierMedicaleService.dossierMedicales;
       }
       set dossierMedicales(value: Array<DossierMedicaleVo>) {
        this.dossierMedicaleService.dossierMedicales = value;
       }
       get createDossierMedicaleDialog(): boolean {
           return this.dossierMedicaleService.createDossierMedicaleDialog;
       }
      set createDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.createDossierMedicaleDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
