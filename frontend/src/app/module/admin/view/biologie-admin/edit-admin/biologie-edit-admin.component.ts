import {Component, OnInit} from '@angular/core';
import {BiologieService} from '../../../../../controller/service/Biologie.service';
import {BiologieVo} from '../../../../../controller/model/Biologie.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {ExamenVo} from '../../../../../controller/model/Examen.model';
import {ExamenService} from '../../../../../controller/service/Examen.service';
import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';

@Component({
  selector: 'app-biologie-edit-admin',
  templateUrl: './biologie-edit-admin.component.html',
  styleUrls: ['./biologie-edit-admin.component.css']
})
export class BiologieEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private biologieService: BiologieService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private examenService: ExamenService
 ,       private dossierMedicaleService: DossierMedicaleService
) {
}

// methods
ngOnInit(): void {
    this.selectedExamen = new ExamenVo();
    this.examenService.findAll().subscribe((data) => this.examens = data);
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedBiologie.dateBiologie = DateUtils.toDate(this.selectedBiologie.dateBiologie);
    this.biologieService.edit().subscribe(biologie=>{
    const myIndex = this.biologies.findIndex(e => e.id === this.selectedBiologie.id);
    this.biologies[myIndex] = this.selectedBiologie;
    this.editBiologieDialog = false;
    this.selectedBiologie = new BiologieVo();


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
              public async openCreateexamen(examen: string) {
                      const isPermistted = await this.roleService.isPermitted('Examen', 'add');
                       if(isPermistted){
         this.selectedExamen = new ExamenVo();
        this.createExamenDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editBiologieDialog  = false;
}

// getters and setters

get biologies(): Array<BiologieVo> {
    return this.biologieService.biologies;
       }
set biologies(value: Array<BiologieVo>) {
        this.biologieService.biologies = value;
       }

 get selectedBiologie(): BiologieVo {
           return this.biologieService.selectedBiologie;
       }
    set selectedBiologie(value: BiologieVo) {
        this.biologieService.selectedBiologie = value;
       }

   get editBiologieDialog(): boolean {
           return this.biologieService.editBiologieDialog;

       }
    set editBiologieDialog(value: boolean) {
        this.biologieService.editBiologieDialog = value;
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
       get selectedExamen(): ExamenVo {
           return this.examenService.selectedExamen;
       }
      set selectedExamen(value: ExamenVo) {
        this.examenService.selectedExamen = value;
       }
       get examens(): Array<ExamenVo> {
           return this.examenService.examens;
       }
       set examens(value: Array<ExamenVo>) {
        this.examenService.examens = value;
       }
       get createExamenDialog(): boolean {
           return this.examenService.createExamenDialog;
       }
      set createExamenDialog(value: boolean) {
        this.examenService.createExamenDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
