import {Component, OnInit} from '@angular/core';
import {RelationService} from '../../../../../controller/service/Relation.service';
import {RelationVo} from '../../../../../controller/model/Relation.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-relation-view-medecin',
  templateUrl: './relation-view-medecin.component.html',
  styleUrls: ['./relation-view-medecin.component.css']
})
export class RelationViewMedecinComponent implements OnInit {


constructor(private datePipe: DatePipe, private relationService: RelationService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewRelationDialog  = false;
}

// getters and setters

get relations(): Array<RelationVo> {
    return this.relationService.relations;
       }
set relations(value: Array<RelationVo>) {
        this.relationService.relations = value;
       }

 get selectedRelation():RelationVo {
           return this.relationService.selectedRelation;
       }
    set selectedRelation(value: RelationVo) {
        this.relationService.selectedRelation = value;
       }

   get viewRelationDialog():boolean {
           return this.relationService.viewRelationDialog;

       }
    set viewRelationDialog(value: boolean) {
        this.relationService.viewRelationDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
