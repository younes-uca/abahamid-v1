import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {RecueilDeDonnesVo} from '../model/RecueilDeDonnes.model';


@Injectable({
  providedIn: 'root'
})
export class RecueilDeDonnesService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/recueilDeDonnes/';
        })
    }
     private _recueilDeDonness: Array<RecueilDeDonnesVo> ;
     private _selectedRecueilDeDonnes: RecueilDeDonnesVo;
     private _recueilDeDonnesSelections: Array<RecueilDeDonnesVo>;
     private _createRecueilDeDonnesDialog: boolean;
     private _editRecueilDeDonnesDialog: boolean;
     private _viewRecueilDeDonnesDialog: boolean;
     public editRecueilDeDonnes$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchRecueilDeDonnes:RecueilDeDonnesVo ;

    // methods

    public findAll(){
     return this.http.get<Array<RecueilDeDonnesVo>>(this.API);
    }

    public save(): Observable<RecueilDeDonnesVo> {
         return this.http.post<RecueilDeDonnesVo>(this.API, this.selectedRecueilDeDonnes);
    }

    delete(recueilDeDonnes: RecueilDeDonnesVo) {
         return this.http.delete<number>(this.API + 'id/' + recueilDeDonnes.id);
    }


    public edit(): Observable<RecueilDeDonnesVo> {
        return this.http.put<RecueilDeDonnesVo>(this.API, this.selectedRecueilDeDonnes);
    }


     public findByCriteria(recueilDeDonnes:RecueilDeDonnesVo):Observable<Array<RecueilDeDonnesVo>>{
           return this.http.post<Array<RecueilDeDonnesVo>>(this.API +'search', recueilDeDonnes);
    }

   public findByIdWithAssociatedList(recueilDeDonnes:RecueilDeDonnesVo):Observable<RecueilDeDonnesVo>{
         return this.http.get<RecueilDeDonnesVo>(this.API + 'detail/id/' +recueilDeDonnes.id);
    }

    // getters and setters


    get recueilDeDonness(): Array<RecueilDeDonnesVo> {
    if(this._recueilDeDonness==null){
    this._recueilDeDonness=new Array<RecueilDeDonnesVo>();
    }
return this._recueilDeDonness;
       }

    set recueilDeDonness(value: Array<RecueilDeDonnesVo>) {
        this._recueilDeDonness = value;
       }

    get selectedRecueilDeDonnes(): RecueilDeDonnesVo {
    if(this._selectedRecueilDeDonnes==null){
    this._selectedRecueilDeDonnes=new RecueilDeDonnesVo();
    }
           return this._selectedRecueilDeDonnes;
       }

    set selectedRecueilDeDonnes(value: RecueilDeDonnesVo) {
        this._selectedRecueilDeDonnes = value;
       }

    get recueilDeDonnesSelections(): Array<RecueilDeDonnesVo> {
    if(this._recueilDeDonnesSelections==null){
    this._recueilDeDonnesSelections=new Array<RecueilDeDonnesVo>();
    }
        return this._recueilDeDonnesSelections;
       }


    set recueilDeDonnesSelections(value: Array<RecueilDeDonnesVo>) {
        this._recueilDeDonnesSelections = value;
       }

    get createRecueilDeDonnesDialog(): boolean {
        return this._createRecueilDeDonnesDialog;
       }

    set createRecueilDeDonnesDialog(value: boolean) {
        this._createRecueilDeDonnesDialog = value;
       }

    get editRecueilDeDonnesDialog(): boolean {
        return this._editRecueilDeDonnesDialog;
       }

    set editRecueilDeDonnesDialog(value: boolean) {
        this._editRecueilDeDonnesDialog = value;
       }

    get viewRecueilDeDonnesDialog(): boolean {
        return this._viewRecueilDeDonnesDialog;
       }

    set viewRecueilDeDonnesDialog(value: boolean) {
        this._viewRecueilDeDonnesDialog = value;
       }

     get searchRecueilDeDonnes(): RecueilDeDonnesVo {
     if(this._searchRecueilDeDonnes==null){
    this._searchRecueilDeDonnes=new RecueilDeDonnesVo();
    }
        return this._searchRecueilDeDonnes;
    }

    set searchRecueilDeDonnes(value: RecueilDeDonnesVo) {
        this._searchRecueilDeDonnes = value;
       }

}
