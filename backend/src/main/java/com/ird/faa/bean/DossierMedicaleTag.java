package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "dossier_medicale_tag")
public class DossierMedicaleTag   {

@Id
    @SequenceGenerator(name="dossier_medicale_tag_seq",sequenceName="dossier_medicale_tag_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="dossier_medicale_tag_seq")
private Long id;


    @ManyToOne
    private Tag tag ;
    @ManyToOne
    private DossierMedicale dossierMedicale ;


public DossierMedicaleTag(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public Tag getTag(){
            return this.tag;
            }
            public void setTag(Tag tag){
            this.tag = tag;
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
        DossierMedicaleTag dossierMedicaleTag = (DossierMedicaleTag) o;
        return id != null && id.equals(dossierMedicaleTag.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

