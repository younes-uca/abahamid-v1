import {Component, OnInit} from '@angular/core';
import {DossierMedicaleTagService} from '../../../../../controller/service/DossierMedicaleTag.service';
import {DossierMedicaleTagVo} from '../../../../../controller/model/DossierMedicaleTag.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {TagVo} from '../../../../../controller/model/Tag.model';
import {TagService} from '../../../../../controller/service/Tag.service';
import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';

@Component({
  selector: 'app-dossier-medicale-tag-view-medecin',
  templateUrl: './dossier-medicale-tag-view-medecin.component.html',
  styleUrls: ['./dossier-medicale-tag-view-medecin.component.css']
})
export class DossierMedicaleTagViewMedecinComponent implements OnInit {


constructor(private datePipe: DatePipe, private dossierMedicaleTagService: DossierMedicaleTagService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private tagService :TagService
    ,private dossierMedicaleService :DossierMedicaleService
) {
}

// methods
ngOnInit(): void {
    this.selectedTag = new TagVo();
    this.tagService.findAll().subscribe((data) => this.tags = data);
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}

hideViewDialog(){
    this.viewDossierMedicaleTagDialog  = false;
}

// getters and setters

get dossierMedicaleTags(): Array<DossierMedicaleTagVo> {
    return this.dossierMedicaleTagService.dossierMedicaleTags;
       }
set dossierMedicaleTags(value: Array<DossierMedicaleTagVo>) {
        this.dossierMedicaleTagService.dossierMedicaleTags = value;
       }

 get selectedDossierMedicaleTag():DossierMedicaleTagVo {
           return this.dossierMedicaleTagService.selectedDossierMedicaleTag;
       }
    set selectedDossierMedicaleTag(value: DossierMedicaleTagVo) {
        this.dossierMedicaleTagService.selectedDossierMedicaleTag = value;
       }

   get viewDossierMedicaleTagDialog():boolean {
           return this.dossierMedicaleTagService.viewDossierMedicaleTagDialog;

       }
    set viewDossierMedicaleTagDialog(value: boolean) {
        this.dossierMedicaleTagService.viewDossierMedicaleTagDialog= value;
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
       get selectedTag():TagVo {
           return this.tagService.selectedTag;
       }
      set selectedTag(value: TagVo) {
        this.tagService.selectedTag = value;
       }
       get tags():Array<TagVo> {
           return this.tagService.tags;
       }
       set tags(value: Array<TagVo>) {
        this.tagService.tags = value;
       }
       get editTagDialog():boolean {
           return this.tagService.editTagDialog;
       }
      set editTagDialog(value: boolean) {
        this.tagService.editTagDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
