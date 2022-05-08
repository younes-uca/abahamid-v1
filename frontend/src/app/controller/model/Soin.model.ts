import {TraitementVo} from './Traitement.model';
import {InfirmierVo} from './Infirmier.model';



export class SoinVo {

    public id: number;

    public dateSoin: Date;
    public soinsProd: string;
    public consigne: string;
                public dateSoinMax: string ;
                public dateSoinMin: string ;
      public infirmierVo: InfirmierVo ;
      public traitementVo: TraitementVo ;

}
