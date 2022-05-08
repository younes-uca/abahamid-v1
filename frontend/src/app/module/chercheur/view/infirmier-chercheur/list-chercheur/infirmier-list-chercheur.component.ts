import {Component, OnInit} from '@angular/core';
import {InfirmierService} from '../../../../../controller/service/Infirmier.service';
import {InfirmierVo} from '../../../../../controller/model/Infirmier.model';
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
  selector: 'app-infirmier-list-chercheur',
  templateUrl: './infirmier-list-chercheur.component.html',
  styleUrls: ['./infirmier-list-chercheur.component.css']
})
export class InfirmierListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Infirmier';


    constructor(private datePipe: DatePipe, private infirmierService: InfirmierService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadInfirmiers();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadInfirmiers(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Infirmier', 'list');
        isPermistted ? this.infirmierService.findAll().subscribe(infirmiers => this.infirmiers = infirmiers,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.infirmierService.findByCriteria(this.searchInfirmier).subscribe(infirmiers=>{
            
            this.infirmiers = infirmiers;
           // this.searchInfirmier = new InfirmierVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'ref', header: 'Ref'},
                            {field: 'nom', header: 'Nom'},
                            {field: 'prenom', header: 'Prenom'},
                            {field: 'sexe', header: 'Sexe'},
                            {field: 'telephone', header: 'Telephone'},
                            {field: 'mail', header: 'Mail'},
        ];
    }
    
    public async editInfirmier(infirmier:InfirmierVo){
        const isPermistted = await this.roleService.isPermitted('Infirmier', 'edit');
         if(isPermistted){
          this.infirmierService.findByIdWithAssociatedList(infirmier).subscribe(res => {
           this.selectedInfirmier = res;
            this.editInfirmierDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewInfirmier(infirmier:InfirmierVo){
        const isPermistted = await this.roleService.isPermitted('Infirmier', 'view');
        if(isPermistted){
           this.infirmierService.findByIdWithAssociatedList(infirmier).subscribe(res => {
           this.selectedInfirmier = res;
            this.viewInfirmierDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateInfirmier(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedInfirmier = new InfirmierVo();
            this.createInfirmierDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteInfirmier(infirmier:InfirmierVo){
       const isPermistted = await this.roleService.isPermitted('Infirmier', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Infirmier) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.infirmierService.delete(infirmier).subscribe(status=>{
                          if(status > 0){
                          const position = this.infirmiers.indexOf(infirmier);
                          position > -1 ? this.infirmiers.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Infirmier Supprimé',
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


public async duplicateInfirmier(infirmier: InfirmierVo) {

     this.infirmierService.findByIdWithAssociatedList(infirmier).subscribe(
	 res => {
	       this.initDuplicateInfirmier(res);
	       this.selectedInfirmier = res;
	       this.selectedInfirmier.id = null;
            this.createInfirmierDialog = true;

});

	}

	initDuplicateInfirmier(res: InfirmierVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.infirmiers.map(e => {
    return {
                    'Ref': e.ref ,
                    'Nom': e.nom ,
                    'Prenom': e.prenom ,
                    'Sexe': e.sexe ,
                    'Telephone': e.telephone ,
                    'Mail': e.mail ,
     }
      });

      this.criteriaData = [{
            'Ref': this.searchInfirmier.ref ? this.searchInfirmier.ref : environment.emptyForExport ,
            'Nom': this.searchInfirmier.nom ? this.searchInfirmier.nom : environment.emptyForExport ,
            'Prenom': this.searchInfirmier.prenom ? this.searchInfirmier.prenom : environment.emptyForExport ,
            'Sexe': this.searchInfirmier.sexe ? this.searchInfirmier.sexe : environment.emptyForExport ,
            'Telephone': this.searchInfirmier.telephone ? this.searchInfirmier.telephone : environment.emptyForExport ,
            'Mail': this.searchInfirmier.mail ? this.searchInfirmier.mail : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get infirmiers(): Array<InfirmierVo> {
           return this.infirmierService.infirmiers;
       }
    set infirmiers(value: Array<InfirmierVo>) {
        this.infirmierService.infirmiers = value;
       }

    get infirmierSelections(): Array<InfirmierVo> {
           return this.infirmierService.infirmierSelections;
       }
    set infirmierSelections(value: Array<InfirmierVo>) {
        this.infirmierService.infirmierSelections = value;
       }
   
     


    get selectedInfirmier():InfirmierVo {
           return this.infirmierService.selectedInfirmier;
       }
    set selectedInfirmier(value: InfirmierVo) {
        this.infirmierService.selectedInfirmier = value;
       }
    
    get createInfirmierDialog():boolean {
           return this.infirmierService.createInfirmierDialog;
       }
    set createInfirmierDialog(value: boolean) {
        this.infirmierService.createInfirmierDialog= value;
       }
    
    get editInfirmierDialog():boolean {
           return this.infirmierService.editInfirmierDialog;
       }
    set editInfirmierDialog(value: boolean) {
        this.infirmierService.editInfirmierDialog= value;
       }
    get viewInfirmierDialog():boolean {
           return this.infirmierService.viewInfirmierDialog;
       }
    set viewInfirmierDialog(value: boolean) {
        this.infirmierService.viewInfirmierDialog = value;
       }
       
     get searchInfirmier(): InfirmierVo {
        return this.infirmierService.searchInfirmier;
       }
    set searchInfirmier(value: InfirmierVo) {
        this.infirmierService.searchInfirmier = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
