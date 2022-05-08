import {Component, OnInit} from '@angular/core';
import {MedecinService} from '../../../../../controller/service/Medecin.service';
import {MedecinVo} from '../../../../../controller/model/Medecin.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';


import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-medecin-list-etudiant',
  templateUrl: './medecin-list-etudiant.component.html',
  styleUrls: ['./medecin-list-etudiant.component.css']
})
export class MedecinListEtudiantComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Medecin';
     yesOrNoCredentialsNonExpired :any[] =[];
     yesOrNoEnabled :any[] =[];
     yesOrNoAccountNonExpired :any[] =[];
     yesOrNoAccountNonLocked :any[] =[];
     yesOrNoPasswordChanged :any[] =[];


    constructor(private datePipe: DatePipe, private medecinService: MedecinService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadMedecins();
      this.initExport();
      this.initCol();
    this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadMedecins(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Medecin', 'list');
        isPermistted ? this.medecinService.findAll().subscribe(medecins => this.medecins = medecins,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.medecinService.findByCriteria(this.searchMedecin).subscribe(medecins=>{
            
            this.medecins = medecins;
           // this.searchMedecin = new MedecinVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'numeroMatricule', header: 'Numero matricule'},
                            {field: 'emailPrincipale', header: 'Email principale'},
                            {field: 'credentialsNonExpired', header: 'Credentials non expired'},
                            {field: 'enabled', header: 'Enabled'},
                            {field: 'accountNonExpired', header: 'Account non expired'},
                            {field: 'accountNonLocked', header: 'Account non locked'},
                            {field: 'passwordChanged', header: 'Password changed'},
                            {field: 'createdAt', header: 'Created at'},
                            {field: 'updatedAt', header: 'Updated at'},
                            {field: 'username', header: 'Username'},
                            {field: 'password', header: 'Password'},
                            {field: 'prenom', header: 'Prenom'},
                            {field: 'nom', header: 'Nom'},
                            {field: 'role', header: 'Role'},
        ];
    }
    
    public async editMedecin(medecin:MedecinVo){
        const isPermistted = await this.roleService.isPermitted('Medecin', 'edit');
         if(isPermistted){
          this.medecinService.findByIdWithAssociatedList(medecin).subscribe(res => {
           this.selectedMedecin = res;
            this.selectedMedecin.createdAt = new Date(medecin.createdAt);
            this.selectedMedecin.updatedAt = new Date(medecin.updatedAt);
            this.editMedecinDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewMedecin(medecin:MedecinVo){
        const isPermistted = await this.roleService.isPermitted('Medecin', 'view');
        if(isPermistted){
           this.medecinService.findByIdWithAssociatedList(medecin).subscribe(res => {
           this.selectedMedecin = res;
            this.selectedMedecin.createdAt = new Date(medecin.createdAt);
            this.selectedMedecin.updatedAt = new Date(medecin.updatedAt);
            this.viewMedecinDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateMedecin(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedMedecin = new MedecinVo();
            this.createMedecinDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteMedecin(medecin:MedecinVo){
       const isPermistted = await this.roleService.isPermitted('Medecin', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Medecin) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.medecinService.delete(medecin).subscribe(status=>{
                          if(status > 0){
                          const position = this.medecins.indexOf(medecin);
                          position > -1 ? this.medecins.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Medecin Supprimé',
                        life: 3000
                    });
                                     }

                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
              });
             }
    }


public async duplicateMedecin(medecin: MedecinVo) {

     this.medecinService.findByIdWithAssociatedList(medecin).subscribe(
	 res => {
	       this.initDuplicateMedecin(res);
	       this.selectedMedecin = res;
	       this.selectedMedecin.id = null;
            this.createMedecinDialog = true;

});

	}

	initDuplicateMedecin(res: MedecinVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.medecins.map(e => {
    return {
                    'Numero matricule': e.numeroMatricule ,
                    'Email principale': e.emailPrincipale ,
                    'Credentials non expired': e.credentialsNonExpired? 'Vrai' : 'Faux' ,
                    'Enabled': e.enabled? 'Vrai' : 'Faux' ,
                    'Account non expired': e.accountNonExpired? 'Vrai' : 'Faux' ,
                    'Account non locked': e.accountNonLocked? 'Vrai' : 'Faux' ,
                    'Password changed': e.passwordChanged? 'Vrai' : 'Faux' ,
                    'Created at': this.datePipe.transform(e.createdAt , 'dd-MM-yyyy'),
                    'Updated at': this.datePipe.transform(e.updatedAt , 'dd-MM-yyyy'),
                    'Username': e.username ,
                    'Password': e.password ,
                    'Prenom': e.prenom ,
                    'Nom': e.nom ,
                    'Role': e.role ,
     }
      });

      this.criteriaData = [{
            'Numero matricule': this.searchMedecin.numeroMatricule ? this.searchMedecin.numeroMatricule : environment.emptyForExport ,
            'Email principale': this.searchMedecin.emailPrincipale ? this.searchMedecin.emailPrincipale : environment.emptyForExport ,
            'Credentials non expired': this.searchMedecin.credentialsNonExpired ? (this.searchMedecin.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.searchMedecin.enabled ? (this.searchMedecin.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non expired': this.searchMedecin.accountNonExpired ? (this.searchMedecin.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.searchMedecin.accountNonLocked ? (this.searchMedecin.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Password changed': this.searchMedecin.passwordChanged ? (this.searchMedecin.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Created at Min': this.searchMedecin.createdAtMin ? this.datePipe.transform(this.searchMedecin.createdAtMin , this.dateFormat) : environment.emptyForExport ,
            'Created at Max': this.searchMedecin.createdAtMax ? this.datePipe.transform(this.searchMedecin.createdAtMax , this.dateFormat) : environment.emptyForExport ,
            'Updated at Min': this.searchMedecin.updatedAtMin ? this.datePipe.transform(this.searchMedecin.updatedAtMin , this.dateFormat) : environment.emptyForExport ,
            'Updated at Max': this.searchMedecin.updatedAtMax ? this.datePipe.transform(this.searchMedecin.updatedAtMax , this.dateFormat) : environment.emptyForExport ,
            'Username': this.searchMedecin.username ? this.searchMedecin.username : environment.emptyForExport ,
            'Password': this.searchMedecin.password ? this.searchMedecin.password : environment.emptyForExport ,
            'Prenom': this.searchMedecin.prenom ? this.searchMedecin.prenom : environment.emptyForExport ,
            'Nom': this.searchMedecin.nom ? this.searchMedecin.nom : environment.emptyForExport ,
            'Role': this.searchMedecin.role ? this.searchMedecin.role : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get medecins(): Array<MedecinVo> {
           return this.medecinService.medecins;
       }
    set medecins(value: Array<MedecinVo>) {
        this.medecinService.medecins = value;
       }

    get medecinSelections(): Array<MedecinVo> {
           return this.medecinService.medecinSelections;
       }
    set medecinSelections(value: Array<MedecinVo>) {
        this.medecinService.medecinSelections = value;
       }
   
     


    get selectedMedecin():MedecinVo {
           return this.medecinService.selectedMedecin;
       }
    set selectedMedecin(value: MedecinVo) {
        this.medecinService.selectedMedecin = value;
       }
    
    get createMedecinDialog():boolean {
           return this.medecinService.createMedecinDialog;
       }
    set createMedecinDialog(value: boolean) {
        this.medecinService.createMedecinDialog= value;
       }
    
    get editMedecinDialog():boolean {
           return this.medecinService.editMedecinDialog;
       }
    set editMedecinDialog(value: boolean) {
        this.medecinService.editMedecinDialog= value;
       }
    get viewMedecinDialog():boolean {
           return this.medecinService.viewMedecinDialog;
       }
    set viewMedecinDialog(value: boolean) {
        this.medecinService.viewMedecinDialog = value;
       }
       
     get searchMedecin(): MedecinVo {
        return this.medecinService.searchMedecin;
       }
    set searchMedecin(value: MedecinVo) {
        this.medecinService.searchMedecin = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
