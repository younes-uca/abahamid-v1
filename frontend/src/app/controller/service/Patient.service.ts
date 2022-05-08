import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {PatientVo} from '../model/Patient.model';
import {SexeVo} from '../model/Sexe.model';
import {VilleVo} from '../model/Ville.model';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/patient/';
        })
    }
     private _patients: Array<PatientVo> ;
     private _selectedPatient: PatientVo;
     private _patientSelections: Array<PatientVo>;
     private _createPatientDialog: boolean;
     private _editPatientDialog: boolean;
     private _viewPatientDialog: boolean;
     public editPatient$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPatient:PatientVo ;

    // methods

    public findAll(){
     return this.http.get<Array<PatientVo>>(this.API);
    }

    public save(): Observable<PatientVo> {
           return this.http.post<PatientVo>(this.API, {...this.selectedPatient,dateDeNaissance: moment(this.selectedPatient.dateDeNaissance).format("YYYY-MM-DD")});
    }

    delete(patient: PatientVo) {
         return this.http.delete<number>(this.API + 'id/' + patient.id);
    }


    public edit(): Observable<PatientVo> {
        return this.http.put<PatientVo>(this.API, this.selectedPatient);
    }


     public findByCriteria(patient:PatientVo):Observable<Array<PatientVo>>{
           return this.http.post<Array<PatientVo>>(this.API +'search', patient);
    }

   public findByIdWithAssociatedList(patient:PatientVo):Observable<PatientVo>{
         return this.http.get<PatientVo>(this.API + 'detail/id/' +patient.id);
    }

    // getters and setters


    get patients(): Array<PatientVo> {
    if(this._patients==null){
    this._patients=new Array<PatientVo>();
    }
return this._patients;
       }

    set patients(value: Array<PatientVo>) {
        this._patients = value;
       }

    get selectedPatient(): PatientVo {
    if(this._selectedPatient==null){
    this._selectedPatient=new PatientVo();
    }
           return this._selectedPatient;
       }

    set selectedPatient(value: PatientVo) {
        this._selectedPatient = value;
       }

    get patientSelections(): Array<PatientVo> {
    if(this._patientSelections==null){
    this._patientSelections=new Array<PatientVo>();
    }
        return this._patientSelections;
       }


    set patientSelections(value: Array<PatientVo>) {
        this._patientSelections = value;
       }

    get createPatientDialog(): boolean {
        return this._createPatientDialog;
       }

    set createPatientDialog(value: boolean) {
        this._createPatientDialog = value;
       }

    get editPatientDialog(): boolean {
        return this._editPatientDialog;
       }

    set editPatientDialog(value: boolean) {
        this._editPatientDialog = value;
       }

    get viewPatientDialog(): boolean {
        return this._viewPatientDialog;
       }

    set viewPatientDialog(value: boolean) {
        this._viewPatientDialog = value;
       }

     get searchPatient(): PatientVo {
     if(this._searchPatient==null){
    this._searchPatient=new PatientVo();
    }
        return this._searchPatient;
    }

    set searchPatient(value: PatientVo) {
        this._searchPatient = value;
       }

}
