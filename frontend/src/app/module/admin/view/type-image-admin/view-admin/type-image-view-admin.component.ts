import {Component, OnInit} from '@angular/core';
import {TypeImageService} from '../../../../../controller/service/TypeImage.service';
import {TypeImageVo} from '../../../../../controller/model/TypeImage.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-type-image-view-admin',
  templateUrl: './type-image-view-admin.component.html',
  styleUrls: ['./type-image-view-admin.component.css']
})
export class TypeImageViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private typeImageService: TypeImageService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewTypeImageDialog  = false;
}

// getters and setters

get typeImages(): Array<TypeImageVo> {
    return this.typeImageService.typeImages;
       }
set typeImages(value: Array<TypeImageVo>) {
        this.typeImageService.typeImages = value;
       }

 get selectedTypeImage():TypeImageVo {
           return this.typeImageService.selectedTypeImage;
       }
    set selectedTypeImage(value: TypeImageVo) {
        this.typeImageService.selectedTypeImage = value;
       }

   get viewTypeImageDialog():boolean {
           return this.typeImageService.viewTypeImageDialog;

       }
    set viewTypeImageDialog(value: boolean) {
        this.typeImageService.viewTypeImageDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
