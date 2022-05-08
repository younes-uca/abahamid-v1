import {Component, OnInit} from '@angular/core';
import {DiagnosticService} from '../../../../../controller/service/Diagnostic.service';
import {DiagnosticVo} from '../../../../../controller/model/Diagnostic.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';

@Component({
  selector: 'app-diagnostic-view-medecin',
  templateUrl: './diagnostic-view-medecin.component.html',
  styleUrls: ['./diagnostic-view-medecin.component.css']
})
export class DiagnosticViewMedecinComponent implements OnInit {


constructor(private datePipe: DatePipe, private diagnosticService: DiagnosticService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
    ,private dossierMedicaleService :DossierMedicaleService
) {
}

// methods
ngOnInit(): void {
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}

hideViewDialog(){
    this.viewDiagnosticDialog  = false;
}

// getters and setters

get diagnostics(): Array<DiagnosticVo> {
    return this.diagnosticService.diagnostics;
       }
set diagnostics(value: Array<DiagnosticVo>) {
        this.diagnosticService.diagnostics = value;
       }

 get selectedDiagnostic():DiagnosticVo {
           return this.diagnosticService.selectedDiagnostic;
       }
    set selectedDiagnostic(value: DiagnosticVo) {
        this.diagnosticService.selectedDiagnostic = value;
       }

   get viewDiagnosticDialog():boolean {
           return this.diagnosticService.viewDiagnosticDialog;

       }
    set viewDiagnosticDialog(value: boolean) {
        this.diagnosticService.viewDiagnosticDialog= value;
       }

       get selectedDossierMedicale():DossierMedicaleVo {
           return this.dossierMedicaleService.selectedDossierMedicale;
       }
      set selectedDossierMedicale(value: DossierMedicaleVo) {
        this.dossierMedicaleService.selectedDossierMedicale = value;
       }
       get dossierMedicales():Array<DossierMedicaleVo> {
           return this.dossierMedicaleService.dossierMedicales;
       }
       set dossierMedicales(value: Array<DossierMedicaleVo>) {
        this.dossierMedicaleService.dossierMedicales = value;
       }
       get editDossierMedicaleDialog():boolean {
           return this.dossierMedicaleService.editDossierMedicaleDialog;
       }
      set editDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.editDossierMedicaleDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
