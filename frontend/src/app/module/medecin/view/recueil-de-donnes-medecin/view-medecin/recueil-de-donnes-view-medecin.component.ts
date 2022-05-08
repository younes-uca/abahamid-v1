import {Component, OnInit} from '@angular/core';
import {RecueilDeDonnesService} from '../../../../../controller/service/RecueilDeDonnes.service';
import {RecueilDeDonnesVo} from '../../../../../controller/model/RecueilDeDonnes.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-recueil-de-donnes-view-medecin',
  templateUrl: './recueil-de-donnes-view-medecin.component.html',
  styleUrls: ['./recueil-de-donnes-view-medecin.component.css']
})
export class RecueilDeDonnesViewMedecinComponent implements OnInit {


constructor(private datePipe: DatePipe, private recueilDeDonnesService: RecueilDeDonnesService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewRecueilDeDonnesDialog  = false;
}

// getters and setters

get recueilDeDonness(): Array<RecueilDeDonnesVo> {
    return this.recueilDeDonnesService.recueilDeDonness;
       }
set recueilDeDonness(value: Array<RecueilDeDonnesVo>) {
        this.recueilDeDonnesService.recueilDeDonness = value;
       }

 get selectedRecueilDeDonnes():RecueilDeDonnesVo {
           return this.recueilDeDonnesService.selectedRecueilDeDonnes;
       }
    set selectedRecueilDeDonnes(value: RecueilDeDonnesVo) {
        this.recueilDeDonnesService.selectedRecueilDeDonnes = value;
       }

   get viewRecueilDeDonnesDialog():boolean {
           return this.recueilDeDonnesService.viewRecueilDeDonnesDialog;

       }
    set viewRecueilDeDonnesDialog(value: boolean) {
        this.recueilDeDonnesService.viewRecueilDeDonnesDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
