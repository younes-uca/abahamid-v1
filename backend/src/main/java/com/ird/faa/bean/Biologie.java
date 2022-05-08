package com.ird.faa.bean;

import java.util.Objects;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "biologie")
public class Biologie   {

@Id
    @SequenceGenerator(name="biologie_seq",sequenceName="biologie_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="biologie_seq")
private Long id;

            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateBiologie ;
            @Column(length = 500)
            private String resultat;

    @ManyToOne
    private Examen examen ;
    @ManyToOne
    private DossierMedicale dossierMedicale ;


public Biologie(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public Date getDateBiologie(){
            return this.dateBiologie;
            }
            public void setDateBiologie(Date dateBiologie){
            this.dateBiologie = dateBiologie;
            }
            public Examen getExamen(){
            return this.examen;
            }
            public void setExamen(Examen examen){
            this.examen = examen;
            }
            public String getResultat(){
            return this.resultat;
            }
            public void setResultat(String resultat){
            this.resultat = resultat;
            }
            public DossierMedicale getDossierMedicale(){
            return this.dossierMedicale;
            }
            public void setDossierMedicale(DossierMedicale dossierMedicale){
            this.dossierMedicale = dossierMedicale;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Biologie biologie = (Biologie) o;
        return id != null && id.equals(biologie.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

