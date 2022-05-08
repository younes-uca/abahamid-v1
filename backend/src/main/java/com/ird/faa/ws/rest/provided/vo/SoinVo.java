package  com.ird.faa.ws.rest.provided.vo;

    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class SoinVo {

    private String id ;
    private String dateSoin ;
    private String soinsProd ;
    private String consigne ;


            private String dateSoinMax ;
            private String dateSoinMin ;

        private InfirmierVo infirmierVo ;
        private TraitementVo traitementVo ;


    public SoinVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getDateSoin(){
        return this.dateSoin;
        }

        public void setDateSoin(String dateSoin){
        this.dateSoin = dateSoin;
        }
        public String getSoinsProd(){
        return this.soinsProd;
        }

        public void setSoinsProd(String soinsProd){
        this.soinsProd = soinsProd;
        }
        public String getConsigne(){
        return this.consigne;
        }

        public void setConsigne(String consigne){
        this.consigne = consigne;
        }


            public String getDateSoinMax(){
            return this.dateSoinMax;
            }

            public String getDateSoinMin(){
            return this.dateSoinMin;
            }

            public void setDateSoinMax(String dateSoinMax){
            this.dateSoinMax = dateSoinMax;
            }

            public void setDateSoinMin(String dateSoinMin){
            this.dateSoinMin = dateSoinMin;
            }


        public InfirmierVo getInfirmierVo(){
        return this.infirmierVo;
        }

        public void setInfirmierVo(InfirmierVo infirmierVo){
        this.infirmierVo = infirmierVo;
        }
        public TraitementVo getTraitementVo(){
        return this.traitementVo;
        }

        public void setTraitementVo(TraitementVo traitementVo){
        this.traitementVo = traitementVo;
        }


            }
