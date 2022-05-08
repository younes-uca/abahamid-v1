import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DossierMedicaleTagVo} from '../model/DossierMedicaleTag.model';
import {TagVo} from '../model/Tag.model';
import {DossierMedicaleVo} from '../model/DossierMedicale.model';


@Injectable({
  providedIn: 'root'
})
export class DossierMedicaleTagService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/dossierMedicaleTag/';
        })
    }
     private _dossierMedicaleTags: Array<DossierMedicaleTagVo> ;
     private _selectedDossierMedicaleTag: DossierMedicaleTagVo;
     private _dossierMedicaleTagSelections: Array<DossierMedicaleTagVo>;
     private _createDossierMedicaleTagDialog: boolean;
     private _editDossierMedicaleTagDialog: boolean;
     private _viewDossierMedicaleTagDialog: boolean;
     public editDossierMedicaleTag$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDossierMedicaleTag:DossierMedicaleTagVo ;

    // methods

    public findAll(){
     return this.http.get<Array<DossierMedicaleTagVo>>(this.API);
    }

    public save(): Observable<DossierMedicaleTagVo> {
         return this.http.post<DossierMedicaleTagVo>(this.API, this.selectedDossierMedicaleTag);
    }

    delete(dossierMedicaleTag: DossierMedicaleTagVo) {
         return this.http.delete<number>(this.API + 'id/' + dossierMedicaleTag.id);
    }


    public edit(): Observable<DossierMedicaleTagVo> {
        return this.http.put<DossierMedicaleTagVo>(this.API, this.selectedDossierMedicaleTag);
    }


     public findByCriteria(dossierMedicaleTag:DossierMedicaleTagVo):Observable<Array<DossierMedicaleTagVo>>{
           return this.http.post<Array<DossierMedicaleTagVo>>(this.API +'search', dossierMedicaleTag);
    }

   public findByIdWithAssociatedList(dossierMedicaleTag:DossierMedicaleTagVo):Observable<DossierMedicaleTagVo>{
         return this.http.get<DossierMedicaleTagVo>(this.API + 'detail/id/' +dossierMedicaleTag.id);
    }

    // getters and setters


    get dossierMedicaleTags(): Array<DossierMedicaleTagVo> {
    if(this._dossierMedicaleTags==null){
    this._dossierMedicaleTags=new Array<DossierMedicaleTagVo>();
    }
return this._dossierMedicaleTags;
       }

    set dossierMedicaleTags(value: Array<DossierMedicaleTagVo>) {
        this._dossierMedicaleTags = value;
       }

    get selectedDossierMedicaleTag(): DossierMedicaleTagVo {
    if(this._selectedDossierMedicaleTag==null){
    this._selectedDossierMedicaleTag=new DossierMedicaleTagVo();
    }
           return this._selectedDossierMedicaleTag;
       }

    set selectedDossierMedicaleTag(value: DossierMedicaleTagVo) {
        this._selectedDossierMedicaleTag = value;
       }

    get dossierMedicaleTagSelections(): Array<DossierMedicaleTagVo> {
    if(this._dossierMedicaleTagSelections==null){
    this._dossierMedicaleTagSelections=new Array<DossierMedicaleTagVo>();
    }
        return this._dossierMedicaleTagSelections;
       }


    set dossierMedicaleTagSelections(value: Array<DossierMedicaleTagVo>) {
        this._dossierMedicaleTagSelections = value;
       }

    get createDossierMedicaleTagDialog(): boolean {
        return this._createDossierMedicaleTagDialog;
       }

    set createDossierMedicaleTagDialog(value: boolean) {
        this._createDossierMedicaleTagDialog = value;
       }

    get editDossierMedicaleTagDialog(): boolean {
        return this._editDossierMedicaleTagDialog;
       }

    set editDossierMedicaleTagDialog(value: boolean) {
        this._editDossierMedicaleTagDialog = value;
       }

    get viewDossierMedicaleTagDialog(): boolean {
        return this._viewDossierMedicaleTagDialog;
       }

    set viewDossierMedicaleTagDialog(value: boolean) {
        this._viewDossierMedicaleTagDialog = value;
       }

     get searchDossierMedicaleTag(): DossierMedicaleTagVo {
     if(this._searchDossierMedicaleTag==null){
    this._searchDossierMedicaleTag=new DossierMedicaleTagVo();
    }
        return this._searchDossierMedicaleTag;
    }

    set searchDossierMedicaleTag(value: DossierMedicaleTagVo) {
        this._searchDossierMedicaleTag = value;
       }

}
