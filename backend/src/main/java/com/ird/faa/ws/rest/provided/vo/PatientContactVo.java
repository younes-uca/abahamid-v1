package  com.ird.faa.ws.rest.provided.vo;


public class PatientContactVo {

    private String id ;
    private String ref ;
    private String nom ;
    private String prenom ;
    private String adresse ;
    private String telephone ;
    private String mail ;



        private RelationVo relationVo ;


    public PatientContactVo(){
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
        public String getNom(){
        return this.nom;
        }

        public void setNom(String nom){
        this.nom = nom;
        }
        public String getPrenom(){
        return this.prenom;
        }

        public void setPrenom(String prenom){
        this.prenom = prenom;
        }
        public String getAdresse(){
        return this.adresse;
        }

        public void setAdresse(String adresse){
        this.adresse = adresse;
        }
        public String getTelephone(){
        return this.telephone;
        }

        public void setTelephone(String telephone){
        this.telephone = telephone;
        }
        public String getMail(){
        return this.mail;
        }

        public void setMail(String mail){
        this.mail = mail;
        }



        public RelationVo getRelationVo(){
        return this.relationVo;
        }

        public void setRelationVo(RelationVo relationVo){
        this.relationVo = relationVo;
        }


            }
