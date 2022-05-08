import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {CompteRenduVo} from '../model/CompteRendu.model';
import {DossierMedicaleVo} from '../model/DossierMedicale.model';


@Injectable({
  providedIn: 'root'
})
export class CompteRenduService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/compteRendu/';
        })
    }
     private _compteRendus: Array<CompteRenduVo> ;
     private _selectedCompteRendu: CompteRenduVo;
     private _compteRenduSelections: Array<CompteRenduVo>;
     private _createCompteRenduDialog: boolean;
     private _editCompteRenduDialog: boolean;
     private _viewCompteRenduDialog: boolean;
     public editCompteRendu$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchCompteRendu:CompteRenduVo ;

    // methods

    public findAll(){
     return this.http.get<Array<CompteRenduVo>>(this.API);
    }

    public save(): Observable<CompteRenduVo> {
           return this.http.post<CompteRenduVo>(this.API, {...this.selectedCompteRendu,dateCompteR: moment(this.selectedCompteRendu.dateCompteR).format("YYYY-MM-DD")});
    }

    delete(compteRendu: CompteRenduVo) {
         return this.http.delete<number>(this.API + 'id/' + compteRendu.id);
    }


    public edit(): Observable<CompteRenduVo> {
        return this.http.put<CompteRenduVo>(this.API, this.selectedCompteRendu);
    }


     public findByCriteria(compteRendu:CompteRenduVo):Observable<Array<CompteRenduVo>>{
           return this.http.post<Array<CompteRenduVo>>(this.API +'search', compteRendu);
    }

   public findByIdWithAssociatedList(compteRendu:CompteRenduVo):Observable<CompteRenduVo>{
         return this.http.get<CompteRenduVo>(this.API + 'detail/id/' +compteRendu.id);
    }

    // getters and setters


    get compteRendus(): Array<CompteRenduVo> {
    if(this._compteRendus==null){
    this._compteRendus=new Array<CompteRenduVo>();
    }
return this._compteRendus;
       }

    set compteRendus(value: Array<CompteRenduVo>) {
        this._compteRendus = value;
       }

    get selectedCompteRendu(): CompteRenduVo {
    if(this._selectedCompteRendu==null){
    this._selectedCompteRendu=new CompteRenduVo();
    }
           return this._selectedCompteRendu;
       }

    set selectedCompteRendu(value: CompteRenduVo) {
        this._selectedCompteRendu = value;
       }

    get compteRenduSelections(): Array<CompteRenduVo> {
    if(this._compteRenduSelections==null){
    this._compteRenduSelections=new Array<CompteRenduVo>();
    }
        return this._compteRenduSelections;
       }


    set compteRenduSelections(value: Array<CompteRenduVo>) {
        this._compteRenduSelections = value;
       }

    get createCompteRenduDialog(): boolean {
        return this._createCompteRenduDialog;
       }

    set createCompteRenduDialog(value: boolean) {
        this._createCompteRenduDialog = value;
       }

    get editCompteRenduDialog(): boolean {
        return this._editCompteRenduDialog;
       }

    set editCompteRenduDialog(value: boolean) {
        this._editCompteRenduDialog = value;
       }

    get viewCompteRenduDialog(): boolean {
        return this._viewCompteRenduDialog;
       }

    set viewCompteRenduDialog(value: boolean) {
        this._viewCompteRenduDialog = value;
       }

     get searchCompteRendu(): CompteRenduVo {
     if(this._searchCompteRendu==null){
    this._searchCompteRendu=new CompteRenduVo();
    }
        return this._searchCompteRendu;
    }

    set searchCompteRendu(value: CompteRenduVo) {
        this._searchCompteRendu = value;
       }

}
