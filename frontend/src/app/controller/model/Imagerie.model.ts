import {DossierMedicaleVo} from './DossierMedicale.model';
import {TypeImageVo} from './TypeImage.model';
import {PhaseImageVo} from './PhaseImage.model';



export class ImagerieVo {

    public id: number;

    public dateImagerie: Date;
    public imageScan: string;
    public commanetaire: string;
                public dateImagerieMax: string ;
                public dateImagerieMin: string ;
      public typeImageVo: TypeImageVo ;
      public phaseImageVo: PhaseImageVo ;
      public dossierMedicaleVo: DossierMedicaleVo ;

}
