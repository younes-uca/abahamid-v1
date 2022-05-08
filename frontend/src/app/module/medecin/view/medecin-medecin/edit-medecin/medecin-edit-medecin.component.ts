import {Component, OnInit} from '@angular/core';
import {MedecinService} from '../../../../../controller/service/Medecin.service';
import {MedecinVo} from '../../../../../controller/model/Medecin.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-medecin-edit-medecin',
  templateUrl: './medecin-edit-medecin.component.html',
  styleUrls: ['./medecin-edit-medecin.component.css']
})
export class MedecinEditMedecinComponent implements OnInit {


constructor(private datePipe: DatePipe, private medecinService: MedecinService
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
            this.selectedMedecin.createdAt = DateUtils.toDate(this.selectedMedecin.createdAt);
            this.selectedMedecin.updatedAt = DateUtils.toDate(this.selectedMedecin.updatedAt);
    this.medecinService.edit().subscribe(medecin=>{
    const myIndex = this.medecins.findIndex(e => e.id === this.selectedMedecin.id);
    this.medecins[myIndex] = this.selectedMedecin;
    this.editMedecinDialog = false;
    this.selectedMedecin = new MedecinVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editMedecinDialog  = false;
}

// getters and setters

get medecins(): Array<MedecinVo> {
    return this.medecinService.medecins;
       }
set medecins(value: Array<MedecinVo>) {
        this.medecinService.medecins = value;
       }

 get selectedMedecin(): MedecinVo {
           return this.medecinService.selectedMedecin;
       }
    set selectedMedecin(value: MedecinVo) {
        this.medecinService.selectedMedecin = value;
       }

   get editMedecinDialog(): boolean {
           return this.medecinService.editMedecinDialog;

       }
    set editMedecinDialog(value: boolean) {
        this.medecinService.editMedecinDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
