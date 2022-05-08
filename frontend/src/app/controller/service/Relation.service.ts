import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {RelationVo} from '../model/Relation.model';


@Injectable({
  providedIn: 'root'
})
export class RelationService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/relation/';
        })
    }
     private _relations: Array<RelationVo> ;
     private _selectedRelation: RelationVo;
     private _relationSelections: Array<RelationVo>;
     private _createRelationDialog: boolean;
     private _editRelationDialog: boolean;
     private _viewRelationDialog: boolean;
     public editRelation$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchRelation:RelationVo ;

    // methods

    public findAll(){
     return this.http.get<Array<RelationVo>>(this.API);
    }

    public save(): Observable<RelationVo> {
         return this.http.post<RelationVo>(this.API, this.selectedRelation);
    }

    delete(relation: RelationVo) {
         return this.http.delete<number>(this.API + 'id/' + relation.id);
    }


    public edit(): Observable<RelationVo> {
        return this.http.put<RelationVo>(this.API, this.selectedRelation);
    }


     public findByCriteria(relation:RelationVo):Observable<Array<RelationVo>>{
           return this.http.post<Array<RelationVo>>(this.API +'search', relation);
    }

   public findByIdWithAssociatedList(relation:RelationVo):Observable<RelationVo>{
         return this.http.get<RelationVo>(this.API + 'detail/id/' +relation.id);
    }

    // getters and setters


    get relations(): Array<RelationVo> {
    if(this._relations==null){
    this._relations=new Array<RelationVo>();
    }
return this._relations;
       }

    set relations(value: Array<RelationVo>) {
        this._relations = value;
       }

    get selectedRelation(): RelationVo {
    if(this._selectedRelation==null){
    this._selectedRelation=new RelationVo();
    }
           return this._selectedRelation;
       }

    set selectedRelation(value: RelationVo) {
        this._selectedRelation = value;
       }

    get relationSelections(): Array<RelationVo> {
    if(this._relationSelections==null){
    this._relationSelections=new Array<RelationVo>();
    }
        return this._relationSelections;
       }


    set relationSelections(value: Array<RelationVo>) {
        this._relationSelections = value;
       }

    get createRelationDialog(): boolean {
        return this._createRelationDialog;
       }

    set createRelationDialog(value: boolean) {
        this._createRelationDialog = value;
       }

    get editRelationDialog(): boolean {
        return this._editRelationDialog;
       }

    set editRelationDialog(value: boolean) {
        this._editRelationDialog = value;
       }

    get viewRelationDialog(): boolean {
        return this._viewRelationDialog;
       }

    set viewRelationDialog(value: boolean) {
        this._viewRelationDialog = value;
       }

     get searchRelation(): RelationVo {
     if(this._searchRelation==null){
    this._searchRelation=new RelationVo();
    }
        return this._searchRelation;
    }

    set searchRelation(value: RelationVo) {
        this._searchRelation = value;
       }

}
