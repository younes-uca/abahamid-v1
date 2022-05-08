package com.ird.faa.bean;

import java.util.Objects;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "imagerie")
public class Imagerie   {

@Id
    @SequenceGenerator(name="imagerie_seq",sequenceName="imagerie_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="imagerie_seq")
private Long id;

            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateImagerie ;
            @Column(length = 500)
            private String imageScan;
            @Lob
            @Column(columnDefinition="TEXT")
            private String commanetaire;

    @ManyToOne
    private TypeImage typeImage ;
    @ManyToOne
    private PhaseImage phaseImage ;
    @ManyToOne
    private DossierMedicale dossierMedicale ;


public Imagerie(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public Date getDateImagerie(){
            return this.dateImagerie;
            }
            public void setDateImagerie(Date dateImagerie){
            this.dateImagerie = dateImagerie;
            }
            public TypeImage getTypeImage(){
            return this.typeImage;
            }
            public void setTypeImage(TypeImage typeImage){
            this.typeImage = typeImage;
            }
            public PhaseImage getPhaseImage(){
            return this.phaseImage;
            }
            public void setPhaseImage(PhaseImage phaseImage){
            this.phaseImage = phaseImage;
            }
            public String getImageScan(){
            return this.imageScan;
            }
            public void setImageScan(String imageScan){
            this.imageScan = imageScan;
            }
            public String getCommanetaire(){
            return this.commanetaire;
            }
            public void setCommanetaire(String commanetaire){
            this.commanetaire = commanetaire;
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
        Imagerie imagerie = (Imagerie) o;
        return id != null && id.equals(imagerie.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

