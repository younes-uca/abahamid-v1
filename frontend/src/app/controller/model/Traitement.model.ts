import {RecueilDeDonnesVo} from './RecueilDeDonnes.model';
import {SoinVo} from './Soin.model';



export class TraitementVo {

    public id: number;

    public imageOrdonnance: string;
    public dossierMedicaleRef: string;
      public recueilDeDonnesVo: RecueilDeDonnesVo ;
      public soinsVo: Array<SoinVo>;

}
