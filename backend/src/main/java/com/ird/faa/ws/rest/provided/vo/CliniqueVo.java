package  com.ird.faa.ws.rest.provided.vo;

    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class CliniqueVo {

    private String id ;
    private String dateClinique ;
    private String antecedentsPersonnels ;
    private String antecedentsFamiliaux ;
    private String histoireMaladie ;
    private String examenClinique ;
    private String conclusionClinique ;


            private String dateCliniqueMax ;
            private String dateCliniqueMin ;

        private DossierMedicaleVo dossierMedicaleVo ;


    public CliniqueVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getDateClinique(){
        return this.dateClinique;
        }

        public void setDateClinique(String dateClinique){
        this.dateClinique = dateClinique;
        }
        public String getAntecedentsPersonnels(){
        return this.antecedentsPersonnels;
        }

        public void setAntecedentsPersonnels(String antecedentsPersonnels){
        this.antecedentsPersonnels = antecedentsPersonnels;
        }
        public String getAntecedentsFamiliaux(){
        return this.antecedentsFamiliaux;
        }

        public void setAntecedentsFamiliaux(String antecedentsFamiliaux){
        this.antecedentsFamiliaux = antecedentsFamiliaux;
        }
        public String getHistoireMaladie(){
        return this.histoireMaladie;
        }

        public void setHistoireMaladie(String histoireMaladie){
        this.histoireMaladie = histoireMaladie;
        }
        public String getExamenClinique(){
        return this.examenClinique;
        }

        public void setExamenClinique(String examenClinique){
        this.examenClinique = examenClinique;
        }
        public String getConclusionClinique(){
        return this.conclusionClinique;
        }

        public void setConclusionClinique(String conclusionClinique){
        this.conclusionClinique = conclusionClinique;
        }


            public String getDateCliniqueMax(){
            return this.dateCliniqueMax;
            }

            public String getDateCliniqueMin(){
            return this.dateCliniqueMin;
            }

            public void setDateCliniqueMax(String dateCliniqueMax){
            this.dateCliniqueMax = dateCliniqueMax;
            }

            public void setDateCliniqueMin(String dateCliniqueMin){
            this.dateCliniqueMin = dateCliniqueMin;
            }


        public DossierMedicaleVo getDossierMedicaleVo(){
        return this.dossierMedicaleVo;
        }

        public void setDossierMedicaleVo(DossierMedicaleVo dossierMedicaleVo){
        this.dossierMedicaleVo = dossierMedicaleVo;
        }


            }
