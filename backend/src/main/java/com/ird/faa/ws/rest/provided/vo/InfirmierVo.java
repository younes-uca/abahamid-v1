package  com.ird.faa.ws.rest.provided.vo;


public class InfirmierVo {

    private String id ;
    private String ref ;
    private String nom ;
    private String prenom ;
    private String sexe ;
    private String telephone ;
    private String mail ;





    public InfirmierVo(){
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
        public String getSexe(){
        return this.sexe;
        }

        public void setSexe(String sexe){
        this.sexe = sexe;
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





            }
