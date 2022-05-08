package com.ird.faa.bean;

import java.util.Objects;
import java.util.List;



import javax.persistence.*;



@Entity
@Table(name = "traitement")
public class Traitement   {

@Id
    @SequenceGenerator(name="traitement_seq",sequenceName="traitement_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="traitement_seq")
private Long id;

            @Column(length = 500)
            private String imageOrdonnance;
            @Column(length = 500)
            private String dossierMedicaleRef;

    @ManyToOne
    private RecueilDeDonnes recueilDeDonnes ;

                @OneToMany(mappedBy = "traitement")
            private List<Soin> soins ;

public Traitement(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public RecueilDeDonnes getRecueilDeDonnes(){
            return this.recueilDeDonnes;
            }
            public void setRecueilDeDonnes(RecueilDeDonnes recueilDeDonnes){
            this.recueilDeDonnes = recueilDeDonnes;
            }
            public List<Soin> getSoins(){
            return this.soins;
            }
            public void setSoins(List<Soin> soins){
            this.soins = soins;
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

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Traitement traitement = (Traitement) o;
        return id != null && id.equals(traitement.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

