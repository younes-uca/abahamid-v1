import {Component, OnInit} from '@angular/core';
import {ImagerieService} from '../../../../../controller/service/Imagerie.service';
import {ImagerieVo} from '../../../../../controller/model/Imagerie.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';
import {TypeImageVo} from '../../../../../controller/model/TypeImage.model';
import {TypeImageService} from '../../../../../controller/service/TypeImage.service';
import {PhaseImageVo} from '../../../../../controller/model/PhaseImage.model';
import {PhaseImageService} from '../../../../../controller/service/PhaseImage.service';

@Component({
  selector: 'app-imagerie-edit-admin',
  templateUrl: './imagerie-edit-admin.component.html',
  styleUrls: ['./imagerie-edit-admin.component.css']
})
export class ImagerieEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private imagerieService: ImagerieService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private dossierMedicaleService: DossierMedicaleService
 ,       private typeImageService: TypeImageService
 ,       private phaseImageService: PhaseImageService
) {
}

// methods
ngOnInit(): void {
    this.selectedTypeImage = new TypeImageVo();
    this.typeImageService.findAll().subscribe((data) => this.typeImages = data);
    this.selectedPhaseImage = new PhaseImageVo();
    this.phaseImageService.findAll().subscribe((data) => this.phaseImages = data);
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedImagerie.dateImagerie = DateUtils.toDate(this.selectedImagerie.dateImagerie);
    this.imagerieService.edit().subscribe(imagerie=>{
    const myIndex = this.imageries.findIndex(e => e.id === this.selectedImagerie.id);
    this.imageries[myIndex] = this.selectedImagerie;
    this.editImagerieDialog = false;
    this.selectedImagerie = new ImagerieVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreatetypeImage(typeImage: string) {
                      const isPermistted = await this.roleService.isPermitted('TypeImage', 'add');
                       if(isPermistted){
         this.selectedTypeImage = new TypeImageVo();
        this.createTypeImageDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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
              public async openCreatephaseImage(phaseImage: string) {
                      const isPermistted = await this.roleService.isPermitted('PhaseImage', 'add');
                       if(isPermistted){
         this.selectedPhaseImage = new PhaseImageVo();
        this.createPhaseImageDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editImagerieDialog  = false;
}

// getters and setters

get imageries(): Array<ImagerieVo> {
    return this.imagerieService.imageries;
       }
set imageries(value: Array<ImagerieVo>) {
        this.imagerieService.imageries = value;
       }

 get selectedImagerie(): ImagerieVo {
           return this.imagerieService.selectedImagerie;
       }
    set selectedImagerie(value: ImagerieVo) {
        this.imagerieService.selectedImagerie = value;
       }

   get editImagerieDialog(): boolean {
           return this.imagerieService.editImagerieDialog;

       }
    set editImagerieDialog(value: boolean) {
        this.imagerieService.editImagerieDialog = value;
       }

       get selectedTypeImage(): TypeImageVo {
           return this.typeImageService.selectedTypeImage;
       }
      set selectedTypeImage(value: TypeImageVo) {
        this.typeImageService.selectedTypeImage = value;
       }
       get typeImages(): Array<TypeImageVo> {
           return this.typeImageService.typeImages;
       }
       set typeImages(value: Array<TypeImageVo>) {
        this.typeImageService.typeImages = value;
       }
       get createTypeImageDialog(): boolean {
           return this.typeImageService.createTypeImageDialog;
       }
      set createTypeImageDialog(value: boolean) {
        this.typeImageService.createTypeImageDialog= value;
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
       get selectedPhaseImage(): PhaseImageVo {
           return this.phaseImageService.selectedPhaseImage;
       }
      set selectedPhaseImage(value: PhaseImageVo) {
        this.phaseImageService.selectedPhaseImage = value;
       }
       get phaseImages(): Array<PhaseImageVo> {
           return this.phaseImageService.phaseImages;
       }
       set phaseImages(value: Array<PhaseImageVo>) {
        this.phaseImageService.phaseImages = value;
       }
       get createPhaseImageDialog(): boolean {
           return this.phaseImageService.createPhaseImageDialog;
       }
      set createPhaseImageDialog(value: boolean) {
        this.phaseImageService.createPhaseImageDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
