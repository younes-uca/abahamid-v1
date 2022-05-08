import {Component, OnInit} from '@angular/core';
import {EvoSuivService} from '../../../../../controller/service/EvoSuiv.service';
import {EvoSuivVo} from '../../../../../controller/model/EvoSuiv.model';
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
  selector: 'app-evo-suiv-edit-admin',
  templateUrl: './evo-suiv-edit-admin.component.html',
  styleUrls: ['./evo-suiv-edit-admin.component.css']
})
export class EvoSuivEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private evoSuivService: EvoSuivService
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
            this.selectedEvoSuiv.dateEvoS = DateUtils.toDate(this.selectedEvoSuiv.dateEvoS);
    this.evoSuivService.edit().subscribe(evoSuiv=>{
    const myIndex = this.evoSuivs.findIndex(e => e.id === this.selectedEvoSuiv.id);
    this.evoSuivs[myIndex] = this.selectedEvoSuiv;
    this.editEvoSuivDialog = false;
    this.selectedEvoSuiv = new EvoSuivVo();


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
    this.editEvoSuivDialog  = false;
}

// getters and setters

get evoSuivs(): Array<EvoSuivVo> {
    return this.evoSuivService.evoSuivs;
       }
set evoSuivs(value: Array<EvoSuivVo>) {
        this.evoSuivService.evoSuivs = value;
       }

 get selectedEvoSuiv(): EvoSuivVo {
           return this.evoSuivService.selectedEvoSuiv;
       }
    set selectedEvoSuiv(value: EvoSuivVo) {
        this.evoSuivService.selectedEvoSuiv = value;
       }

   get editEvoSuivDialog(): boolean {
           return this.evoSuivService.editEvoSuivDialog;

       }
    set editEvoSuivDialog(value: boolean) {
        this.evoSuivService.editEvoSuivDialog = value;
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
