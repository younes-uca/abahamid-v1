package com.ird.faa.bean;

import java.util.Objects;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;

import com.ird.faa.security.bean.User;


@Entity
@Table(name = "etudiant")
public class Etudiant  extends User  {


    public Etudiant(String username) {
    super(username);
    }
            @Column(length = 500)
            private String numeroMatricule;
            @Column(length = 500)
            private String emailPrincipale;
            @Column(columnDefinition = "boolean default false")
                private boolean credentialsNonExpired = false;
            @Column(columnDefinition = "boolean default false")
                private boolean enabled = false;
            @Column(columnDefinition = "boolean default false")
                private boolean accountNonExpired = false;
            @Column(columnDefinition = "boolean default false")
                private boolean accountNonLocked = false;
            @Column(columnDefinition = "boolean default false")
                private boolean passwordChanged = false;
            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date createdAt ;
            @JsonFormat(pattern="yyyy-MM-dd")
            @Temporal(TemporalType.DATE)
            private Date updatedAt ;
            @Column(length = 500)
            private String username;
            @Column(length = 500)
            private String password;
            @Column(length = 500)
            private String prenom;
            @Column(length = 500)
            private String nom;
          @Transient
        private String role;



public Etudiant(){
super();
}


            public Long getId(){
            return this.id;
            }
            public void setId(Long id){
            this.id = id;
            }
            public String getNumeroMatricule(){
            return this.numeroMatricule;
            }
            public void setNumeroMatricule(String numeroMatricule){
            this.numeroMatricule = numeroMatricule;
            }
            public String getEmailPrincipale(){
            return this.emailPrincipale;
            }
            public void setEmailPrincipale(String emailPrincipale){
            this.emailPrincipale = emailPrincipale;
            }
        public boolean  getCredentialsNonExpired(){
        return this.credentialsNonExpired;
        }
        public void setCredentialsNonExpired(boolean credentialsNonExpired){
        this.credentialsNonExpired = credentialsNonExpired;
        }
        public boolean  getEnabled(){
        return this.enabled;
        }
        public void setEnabled(boolean enabled){
        this.enabled = enabled;
        }
        public boolean  getAccountNonExpired(){
        return this.accountNonExpired;
        }
        public void setAccountNonExpired(boolean accountNonExpired){
        this.accountNonExpired = accountNonExpired;
        }
        public boolean  getAccountNonLocked(){
        return this.accountNonLocked;
        }
        public void setAccountNonLocked(boolean accountNonLocked){
        this.accountNonLocked = accountNonLocked;
        }
        public boolean  getPasswordChanged(){
        return this.passwordChanged;
        }
        public void setPasswordChanged(boolean passwordChanged){
        this.passwordChanged = passwordChanged;
        }
            public Date getCreatedAt(){
            return this.createdAt;
            }
            public void setCreatedAt(Date createdAt){
            this.createdAt = createdAt;
            }
            public Date getUpdatedAt(){
            return this.updatedAt;
            }
            public void setUpdatedAt(Date updatedAt){
            this.updatedAt = updatedAt;
            }
            public String getUsername(){
            return this.username;
            }
            public void setUsername(String username){
            this.username = username;
            }
            public String getPassword(){
            return this.password;
            }
            public void setPassword(String password){
            this.password = password;
            }
            public String getPrenom(){
            return this.prenom;
            }
            public void setPrenom(String prenom){
            this.prenom = prenom;
            }
            public String getNom(){
            return this.nom;
            }
            public void setNom(String nom){
            this.nom = nom;
            }
            public String getRole(){
            return this.role;
            }
            public void setRole(String role){
            this.role = role;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Etudiant etudiant = (Etudiant) o;
        return id != null && id.equals(etudiant.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

