package com.ird.faa.bean;

import java.util.Objects;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "evo_suiv")
public class EvoSuiv   {

@Id
    @SequenceGenerator(name="evo_suiv_seq",sequenceName="evo_suiv_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="evo_suiv_seq")
private Long id;

            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateEvoS ;
            @Lob
            @Column(columnDefinition="TEXT")
            private String evoS;

    @ManyToOne
    private DossierMedicale dossierMedicale ;


public EvoSuiv(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public Date getDateEvoS(){
            return this.dateEvoS;
            }
            public void setDateEvoS(Date dateEvoS){
            this.dateEvoS = dateEvoS;
            }
            public String getEvoS(){
            return this.evoS;
            }
            public void setEvoS(String evoS){
            this.evoS = evoS;
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
        EvoSuiv evoSuiv = (EvoSuiv) o;
        return id != null && id.equals(evoSuiv.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

