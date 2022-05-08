import {Component, OnInit} from '@angular/core';
import {RecueilDeDonnesService} from '../../../../../controller/service/RecueilDeDonnes.service';
import {RecueilDeDonnesVo} from '../../../../../controller/model/RecueilDeDonnes.model';
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
  selector: 'app-recueil-de-donnes-list-chercheur',
  templateUrl: './recueil-de-donnes-list-chercheur.component.html',
  styleUrls: ['./recueil-de-donnes-list-chercheur.component.css']
})
export class RecueilDeDonnesListChercheurComponent implements OnInit {
   // declarations
    findByCriteriaShow:boolean=false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'RecueilDeDonnes';


    constructor(private datePipe: DatePipe, private recueilDeDonnesService: RecueilDeDonnesService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService:RoleService, private router: Router , private authService: AuthService , private exportService: ExportService

) { }

    ngOnInit(): void {
      this.loadRecueilDeDonness();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadRecueilDeDonness(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('RecueilDeDonnes', 'list');
        isPermistted ? this.recueilDeDonnesService.findAll().subscribe(recueilDeDonness => this.recueilDeDonness = recueilDeDonness,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.recueilDeDonnesService.findByCriteria(this.searchRecueilDeDonnes).subscribe(recueilDeDonness=>{
            
            this.recueilDeDonness = recueilDeDonness;
           // this.searchRecueilDeDonnes = new RecueilDeDonnesVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'allergie', header: 'Allergie'},
                            {field: 'etatPsy', header: 'Etat psy'},
                            {field: 'respiration', header: 'Respiration'},
                            {field: 'alimentation', header: 'Alimentation'},
                            {field: 'mouvement', header: 'Mouvement'},
                            {field: 'sommeil', header: 'Sommeil'},
                            {field: 'regulation', header: 'Regulation'},
                            {field: 'autre', header: 'Autre'},
                            {field: 'traitementRef', header: 'Traitement ref'},
        ];
    }
    
    public async editRecueilDeDonnes(recueilDeDonnes:RecueilDeDonnesVo){
        const isPermistted = await this.roleService.isPermitted('RecueilDeDonnes', 'edit');
         if(isPermistted){
          this.recueilDeDonnesService.findByIdWithAssociatedList(recueilDeDonnes).subscribe(res => {
           this.selectedRecueilDeDonnes = res;
            this.editRecueilDeDonnesDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewRecueilDeDonnes(recueilDeDonnes:RecueilDeDonnesVo){
        const isPermistted = await this.roleService.isPermitted('RecueilDeDonnes', 'view');
        if(isPermistted){
           this.recueilDeDonnesService.findByIdWithAssociatedList(recueilDeDonnes).subscribe(res => {
           this.selectedRecueilDeDonnes = res;
            this.viewRecueilDeDonnesDialog = true;
          });
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
        
    }
    
    public async openCreateRecueilDeDonnes(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedRecueilDeDonnes = new RecueilDeDonnesVo();
            this.createRecueilDeDonnesDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteRecueilDeDonnes(recueilDeDonnes:RecueilDeDonnesVo){
       const isPermistted = await this.roleService.isPermitted('RecueilDeDonnes', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Recueil de donnes) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.recueilDeDonnesService.delete(recueilDeDonnes).subscribe(status=>{
                          if(status > 0){
                          const position = this.recueilDeDonness.indexOf(recueilDeDonnes);
                          position > -1 ? this.recueilDeDonness.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Recueil de donnes Supprimé',
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


public async duplicateRecueilDeDonnes(recueilDeDonnes: RecueilDeDonnesVo) {

     this.recueilDeDonnesService.findByIdWithAssociatedList(recueilDeDonnes).subscribe(
	 res => {
	       this.initDuplicateRecueilDeDonnes(res);
	       this.selectedRecueilDeDonnes = res;
	       this.selectedRecueilDeDonnes.id = null;
            this.createRecueilDeDonnesDialog = true;

});

	}

	initDuplicateRecueilDeDonnes(res: RecueilDeDonnesVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport();this.exportService.exportCSV(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport();this.exportService.exportExcel(this.criteriaData,this.exportData,this.fileName);}},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport();this.exportService.exportPdf(this.criteriaData,this.exportData,this.fileName);}}
   ];
  }


    prepareColumnExport(): void {
    this.exportData = this.recueilDeDonness.map(e => {
    return {
                    'Allergie': e.allergie ,
                    'Etat psy': e.etatPsy ,
                    'Respiration': e.respiration ,
                    'Alimentation': e.alimentation ,
                    'Mouvement': e.mouvement ,
                    'Sommeil': e.sommeil ,
                    'Regulation': e.regulation ,
                    'Autre': e.autre ,
                    'Traitement ref': e.traitementRef ,
     }
      });

      this.criteriaData = [{
            'Allergie': this.searchRecueilDeDonnes.allergie ? this.searchRecueilDeDonnes.allergie : environment.emptyForExport ,
            'Etat psy': this.searchRecueilDeDonnes.etatPsy ? this.searchRecueilDeDonnes.etatPsy : environment.emptyForExport ,
            'Respiration': this.searchRecueilDeDonnes.respiration ? this.searchRecueilDeDonnes.respiration : environment.emptyForExport ,
            'Alimentation': this.searchRecueilDeDonnes.alimentation ? this.searchRecueilDeDonnes.alimentation : environment.emptyForExport ,
            'Mouvement': this.searchRecueilDeDonnes.mouvement ? this.searchRecueilDeDonnes.mouvement : environment.emptyForExport ,
            'Sommeil': this.searchRecueilDeDonnes.sommeil ? this.searchRecueilDeDonnes.sommeil : environment.emptyForExport ,
            'Regulation': this.searchRecueilDeDonnes.regulation ? this.searchRecueilDeDonnes.regulation : environment.emptyForExport ,
            'Autre': this.searchRecueilDeDonnes.autre ? this.searchRecueilDeDonnes.autre : environment.emptyForExport ,
            'Traitement ref': this.searchRecueilDeDonnes.traitementRef ? this.searchRecueilDeDonnes.traitementRef : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get recueilDeDonness(): Array<RecueilDeDonnesVo> {
           return this.recueilDeDonnesService.recueilDeDonness;
       }
    set recueilDeDonness(value: Array<RecueilDeDonnesVo>) {
        this.recueilDeDonnesService.recueilDeDonness = value;
       }

    get recueilDeDonnesSelections(): Array<RecueilDeDonnesVo> {
           return this.recueilDeDonnesService.recueilDeDonnesSelections;
       }
    set recueilDeDonnesSelections(value: Array<RecueilDeDonnesVo>) {
        this.recueilDeDonnesService.recueilDeDonnesSelections = value;
       }
   
     


    get selectedRecueilDeDonnes():RecueilDeDonnesVo {
           return this.recueilDeDonnesService.selectedRecueilDeDonnes;
       }
    set selectedRecueilDeDonnes(value: RecueilDeDonnesVo) {
        this.recueilDeDonnesService.selectedRecueilDeDonnes = value;
       }
    
    get createRecueilDeDonnesDialog():boolean {
           return this.recueilDeDonnesService.createRecueilDeDonnesDialog;
       }
    set createRecueilDeDonnesDialog(value: boolean) {
        this.recueilDeDonnesService.createRecueilDeDonnesDialog= value;
       }
    
    get editRecueilDeDonnesDialog():boolean {
           return this.recueilDeDonnesService.editRecueilDeDonnesDialog;
       }
    set editRecueilDeDonnesDialog(value: boolean) {
        this.recueilDeDonnesService.editRecueilDeDonnesDialog= value;
       }
    get viewRecueilDeDonnesDialog():boolean {
           return this.recueilDeDonnesService.viewRecueilDeDonnesDialog;
       }
    set viewRecueilDeDonnesDialog(value: boolean) {
        this.recueilDeDonnesService.viewRecueilDeDonnesDialog = value;
       }
       
     get searchRecueilDeDonnes(): RecueilDeDonnesVo {
        return this.recueilDeDonnesService.searchRecueilDeDonnes;
       }
    set searchRecueilDeDonnes(value: RecueilDeDonnesVo) {
        this.recueilDeDonnesService.searchRecueilDeDonnes = value;
       }

    get dateFormat(){
            return environment.dateFormatList;
    }


}
