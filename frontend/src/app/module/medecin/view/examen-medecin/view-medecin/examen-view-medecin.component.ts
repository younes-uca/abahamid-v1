import {Component, OnInit} from '@angular/core';
import {ExamenService} from '../../../../../controller/service/Examen.service';
import {ExamenVo} from '../../../../../controller/model/Examen.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-examen-view-medecin',
  templateUrl: './examen-view-medecin.component.html',
  styleUrls: ['./examen-view-medecin.component.css']
})
export class ExamenViewMedecinComponent implements OnInit {


constructor(private datePipe: DatePipe, private examenService: ExamenService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewExamenDialog  = false;
}

// getters and setters

get examens(): Array<ExamenVo> {
    return this.examenService.examens;
       }
set examens(value: Array<ExamenVo>) {
        this.examenService.examens = value;
       }

 get selectedExamen():ExamenVo {
           return this.examenService.selectedExamen;
       }
    set selectedExamen(value: ExamenVo) {
        this.examenService.selectedExamen = value;
       }

   get viewExamenDialog():boolean {
           return this.examenService.viewExamenDialog;

       }
    set viewExamenDialog(value: boolean) {
        this.examenService.viewExamenDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
