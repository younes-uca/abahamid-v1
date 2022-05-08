import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DossierMedicaleVo} from '../model/DossierMedicale.model';
import {PatientContactVo} from '../model/PatientContact.model';
import {EvoSuivVo} from '../model/EvoSuiv.model';
import {CompteRenduVo} from '../model/CompteRendu.model';
import {TraitementVo} from '../model/Traitement.model';
import {DossierMedicaleTagVo} from '../model/DossierMedicaleTag.model';
import {PatientVo} from '../model/Patient.model';
import {DiagnosticVo} from '../model/Diagnostic.model';
import {CliniqueVo} from '../model/Clinique.model';
import {BiologieVo} from '../model/Biologie.model';
import {ImagerieVo} from '../model/Imagerie.model';


@Injectable({
  providedIn: 'root'
})
export class DossierMedicaleService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/dossierMedicale/';
        })
    }
     private _dossierMedicales: Array<DossierMedicaleVo> ;
     private _selectedDossierMedicale: DossierMedicaleVo;
     private _dossierMedicaleSelections: Array<DossierMedicaleVo>;
     private _createDossierMedicaleDialog: boolean;
     private _editDossierMedicaleDialog: boolean;
     private _viewDossierMedicaleDialog: boolean;
     public editDossierMedicale$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDossierMedicale:DossierMedicaleVo ;

    // methods

    public findAll(){
     return this.http.get<Array<DossierMedicaleVo>>(this.API);
    }

    public save(): Observable<DossierMedicaleVo> {
         return this.http.post<DossierMedicaleVo>(this.API, this.selectedDossierMedicale);
    }

    delete(dossierMedicale: DossierMedicaleVo) {
         return this.http.delete<number>(this.API + 'id/' + dossierMedicale.id);
    }


    public edit(): Observable<DossierMedicaleVo> {
        return this.http.put<DossierMedicaleVo>(this.API, this.selectedDossierMedicale);
    }


     public findByCriteria(dossierMedicale:DossierMedicaleVo):Observable<Array<DossierMedicaleVo>>{
           return this.http.post<Array<DossierMedicaleVo>>(this.API +'search', dossierMedicale);
    }

   public findByIdWithAssociatedList(dossierMedicale:DossierMedicaleVo):Observable<DossierMedicaleVo>{
         return this.http.get<DossierMedicaleVo>(this.API + 'detail/id/' +dossierMedicale.id);
    }

    // getters and setters


    get dossierMedicales(): Array<DossierMedicaleVo> {
    if(this._dossierMedicales==null){
    this._dossierMedicales=new Array<DossierMedicaleVo>();
    }
return this._dossierMedicales;
       }

    set dossierMedicales(value: Array<DossierMedicaleVo>) {
        this._dossierMedicales = value;
       }

    get selectedDossierMedicale(): DossierMedicaleVo {
    if(this._selectedDossierMedicale==null){
    this._selectedDossierMedicale=new DossierMedicaleVo();
    }
           return this._selectedDossierMedicale;
       }

    set selectedDossierMedicale(value: DossierMedicaleVo) {
        this._selectedDossierMedicale = value;
       }

    get dossierMedicaleSelections(): Array<DossierMedicaleVo> {
    if(this._dossierMedicaleSelections==null){
    this._dossierMedicaleSelections=new Array<DossierMedicaleVo>();
    }
        return this._dossierMedicaleSelections;
       }


    set dossierMedicaleSelections(value: Array<DossierMedicaleVo>) {
        this._dossierMedicaleSelections = value;
       }

    get createDossierMedicaleDialog(): boolean {
        return this._createDossierMedicaleDialog;
       }

    set createDossierMedicaleDialog(value: boolean) {
        this._createDossierMedicaleDialog = value;
       }

    get editDossierMedicaleDialog(): boolean {
        return this._editDossierMedicaleDialog;
       }

    set editDossierMedicaleDialog(value: boolean) {
        this._editDossierMedicaleDialog = value;
       }

    get viewDossierMedicaleDialog(): boolean {
        return this._viewDossierMedicaleDialog;
       }

    set viewDossierMedicaleDialog(value: boolean) {
        this._viewDossierMedicaleDialog = value;
       }

     get searchDossierMedicale(): DossierMedicaleVo {
     if(this._searchDossierMedicale==null){
    this._searchDossierMedicale=new DossierMedicaleVo();
    }
        return this._searchDossierMedicale;
    }

    set searchDossierMedicale(value: DossierMedicaleVo) {
        this._searchDossierMedicale = value;
       }

}
