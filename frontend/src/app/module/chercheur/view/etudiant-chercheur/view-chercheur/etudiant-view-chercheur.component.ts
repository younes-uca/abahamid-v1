import {Component, OnInit} from '@angular/core';
import {EtudiantService} from '../../../../../controller/service/Etudiant.service';
import {EtudiantVo} from '../../../../../controller/model/Etudiant.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-etudiant-view-chercheur',
  templateUrl: './etudiant-view-chercheur.component.html',
  styleUrls: ['./etudiant-view-chercheur.component.css']
})
export class EtudiantViewChercheurComponent implements OnInit {


constructor(private datePipe: DatePipe, private etudiantService: EtudiantService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewEtudiantDialog  = false;
}

// getters and setters

get etudiants(): Array<EtudiantVo> {
    return this.etudiantService.etudiants;
       }
set etudiants(value: Array<EtudiantVo>) {
        this.etudiantService.etudiants = value;
       }

 get selectedEtudiant():EtudiantVo {
           return this.etudiantService.selectedEtudiant;
       }
    set selectedEtudiant(value: EtudiantVo) {
        this.etudiantService.selectedEtudiant = value;
       }

   get viewEtudiantDialog():boolean {
           return this.etudiantService.viewEtudiantDialog;

       }
    set viewEtudiantDialog(value: boolean) {
        this.etudiantService.viewEtudiantDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
