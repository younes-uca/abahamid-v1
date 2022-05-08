import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {EvoSuivVo} from '../model/EvoSuiv.model';
import {DossierMedicaleVo} from '../model/DossierMedicale.model';


@Injectable({
  providedIn: 'root'
})
export class EvoSuivService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/evoSuiv/';
        })
    }
     private _evoSuivs: Array<EvoSuivVo> ;
     private _selectedEvoSuiv: EvoSuivVo;
     private _evoSuivSelections: Array<EvoSuivVo>;
     private _createEvoSuivDialog: boolean;
     private _editEvoSuivDialog: boolean;
     private _viewEvoSuivDialog: boolean;
     public editEvoSuiv$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchEvoSuiv:EvoSuivVo ;

    // methods

    public findAll(){
     return this.http.get<Array<EvoSuivVo>>(this.API);
    }

    public save(): Observable<EvoSuivVo> {
           return this.http.post<EvoSuivVo>(this.API, {...this.selectedEvoSuiv,dateEvoS: moment(this.selectedEvoSuiv.dateEvoS).format("YYYY-MM-DD")});
    }

    delete(evoSuiv: EvoSuivVo) {
         return this.http.delete<number>(this.API + 'id/' + evoSuiv.id);
    }


    public edit(): Observable<EvoSuivVo> {
        return this.http.put<EvoSuivVo>(this.API, this.selectedEvoSuiv);
    }


     public findByCriteria(evoSuiv:EvoSuivVo):Observable<Array<EvoSuivVo>>{
           return this.http.post<Array<EvoSuivVo>>(this.API +'search', evoSuiv);
    }

   public findByIdWithAssociatedList(evoSuiv:EvoSuivVo):Observable<EvoSuivVo>{
         return this.http.get<EvoSuivVo>(this.API + 'detail/id/' +evoSuiv.id);
    }

    // getters and setters


    get evoSuivs(): Array<EvoSuivVo> {
    if(this._evoSuivs==null){
    this._evoSuivs=new Array<EvoSuivVo>();
    }
return this._evoSuivs;
       }

    set evoSuivs(value: Array<EvoSuivVo>) {
        this._evoSuivs = value;
       }

    get selectedEvoSuiv(): EvoSuivVo {
    if(this._selectedEvoSuiv==null){
    this._selectedEvoSuiv=new EvoSuivVo();
    }
           return this._selectedEvoSuiv;
       }

    set selectedEvoSuiv(value: EvoSuivVo) {
        this._selectedEvoSuiv = value;
       }

    get evoSuivSelections(): Array<EvoSuivVo> {
    if(this._evoSuivSelections==null){
    this._evoSuivSelections=new Array<EvoSuivVo>();
    }
        return this._evoSuivSelections;
       }


    set evoSuivSelections(value: Array<EvoSuivVo>) {
        this._evoSuivSelections = value;
       }

    get createEvoSuivDialog(): boolean {
        return this._createEvoSuivDialog;
       }

    set createEvoSuivDialog(value: boolean) {
        this._createEvoSuivDialog = value;
       }

    get editEvoSuivDialog(): boolean {
        return this._editEvoSuivDialog;
       }

    set editEvoSuivDialog(value: boolean) {
        this._editEvoSuivDialog = value;
       }

    get viewEvoSuivDialog(): boolean {
        return this._viewEvoSuivDialog;
       }

    set viewEvoSuivDialog(value: boolean) {
        this._viewEvoSuivDialog = value;
       }

     get searchEvoSuiv(): EvoSuivVo {
     if(this._searchEvoSuiv==null){
    this._searchEvoSuiv=new EvoSuivVo();
    }
        return this._searchEvoSuiv;
    }

    set searchEvoSuiv(value: EvoSuivVo) {
        this._searchEvoSuiv = value;
       }

}
