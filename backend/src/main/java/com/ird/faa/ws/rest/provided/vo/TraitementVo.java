package  com.ird.faa.ws.rest.provided.vo;

    import java.util.List;

public class TraitementVo {

    private String id ;
    private String imageOrdonnance ;
    private String dossierMedicaleRef ;



        private RecueilDeDonnesVo recueilDeDonnesVo ;

    private List<SoinVo> soinsVo ;

    public TraitementVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getImageOrdonnance(){
        return this.imageOrdonnance;
        }

        public void setImageOrdonnance(String imageOrdonnance){
        this.imageOrdonnance = imageOrdonnance;
        }
        public String getDossierMedicaleRef(){
        return this.dossierMedicaleRef;
        }

        public void setDossierMedicaleRef(String dossierMedicaleRef){
        this.dossierMedicaleRef = dossierMedicaleRef;
        }



        public RecueilDeDonnesVo getRecueilDeDonnesVo(){
        return this.recueilDeDonnesVo;
        }

        public void setRecueilDeDonnesVo(RecueilDeDonnesVo recueilDeDonnesVo){
        this.recueilDeDonnesVo = recueilDeDonnesVo;
        }


        public List<SoinVo> getSoinsVo(){
        return this.soinsVo;
        }

        public void setSoinsVo(List<SoinVo> soinsVo){
            this.soinsVo = soinsVo;
            }

            }
