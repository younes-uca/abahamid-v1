import {Component, OnInit} from '@angular/core';
import {CliniqueService} from '../../../../../controller/service/Clinique.service';
import {CliniqueVo} from '../../../../../controller/model/Clinique.model';
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
  selector: 'app-clinique-edit-etudiant',
  templateUrl: './clinique-edit-etudiant.component.html',
  styleUrls: ['./clinique-edit-etudiant.component.css']
})
export class CliniqueEditEtudiantComponent implements OnInit {


constructor(private datePipe: DatePipe, private cliniqueService: CliniqueService
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
            this.selectedClinique.dateClinique = DateUtils.toDate(this.selectedClinique.dateClinique);
    this.cliniqueService.edit().subscribe(clinique=>{
    const myIndex = this.cliniques.findIndex(e => e.id === this.selectedClinique.id);
    this.cliniques[myIndex] = this.selectedClinique;
    this.editCliniqueDialog = false;
    this.selectedClinique = new CliniqueVo();


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
    this.editCliniqueDialog  = false;
}

// getters and setters

get cliniques(): Array<CliniqueVo> {
    return this.cliniqueService.cliniques;
       }
set cliniques(value: Array<CliniqueVo>) {
        this.cliniqueService.cliniques = value;
       }

 get selectedClinique(): CliniqueVo {
           return this.cliniqueService.selectedClinique;
       }
    set selectedClinique(value: CliniqueVo) {
        this.cliniqueService.selectedClinique = value;
       }

   get editCliniqueDialog(): boolean {
           return this.cliniqueService.editCliniqueDialog;

       }
    set editCliniqueDialog(value: boolean) {
        this.cliniqueService.editCliniqueDialog = value;
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
