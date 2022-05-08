import {Component, OnInit} from '@angular/core';
import {EtudiantService} from '../../../../../controller/service/Etudiant.service';
import {EtudiantVo} from '../../../../../controller/model/Etudiant.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-etudiant-edit-admin',
  templateUrl: './etudiant-edit-admin.component.html',
  styleUrls: ['./etudiant-edit-admin.component.css']
})
export class EtudiantEditAdminComponent implements OnInit {


constructor(private datePipe: DatePipe, private etudiantService: EtudiantService
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
            this.selectedEtudiant.createdAt = DateUtils.toDate(this.selectedEtudiant.createdAt);
            this.selectedEtudiant.updatedAt = DateUtils.toDate(this.selectedEtudiant.updatedAt);
    this.etudiantService.edit().subscribe(etudiant=>{
    const myIndex = this.etudiants.findIndex(e => e.id === this.selectedEtudiant.id);
    this.etudiants[myIndex] = this.selectedEtudiant;
    this.editEtudiantDialog = false;
    this.selectedEtudiant = new EtudiantVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editEtudiantDialog  = false;
}

// getters and setters

get etudiants(): Array<EtudiantVo> {
    return this.etudiantService.etudiants;
       }
set etudiants(value: Array<EtudiantVo>) {
        this.etudiantService.etudiants = value;
       }

 get selectedEtudiant(): EtudiantVo {
           return this.etudiantService.selectedEtudiant;
       }
    set selectedEtudiant(value: EtudiantVo) {
        this.etudiantService.selectedEtudiant = value;
       }

   get editEtudiantDialog(): boolean {
           return this.etudiantService.editEtudiantDialog;

       }
    set editEtudiantDialog(value: boolean) {
        this.etudiantService.editEtudiantDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
