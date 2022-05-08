package com.ird.faa.bean;

import java.util.Objects;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;



@Entity
@Table(name = "patient")
public class Patient   {

@Id
    @SequenceGenerator(name="patient_seq",sequenceName="patient_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="patient_seq")
private Long id;

            @Column(length = 500)
            private String cin;
            @Column(length = 500)
            private String nom;
            @Column(length = 500)
            private String prenom;
            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date dateDeNaissance ;
            @Column(length = 500)
            private String profession;
            @Column(length = 500)
            private String adresse;
            @Column(length = 500)
            private String telephone;

    @ManyToOne
    private Ville ville ;
    @ManyToOne
    private Sexe sexe ;


public Patient(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public String getCin(){
            return this.cin;
            }
            public void setCin(String cin){
            this.cin = cin;
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
            public Date getDateDeNaissance(){
            return this.dateDeNaissance;
            }
            public void setDateDeNaissance(Date dateDeNaissance){
            this.dateDeNaissance = dateDeNaissance;
            }
            public String getProfession(){
            return this.profession;
            }
            public void setProfession(String profession){
            this.profession = profession;
            }
            public String getAdresse(){
            return this.adresse;
            }
            public void setAdresse(String adresse){
            this.adresse = adresse;
            }
            public Ville getVille(){
            return this.ville;
            }
            public void setVille(Ville ville){
            this.ville = ville;
            }
            public String getTelephone(){
            return this.telephone;
            }
            public void setTelephone(String telephone){
            this.telephone = telephone;
            }
            public Sexe getSexe(){
            return this.sexe;
            }
            public void setSexe(Sexe sexe){
            this.sexe = sexe;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Patient patient = (Patient) o;
        return id != null && id.equals(patient.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

