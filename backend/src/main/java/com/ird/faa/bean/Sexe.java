package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "sexe")
public class Sexe   {

@Id
    @SequenceGenerator(name="sexe_seq",sequenceName="sexe_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="sexe_seq")
private Long id;

            @Column(length = 500)
            private String code;
            @Column(length = 500)
            private String libelle;



public Sexe(){
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
        Sexe sexe = (Sexe) o;
        return id != null && id.equals(sexe.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

