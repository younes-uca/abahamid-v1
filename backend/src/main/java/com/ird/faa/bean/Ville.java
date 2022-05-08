package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "ville")
public class Ville   {

@Id
    @SequenceGenerator(name="ville_seq",sequenceName="ville_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="ville_seq")
private Long id;

            @Column(length = 500)
            private String code;
            @Column(length = 500)
            private String libelle;



public Ville(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public String getCode(){
            return this.code;
            }
            public void setCode(String code){
            this.code = code;
            }
            public String getLibelle(){
            return this.libelle;
            }
            public void setLibelle(String libelle){
            this.libelle = libelle;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ville ville = (Ville) o;
        return id != null && id.equals(ville.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

