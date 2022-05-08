import {Component, OnInit} from '@angular/core';
import {RecueilDeDonnesService} from '../../../../../controller/service/RecueilDeDonnes.service';
import {RecueilDeDonnesVo} from '../../../../../controller/model/RecueilDeDonnes.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-recueil-de-donnes-edit-admin',
  templateUrl: './recueil-de-donnes-edit-admin.component.html',
  styleUrls: ['./recueil-de-donnes-edit-admin.component.css']
})
export class RecueilDeDonnesEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private recueilDeDonnesService: RecueilDeDonnesService
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
    this.recueilDeDonnesService.edit().subscribe(recueilDeDonnes=>{
    const myIndex = this.recueilDeDonness.findIndex(e => e.id === this.selectedRecueilDeDonnes.id);
    this.recueilDeDonness[myIndex] = this.selectedRecueilDeDonnes;
    this.editRecueilDeDonnesDialog = false;
    this.selectedRecueilDeDonnes = new RecueilDeDonnesVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editRecueilDeDonnesDialog  = false;
}

// getters and setters

get recueilDeDonness(): Array<RecueilDeDonnesVo> {
    return this.recueilDeDonnesService.recueilDeDonness;
       }
set recueilDeDonness(value: Array<RecueilDeDonnesVo>) {
        this.recueilDeDonnesService.recueilDeDonness = value;
       }

 get selectedRecueilDeDonnes(): RecueilDeDonnesVo {
           return this.recueilDeDonnesService.selectedRecueilDeDonnes;
       }
    set selectedRecueilDeDonnes(value: RecueilDeDonnesVo) {
        this.recueilDeDonnesService.selectedRecueilDeDonnes = value;
       }

   get editRecueilDeDonnesDialog(): boolean {
           return this.recueilDeDonnesService.editRecueilDeDonnesDialog;

       }
    set editRecueilDeDonnesDialog(value: boolean) {
        this.recueilDeDonnesService.editRecueilDeDonnesDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
