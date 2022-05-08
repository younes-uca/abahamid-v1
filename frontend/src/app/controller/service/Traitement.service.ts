import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {TraitementVo} from '../model/Traitement.model';
import {RecueilDeDonnesVo} from '../model/RecueilDeDonnes.model';
import {SoinVo} from '../model/Soin.model';


@Injectable({
  providedIn: 'root'
})
export class TraitementService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/traitement/';
        })
    }
     private _traitements: Array<TraitementVo> ;
     private _selectedTraitement: TraitementVo;
     private _traitementSelections: Array<TraitementVo>;
     private _createTraitementDialog: boolean;
     private _editTraitementDialog: boolean;
     private _viewTraitementDialog: boolean;
     public editTraitement$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTraitement:TraitementVo ;

    // methods

    public findAll(){
     return this.http.get<Array<TraitementVo>>(this.API);
    }

    public save(): Observable<TraitementVo> {
         return this.http.post<TraitementVo>(this.API, this.selectedTraitement);
    }

    delete(traitement: TraitementVo) {
         return this.http.delete<number>(this.API + 'id/' + traitement.id);
    }


    public edit(): Observable<TraitementVo> {
        return this.http.put<TraitementVo>(this.API, this.selectedTraitement);
    }


     public findByCriteria(traitement:TraitementVo):Observable<Array<TraitementVo>>{
           return this.http.post<Array<TraitementVo>>(this.API +'search', traitement);
    }

   public findByIdWithAssociatedList(traitement:TraitementVo):Observable<TraitementVo>{
         return this.http.get<TraitementVo>(this.API + 'detail/id/' +traitement.id);
    }

    // getters and setters


    get traitements(): Array<TraitementVo> {
    if(this._traitements==null){
    this._traitements=new Array<TraitementVo>();
    }
return this._traitements;
       }

    set traitements(value: Array<TraitementVo>) {
        this._traitements = value;
       }

    get selectedTraitement(): TraitementVo {
    if(this._selectedTraitement==null){
    this._selectedTraitement=new TraitementVo();
    }
           return this._selectedTraitement;
       }

    set selectedTraitement(value: TraitementVo) {
        this._selectedTraitement = value;
       }

    get traitementSelections(): Array<TraitementVo> {
    if(this._traitementSelections==null){
    this._traitementSelections=new Array<TraitementVo>();
    }
        return this._traitementSelections;
       }


    set traitementSelections(value: Array<TraitementVo>) {
        this._traitementSelections = value;
       }

    get createTraitementDialog(): boolean {
        return this._createTraitementDialog;
       }

    set createTraitementDialog(value: boolean) {
        this._createTraitementDialog = value;
       }

    get editTraitementDialog(): boolean {
        return this._editTraitementDialog;
       }

    set editTraitementDialog(value: boolean) {
        this._editTraitementDialog = value;
       }

    get viewTraitementDialog(): boolean {
        return this._viewTraitementDialog;
       }

    set viewTraitementDialog(value: boolean) {
        this._viewTraitementDialog = value;
       }

     get searchTraitement(): TraitementVo {
     if(this._searchTraitement==null){
    this._searchTraitement=new TraitementVo();
    }
        return this._searchTraitement;
    }

    set searchTraitement(value: TraitementVo) {
        this._searchTraitement = value;
       }

}
