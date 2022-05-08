package com.ird.faa.bean;

import java.util.Objects;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "clinique")
public class Clinique   {

@Id
    @SequenceGenerator(name="clinique_seq",sequenceName="clinique_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="clinique_seq")
private Long id;

            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateClinique ;
            @Lob
            @Column(columnDefinition="TEXT")
            private String antecedentsPersonnels;
            @Lob
            @Column(columnDefinition="TEXT")
            private String antecedentsFamiliaux;
            @Lob
            @Column(columnDefinition="TEXT")
            private String histoireMaladie;
            @Lob
            @Column(columnDefinition="TEXT")
            private String examenClinique;
            @Lob
            @Column(columnDefinition="TEXT")
            private String conclusionClinique;

    @ManyToOne
    private DossierMedicale dossierMedicale ;


public Clinique(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public Date getDateClinique(){
            return this.dateClinique;
            }
            public void setDateClinique(Date dateClinique){
            this.dateClinique = dateClinique;
            }
            public String getAntecedentsPersonnels(){
            return this.antecedentsPersonnels;
            }
            public void setAntecedentsPersonnels(String antecedentsPersonnels){
            this.antecedentsPersonnels = antecedentsPersonnels;
            }
            public String getAntecedentsFamiliaux(){
            return this.antecedentsFamiliaux;
            }
            public void setAntecedentsFamiliaux(String antecedentsFamiliaux){
            this.antecedentsFamiliaux = antecedentsFamiliaux;
            }
            public String getHistoireMaladie(){
            return this.histoireMaladie;
            }
            public void setHistoireMaladie(String histoireMaladie){
            this.histoireMaladie = histoireMaladie;
            }
            public String getExamenClinique(){
            return this.examenClinique;
            }
            public void setExamenClinique(String examenClinique){
            this.examenClinique = examenClinique;
            }
            public String getConclusionClinique(){
            return this.conclusionClinique;
            }
            public void setConclusionClinique(String conclusionClinique){
            this.conclusionClinique = conclusionClinique;
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
        Clinique clinique = (Clinique) o;
        return id != null && id.equals(clinique.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

