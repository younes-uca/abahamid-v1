import {PatientContactVo} from './PatientContact.model';
import {EvoSuivVo} from './EvoSuiv.model';
import {CompteRenduVo} from './CompteRendu.model';
import {TraitementVo} from './Traitement.model';
import {DossierMedicaleTagVo} from './DossierMedicaleTag.model';
import {PatientVo} from './Patient.model';
import {DiagnosticVo} from './Diagnostic.model';
import {CliniqueVo} from './Clinique.model';
import {BiologieVo} from './Biologie.model';
import {ImagerieVo} from './Imagerie.model';



export class DossierMedicaleVo {

    public id: number;

    public ref: string;
      public patientVo: PatientVo ;
      public patientContactVo: PatientContactVo ;
      public traitementVo: TraitementVo ;
      public diagnosticsVo: Array<DiagnosticVo>;
      public cliniquesVo: Array<CliniqueVo>;
      public biologiesVo: Array<BiologieVo>;
      public imageriesVo: Array<ImagerieVo>;
      public compteRendusVo: Array<CompteRenduVo>;
      public evoSuivsVo: Array<EvoSuivVo>;
      public dossierMedicaleTagsVo: Array<DossierMedicaleTagVo>;

}
