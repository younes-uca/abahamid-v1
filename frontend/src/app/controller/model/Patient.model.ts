import {SexeVo} from './Sexe.model';
import {VilleVo} from './Ville.model';



export class PatientVo {

    public id: number;

    public cin: string;
    public nom: string;
    public prenom: string;
    public dateDeNaissance: Date;
    public profession: string;
    public adresse: string;
    public telephone: string;
                public dateDeNaissanceMax: string ;
                public dateDeNaissanceMin: string ;
      public villeVo: VilleVo ;
      public sexeVo: SexeVo ;

}
