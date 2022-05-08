import {Component, OnInit} from '@angular/core';
import {PhaseImageService} from '../../../../../controller/service/PhaseImage.service';
import {PhaseImageVo} from '../../../../../controller/model/PhaseImage.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-phase-image-edit-chercheur',
  templateUrl: './phase-image-edit-chercheur.component.html',
  styleUrls: ['./phase-image-edit-chercheur.component.css']
})
export class PhaseImageEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private phaseImageService: PhaseImageService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
) {
}

// methods
ngOnInit(): void {
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
    this.phaseImageService.edit().subscribe(phaseImage=>{
    const myIndex = this.phaseImages.findIndex(e => e.id === this.selectedPhaseImage.id);
    this.phaseImages[myIndex] = this.selectedPhaseImage;
    this.editPhaseImageDialog = false;
    this.selectedPhaseImage = new PhaseImageVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editPhaseImageDialog  = false;
}

// getters and setters

get phaseImages(): Array<PhaseImageVo> {
    return this.phaseImageService.phaseImages;
       }
set phaseImages(value: Array<PhaseImageVo>) {
        this.phaseImageService.phaseImages = value;
       }

 get selectedPhaseImage(): PhaseImageVo {
           return this.phaseImageService.selectedPhaseImage;
       }
    set selectedPhaseImage(value: PhaseImageVo) {
        this.phaseImageService.selectedPhaseImage = value;
       }

   get editPhaseImageDialog(): boolean {
           return this.phaseImageService.editPhaseImageDialog;

       }
    set editPhaseImageDialog(value: boolean) {
        this.phaseImageService.editPhaseImageDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
