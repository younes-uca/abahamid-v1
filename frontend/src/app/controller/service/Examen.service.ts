import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {ExamenVo} from '../model/Examen.model';


@Injectable({
  providedIn: 'root'
})
export class ExamenService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/examen/';
        })
    }
     private _examens: Array<ExamenVo> ;
     private _selectedExamen: ExamenVo;
     private _examenSelections: Array<ExamenVo>;
     private _createExamenDialog: boolean;
     private _editExamenDialog: boolean;
     private _viewExamenDialog: boolean;
     public editExamen$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchExamen:ExamenVo ;

    // methods

    public findAll(){
     return this.http.get<Array<ExamenVo>>(this.API);
    }

    public save(): Observable<ExamenVo> {
         return this.http.post<ExamenVo>(this.API, this.selectedExamen);
    }

    delete(examen: ExamenVo) {
         return this.http.delete<number>(this.API + 'id/' + examen.id);
    }


    public edit(): Observable<ExamenVo> {
        return this.http.put<ExamenVo>(this.API, this.selectedExamen);
    }


     public findByCriteria(examen:ExamenVo):Observable<Array<ExamenVo>>{
           return this.http.post<Array<ExamenVo>>(this.API +'search', examen);
    }

   public findByIdWithAssociatedList(examen:ExamenVo):Observable<ExamenVo>{
         return this.http.get<ExamenVo>(this.API + 'detail/id/' +examen.id);
    }

    // getters and setters


    get examens(): Array<ExamenVo> {
    if(this._examens==null){
    this._examens=new Array<ExamenVo>();
    }
return this._examens;
       }

    set examens(value: Array<ExamenVo>) {
        this._examens = value;
       }

    get selectedExamen(): ExamenVo {
    if(this._selectedExamen==null){
    this._selectedExamen=new ExamenVo();
    }
           return this._selectedExamen;
       }

    set selectedExamen(value: ExamenVo) {
        this._selectedExamen = value;
       }

    get examenSelections(): Array<ExamenVo> {
    if(this._examenSelections==null){
    this._examenSelections=new Array<ExamenVo>();
    }
        return this._examenSelections;
       }


    set examenSelections(value: Array<ExamenVo>) {
        this._examenSelections = value;
       }

    get createExamenDialog(): boolean {
        return this._createExamenDialog;
       }

    set createExamenDialog(value: boolean) {
        this._createExamenDialog = value;
       }

    get editExamenDialog(): boolean {
        return this._editExamenDialog;
       }

    set editExamenDialog(value: boolean) {
        this._editExamenDialog = value;
       }

    get viewExamenDialog(): boolean {
        return this._viewExamenDialog;
       }

    set viewExamenDialog(value: boolean) {
        this._viewExamenDialog = value;
       }

     get searchExamen(): ExamenVo {
     if(this._searchExamen==null){
    this._searchExamen=new ExamenVo();
    }
        return this._searchExamen;
    }

    set searchExamen(value: ExamenVo) {
        this._searchExamen = value;
       }

}
