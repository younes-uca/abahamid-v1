import {RelationVo} from './Relation.model';



export class PatientContactVo {

    public id: number;

    public ref: string;
    public nom: string;
    public prenom: string;
    public adresse: string;
    public telephone: string;
    public mail: string;
      public relationVo: RelationVo ;

}
