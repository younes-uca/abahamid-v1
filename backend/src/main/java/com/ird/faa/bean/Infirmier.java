package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "infirmier")
public class Infirmier   {

@Id
    @SequenceGenerator(name="infirmier_seq",sequenceName="infirmier_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="infirmier_seq")
private Long id;

            @Column(length = 500)
            private String ref;
            @Column(length = 500)
            private String nom;
            @Column(length = 500)
            private String prenom;
            @Column(length = 500)
            private String sexe;
            @Column(length = 500)
            private String telephone;
            @Column(length = 500)
            private String mail;



public Infirmier(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public String getRef(){
            return this.ref;
            }
            public void setRef(String ref){
            this.ref = ref;
            }
            public String getNom(){
            return this.nom;
            }
            public void setNom(String nom){
            this.nom = nom;
            }
            public String getPrenom(){
            return this.prenom;
            }
            public void setPrenom(String prenom){
            this.prenom = prenom;
            }
            public String getSexe(){
            return this.sexe;
            }
            public void setSexe(String sexe){
            this.sexe = sexe;
            }
            public String getTelephone(){
            return this.telephone;
            }
            public void setTelephone(String telephone){
            this.telephone = telephone;
            }
            public String getMail(){
            return this.mail;
            }
            public void setMail(String mail){
            this.mail = mail;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Infirmier infirmier = (Infirmier) o;
        return id != null && id.equals(infirmier.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

