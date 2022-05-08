import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {MedecinVo} from '../model/Medecin.model';


@Injectable({
  providedIn: 'root'
})
export class MedecinService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/medecin/';
        })
    }
     private _medecins: Array<MedecinVo> ;
     private _selectedMedecin: MedecinVo;
     private _medecinSelections: Array<MedecinVo>;
     private _createMedecinDialog: boolean;
     private _editMedecinDialog: boolean;
     private _viewMedecinDialog: boolean;
     public editMedecin$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchMedecin:MedecinVo ;
     private _switchChercheurDialog: boolean;

    // methods

    public findAll(){
     return this.http.get<Array<MedecinVo>>(this.API);
    }

    public save(): Observable<MedecinVo> {
           return this.http.post<MedecinVo>(this.API, {...this.selectedMedecin,updatedAt: moment(this.selectedMedecin.updatedAt).format("YYYY-MM-DD")});
    }

    delete(medecin: MedecinVo) {
         return this.http.delete<number>(this.API + 'id/' + medecin.id);
    }


    public edit(): Observable<MedecinVo> {
        return this.http.put<MedecinVo>(this.API, this.selectedMedecin);
    }


     public findByCriteria(medecin:MedecinVo):Observable<Array<MedecinVo>>{
           return this.http.post<Array<MedecinVo>>(this.API +'search', medecin);
    }

   public findByIdWithAssociatedList(medecin:MedecinVo):Observable<MedecinVo>{
         return this.http.get<MedecinVo>(this.API + 'detail/id/' +medecin.id);
    }

    // getters and setters


    get medecins(): Array<MedecinVo> {
    if(this._medecins==null){
    this._medecins=new Array<MedecinVo>();
    }
return this._medecins;
       }

    set medecins(value: Array<MedecinVo>) {
        this._medecins = value;
       }

    get selectedMedecin(): MedecinVo {
    if(this._selectedMedecin==null){
    this._selectedMedecin=new MedecinVo();
    }
           return this._selectedMedecin;
       }

    set selectedMedecin(value: MedecinVo) {
        this._selectedMedecin = value;
       }

    get medecinSelections(): Array<MedecinVo> {
    if(this._medecinSelections==null){
    this._medecinSelections=new Array<MedecinVo>();
    }
        return this._medecinSelections;
       }


    set medecinSelections(value: Array<MedecinVo>) {
        this._medecinSelections = value;
       }

    get createMedecinDialog(): boolean {
        return this._createMedecinDialog;
       }

    set createMedecinDialog(value: boolean) {
        this._createMedecinDialog = value;
       }

    get editMedecinDialog(): boolean {
        return this._editMedecinDialog;
       }

    set editMedecinDialog(value: boolean) {
        this._editMedecinDialog = value;
       }

    get viewMedecinDialog(): boolean {
        return this._viewMedecinDialog;
       }

    set viewMedecinDialog(value: boolean) {
        this._viewMedecinDialog = value;
       }

     get searchMedecin(): MedecinVo {
     if(this._searchMedecin==null){
    this._searchMedecin=new MedecinVo();
    }
        return this._searchMedecin;
    }

    set searchMedecin(value: MedecinVo) {
        this._searchMedecin = value;
       }

   get switchChercheurDialog(): boolean {
    return this._switchChercheurDialog;
    }

    set switchChercheurDialog(value: boolean) {
    this._switchChercheurDialog = value;
    }
}
