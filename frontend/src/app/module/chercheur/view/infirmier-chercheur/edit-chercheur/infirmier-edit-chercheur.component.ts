import {Component, OnInit} from '@angular/core';
import {InfirmierService} from '../../../../../controller/service/Infirmier.service';
import {InfirmierVo} from '../../../../../controller/model/Infirmier.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-infirmier-edit-chercheur',
  templateUrl: './infirmier-edit-chercheur.component.html',
  styleUrls: ['./infirmier-edit-chercheur.component.css']
})
export class InfirmierEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private infirmierService: InfirmierService
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
    this.infirmierService.edit().subscribe(infirmier=>{
    const myIndex = this.infirmiers.findIndex(e => e.id === this.selectedInfirmier.id);
    this.infirmiers[myIndex] = this.selectedInfirmier;
    this.editInfirmierDialog = false;
    this.selectedInfirmier = new InfirmierVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editInfirmierDialog  = false;
}

// getters and setters

get infirmiers(): Array<InfirmierVo> {
    return this.infirmierService.infirmiers;
       }
set infirmiers(value: Array<InfirmierVo>) {
        this.infirmierService.infirmiers = value;
       }

 get selectedInfirmier(): InfirmierVo {
           return this.infirmierService.selectedInfirmier;
       }
    set selectedInfirmier(value: InfirmierVo) {
        this.infirmierService.selectedInfirmier = value;
       }

   get editInfirmierDialog(): boolean {
           return this.infirmierService.editInfirmierDialog;

       }
    set editInfirmierDialog(value: boolean) {
        this.infirmierService.editInfirmierDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
