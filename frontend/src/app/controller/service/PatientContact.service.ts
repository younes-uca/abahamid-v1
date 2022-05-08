import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {PatientContactVo} from '../model/PatientContact.model';
import {RelationVo} from '../model/Relation.model';


@Injectable({
  providedIn: 'root'
})
export class PatientContactService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/patientContact/';
        })
    }
     private _patientContacts: Array<PatientContactVo> ;
     private _selectedPatientContact: PatientContactVo;
     private _patientContactSelections: Array<PatientContactVo>;
     private _createPatientContactDialog: boolean;
     private _editPatientContactDialog: boolean;
     private _viewPatientContactDialog: boolean;
     public editPatientContact$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPatientContact:PatientContactVo ;

    // methods

    public findAll(){
     return this.http.get<Array<PatientContactVo>>(this.API);
    }

    public save(): Observable<PatientContactVo> {
         return this.http.post<PatientContactVo>(this.API, this.selectedPatientContact);
    }

    delete(patientContact: PatientContactVo) {
         return this.http.delete<number>(this.API + 'id/' + patientContact.id);
    }


    public edit(): Observable<PatientContactVo> {
        return this.http.put<PatientContactVo>(this.API, this.selectedPatientContact);
    }


     public findByCriteria(patientContact:PatientContactVo):Observable<Array<PatientContactVo>>{
           return this.http.post<Array<PatientContactVo>>(this.API +'search', patientContact);
    }

   public findByIdWithAssociatedList(patientContact:PatientContactVo):Observable<PatientContactVo>{
         return this.http.get<PatientContactVo>(this.API + 'detail/id/' +patientContact.id);
    }

    // getters and setters


    get patientContacts(): Array<PatientContactVo> {
    if(this._patientContacts==null){
    this._patientContacts=new Array<PatientContactVo>();
    }
return this._patientContacts;
       }

    set patientContacts(value: Array<PatientContactVo>) {
        this._patientContacts = value;
       }

    get selectedPatientContact(): PatientContactVo {
    if(this._selectedPatientContact==null){
    this._selectedPatientContact=new PatientContactVo();
    }
           return this._selectedPatientContact;
       }

    set selectedPatientContact(value: PatientContactVo) {
        this._selectedPatientContact = value;
       }

    get patientContactSelections(): Array<PatientContactVo> {
    if(this._patientContactSelections==null){
    this._patientContactSelections=new Array<PatientContactVo>();
    }
        return this._patientContactSelections;
       }


    set patientContactSelections(value: Array<PatientContactVo>) {
        this._patientContactSelections = value;
       }

    get createPatientContactDialog(): boolean {
        return this._createPatientContactDialog;
       }

    set createPatientContactDialog(value: boolean) {
        this._createPatientContactDialog = value;
       }

    get editPatientContactDialog(): boolean {
        return this._editPatientContactDialog;
       }

    set editPatientContactDialog(value: boolean) {
        this._editPatientContactDialog = value;
       }

    get viewPatientContactDialog(): boolean {
        return this._viewPatientContactDialog;
       }

    set viewPatientContactDialog(value: boolean) {
        this._viewPatientContactDialog = value;
       }

     get searchPatientContact(): PatientContactVo {
     if(this._searchPatientContact==null){
    this._searchPatientContact=new PatientContactVo();
    }
        return this._searchPatientContact;
    }

    set searchPatientContact(value: PatientContactVo) {
        this._searchPatientContact = value;
       }

}
