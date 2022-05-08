import {Component, OnInit} from '@angular/core';
import {ImagerieService} from '../../../../../controller/service/Imagerie.service';
import {ImagerieVo} from '../../../../../controller/model/Imagerie.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';
import {TypeImageVo} from '../../../../../controller/model/TypeImage.model';
import {TypeImageService} from '../../../../../controller/service/TypeImage.service';
import {PhaseImageVo} from '../../../../../controller/model/PhaseImage.model';
import {PhaseImageService} from '../../../../../controller/service/PhaseImage.service';

@Component({
  selector: 'app-imagerie-view-medecin',
  templateUrl: './imagerie-view-medecin.component.html',
  styleUrls: ['./imagerie-view-medecin.component.css']
})
export class ImagerieViewMedecinComponent implements OnInit {


constructor(private datePipe: DatePipe, private imagerieService: ImagerieService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private dossierMedicaleService :DossierMedicaleService
    ,private typeImageService :TypeImageService
    ,private phaseImageService :PhaseImageService
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

hideViewDialog(){
    this.viewImagerieDialog  = false;
}

// getters and setters

get imageries(): Array<ImagerieVo> {
    return this.imagerieService.imageries;
       }
set imageries(value: Array<ImagerieVo>) {
        this.imagerieService.imageries = value;
       }

 get selectedImagerie():ImagerieVo {
           return this.imagerieService.selectedImagerie;
       }
    set selectedImagerie(value: ImagerieVo) {
        this.imagerieService.selectedImagerie = value;
       }

   get viewImagerieDialog():boolean {
           return this.imagerieService.viewImagerieDialog;

       }
    set viewImagerieDialog(value: boolean) {
        this.imagerieService.viewImagerieDialog= value;
       }

       get selectedTypeImage():TypeImageVo {
           return this.typeImageService.selectedTypeImage;
       }
      set selectedTypeImage(value: TypeImageVo) {
        this.typeImageService.selectedTypeImage = value;
       }
       get typeImages():Array<TypeImageVo> {
           return this.typeImageService.typeImages;
       }
       set typeImages(value: Array<TypeImageVo>) {
        this.typeImageService.typeImages = value;
       }
       get editTypeImageDialog():boolean {
           return this.typeImageService.editTypeImageDialog;
       }
      set editTypeImageDialog(value: boolean) {
        this.typeImageService.editTypeImageDialog= value;
       }
       get selectedDossierMedicale():DossierMedicaleVo {
           return this.dossierMedicaleService.selectedDossierMedicale;
       }
      set selectedDossierMedicale(value: DossierMedicaleVo) {
        this.dossierMedicaleService.selectedDossierMedicale = value;
       }
       get dossierMedicales():Array<DossierMedicaleVo> {
           return this.dossierMedicaleService.dossierMedicales;
       }
       set dossierMedicales(value: Array<DossierMedicaleVo>) {
        this.dossierMedicaleService.dossierMedicales = value;
       }
       get editDossierMedicaleDialog():boolean {
           return this.dossierMedicaleService.editDossierMedicaleDialog;
       }
      set editDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.editDossierMedicaleDialog= value;
       }
       get selectedPhaseImage():PhaseImageVo {
           return this.phaseImageService.selectedPhaseImage;
       }
      set selectedPhaseImage(value: PhaseImageVo) {
        this.phaseImageService.selectedPhaseImage = value;
       }
       get phaseImages():Array<PhaseImageVo> {
           return this.phaseImageService.phaseImages;
       }
       set phaseImages(value: Array<PhaseImageVo>) {
        this.phaseImageService.phaseImages = value;
       }
       get editPhaseImageDialog():boolean {
           return this.phaseImageService.editPhaseImageDialog;
       }
      set editPhaseImageDialog(value: boolean) {
        this.phaseImageService.editPhaseImageDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
