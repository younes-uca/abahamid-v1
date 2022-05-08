package  com.ird.faa.ws.rest.provided.vo;

    import java.util.Date;
    import javax.persistence.Temporal;
    import javax.persistence.TemporalType;
    import com.fasterxml.jackson.annotation.JsonFormat;

public class PatientVo {

    private String id ;
    private String cin ;
    private String nom ;
    private String prenom ;
    private String dateDeNaissance ;
    private String profession ;
    private String adresse ;
    private String telephone ;


            private String dateDeNaissanceMax ;
            private String dateDeNaissanceMin ;

        private VilleVo villeVo ;
        private SexeVo sexeVo ;


    public PatientVo(){
    super();
    }

        public String getId(){
        return this.id;
        }

        public void setId(String id){
        this.id = id;
        }
        public String getCin(){
        return this.cin;
        }

        public void setCin(String cin){
        this.cin = cin;
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
        public String getDateDeNaissance(){
        return this.dateDeNaissance;
        }

        public void setDateDeNaissance(String dateDeNaissance){
        this.dateDeNaissance = dateDeNaissance;
        }
        public String getProfession(){
        return this.profession;
        }

        public void setProfession(String profession){
        this.profession = profession;
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


            public String getDateDeNaissanceMax(){
            return this.dateDeNaissanceMax;
            }

            public String getDateDeNaissanceMin(){
            return this.dateDeNaissanceMin;
            }

            public void setDateDeNaissanceMax(String dateDeNaissanceMax){
            this.dateDeNaissanceMax = dateDeNaissanceMax;
            }

            public void setDateDeNaissanceMin(String dateDeNaissanceMin){
            this.dateDeNaissanceMin = dateDeNaissanceMin;
            }


        public VilleVo getVilleVo(){
        return this.villeVo;
        }

        public void setVilleVo(VilleVo villeVo){
        this.villeVo = villeVo;
        }
        public SexeVo getSexeVo(){
        return this.sexeVo;
        }

        public void setSexeVo(SexeVo sexeVo){
        this.sexeVo = sexeVo;
        }


            }
