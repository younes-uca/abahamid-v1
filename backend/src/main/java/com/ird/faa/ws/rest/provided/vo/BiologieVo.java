package  com.ird.faa.ws.rest.provided.vo;

    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class BiologieVo {

    private String id ;
    private String dateBiologie ;
    private String resultat ;


            private String dateBiologieMax ;
            private String dateBiologieMin ;

        private ExamenVo examenVo ;
        private DossierMedicaleVo dossierMedicaleVo ;


    public BiologieVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getDateBiologie(){
        return this.dateBiologie;
        }

        public void setDateBiologie(String dateBiologie){
        this.dateBiologie = dateBiologie;
        }
        public String getResultat(){
        return this.resultat;
        }

        public void setResultat(String resultat){
        this.resultat = resultat;
        }


            public String getDateBiologieMax(){
            return this.dateBiologieMax;
            }

            public String getDateBiologieMin(){
            return this.dateBiologieMin;
            }

            public void setDateBiologieMax(String dateBiologieMax){
            this.dateBiologieMax = dateBiologieMax;
            }

            public void setDateBiologieMin(String dateBiologieMin){
            this.dateBiologieMin = dateBiologieMin;
            }


        public ExamenVo getExamenVo(){
        return this.examenVo;
        }

        public void setExamenVo(ExamenVo examenVo){
        this.examenVo = examenVo;
        }
        public DossierMedicaleVo getDossierMedicaleVo(){
        return this.dossierMedicaleVo;
        }

        public void setDossierMedicaleVo(DossierMedicaleVo dossierMedicaleVo){
        this.dossierMedicaleVo = dossierMedicaleVo;
        }


            }
