package  com.ird.faa.ws.rest.provided.vo;

    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class ImagerieVo {

    private String id ;
    private String dateImagerie ;
    private String imageScan ;
    private String commanetaire ;


            private String dateImagerieMax ;
            private String dateImagerieMin ;

        private TypeImageVo typeImageVo ;
        private PhaseImageVo phaseImageVo ;
        private DossierMedicaleVo dossierMedicaleVo ;


    public ImagerieVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getDateImagerie(){
        return this.dateImagerie;
        }

        public void setDateImagerie(String dateImagerie){
        this.dateImagerie = dateImagerie;
        }
        public String getImageScan(){
        return this.imageScan;
        }

        public void setImageScan(String imageScan){
        this.imageScan = imageScan;
        }
        public String getCommanetaire(){
        return this.commanetaire;
        }

        public void setCommanetaire(String commanetaire){
        this.commanetaire = commanetaire;
        }


            public String getDateImagerieMax(){
            return this.dateImagerieMax;
            }

            public String getDateImagerieMin(){
            return this.dateImagerieMin;
            }

            public void setDateImagerieMax(String dateImagerieMax){
            this.dateImagerieMax = dateImagerieMax;
            }

            public void setDateImagerieMin(String dateImagerieMin){
            this.dateImagerieMin = dateImagerieMin;
            }


        public TypeImageVo getTypeImageVo(){
        return this.typeImageVo;
        }

        public void setTypeImageVo(TypeImageVo typeImageVo){
        this.typeImageVo = typeImageVo;
        }
        public PhaseImageVo getPhaseImageVo(){
        return this.phaseImageVo;
        }

        public void setPhaseImageVo(PhaseImageVo phaseImageVo){
        this.phaseImageVo = phaseImageVo;
        }
        public DossierMedicaleVo getDossierMedicaleVo(){
        return this.dossierMedicaleVo;
        }

        public void setDossierMedicaleVo(DossierMedicaleVo dossierMedicaleVo){
        this.dossierMedicaleVo = dossierMedicaleVo;
        }


            }
