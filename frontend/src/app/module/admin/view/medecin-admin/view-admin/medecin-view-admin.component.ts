import {Component, OnInit} from '@angular/core';
import {MedecinService} from '../../../../../controller/service/Medecin.service';
import {MedecinVo} from '../../../../../controller/model/Medecin.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-medecin-view-admin',
  templateUrl: './medecin-view-admin.component.html',
  styleUrls: ['./medecin-view-admin.component.css']
})
export class MedecinViewAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private medecinService: MedecinService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewMedecinDialog  = false;
}

// getters and setters

get medecins(): Array<MedecinVo> {
    return this.medecinService.medecins;
       }
set medecins(value: Array<MedecinVo>) {
        this.medecinService.medecins = value;
       }

 get selectedMedecin():MedecinVo {
           return this.medecinService.selectedMedecin;
       }
    set selectedMedecin(value: MedecinVo) {
        this.medecinService.selectedMedecin = value;
       }

   get viewMedecinDialog():boolean {
           return this.medecinService.viewMedecinDialog;

       }
    set viewMedecinDialog(value: boolean) {
        this.medecinService.viewMedecinDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
