package com.ird.faa.bean;

import java.util.Objects;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "diagnostic")
public class Diagnostic   {

@Id
    @SequenceGenerator(name="diagnostic_seq",sequenceName="diagnostic_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="diagnostic_seq")
private Long id;

            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateDiagnostic ;
            @Lob
            @Column(columnDefinition="TEXT")
            private String diag;

    @ManyToOne
    private DossierMedicale dossierMedicale ;


public Diagnostic(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public Date getDateDiagnostic(){
            return this.dateDiagnostic;
            }
            public void setDateDiagnostic(Date dateDiagnostic){
            this.dateDiagnostic = dateDiagnostic;
            }
            public String getDiag(){
            return this.diag;
            }
            public void setDiag(String diag){
            this.diag = diag;
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
        Diagnostic diagnostic = (Diagnostic) o;
        return id != null && id.equals(diagnostic.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

