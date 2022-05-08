import {Component, OnInit} from '@angular/core';
import {InfirmierService} from '../../../../../controller/service/Infirmier.service';
import {InfirmierVo} from '../../../../../controller/model/Infirmier.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-infirmier-view-etudiant',
  templateUrl: './infirmier-view-etudiant.component.html',
  styleUrls: ['./infirmier-view-etudiant.component.css']
})
export class InfirmierViewEtudiantComponent implements OnInit {


constructor(private datePipe: DatePipe, private infirmierService: InfirmierService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewInfirmierDialog  = false;
}

// getters and setters

get infirmiers(): Array<InfirmierVo> {
    return this.infirmierService.infirmiers;
       }
set infirmiers(value: Array<InfirmierVo>) {
        this.infirmierService.infirmiers = value;
       }

 get selectedInfirmier():InfirmierVo {
           return this.infirmierService.selectedInfirmier;
       }
    set selectedInfirmier(value: InfirmierVo) {
        this.infirmierService.selectedInfirmier = value;
       }

   get viewInfirmierDialog():boolean {
           return this.infirmierService.viewInfirmierDialog;

       }
    set viewInfirmierDialog(value: boolean) {
        this.infirmierService.viewInfirmierDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
