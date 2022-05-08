package  com.ird.faa.ws.rest.provided.vo;


public class DossierMedicaleTagVo {

    private String id ;



        private TagVo tagVo ;
        private DossierMedicaleVo dossierMedicaleVo ;


    public DossierMedicaleTagVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }



        public TagVo getTagVo(){
        return this.tagVo;
        }

        public void setTagVo(TagVo tagVo){
        this.tagVo = tagVo;
        }
        public DossierMedicaleVo getDossierMedicaleVo(){
        return this.dossierMedicaleVo;
        }

        public void setDossierMedicaleVo(DossierMedicaleVo dossierMedicaleVo){
        this.dossierMedicaleVo = dossierMedicaleVo;
        }


            }
