package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "recueil_de_donnes")
public class RecueilDeDonnes   {

@Id
    @SequenceGenerator(name="recueil_de_donnes_seq",sequenceName="recueil_de_donnes_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="recueil_de_donnes_seq")
private Long id;

            @Column(length = 500)
            private String allergie;
            @Column(length = 500)
            private String etatPsy;
            @Column(length = 500)
            private String respiration;
            @Column(length = 500)
            private String alimentation;
            @Column(length = 500)
            private String mouvement;
            @Column(length = 500)
            private String sommeil;
            @Column(length = 500)
            private String regulation;
            @Column(length = 500)
            private String autre;
            @Column(length = 500)
            private String traitementRef;



public RecueilDeDonnes(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public String getAllergie(){
            return this.allergie;
            }
            public void setAllergie(String allergie){
            this.allergie = allergie;
            }
            public String getEtatPsy(){
            return this.etatPsy;
            }
            public void setEtatPsy(String etatPsy){
            this.etatPsy = etatPsy;
            }
            public String getRespiration(){
            return this.respiration;
            }
            public void setRespiration(String respiration){
            this.respiration = respiration;
            }
            public String getAlimentation(){
            return this.alimentation;
            }
            public void setAlimentation(String alimentation){
            this.alimentation = alimentation;
            }
            public String getMouvement(){
            return this.mouvement;
            }
            public void setMouvement(String mouvement){
            this.mouvement = mouvement;
            }
            public String getSommeil(){
            return this.sommeil;
            }
            public void setSommeil(String sommeil){
            this.sommeil = sommeil;
            }
            public String getRegulation(){
            return this.regulation;
            }
            public void setRegulation(String regulation){
            this.regulation = regulation;
            }
            public String getAutre(){
            return this.autre;
            }
            public void setAutre(String autre){
            this.autre = autre;
            }
            public String getTraitementRef(){
            return this.traitementRef;
            }
            public void setTraitementRef(String traitementRef){
            this.traitementRef = traitementRef;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RecueilDeDonnes recueilDeDonnes = (RecueilDeDonnes) o;
        return id != null && id.equals(recueilDeDonnes.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

