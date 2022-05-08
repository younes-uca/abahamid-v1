package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "relation")
public class Relation   {

@Id
    @SequenceGenerator(name="relation_seq",sequenceName="relation_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="relation_seq")
private Long id;

            @Column(length = 500)
            private String code;
            @Column(length = 500)
            private String libelle;



public Relation(){
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
        Relation relation = (Relation) o;
        return id != null && id.equals(relation.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

