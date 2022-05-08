package com.ird.faa.bean;

import java.util.Objects;
import java.util.List;



import javax.persistence.*;



@Entity
@Table(name = "dossier_medicale")
public class DossierMedicale   {

@Id
    @SequenceGenerator(name="dossier_medicale_seq",sequenceName="dossier_medicale_seq",
    allocationSize=1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="dossier_medicale_seq")
private Long id;

            @Column(length = 500)
            private String ref;

    @ManyToOne
    private Patient patient ;
    @ManyToOne
    private PatientContact patientContact ;
    @ManyToOne
    private Traitement traitement ;

                @OneToMany(mappedBy = "dossierMedicale")
            private List<Diagnostic> diagnostics ;
                @OneToMany(mappedBy = "dossierMedicale")
            private List<Clinique> cliniques ;
                @OneToMany(mappedBy = "dossierMedicale")
            private List<Biologie> biologies ;
                @OneToMany(mappedBy = "dossierMedicale")
            private List<Imagerie> imageries ;
                @OneToMany(mappedBy = "dossierMedicale")
            private List<CompteRendu> compteRendus ;
                @OneToMany(mappedBy = "dossierMedicale")
            private List<EvoSuiv> evoSuivs ;
                @OneToMany(mappedBy = "dossierMedicale")
            private List<DossierMedicaleTag> dossierMedicaleTags ;

public DossierMedicale(){
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
            public Patient getPatient(){
            return this.patient;
            }
            public void setPatient(Patient patient){
            this.patient = patient;
            }
            public PatientContact getPatientContact(){
            return this.patientContact;
            }
            public void setPatientContact(PatientContact patientContact){
            this.patientContact = patientContact;
            }
            public List<Diagnostic> getDiagnostics(){
            return this.diagnostics;
            }
            public void setDiagnostics(List<Diagnostic> diagnostics){
            this.diagnostics = diagnostics;
            }
            public List<Clinique> getCliniques(){
            return this.cliniques;
            }
            public void setCliniques(List<Clinique> cliniques){
            this.cliniques = cliniques;
            }
            public List<Biologie> getBiologies(){
            return this.biologies;
            }
            public void setBiologies(List<Biologie> biologies){
            this.biologies = biologies;
            }
            public List<Imagerie> getImageries(){
            return this.imageries;
            }
            public void setImageries(List<Imagerie> imageries){
            this.imageries = imageries;
            }
            public List<CompteRendu> getCompteRendus(){
            return this.compteRendus;
            }
            public void setCompteRendus(List<CompteRendu> compteRendus){
            this.compteRendus = compteRendus;
            }
            public Traitement getTraitement(){
            return this.traitement;
            }
            public void setTraitement(Traitement traitement){
            this.traitement = traitement;
            }
            public List<EvoSuiv> getEvoSuivs(){
            return this.evoSuivs;
            }
            public void setEvoSuivs(List<EvoSuiv> evoSuivs){
            this.evoSuivs = evoSuivs;
            }
            public List<DossierMedicaleTag> getDossierMedicaleTags(){
            return this.dossierMedicaleTags;
            }
            public void setDossierMedicaleTags(List<DossierMedicaleTag> dossierMedicaleTags){
            this.dossierMedicaleTags = dossierMedicaleTags;
            }

        @Override
        public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DossierMedicale dossierMedicale = (DossierMedicale) o;
        return id != null && id.equals(dossierMedicale.id);
        }

        @Override
        public int hashCode() {
        return Objects.hash(id);
        }

}

