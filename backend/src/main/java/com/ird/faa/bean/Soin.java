package com.ird.faa.bean;

import java.util.Objects;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "soin")
public class Soin   {

@Id
    @SequenceGenerator(name="soin_seq",sequenceName="soin_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="soin_seq")
private Long id;

            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateSoin ;
            @Column(length = 500)
            private String soinsProd;
            @Column(length = 500)
            private String consigne;

    @ManyToOne
    private Infirmier infirmier ;
    @ManyToOne
    private Traitement traitement ;


public Soin(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public Date getDateSoin(){
            return this.dateSoin;
            }
            public void setDateSoin(Date dateSoin){
            this.dateSoin = dateSoin;
            }
            public Infirmier getInfirmier(){
            return this.infirmier;
            }
            public void setInfirmier(Infirmier infirmier){
            this.infirmier = infirmier;
            }
            public String getSoinsProd(){
            return this.soinsProd;
            }
            public void setSoinsProd(String soinsProd){
            this.soinsProd = soinsProd;
            }
            public String getConsigne(){
            return this.consigne;
            }
            public void setConsigne(String consigne){
            this.consigne = consigne;
            }
            public Traitement getTraitement(){
            return this.traitement;
            }
            public void setTraitement(Traitement traitement){
            this.traitement = traitement;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Soin soin = (Soin) o;
        return id != null && id.equals(soin.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

