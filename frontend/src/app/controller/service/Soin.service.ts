import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {SoinVo} from '../model/Soin.model';
import {TraitementVo} from '../model/Traitement.model';
import {InfirmierVo} from '../model/Infirmier.model';


@Injectable({
  providedIn: 'root'
})
export class SoinService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/soin/';
        })
    }
     private _soins: Array<SoinVo> ;
     private _selectedSoin: SoinVo;
     private _soinSelections: Array<SoinVo>;
     private _createSoinDialog: boolean;
     private _editSoinDialog: boolean;
     private _viewSoinDialog: boolean;
     public editSoin$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchSoin:SoinVo ;

    // methods

    public findAll(){
     return this.http.get<Array<SoinVo>>(this.API);
    }

    public save(): Observable<SoinVo> {
           return this.http.post<SoinVo>(this.API, {...this.selectedSoin,dateSoin: moment(this.selectedSoin.dateSoin).format("YYYY-MM-DD")});
    }

    delete(soin: SoinVo) {
         return this.http.delete<number>(this.API + 'id/' + soin.id);
    }


    public edit(): Observable<SoinVo> {
        return this.http.put<SoinVo>(this.API, this.selectedSoin);
    }


     public findByCriteria(soin:SoinVo):Observable<Array<SoinVo>>{
           return this.http.post<Array<SoinVo>>(this.API +'search', soin);
    }

   public findByIdWithAssociatedList(soin:SoinVo):Observable<SoinVo>{
         return this.http.get<SoinVo>(this.API + 'detail/id/' +soin.id);
    }

    // getters and setters


    get soins(): Array<SoinVo> {
    if(this._soins==null){
    this._soins=new Array<SoinVo>();
    }
return this._soins;
       }

    set soins(value: Array<SoinVo>) {
        this._soins = value;
       }

    get selectedSoin(): SoinVo {
    if(this._selectedSoin==null){
    this._selectedSoin=new SoinVo();
    }
           return this._selectedSoin;
       }

    set selectedSoin(value: SoinVo) {
        this._selectedSoin = value;
       }

    get soinSelections(): Array<SoinVo> {
    if(this._soinSelections==null){
    this._soinSelections=new Array<SoinVo>();
    }
        return this._soinSelections;
       }


    set soinSelections(value: Array<SoinVo>) {
        this._soinSelections = value;
       }

    get createSoinDialog(): boolean {
        return this._createSoinDialog;
       }

    set createSoinDialog(value: boolean) {
        this._createSoinDialog = value;
       }

    get editSoinDialog(): boolean {
        return this._editSoinDialog;
       }

    set editSoinDialog(value: boolean) {
        this._editSoinDialog = value;
       }

    get viewSoinDialog(): boolean {
        return this._viewSoinDialog;
       }

    set viewSoinDialog(value: boolean) {
        this._viewSoinDialog = value;
       }

     get searchSoin(): SoinVo {
     if(this._searchSoin==null){
    this._searchSoin=new SoinVo();
    }
        return this._searchSoin;
    }

    set searchSoin(value: SoinVo) {
        this._searchSoin = value;
       }

}
