package  com.ird.faa.ws.rest.provided.vo;

    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class EvoSuivVo {

    private String id ;
    private String dateEvoS ;
    private String evoS ;


            private String dateEvoSMax ;
            private String dateEvoSMin ;

        private DossierMedicaleVo dossierMedicaleVo ;


    public EvoSuivVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getDateEvoS(){
        return this.dateEvoS;
        }

        public void setDateEvoS(String dateEvoS){
        this.dateEvoS = dateEvoS;
        }
        public String getEvoS(){
        return this.evoS;
        }

        public void setEvoS(String evoS){
        this.evoS = evoS;
        }


            public String getDateEvoSMax(){
            return this.dateEvoSMax;
            }

            public String getDateEvoSMin(){
            return this.dateEvoSMin;
            }

            public void setDateEvoSMax(String dateEvoSMax){
            this.dateEvoSMax = dateEvoSMax;
            }

            public void setDateEvoSMin(String dateEvoSMin){
            this.dateEvoSMin = dateEvoSMin;
            }


        public DossierMedicaleVo getDossierMedicaleVo(){
        return this.dossierMedicaleVo;
        }

        public void setDossierMedicaleVo(DossierMedicaleVo dossierMedicaleVo){
        this.dossierMedicaleVo = dossierMedicaleVo;
        }


            }
