import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {InfirmierVo} from '../model/Infirmier.model';


@Injectable({
  providedIn: 'root'
})
export class InfirmierService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/infirmier/';
        })
    }
     private _infirmiers: Array<InfirmierVo> ;
     private _selectedInfirmier: InfirmierVo;
     private _infirmierSelections: Array<InfirmierVo>;
     private _createInfirmierDialog: boolean;
     private _editInfirmierDialog: boolean;
     private _viewInfirmierDialog: boolean;
     public editInfirmier$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchInfirmier:InfirmierVo ;

    // methods

    public findAll(){
     return this.http.get<Array<InfirmierVo>>(this.API);
    }

    public save(): Observable<InfirmierVo> {
         return this.http.post<InfirmierVo>(this.API, this.selectedInfirmier);
    }

    delete(infirmier: InfirmierVo) {
         return this.http.delete<number>(this.API + 'id/' + infirmier.id);
    }


    public edit(): Observable<InfirmierVo> {
        return this.http.put<InfirmierVo>(this.API, this.selectedInfirmier);
    }


     public findByCriteria(infirmier:InfirmierVo):Observable<Array<InfirmierVo>>{
           return this.http.post<Array<InfirmierVo>>(this.API +'search', infirmier);
    }

   public findByIdWithAssociatedList(infirmier:InfirmierVo):Observable<InfirmierVo>{
         return this.http.get<InfirmierVo>(this.API + 'detail/id/' +infirmier.id);
    }

    // getters and setters


    get infirmiers(): Array<InfirmierVo> {
    if(this._infirmiers==null){
    this._infirmiers=new Array<InfirmierVo>();
    }
return this._infirmiers;
       }

    set infirmiers(value: Array<InfirmierVo>) {
        this._infirmiers = value;
       }

    get selectedInfirmier(): InfirmierVo {
    if(this._selectedInfirmier==null){
    this._selectedInfirmier=new InfirmierVo();
    }
           return this._selectedInfirmier;
       }

    set selectedInfirmier(value: InfirmierVo) {
        this._selectedInfirmier = value;
       }

    get infirmierSelections(): Array<InfirmierVo> {
    if(this._infirmierSelections==null){
    this._infirmierSelections=new Array<InfirmierVo>();
    }
        return this._infirmierSelections;
       }


    set infirmierSelections(value: Array<InfirmierVo>) {
        this._infirmierSelections = value;
       }

    get createInfirmierDialog(): boolean {
        return this._createInfirmierDialog;
       }

    set createInfirmierDialog(value: boolean) {
        this._createInfirmierDialog = value;
       }

    get editInfirmierDialog(): boolean {
        return this._editInfirmierDialog;
       }

    set editInfirmierDialog(value: boolean) {
        this._editInfirmierDialog = value;
       }

    get viewInfirmierDialog(): boolean {
        return this._viewInfirmierDialog;
       }

    set viewInfirmierDialog(value: boolean) {
        this._viewInfirmierDialog = value;
       }

     get searchInfirmier(): InfirmierVo {
     if(this._searchInfirmier==null){
    this._searchInfirmier=new InfirmierVo();
    }
        return this._searchInfirmier;
    }

    set searchInfirmier(value: InfirmierVo) {
        this._searchInfirmier = value;
       }

}
