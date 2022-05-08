import {Component, OnInit} from '@angular/core';
import {DiagnosticService} from '../../../../../controller/service/Diagnostic.service';
import {DiagnosticVo} from '../../../../../controller/model/Diagnostic.model';
import {RoleService} from '../../../../../controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';

import {DossierMedicaleVo} from '../../../../../controller/model/DossierMedicale.model';
import {DossierMedicaleService} from '../../../../../controller/service/DossierMedicale.service';

@Component({
  selector: 'app-diagnostic-edit-etudiant',
  templateUrl: './diagnostic-edit-etudiant.component.html',
  styleUrls: ['./diagnostic-edit-etudiant.component.css']
})
export class DiagnosticEditEtudiantComponent implements OnInit {


constructor(private datePipe: DatePipe, private diagnosticService: DiagnosticService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
 ,       private dossierMedicaleService: DossierMedicaleService
) {
}

// methods
ngOnInit(): void {
    this.selectedDossierMedicale = new DossierMedicaleVo();
    this.dossierMedicaleService.findAll().subscribe((data) => this.dossierMedicales = data);
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedDiagnostic.dateDiagnostic = DateUtils.toDate(this.selectedDiagnostic.dateDiagnostic);
    this.diagnosticService.edit().subscribe(diagnostic=>{
    const myIndex = this.diagnostics.findIndex(e => e.id === this.selectedDiagnostic.id);
    this.diagnostics[myIndex] = this.selectedDiagnostic;
    this.editDiagnosticDialog = false;
    this.selectedDiagnostic = new DiagnosticVo();


    }, error => {
        console.log(error);
    });

}

              public async openCreatedossierMedicale(dossierMedicale: string) {
                      const isPermistted = await this.roleService.isPermitted('DossierMedicale', 'add');
                       if(isPermistted){
         this.selectedDossierMedicale = new DossierMedicaleVo();
        this.createDossierMedicaleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
}
// methods

hideEditDialog(){
    this.editDiagnosticDialog  = false;
}

// getters and setters

get diagnostics(): Array<DiagnosticVo> {
    return this.diagnosticService.diagnostics;
       }
set diagnostics(value: Array<DiagnosticVo>) {
        this.diagnosticService.diagnostics = value;
       }

 get selectedDiagnostic(): DiagnosticVo {
           return this.diagnosticService.selectedDiagnostic;
       }
    set selectedDiagnostic(value: DiagnosticVo) {
        this.diagnosticService.selectedDiagnostic = value;
       }

   get editDiagnosticDialog(): boolean {
           return this.diagnosticService.editDiagnosticDialog;

       }
    set editDiagnosticDialog(value: boolean) {
        this.diagnosticService.editDiagnosticDialog = value;
       }

       get selectedDossierMedicale(): DossierMedicaleVo {
           return this.dossierMedicaleService.selectedDossierMedicale;
       }
      set selectedDossierMedicale(value: DossierMedicaleVo) {
        this.dossierMedicaleService.selectedDossierMedicale = value;
       }
       get dossierMedicales(): Array<DossierMedicaleVo> {
           return this.dossierMedicaleService.dossierMedicales;
       }
       set dossierMedicales(value: Array<DossierMedicaleVo>) {
        this.dossierMedicaleService.dossierMedicales = value;
       }
       get createDossierMedicaleDialog(): boolean {
           return this.dossierMedicaleService.createDossierMedicaleDialog;
       }
      set createDossierMedicaleDialog(value: boolean) {
        this.dossierMedicaleService.createDossierMedicaleDialog= value;
       }

    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
