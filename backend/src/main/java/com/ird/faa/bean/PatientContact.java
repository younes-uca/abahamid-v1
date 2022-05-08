package com.ird.faa.bean;

import java.util.Objects;



import javax.persistence.*;



@Entity
@Table(name = "patient_contact")
public class PatientContact   {

@Id
    @SequenceGenerator(name="patient_contact_seq",sequenceName="patient_contact_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="patient_contact_seq")
private Long id;

            @Column(length = 500)
            private String ref;
            @Column(length = 500)
            private String nom;
            @Column(length = 500)
            private String prenom;
            @Column(length = 500)
            private String adresse;
            @Column(length = 500)
            private String telephone;
            @Column(length = 500)
            private String mail;

    @ManyToOne
    private Relation relation ;


public PatientContact(){
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
            public Relation getRelation(){
            return this.relation;
            }
            public void setRelation(Relation relation){
            this.relation = relation;
            }
            public String getAdresse(){
            return this.adresse;
            }
            public void setAdresse(String adresse){
            this.adresse = adresse;
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
        PatientContact patientContact = (PatientContact) o;
        return id != null && id.equals(patientContact.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

