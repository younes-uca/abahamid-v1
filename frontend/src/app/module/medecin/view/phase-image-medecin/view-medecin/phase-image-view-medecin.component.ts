import {Component, OnInit} from '@angular/core';
import {PhaseImageService} from '../../../../../controller/service/PhaseImage.service';
import {PhaseImageVo} from '../../../../../controller/model/PhaseImage.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-phase-image-view-medecin',
  templateUrl: './phase-image-view-medecin.component.html',
  styleUrls: ['./phase-image-view-medecin.component.css']
})
export class PhaseImageViewMedecinComponent implements OnInit {


constructor(private datePipe: DatePipe, private phaseImageService: PhaseImageService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewPhaseImageDialog  = false;
}

// getters and setters

get phaseImages(): Array<PhaseImageVo> {
    return this.phaseImageService.phaseImages;
       }
set phaseImages(value: Array<PhaseImageVo>) {
        this.phaseImageService.phaseImages = value;
       }

 get selectedPhaseImage():PhaseImageVo {
           return this.phaseImageService.selectedPhaseImage;
       }
    set selectedPhaseImage(value: PhaseImageVo) {
        this.phaseImageService.selectedPhaseImage = value;
       }

   get viewPhaseImageDialog():boolean {
           return this.phaseImageService.viewPhaseImageDialog;

       }
    set viewPhaseImageDialog(value: boolean) {
        this.phaseImageService.viewPhaseImageDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
