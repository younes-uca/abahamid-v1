package  com.ird.faa.ws.rest.provided.vo;

    import java.util.List;

public class DossierMedicaleVo {

    private String id ;
    private String ref ;



        private PatientVo patientVo ;
        private PatientContactVo patientContactVo ;
        private TraitementVo traitementVo ;

    private List<DiagnosticVo> diagnosticsVo ;
    private List<CliniqueVo> cliniquesVo ;
    private List<BiologieVo> biologiesVo ;
    private List<ImagerieVo> imageriesVo ;
    private List<CompteRenduVo> compteRendusVo ;
    private List<EvoSuivVo> evoSuivsVo ;
    private List<DossierMedicaleTagVo> dossierMedicaleTagsVo ;

    public DossierMedicaleVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getRef(){
        return this.ref;
        }

        public void setRef(String ref){
        this.ref = ref;
        }



        public PatientVo getPatientVo(){
        return this.patientVo;
        }

        public void setPatientVo(PatientVo patientVo){
        this.patientVo = patientVo;
        }
        public PatientContactVo getPatientContactVo(){
        return this.patientContactVo;
        }

        public void setPatientContactVo(PatientContactVo patientContactVo){
        this.patientContactVo = patientContactVo;
        }
        public TraitementVo getTraitementVo(){
        return this.traitementVo;
        }

        public void setTraitementVo(TraitementVo traitementVo){
        this.traitementVo = traitementVo;
        }


        public List<DiagnosticVo> getDiagnosticsVo(){
        return this.diagnosticsVo;
        }

        public void setDiagnosticsVo(List<DiagnosticVo> diagnosticsVo){
            this.diagnosticsVo = diagnosticsVo;
            }

        public List<CliniqueVo> getCliniquesVo(){
        return this.cliniquesVo;
        }

        public void setCliniquesVo(List<CliniqueVo> cliniquesVo){
            this.cliniquesVo = cliniquesVo;
            }

        public List<BiologieVo> getBiologiesVo(){
        return this.biologiesVo;
        }

        public void setBiologiesVo(List<BiologieVo> biologiesVo){
            this.biologiesVo = biologiesVo;
            }

        public List<ImagerieVo> getImageriesVo(){
        return this.imageriesVo;
        }

        public void setImageriesVo(List<ImagerieVo> imageriesVo){
            this.imageriesVo = imageriesVo;
            }

        public List<CompteRenduVo> getCompteRendusVo(){
        return this.compteRendusVo;
        }

        public void setCompteRendusVo(List<CompteRenduVo> compteRendusVo){
            this.compteRendusVo = compteRendusVo;
            }

        public List<EvoSuivVo> getEvoSuivsVo(){
        return this.evoSuivsVo;
        }

        public void setEvoSuivsVo(List<EvoSuivVo> evoSuivsVo){
            this.evoSuivsVo = evoSuivsVo;
            }

        public List<DossierMedicaleTagVo> getDossierMedicaleTagsVo(){
        return this.dossierMedicaleTagsVo;
        }

        public void setDossierMedicaleTagsVo(List<DossierMedicaleTagVo> dossierMedicaleTagsVo){
            this.dossierMedicaleTagsVo = dossierMedicaleTagsVo;
            }

            }
