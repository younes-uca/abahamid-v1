import {ExamenVo} from './Examen.model';
import {DossierMedicaleVo} from './DossierMedicale.model';



export class BiologieVo {

    public id: number;

    public dateBiologie: Date;
    public resultat: string;
                public dateBiologieMax: string ;
                public dateBiologieMin: string ;
      public examenVo: ExamenVo ;
      public dossierMedicaleVo: DossierMedicaleVo ;

}
