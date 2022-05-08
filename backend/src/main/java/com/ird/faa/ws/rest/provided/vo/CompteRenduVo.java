package  com.ird.faa.ws.rest.provided.vo;

    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class CompteRenduVo {

    private String id ;
    private String dateCompteR ;
    private String compteR ;


            private String dateCompteRMax ;
            private String dateCompteRMin ;

        private DossierMedicaleVo dossierMedicaleVo ;


    public CompteRenduVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getDateCompteR(){
        return this.dateCompteR;
        }

        public void setDateCompteR(String dateCompteR){
        this.dateCompteR = dateCompteR;
        }
        public String getCompteR(){
        return this.compteR;
        }

        public void setCompteR(String compteR){
        this.compteR = compteR;
        }


            public String getDateCompteRMax(){
            return this.dateCompteRMax;
            }

            public String getDateCompteRMin(){
            return this.dateCompteRMin;
            }

            public void setDateCompteRMax(String dateCompteRMax){
            this.dateCompteRMax = dateCompteRMax;
            }

            public void setDateCompteRMin(String dateCompteRMin){
            this.dateCompteRMin = dateCompteRMin;
            }


        public DossierMedicaleVo getDossierMedicaleVo(){
        return this.dossierMedicaleVo;
        }

        public void setDossierMedicaleVo(DossierMedicaleVo dossierMedicaleVo){
        this.dossierMedicaleVo = dossierMedicaleVo;
        }


            }
