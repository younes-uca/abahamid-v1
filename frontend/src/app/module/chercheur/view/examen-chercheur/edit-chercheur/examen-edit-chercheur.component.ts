import {Component, OnInit} from '@angular/core';
import {ExamenService} from '../../../../../controller/service/Examen.service';
import {ExamenVo} from '../../../../../controller/model/Examen.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-examen-edit-chercheur',
  templateUrl: './examen-edit-chercheur.component.html',
  styleUrls: ['./examen-edit-chercheur.component.css']
})
export class ExamenEditChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private examenService: ExamenService
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
    this.examenService.edit().subscribe(examen=>{
    const myIndex = this.examens.findIndex(e => e.id === this.selectedExamen.id);
    this.examens[myIndex] = this.selectedExamen;
    this.editExamenDialog = false;
    this.selectedExamen = new ExamenVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editExamenDialog  = false;
}

// getters and setters

get examens(): Array<ExamenVo> {
    return this.examenService.examens;
       }
set examens(value: Array<ExamenVo>) {
        this.examenService.examens = value;
       }

 get selectedExamen(): ExamenVo {
           return this.examenService.selectedExamen;
       }
    set selectedExamen(value: ExamenVo) {
        this.examenService.selectedExamen = value;
       }

   get editExamenDialog(): boolean {
           return this.examenService.editExamenDialog;

       }
    set editExamenDialog(value: boolean) {
        this.examenService.editExamenDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
