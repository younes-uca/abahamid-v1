import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {CliniqueVo} from '../model/Clinique.model';
import {DossierMedicaleVo} from '../model/DossierMedicale.model';


@Injectable({
  providedIn: 'root'
})
export class CliniqueService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/clinique/';
        })
    }
     private _cliniques: Array<CliniqueVo> ;
     private _selectedClinique: CliniqueVo;
     private _cliniqueSelections: Array<CliniqueVo>;
     private _createCliniqueDialog: boolean;
     private _editCliniqueDialog: boolean;
     private _viewCliniqueDialog: boolean;
     public editClinique$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchClinique:CliniqueVo ;

    // methods

    public findAll(){
     return this.http.get<Array<CliniqueVo>>(this.API);
    }

    public save(): Observable<CliniqueVo> {
           return this.http.post<CliniqueVo>(this.API, {...this.selectedClinique,dateClinique: moment(this.selectedClinique.dateClinique).format("YYYY-MM-DD")});
    }

    delete(clinique: CliniqueVo) {
         return this.http.delete<number>(this.API + 'id/' + clinique.id);
    }


    public edit(): Observable<CliniqueVo> {
        return this.http.put<CliniqueVo>(this.API, this.selectedClinique);
    }


     public findByCriteria(clinique:CliniqueVo):Observable<Array<CliniqueVo>>{
           return this.http.post<Array<CliniqueVo>>(this.API +'search', clinique);
    }

   public findByIdWithAssociatedList(clinique:CliniqueVo):Observable<CliniqueVo>{
         return this.http.get<CliniqueVo>(this.API + 'detail/id/' +clinique.id);
    }

    // getters and setters


    get cliniques(): Array<CliniqueVo> {
    if(this._cliniques==null){
    this._cliniques=new Array<CliniqueVo>();
    }
return this._cliniques;
       }

    set cliniques(value: Array<CliniqueVo>) {
        this._cliniques = value;
       }

    get selectedClinique(): CliniqueVo {
    if(this._selectedClinique==null){
    this._selectedClinique=new CliniqueVo();
    }
           return this._selectedClinique;
       }

    set selectedClinique(value: CliniqueVo) {
        this._selectedClinique = value;
       }

    get cliniqueSelections(): Array<CliniqueVo> {
    if(this._cliniqueSelections==null){
    this._cliniqueSelections=new Array<CliniqueVo>();
    }
        return this._cliniqueSelections;
       }


    set cliniqueSelections(value: Array<CliniqueVo>) {
        this._cliniqueSelections = value;
       }

    get createCliniqueDialog(): boolean {
        return this._createCliniqueDialog;
       }

    set createCliniqueDialog(value: boolean) {
        this._createCliniqueDialog = value;
       }

    get editCliniqueDialog(): boolean {
        return this._editCliniqueDialog;
       }

    set editCliniqueDialog(value: boolean) {
        this._editCliniqueDialog = value;
       }

    get viewCliniqueDialog(): boolean {
        return this._viewCliniqueDialog;
       }

    set viewCliniqueDialog(value: boolean) {
        this._viewCliniqueDialog = value;
       }

     get searchClinique(): CliniqueVo {
     if(this._searchClinique==null){
    this._searchClinique=new CliniqueVo();
    }
        return this._searchClinique;
    }

    set searchClinique(value: CliniqueVo) {
        this._searchClinique = value;
       }

}
