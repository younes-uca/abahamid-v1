import {Component, OnInit} from '@angular/core';
import {VilleService} from '../../../../../controller/service/Ville.service';
import {VilleVo} from '../../../../../controller/model/Ville.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-ville-edit-admin',
  templateUrl: './ville-edit-admin.component.html',
  styleUrls: ['./ville-edit-admin.component.css']
})
export class VilleEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private villeService: VilleService
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
    this.villeService.edit().subscribe(ville=>{
    const myIndex = this.villes.findIndex(e => e.id === this.selectedVille.id);
    this.villes[myIndex] = this.selectedVille;
    this.editVilleDialog = false;
    this.selectedVille = new VilleVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editVilleDialog  = false;
}

// getters and setters

get villes(): Array<VilleVo> {
    return this.villeService.villes;
       }
set villes(value: Array<VilleVo>) {
        this.villeService.villes = value;
       }

 get selectedVille(): VilleVo {
           return this.villeService.selectedVille;
       }
    set selectedVille(value: VilleVo) {
        this.villeService.selectedVille = value;
       }

   get editVilleDialog(): boolean {
           return this.villeService.editVilleDialog;

       }
    set editVilleDialog(value: boolean) {
        this.villeService.editVilleDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
