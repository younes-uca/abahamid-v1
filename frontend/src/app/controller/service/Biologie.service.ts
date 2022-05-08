import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {BiologieVo} from '../model/Biologie.model';
import {ExamenVo} from '../model/Examen.model';
import {DossierMedicaleVo} from '../model/DossierMedicale.model';


@Injectable({
  providedIn: 'root'
})
export class BiologieService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/biologie/';
        })
    }
     private _biologies: Array<BiologieVo> ;
     private _selectedBiologie: BiologieVo;
     private _biologieSelections: Array<BiologieVo>;
     private _createBiologieDialog: boolean;
     private _editBiologieDialog: boolean;
     private _viewBiologieDialog: boolean;
     public editBiologie$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchBiologie:BiologieVo ;

    // methods

    public findAll(){
     return this.http.get<Array<BiologieVo>>(this.API);
    }

    public save(): Observable<BiologieVo> {
           return this.http.post<BiologieVo>(this.API, {...this.selectedBiologie,dateBiologie: moment(this.selectedBiologie.dateBiologie).format("YYYY-MM-DD")});
    }

    delete(biologie: BiologieVo) {
         return this.http.delete<number>(this.API + 'id/' + biologie.id);
    }


    public edit(): Observable<BiologieVo> {
        return this.http.put<BiologieVo>(this.API, this.selectedBiologie);
    }


     public findByCriteria(biologie:BiologieVo):Observable<Array<BiologieVo>>{
           return this.http.post<Array<BiologieVo>>(this.API +'search', biologie);
    }

   public findByIdWithAssociatedList(biologie:BiologieVo):Observable<BiologieVo>{
         return this.http.get<BiologieVo>(this.API + 'detail/id/' +biologie.id);
    }

    // getters and setters


    get biologies(): Array<BiologieVo> {
    if(this._biologies==null){
    this._biologies=new Array<BiologieVo>();
    }
return this._biologies;
       }

    set biologies(value: Array<BiologieVo>) {
        this._biologies = value;
       }

    get selectedBiologie(): BiologieVo {
    if(this._selectedBiologie==null){
    this._selectedBiologie=new BiologieVo();
    }
           return this._selectedBiologie;
       }

    set selectedBiologie(value: BiologieVo) {
        this._selectedBiologie = value;
       }

    get biologieSelections(): Array<BiologieVo> {
    if(this._biologieSelections==null){
    this._biologieSelections=new Array<BiologieVo>();
    }
        return this._biologieSelections;
       }


    set biologieSelections(value: Array<BiologieVo>) {
        this._biologieSelections = value;
       }

    get createBiologieDialog(): boolean {
        return this._createBiologieDialog;
       }

    set createBiologieDialog(value: boolean) {
        this._createBiologieDialog = value;
       }

    get editBiologieDialog(): boolean {
        return this._editBiologieDialog;
       }

    set editBiologieDialog(value: boolean) {
        this._editBiologieDialog = value;
       }

    get viewBiologieDialog(): boolean {
        return this._viewBiologieDialog;
       }

    set viewBiologieDialog(value: boolean) {
        this._viewBiologieDialog = value;
       }

     get searchBiologie(): BiologieVo {
     if(this._searchBiologie==null){
    this._searchBiologie=new BiologieVo();
    }
        return this._searchBiologie;
    }

    set searchBiologie(value: BiologieVo) {
        this._searchBiologie = value;
       }

}
