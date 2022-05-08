import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {ImagerieVo} from '../model/Imagerie.model';
import {DossierMedicaleVo} from '../model/DossierMedicale.model';
import {TypeImageVo} from '../model/TypeImage.model';
import {PhaseImageVo} from '../model/PhaseImage.model';


@Injectable({
  providedIn: 'root'
})
export class ImagerieService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/imagerie/';
        })
    }
     private _imageries: Array<ImagerieVo> ;
     private _selectedImagerie: ImagerieVo;
     private _imagerieSelections: Array<ImagerieVo>;
     private _createImagerieDialog: boolean;
     private _editImagerieDialog: boolean;
     private _viewImagerieDialog: boolean;
     public editImagerie$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchImagerie:ImagerieVo ;

    // methods

    public findAll(){
     return this.http.get<Array<ImagerieVo>>(this.API);
    }

    public save(): Observable<ImagerieVo> {
           return this.http.post<ImagerieVo>(this.API, {...this.selectedImagerie,dateImagerie: moment(this.selectedImagerie.dateImagerie).format("YYYY-MM-DD")});
    }

    delete(imagerie: ImagerieVo) {
         return this.http.delete<number>(this.API + 'id/' + imagerie.id);
    }


    public edit(): Observable<ImagerieVo> {
        return this.http.put<ImagerieVo>(this.API, this.selectedImagerie);
    }


     public findByCriteria(imagerie:ImagerieVo):Observable<Array<ImagerieVo>>{
           return this.http.post<Array<ImagerieVo>>(this.API +'search', imagerie);
    }

   public findByIdWithAssociatedList(imagerie:ImagerieVo):Observable<ImagerieVo>{
         return this.http.get<ImagerieVo>(this.API + 'detail/id/' +imagerie.id);
    }

    // getters and setters


    get imageries(): Array<ImagerieVo> {
    if(this._imageries==null){
    this._imageries=new Array<ImagerieVo>();
    }
return this._imageries;
       }

    set imageries(value: Array<ImagerieVo>) {
        this._imageries = value;
       }

    get selectedImagerie(): ImagerieVo {
    if(this._selectedImagerie==null){
    this._selectedImagerie=new ImagerieVo();
    }
           return this._selectedImagerie;
       }

    set selectedImagerie(value: ImagerieVo) {
        this._selectedImagerie = value;
       }

    get imagerieSelections(): Array<ImagerieVo> {
    if(this._imagerieSelections==null){
    this._imagerieSelections=new Array<ImagerieVo>();
    }
        return this._imagerieSelections;
       }


    set imagerieSelections(value: Array<ImagerieVo>) {
        this._imagerieSelections = value;
       }

    get createImagerieDialog(): boolean {
        return this._createImagerieDialog;
       }

    set createImagerieDialog(value: boolean) {
        this._createImagerieDialog = value;
       }

    get editImagerieDialog(): boolean {
        return this._editImagerieDialog;
       }

    set editImagerieDialog(value: boolean) {
        this._editImagerieDialog = value;
       }

    get viewImagerieDialog(): boolean {
        return this._viewImagerieDialog;
       }

    set viewImagerieDialog(value: boolean) {
        this._viewImagerieDialog = value;
       }

     get searchImagerie(): ImagerieVo {
     if(this._searchImagerie==null){
    this._searchImagerie=new ImagerieVo();
    }
        return this._searchImagerie;
    }

    set searchImagerie(value: ImagerieVo) {
        this._searchImagerie = value;
       }

}
