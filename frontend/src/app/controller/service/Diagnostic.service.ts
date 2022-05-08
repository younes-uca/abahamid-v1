import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {DiagnosticVo} from '../model/Diagnostic.model';
import {DossierMedicaleVo} from '../model/DossierMedicale.model';


@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/diagnostic/';
        })
    }
     private _diagnostics: Array<DiagnosticVo> ;
     private _selectedDiagnostic: DiagnosticVo;
     private _diagnosticSelections: Array<DiagnosticVo>;
     private _createDiagnosticDialog: boolean;
     private _editDiagnosticDialog: boolean;
     private _viewDiagnosticDialog: boolean;
     public editDiagnostic$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchDiagnostic:DiagnosticVo ;

    // methods

    public findAll(){
     return this.http.get<Array<DiagnosticVo>>(this.API);
    }

    public save(): Observable<DiagnosticVo> {
           return this.http.post<DiagnosticVo>(this.API, {...this.selectedDiagnostic,dateDiagnostic: moment(this.selectedDiagnostic.dateDiagnostic).format("YYYY-MM-DD")});
    }

    delete(diagnostic: DiagnosticVo) {
         return this.http.delete<number>(this.API + 'id/' + diagnostic.id);
    }


    public edit(): Observable<DiagnosticVo> {
        return this.http.put<DiagnosticVo>(this.API, this.selectedDiagnostic);
    }


     public findByCriteria(diagnostic:DiagnosticVo):Observable<Array<DiagnosticVo>>{
           return this.http.post<Array<DiagnosticVo>>(this.API +'search', diagnostic);
    }

   public findByIdWithAssociatedList(diagnostic:DiagnosticVo):Observable<DiagnosticVo>{
         return this.http.get<DiagnosticVo>(this.API + 'detail/id/' +diagnostic.id);
    }

    // getters and setters


    get diagnostics(): Array<DiagnosticVo> {
    if(this._diagnostics==null){
    this._diagnostics=new Array<DiagnosticVo>();
    }
return this._diagnostics;
       }

    set diagnostics(value: Array<DiagnosticVo>) {
        this._diagnostics = value;
       }

    get selectedDiagnostic(): DiagnosticVo {
    if(this._selectedDiagnostic==null){
    this._selectedDiagnostic=new DiagnosticVo();
    }
           return this._selectedDiagnostic;
       }

    set selectedDiagnostic(value: DiagnosticVo) {
        this._selectedDiagnostic = value;
       }

    get diagnosticSelections(): Array<DiagnosticVo> {
    if(this._diagnosticSelections==null){
    this._diagnosticSelections=new Array<DiagnosticVo>();
    }
        return this._diagnosticSelections;
       }


    set diagnosticSelections(value: Array<DiagnosticVo>) {
        this._diagnosticSelections = value;
       }

    get createDiagnosticDialog(): boolean {
        return this._createDiagnosticDialog;
       }

    set createDiagnosticDialog(value: boolean) {
        this._createDiagnosticDialog = value;
       }

    get editDiagnosticDialog(): boolean {
        return this._editDiagnosticDialog;
       }

    set editDiagnosticDialog(value: boolean) {
        this._editDiagnosticDialog = value;
       }

    get viewDiagnosticDialog(): boolean {
        return this._viewDiagnosticDialog;
       }

    set viewDiagnosticDialog(value: boolean) {
        this._viewDiagnosticDialog = value;
       }

     get searchDiagnostic(): DiagnosticVo {
     if(this._searchDiagnostic==null){
    this._searchDiagnostic=new DiagnosticVo();
    }
        return this._searchDiagnostic;
    }

    set searchDiagnostic(value: DiagnosticVo) {
        this._searchDiagnostic = value;
       }

}
