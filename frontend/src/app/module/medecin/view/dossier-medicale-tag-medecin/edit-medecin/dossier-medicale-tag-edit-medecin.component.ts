import {Component, OnInit} from '@angular/core';
import {DossierMedicaleTagService} from '../../../../../controller/service/DossierMedicaleTag.service';
import {DossierMedicaleTagVo} from '../../../../../controller/model/DossierMedicaleTag.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {TagVo} from '../../../../../controller/model/Tag.model';
import {TagService} from '../../../../../controller/service/Tag.service';
import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';

@Component({
  selector: 'app-dossier-medicale-tag-edit-medecin',
  templateUrl: './dossier-medicale-tag-edit-medecin.component.html',
  styleUrls: ['./dossier-medicale-tag-edit-medecin.component.css']
})
export class DossierMedicaleTagEditMedecinComponent implements OnInit {


constructor(private datePipe: DatePipe, private dossierMedicaleTagService: DossierMedicaleTagService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private tagService: TagService
 ,       private dossierMedicaleService: DossierMedicaleService
) {
}

// methods
ngOnInit(): void {
    this.selectedTag = new TagVo();
    this.tagService.findAll().subscribe((data) => this.tags = data);
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.dossierMedicaleTagService.edit().subscribe(dossierMedicaleTag=>{
    const myIndex = this.dossierMedicaleTags.findIndex(e => e.id === this.selectedDossierMedicaleTag.id);
    this.dossierMedicaleTags[myIndex] = this.selectedDossierMedicaleTag;
    this.editDossierMedicaleTagDialog = false;
    this.selectedDossierMedicaleTag = new DossierMedicaleTagVo();


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
              public async openCreatetag(tag: string) {
                      const isPermistted = await this.roleService.isPermitted('Tag', 'add');
                       if(isPermistted){
         this.selectedTag = new TagVo();
        this.createTagDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editDossierMedicaleTagDialog  = false;
}

// getters and setters

get dossierMedicaleTags(): Array<DossierMedicaleTagVo> {
    return this.dossierMedicaleTagService.dossierMedicaleTags;
       }
set dossierMedicaleTags(value: Array<DossierMedicaleTagVo>) {
        this.dossierMedicaleTagService.dossierMedicaleTags = value;
       }

 get selectedDossierMedicaleTag(): DossierMedicaleTagVo {
           return this.dossierMedicaleTagService.selectedDossierMedicaleTag;
       }
    set selectedDossierMedicaleTag(value: DossierMedicaleTagVo) {
        this.dossierMedicaleTagService.selectedDossierMedicaleTag = value;
       }

   get editDossierMedicaleTagDialog(): boolean {
           return this.dossierMedicaleTagService.editDossierMedicaleTagDialog;

       }
    set editDossierMedicaleTagDialog(value: boolean) {
        this.dossierMedicaleTagService.editDossierMedicaleTagDialog = value;
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
       get selectedTag(): TagVo {
           return this.tagService.selectedTag;
       }
      set selectedTag(value: TagVo) {
        this.tagService.selectedTag = value;
       }
       get tags(): Array<TagVo> {
           return this.tagService.tags;
       }
       set tags(value: Array<TagVo>) {
        this.tagService.tags = value;
       }
       get createTagDialog(): boolean {
           return this.tagService.createTagDialog;
       }
      set createTagDialog(value: boolean) {
        this.tagService.createTagDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
