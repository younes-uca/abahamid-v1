import {Component, OnInit} from '@angular/core';
import {EtudiantService} from '../../../../../controller/service/Etudiant.service';
import {EtudiantVo} from '../../../../../controller/model/Etudiant.model';
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
  selector: 'app-etudiant-list-medecin',
  templateUrl: './etudiant-list-medecin.component.html',
  styleUrls: ['./etudiant-list-medecin.component.css']
})
export class EtudiantListMedecinComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Etudiant';
     yesOrNoCredentialsNonExpired :any[] =[];
     yesOrNoEnabled :any[] =[];
     yesOrNoAccountNonExpired :any[] =[];
     yesOrNoAccountNonLocked :any[] =[];
     yesOrNoPasswordChanged :any[] =[];


    constructor(private datePipe: DatePipe, private etudiantService: EtudiantService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadEtudiants();
      this.initExport();
      this.initCol();
    this.yesOrNoCredentialsNonExpired =  [{label: 'CredentialsNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoEnabled =  [{label: 'Enabled', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonExpired =  [{label: 'AccountNonExpired', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoAccountNonLocked =  [{label: 'AccountNonLocked', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoPasswordChanged =  [{label: 'PasswordChanged', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }
    
    // methods
      public async loadEtudiants(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'list');
        isPermistted ? this.etudiantService.findAll().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.etudiantService.findByCriteria(this.searchEtudiant).subscribe(etudiants=>{
            
            this.etudiants = etudiants;
           // this.searchEtudiant = new EtudiantVo();
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
    
    public async editEtudiant(etudiant:EtudiantVo){
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'edit');
         if(isPermistted){
          this.etudiantService.findByIdWithAssociatedList(etudiant).subscribe(res => {
           this.selectedEtudiant = res;
            this.selectedEtudiant.createdAt = new Date(etudiant.createdAt);
            this.selectedEtudiant.updatedAt = new Date(etudiant.updatedAt);
            this.editEtudiantDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewEtudiant(etudiant:EtudiantVo){
        const isPermistted = await this.roleService.isPermitted('Etudiant', 'view');
        if(isPermistted){
           this.etudiantService.findByIdWithAssociatedList(etudiant).subscribe(res => {
           this.selectedEtudiant = res;
            this.selectedEtudiant.createdAt = new Date(etudiant.createdAt);
            this.selectedEtudiant.updatedAt = new Date(etudiant.updatedAt);
            this.viewEtudiantDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateEtudiant(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedEtudiant = new EtudiantVo();
            this.createEtudiantDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteEtudiant(etudiant:EtudiantVo){
       const isPermistted = await this.roleService.isPermitted('Etudiant', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Etudiant) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.etudiantService.delete(etudiant).subscribe(status=>{
                          if(status > 0){
                          const position = this.etudiants.indexOf(etudiant);
                          position > -1 ? this.etudiants.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Etudiant Supprimé',
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


public async duplicateEtudiant(etudiant: EtudiantVo) {

     this.etudiantService.findByIdWithAssociatedList(etudiant).subscribe(
	 res => {
	       this.initDuplicateEtudiant(res);
	       this.selectedEtudiant = res;
	       this.selectedEtudiant.id = null;
            this.createEtudiantDialog = true;

});

	}

	initDuplicateEtudiant(res: EtudiantVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.etudiants.map(e => {
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
            'Numero matricule': this.searchEtudiant.numeroMatricule ? this.searchEtudiant.numeroMatricule : environment.emptyForExport ,
            'Email principale': this.searchEtudiant.emailPrincipale ? this.searchEtudiant.emailPrincipale : environment.emptyForExport ,
            'Credentials non expired': this.searchEtudiant.credentialsNonExpired ? (this.searchEtudiant.credentialsNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Enabled': this.searchEtudiant.enabled ? (this.searchEtudiant.enabled ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non expired': this.searchEtudiant.accountNonExpired ? (this.searchEtudiant.accountNonExpired ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Account non locked': this.searchEtudiant.accountNonLocked ? (this.searchEtudiant.accountNonLocked ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Password changed': this.searchEtudiant.passwordChanged ? (this.searchEtudiant.passwordChanged ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Created at Min': this.searchEtudiant.createdAtMin ? this.datePipe.transform(this.searchEtudiant.createdAtMin , this.dateFormat) : environment.emptyForExport ,
            'Created at Max': this.searchEtudiant.createdAtMax ? this.datePipe.transform(this.searchEtudiant.createdAtMax , this.dateFormat) : environment.emptyForExport ,
            'Updated at Min': this.searchEtudiant.updatedAtMin ? this.datePipe.transform(this.searchEtudiant.updatedAtMin , this.dateFormat) : environment.emptyForExport ,
            'Updated at Max': this.searchEtudiant.updatedAtMax ? this.datePipe.transform(this.searchEtudiant.updatedAtMax , this.dateFormat) : environment.emptyForExport ,
            'Username': this.searchEtudiant.username ? this.searchEtudiant.username : environment.emptyForExport ,
            'Password': this.searchEtudiant.password ? this.searchEtudiant.password : environment.emptyForExport ,
            'Prenom': this.searchEtudiant.prenom ? this.searchEtudiant.prenom : environment.emptyForExport ,
            'Nom': this.searchEtudiant.nom ? this.searchEtudiant.nom : environment.emptyForExport ,
            'Role': this.searchEtudiant.role ? this.searchEtudiant.role : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get etudiants(): Array<EtudiantVo> {
           return this.etudiantService.etudiants;
       }
    set etudiants(value: Array<EtudiantVo>) {
        this.etudiantService.etudiants = value;
       }

    get etudiantSelections(): Array<EtudiantVo> {
           return this.etudiantService.etudiantSelections;
       }
    set etudiantSelections(value: Array<EtudiantVo>) {
        this.etudiantService.etudiantSelections = value;
       }
   
     


    get selectedEtudiant():EtudiantVo {
           return this.etudiantService.selectedEtudiant;
       }
    set selectedEtudiant(value: EtudiantVo) {
        this.etudiantService.selectedEtudiant = value;
       }
    
    get createEtudiantDialog():boolean {
           return this.etudiantService.createEtudiantDialog;
       }
    set createEtudiantDialog(value: boolean) {
        this.etudiantService.createEtudiantDialog= value;
       }
    
    get editEtudiantDialog():boolean {
           return this.etudiantService.editEtudiantDialog;
       }
    set editEtudiantDialog(value: boolean) {
        this.etudiantService.editEtudiantDialog= value;
       }
    get viewEtudiantDialog():boolean {
           return this.etudiantService.viewEtudiantDialog;
       }
    set viewEtudiantDialog(value: boolean) {
        this.etudiantService.viewEtudiantDialog = value;
       }
       
     get searchEtudiant(): EtudiantVo {
        return this.etudiantService.searchEtudiant;
       }
    set searchEtudiant(value: EtudiantVo) {
        this.etudiantService.searchEtudiant = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
