import {Component, OnInit} from '@angular/core';
import {SoinService} from '../../../../../controller/service/Soin.service';
import {SoinVo} from '../../../../../controller/model/Soin.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from '../../../../../controller/service/role.service';
import {DatePipe} from '@angular/common';

import { InfirmierService } from '../../../../../controller/service/Infirmier.service';
import { TraitementService } from '../../../../../controller/service/Traitement.service';

import {TraitementVo} from '../../../../../controller/model/Traitement.model';
import {InfirmierVo} from '../../../../../controller/model/Infirmier.model';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from '../../../../../controller/service/Auth.service';
import { ExportService } from '../../../../../controller/service/Export.service';

@Component({
  selector: 'app-soin-list-admin',
  templateUrl: './soin-list-admin.component.html',
  styleUrls: ['./soin-list-admin.component.css']
})
export class SoinListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'Soin';
    infirmiers :Array<InfirmierVo>;
    traitements :Array<TraitementVo>;


    constructor(private datePipe: DatePipe, private soinService: SoinService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

        , private infirmierService: InfirmierService
        , private traitementService: TraitementService
) { }

    ngOnInit(): void {
      this.loadSoins();
      this.initExport();
      this.initCol();
      this.loadInfirmier();
      this.loadTraitement();
    }
    
    // methods
      public async loadSoins(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Soin', 'list');
        isPermistted ? this.soinService.findAll().subscribe(soins => this.soins = soins,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.soinService.findByCriteria(this.searchSoin).subscribe(soins=>{
            
            this.soins = soins;
           // this.searchSoin = new SoinVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'dateSoin', header: 'Date soin'},
                        {field: 'infirmier?.ref', header: 'Infirmier'},
                            {field: 'soinsProd', header: 'Soins prod'},
                            {field: 'consigne', header: 'Consigne'},
                        {field: 'traitement?.dossierMedicaleRef', header: 'Traitement'},
        ];
    }
    
    public async editSoin(soin:SoinVo){
        const isPermistted = await this.roleService.isPermitted('Soin', 'edit');
         if(isPermistted){
          this.soinService.findByIdWithAssociatedList(soin).subscribe(res => {
           this.selectedSoin = res;
            this.selectedSoin.dateSoin = new Date(soin.dateSoin);
            this.editSoinDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewSoin(soin:SoinVo){
        const isPermistted = await this.roleService.isPermitted('Soin', 'view');
        if(isPermistted){
           this.soinService.findByIdWithAssociatedList(soin).subscribe(res => {
           this.selectedSoin = res;
            this.selectedSoin.dateSoin = new Date(soin.dateSoin);
            this.viewSoinDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateSoin(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedSoin = new SoinVo();
            this.createSoinDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteSoin(soin:SoinVo){
       const isPermistted = await this.roleService.isPermitted('Soin', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Soin) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.soinService.delete(soin).subscribe(status=>{
                          if(status > 0){
                          const position = this.soins.indexOf(soin);
                          position > -1 ? this.soins.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Soin Supprimé',
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

public async loadInfirmier(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Soin', 'list');
    isPermistted ? this.infirmierService.findAll().subscribe(infirmiers => this.infirmiers = infirmiers,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}
public async loadTraitement(){
    await this.roleService.findAll();
    const isPermistted = await this.roleService.isPermitted('Soin', 'list');
    isPermistted ? this.traitementService.findAll().subscribe(traitements => this.traitements = traitements,error=>console.log(error))
    : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});

}

public async duplicateSoin(soin: SoinVo) {

     this.soinService.findByIdWithAssociatedList(soin).subscribe(
	 res => {
	       this.initDuplicateSoin(res);
	       this.selectedSoin = res;
	       this.selectedSoin.id = null;
            this.createSoinDialog = true;

});

	}

	initDuplicateSoin(res: SoinVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.soins.map(e => {
    return {
                    'Date soin': this.datePipe.transform(e.dateSoin , 'dd-MM-yyyy'),
            'Infirmier': e.infirmierVo?.ref ,
                    'Soins prod': e.soinsProd ,
                    'Consigne': e.consigne ,
            'Traitement': e.traitementVo?.dossierMedicaleRef ,
     }
      });

      this.criteriaData = [{
            'Date soin Min': this.searchSoin.dateSoinMin ? this.datePipe.transform(this.searchSoin.dateSoinMin , this.dateFormat) : environment.emptyForExport ,
            'Date soin Max': this.searchSoin.dateSoinMax ? this.datePipe.transform(this.searchSoin.dateSoinMax , this.dateFormat) : environment.emptyForExport ,
        'Infirmier': this.searchSoin.infirmierVo?.ref ? this.searchSoin.infirmierVo?.ref : environment.emptyForExport ,
            'Soins prod': this.searchSoin.soinsProd ? this.searchSoin.soinsProd : environment.emptyForExport ,
            'Consigne': this.searchSoin.consigne ? this.searchSoin.consigne : environment.emptyForExport ,
        'Traitement': this.searchSoin.traitementVo?.dossierMedicaleRef ? this.searchSoin.traitementVo?.dossierMedicaleRef : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get soins(): Array<SoinVo> {
           return this.soinService.soins;
       }
    set soins(value: Array<SoinVo>) {
        this.soinService.soins = value;
       }

    get soinSelections(): Array<SoinVo> {
           return this.soinService.soinSelections;
       }
    set soinSelections(value: Array<SoinVo>) {
        this.soinService.soinSelections = value;
       }
   
     


    get selectedSoin():SoinVo {
           return this.soinService.selectedSoin;
       }
    set selectedSoin(value: SoinVo) {
        this.soinService.selectedSoin = value;
       }
    
    get createSoinDialog():boolean {
           return this.soinService.createSoinDialog;
       }
    set createSoinDialog(value: boolean) {
        this.soinService.createSoinDialog= value;
       }
    
    get editSoinDialog():boolean {
           return this.soinService.editSoinDialog;
       }
    set editSoinDialog(value: boolean) {
        this.soinService.editSoinDialog= value;
       }
    get viewSoinDialog():boolean {
           return this.soinService.viewSoinDialog;
       }
    set viewSoinDialog(value: boolean) {
        this.soinService.viewSoinDialog = value;
       }
       
     get searchSoin(): SoinVo {
        return this.soinService.searchSoin;
       }
    set searchSoin(value: SoinVo) {
        this.soinService.searchSoin = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
