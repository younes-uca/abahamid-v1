package com.ird.faa.bean;

import java.util.Objects;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "compte_rendu")
public class CompteRendu   {

@Id
    @SequenceGenerator(name="compte_rendu_seq",sequenceName="compte_rendu_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="compte_rendu_seq")
private Long id;

            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateCompteR ;
            @Lob
            @Column(columnDefinition="TEXT")
            private String compteR;

    @ManyToOne
    private DossierMedicale dossierMedicale ;


public CompteRendu(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public Date getDateCompteR(){
            return this.dateCompteR;
            }
            public void setDateCompteR(Date dateCompteR){
            this.dateCompteR = dateCompteR;
            }
            public String getCompteR(){
            return this.compteR;
            }
            public void setCompteR(String compteR){
            this.compteR = compteR;
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
        CompteRendu compteRendu = (CompteRendu) o;
        return id != null && id.equals(compteRendu.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

