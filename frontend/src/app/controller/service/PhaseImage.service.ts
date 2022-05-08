import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';


import {PhaseImageVo} from '../model/PhaseImage.model';


@Injectable({
  providedIn: 'root'
})
export class PhaseImageService {
    private API = ''
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/phaseImage/';
        })
    }
     private _phaseImages: Array<PhaseImageVo> ;
     private _selectedPhaseImage: PhaseImageVo;
     private _phaseImageSelections: Array<PhaseImageVo>;
     private _createPhaseImageDialog: boolean;
     private _editPhaseImageDialog: boolean;
     private _viewPhaseImageDialog: boolean;
     public editPhaseImage$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchPhaseImage:PhaseImageVo ;

    // methods

    public findAll(){
     return this.http.get<Array<PhaseImageVo>>(this.API);
    }

    public save(): Observable<PhaseImageVo> {
         return this.http.post<PhaseImageVo>(this.API, this.selectedPhaseImage);
    }

    delete(phaseImage: PhaseImageVo) {
         return this.http.delete<number>(this.API + 'id/' + phaseImage.id);
    }


    public edit(): Observable<PhaseImageVo> {
        return this.http.put<PhaseImageVo>(this.API, this.selectedPhaseImage);
    }


     public findByCriteria(phaseImage:PhaseImageVo):Observable<Array<PhaseImageVo>>{
           return this.http.post<Array<PhaseImageVo>>(this.API +'search', phaseImage);
    }

   public findByIdWithAssociatedList(phaseImage:PhaseImageVo):Observable<PhaseImageVo>{
         return this.http.get<PhaseImageVo>(this.API + 'detail/id/' +phaseImage.id);
    }

    // getters and setters


    get phaseImages(): Array<PhaseImageVo> {
    if(this._phaseImages==null){
    this._phaseImages=new Array<PhaseImageVo>();
    }
return this._phaseImages;
       }

    set phaseImages(value: Array<PhaseImageVo>) {
        this._phaseImages = value;
       }

    get selectedPhaseImage(): PhaseImageVo {
    if(this._selectedPhaseImage==null){
    this._selectedPhaseImage=new PhaseImageVo();
    }
           return this._selectedPhaseImage;
       }

    set selectedPhaseImage(value: PhaseImageVo) {
        this._selectedPhaseImage = value;
       }

    get phaseImageSelections(): Array<PhaseImageVo> {
    if(this._phaseImageSelections==null){
    this._phaseImageSelections=new Array<PhaseImageVo>();
    }
        return this._phaseImageSelections;
       }


    set phaseImageSelections(value: Array<PhaseImageVo>) {
        this._phaseImageSelections = value;
       }

    get createPhaseImageDialog(): boolean {
        return this._createPhaseImageDialog;
       }

    set createPhaseImageDialog(value: boolean) {
        this._createPhaseImageDialog = value;
       }

    get editPhaseImageDialog(): boolean {
        return this._editPhaseImageDialog;
       }

    set editPhaseImageDialog(value: boolean) {
        this._editPhaseImageDialog = value;
       }

    get viewPhaseImageDialog(): boolean {
        return this._viewPhaseImageDialog;
       }

    set viewPhaseImageDialog(value: boolean) {
        this._viewPhaseImageDialog = value;
       }

     get searchPhaseImage(): PhaseImageVo {
     if(this._searchPhaseImage==null){
    this._searchPhaseImage=new PhaseImageVo();
    }
        return this._searchPhaseImage;
    }

    set searchPhaseImage(value: PhaseImageVo) {
        this._searchPhaseImage = value;
       }

}
