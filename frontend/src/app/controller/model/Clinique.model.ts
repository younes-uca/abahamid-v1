import {DossierMedicaleVo} from './DossierMedicale.model';



export class CliniqueVo {

    public id: number;

    public dateClinique: Date;
    public antecedentsPersonnels: string;
    public antecedentsFamiliaux: string;
    public histoireMaladie: string;
    public examenClinique: string;
    public conclusionClinique: string;
                public dateCliniqueMax: string ;
                public dateCliniqueMin: string ;
      public dossierMedicaleVo: DossierMedicaleVo ;

}
