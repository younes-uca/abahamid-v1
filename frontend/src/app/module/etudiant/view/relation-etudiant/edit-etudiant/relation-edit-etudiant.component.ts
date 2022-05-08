import {Component, OnInit} from '@angular/core';
import {RelationService} from '../../../../../controller/service/Relation.service';
import {RelationVo} from '../../../../../controller/model/Relation.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-relation-edit-etudiant',
  templateUrl: './relation-edit-etudiant.component.html',
  styleUrls: ['./relation-edit-etudiant.component.css']
})
export class RelationEditEtudiantComponent implements OnInit {


constructor(private datePipe: DatePipe, private relationService: RelationService
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
    this.relationService.edit().subscribe(relation=>{
    const myIndex = this.relations.findIndex(e => e.id === this.selectedRelation.id);
    this.relations[myIndex] = this.selectedRelation;
    this.editRelationDialog = false;
    this.selectedRelation = new RelationVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editRelationDialog  = false;
}

// getters and setters

get relations(): Array<RelationVo> {
    return this.relationService.relations;
       }
set relations(value: Array<RelationVo>) {
        this.relationService.relations = value;
       }

 get selectedRelation(): RelationVo {
           return this.relationService.selectedRelation;
       }
    set selectedRelation(value: RelationVo) {
        this.relationService.selectedRelation = value;
       }

   get editRelationDialog(): boolean {
           return this.relationService.editRelationDialog;

       }
    set editRelationDialog(value: boolean) {
        this.relationService.editRelationDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
