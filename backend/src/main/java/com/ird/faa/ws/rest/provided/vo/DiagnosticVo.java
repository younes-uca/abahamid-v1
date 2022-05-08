package  com.ird.faa.ws.rest.provided.vo;

    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class DiagnosticVo {

    private String id ;
    private String dateDiagnostic ;
    private String diag ;


            private String dateDiagnosticMax ;
            private String dateDiagnosticMin ;

        private DossierMedicaleVo dossierMedicaleVo ;


    public DiagnosticVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getDateDiagnostic(){
        return this.dateDiagnostic;
        }

        public void setDateDiagnostic(String dateDiagnostic){
        this.dateDiagnostic = dateDiagnostic;
        }
        public String getDiag(){
        return this.diag;
        }

        public void setDiag(String diag){
        this.diag = diag;
        }


            public String getDateDiagnosticMax(){
            return this.dateDiagnosticMax;
            }

            public String getDateDiagnosticMin(){
            return this.dateDiagnosticMin;
            }

            public void setDateDiagnosticMax(String dateDiagnosticMax){
            this.dateDiagnosticMax = dateDiagnosticMax;
            }

            public void setDateDiagnosticMin(String dateDiagnosticMin){
            this.dateDiagnosticMin = dateDiagnosticMin;
            }


        public DossierMedicaleVo getDossierMedicaleVo(){
        return this.dossierMedicaleVo;
        }

        public void setDossierMedicaleVo(DossierMedicaleVo dossierMedicaleVo){
        this.dossierMedicaleVo = dossierMedicaleVo;
        }


            }
