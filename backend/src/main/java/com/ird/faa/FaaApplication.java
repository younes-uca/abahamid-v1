package  com.ird.faa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import java.util.*;
import java.util.stream.Stream;

import com.ird.faa.security.common.AuthoritiesConstants;
import com.ird.faa.security.bean.User;
import com.ird.faa.security.bean.Permission;
import com.ird.faa.security.bean.Role;
import com.ird.faa.security.service.facade.UserService;
import com.ird.faa.security.service.facade.RoleService;
import com.ird.faa.bean.Chercheur;


@SpringBootApplication
public class FaaApplication {
public static ConfigurableApplicationContext ctx;

public static void main(String[] args) {
ctx=SpringApplication.run(FaaApplication.class, args);
}

public static ConfigurableApplicationContext getCtx() {
return ctx;
}

@Bean
public CommandLineRunner demo(UserService userService, RoleService roleService
) {
return (args) -> {
if(true){
    Map<String,String> etats=new HashMap<>();
    etats.put("Initialisé","initialise");
    etats.put("En cours","encours");
    etats.put("Terminé","termine");


    // Role chercheur
        Chercheur userForChercheur = new Chercheur("chercheur");

    Role roleForChercheur = new Role();
    roleForChercheur.setAuthority(AuthoritiesConstants.CHERCHEUR);
    List<Permission> permissionsForChercheur = new ArrayList<>();
    addPermissionForChercheur(permissionsForChercheur);
    roleForChercheur.setPermissions(permissionsForChercheur);
    if(userForChercheur.getRoles()==null)
    userForChercheur.setRoles(new ArrayList<>());

    userForChercheur.getRoles().add(roleForChercheur);
    userService.save(userForChercheur);


    // Role admin
        User userForAdmin = new User("admin");

    Role roleForAdmin = new Role();
    roleForAdmin.setAuthority(AuthoritiesConstants.ADMIN);
    List<Permission> permissionsForAdmin = new ArrayList<>();
    addPermissionForAdmin(permissionsForAdmin);
    roleForAdmin.setPermissions(permissionsForAdmin);
    if(userForAdmin.getRoles()==null)
    userForAdmin.setRoles(new ArrayList<>());

    userForAdmin.getRoles().add(roleForAdmin);
    userService.save(userForAdmin);


    // Role medecin
        User userForMedecin = new User("medecin");

    Role roleForMedecin = new Role();
    roleForMedecin.setAuthority(AuthoritiesConstants.MEDECIN);
    List<Permission> permissionsForMedecin = new ArrayList<>();
    addPermissionForMedecin(permissionsForMedecin);
    roleForMedecin.setPermissions(permissionsForMedecin);
    if(userForMedecin.getRoles()==null)
    userForMedecin.setRoles(new ArrayList<>());

    userForMedecin.getRoles().add(roleForMedecin);
    userService.save(userForMedecin);


    // Role etudiant
        User userForEtudiant = new User("etudiant");

    Role roleForEtudiant = new Role();
    roleForEtudiant.setAuthority(AuthoritiesConstants.ETUDIANT);
    List<Permission> permissionsForEtudiant = new ArrayList<>();
    addPermissionForEtudiant(permissionsForEtudiant);
    roleForEtudiant.setPermissions(permissionsForEtudiant);
    if(userForEtudiant.getRoles()==null)
    userForEtudiant.setRoles(new ArrayList<>());

    userForEtudiant.getRoles().add(roleForEtudiant);
    userService.save(userForEtudiant);
    }
        };
        }

        private static void addPermissionForChercheur(List
        <Permission> permissions){
                permissions.add(new Permission("Biologie.edit"));
                permissions.add(new Permission("Biologie.list"));
                permissions.add(new Permission("Biologie.view"));
                permissions.add(new Permission("Biologie.add"));
                permissions.add(new Permission("Biologie.delete"));
                permissions.add(new Permission("Infirmier.edit"));
                permissions.add(new Permission("Infirmier.list"));
                permissions.add(new Permission("Infirmier.view"));
                permissions.add(new Permission("Infirmier.add"));
                permissions.add(new Permission("Infirmier.delete"));
                permissions.add(new Permission("Relation.edit"));
                permissions.add(new Permission("Relation.list"));
                permissions.add(new Permission("Relation.view"));
                permissions.add(new Permission("Relation.add"));
                permissions.add(new Permission("Relation.delete"));
                permissions.add(new Permission("Examen.edit"));
                permissions.add(new Permission("Examen.list"));
                permissions.add(new Permission("Examen.view"));
                permissions.add(new Permission("Examen.add"));
                permissions.add(new Permission("Examen.delete"));
                permissions.add(new Permission("Chercheur.edit"));
                permissions.add(new Permission("Chercheur.list"));
                permissions.add(new Permission("Chercheur.view"));
                permissions.add(new Permission("Chercheur.add"));
                permissions.add(new Permission("Chercheur.delete"));
                permissions.add(new Permission("Clinique.edit"));
                permissions.add(new Permission("Clinique.list"));
                permissions.add(new Permission("Clinique.view"));
                permissions.add(new Permission("Clinique.add"));
                permissions.add(new Permission("Clinique.delete"));
                permissions.add(new Permission("Tag.edit"));
                permissions.add(new Permission("Tag.list"));
                permissions.add(new Permission("Tag.view"));
                permissions.add(new Permission("Tag.add"));
                permissions.add(new Permission("Tag.delete"));
                permissions.add(new Permission("Imagerie.edit"));
                permissions.add(new Permission("Imagerie.list"));
                permissions.add(new Permission("Imagerie.view"));
                permissions.add(new Permission("Imagerie.add"));
                permissions.add(new Permission("Imagerie.delete"));
                permissions.add(new Permission("Traitement.edit"));
                permissions.add(new Permission("Traitement.list"));
                permissions.add(new Permission("Traitement.view"));
                permissions.add(new Permission("Traitement.add"));
                permissions.add(new Permission("Traitement.delete"));
                permissions.add(new Permission("DossierMedicale.edit"));
                permissions.add(new Permission("DossierMedicale.list"));
                permissions.add(new Permission("DossierMedicale.view"));
                permissions.add(new Permission("DossierMedicale.add"));
                permissions.add(new Permission("DossierMedicale.delete"));
                permissions.add(new Permission("Diagnostic.edit"));
                permissions.add(new Permission("Diagnostic.list"));
                permissions.add(new Permission("Diagnostic.view"));
                permissions.add(new Permission("Diagnostic.add"));
                permissions.add(new Permission("Diagnostic.delete"));
                permissions.add(new Permission("CompteRendu.edit"));
                permissions.add(new Permission("CompteRendu.list"));
                permissions.add(new Permission("CompteRendu.view"));
                permissions.add(new Permission("CompteRendu.add"));
                permissions.add(new Permission("CompteRendu.delete"));
                permissions.add(new Permission("RecueilDeDonnes.edit"));
                permissions.add(new Permission("RecueilDeDonnes.list"));
                permissions.add(new Permission("RecueilDeDonnes.view"));
                permissions.add(new Permission("RecueilDeDonnes.add"));
                permissions.add(new Permission("RecueilDeDonnes.delete"));
                permissions.add(new Permission("Sexe.edit"));
                permissions.add(new Permission("Sexe.list"));
                permissions.add(new Permission("Sexe.view"));
                permissions.add(new Permission("Sexe.add"));
                permissions.add(new Permission("Sexe.delete"));
                permissions.add(new Permission("Medecin.edit"));
                permissions.add(new Permission("Medecin.list"));
                permissions.add(new Permission("Medecin.view"));
                permissions.add(new Permission("Medecin.add"));
                permissions.add(new Permission("Medecin.delete"));
                permissions.add(new Permission("PatientContact.edit"));
                permissions.add(new Permission("PatientContact.list"));
                permissions.add(new Permission("PatientContact.view"));
                permissions.add(new Permission("PatientContact.add"));
                permissions.add(new Permission("PatientContact.delete"));
                permissions.add(new Permission("EvoSuiv.edit"));
                permissions.add(new Permission("EvoSuiv.list"));
                permissions.add(new Permission("EvoSuiv.view"));
                permissions.add(new Permission("EvoSuiv.add"));
                permissions.add(new Permission("EvoSuiv.delete"));
                permissions.add(new Permission("Soin.edit"));
                permissions.add(new Permission("Soin.list"));
                permissions.add(new Permission("Soin.view"));
                permissions.add(new Permission("Soin.add"));
                permissions.add(new Permission("Soin.delete"));
                permissions.add(new Permission("Patient.edit"));
                permissions.add(new Permission("Patient.list"));
                permissions.add(new Permission("Patient.view"));
                permissions.add(new Permission("Patient.add"));
                permissions.add(new Permission("Patient.delete"));
                permissions.add(new Permission("TypeImage.edit"));
                permissions.add(new Permission("TypeImage.list"));
                permissions.add(new Permission("TypeImage.view"));
                permissions.add(new Permission("TypeImage.add"));
                permissions.add(new Permission("TypeImage.delete"));
                permissions.add(new Permission("Etudiant.edit"));
                permissions.add(new Permission("Etudiant.list"));
                permissions.add(new Permission("Etudiant.view"));
                permissions.add(new Permission("Etudiant.add"));
                permissions.add(new Permission("Etudiant.delete"));
                permissions.add(new Permission("DossierMedicaleTag.edit"));
                permissions.add(new Permission("DossierMedicaleTag.list"));
                permissions.add(new Permission("DossierMedicaleTag.view"));
                permissions.add(new Permission("DossierMedicaleTag.add"));
                permissions.add(new Permission("DossierMedicaleTag.delete"));
                permissions.add(new Permission("Ville.edit"));
                permissions.add(new Permission("Ville.list"));
                permissions.add(new Permission("Ville.view"));
                permissions.add(new Permission("Ville.add"));
                permissions.add(new Permission("Ville.delete"));
                permissions.add(new Permission("PhaseImage.edit"));
                permissions.add(new Permission("PhaseImage.list"));
                permissions.add(new Permission("PhaseImage.view"));
                permissions.add(new Permission("PhaseImage.add"));
                permissions.add(new Permission("PhaseImage.delete"));
            }
        private static void addPermissionForAdmin(List
        <Permission> permissions){
                permissions.add(new Permission("Biologie.edit"));
                permissions.add(new Permission("Biologie.list"));
                permissions.add(new Permission("Biologie.view"));
                permissions.add(new Permission("Biologie.add"));
                permissions.add(new Permission("Biologie.delete"));
                permissions.add(new Permission("Infirmier.edit"));
                permissions.add(new Permission("Infirmier.list"));
                permissions.add(new Permission("Infirmier.view"));
                permissions.add(new Permission("Infirmier.add"));
                permissions.add(new Permission("Infirmier.delete"));
                permissions.add(new Permission("Relation.edit"));
                permissions.add(new Permission("Relation.list"));
                permissions.add(new Permission("Relation.view"));
                permissions.add(new Permission("Relation.add"));
                permissions.add(new Permission("Relation.delete"));
                permissions.add(new Permission("Examen.edit"));
                permissions.add(new Permission("Examen.list"));
                permissions.add(new Permission("Examen.view"));
                permissions.add(new Permission("Examen.add"));
                permissions.add(new Permission("Examen.delete"));
                permissions.add(new Permission("Chercheur.edit"));
                permissions.add(new Permission("Chercheur.list"));
                permissions.add(new Permission("Chercheur.view"));
                permissions.add(new Permission("Chercheur.add"));
                permissions.add(new Permission("Chercheur.delete"));
                permissions.add(new Permission("Clinique.edit"));
                permissions.add(new Permission("Clinique.list"));
                permissions.add(new Permission("Clinique.view"));
                permissions.add(new Permission("Clinique.add"));
                permissions.add(new Permission("Clinique.delete"));
                permissions.add(new Permission("Tag.edit"));
                permissions.add(new Permission("Tag.list"));
                permissions.add(new Permission("Tag.view"));
                permissions.add(new Permission("Tag.add"));
                permissions.add(new Permission("Tag.delete"));
                permissions.add(new Permission("Imagerie.edit"));
                permissions.add(new Permission("Imagerie.list"));
                permissions.add(new Permission("Imagerie.view"));
                permissions.add(new Permission("Imagerie.add"));
                permissions.add(new Permission("Imagerie.delete"));
                permissions.add(new Permission("Traitement.edit"));
                permissions.add(new Permission("Traitement.list"));
                permissions.add(new Permission("Traitement.view"));
                permissions.add(new Permission("Traitement.add"));
                permissions.add(new Permission("Traitement.delete"));
                permissions.add(new Permission("DossierMedicale.edit"));
                permissions.add(new Permission("DossierMedicale.list"));
                permissions.add(new Permission("DossierMedicale.view"));
                permissions.add(new Permission("DossierMedicale.add"));
                permissions.add(new Permission("DossierMedicale.delete"));
                permissions.add(new Permission("Diagnostic.edit"));
                permissions.add(new Permission("Diagnostic.list"));
                permissions.add(new Permission("Diagnostic.view"));
                permissions.add(new Permission("Diagnostic.add"));
                permissions.add(new Permission("Diagnostic.delete"));
                permissions.add(new Permission("CompteRendu.edit"));
                permissions.add(new Permission("CompteRendu.list"));
                permissions.add(new Permission("CompteRendu.view"));
                permissions.add(new Permission("CompteRendu.add"));
                permissions.add(new Permission("CompteRendu.delete"));
                permissions.add(new Permission("RecueilDeDonnes.edit"));
                permissions.add(new Permission("RecueilDeDonnes.list"));
                permissions.add(new Permission("RecueilDeDonnes.view"));
                permissions.add(new Permission("RecueilDeDonnes.add"));
                permissions.add(new Permission("RecueilDeDonnes.delete"));
                permissions.add(new Permission("Sexe.edit"));
                permissions.add(new Permission("Sexe.list"));
                permissions.add(new Permission("Sexe.view"));
                permissions.add(new Permission("Sexe.add"));
                permissions.add(new Permission("Sexe.delete"));
                permissions.add(new Permission("Medecin.edit"));
                permissions.add(new Permission("Medecin.list"));
                permissions.add(new Permission("Medecin.view"));
                permissions.add(new Permission("Medecin.add"));
                permissions.add(new Permission("Medecin.delete"));
                permissions.add(new Permission("PatientContact.edit"));
                permissions.add(new Permission("PatientContact.list"));
                permissions.add(new Permission("PatientContact.view"));
                permissions.add(new Permission("PatientContact.add"));
                permissions.add(new Permission("PatientContact.delete"));
                permissions.add(new Permission("EvoSuiv.edit"));
                permissions.add(new Permission("EvoSuiv.list"));
                permissions.add(new Permission("EvoSuiv.view"));
                permissions.add(new Permission("EvoSuiv.add"));
                permissions.add(new Permission("EvoSuiv.delete"));
                permissions.add(new Permission("Soin.edit"));
                permissions.add(new Permission("Soin.list"));
                permissions.add(new Permission("Soin.view"));
                permissions.add(new Permission("Soin.add"));
                permissions.add(new Permission("Soin.delete"));
                permissions.add(new Permission("Patient.edit"));
                permissions.add(new Permission("Patient.list"));
                permissions.add(new Permission("Patient.view"));
                permissions.add(new Permission("Patient.add"));
                permissions.add(new Permission("Patient.delete"));
                permissions.add(new Permission("TypeImage.edit"));
                permissions.add(new Permission("TypeImage.list"));
                permissions.add(new Permission("TypeImage.view"));
                permissions.add(new Permission("TypeImage.add"));
                permissions.add(new Permission("TypeImage.delete"));
                permissions.add(new Permission("Etudiant.edit"));
                permissions.add(new Permission("Etudiant.list"));
                permissions.add(new Permission("Etudiant.view"));
                permissions.add(new Permission("Etudiant.add"));
                permissions.add(new Permission("Etudiant.delete"));
                permissions.add(new Permission("DossierMedicaleTag.edit"));
                permissions.add(new Permission("DossierMedicaleTag.list"));
                permissions.add(new Permission("DossierMedicaleTag.view"));
                permissions.add(new Permission("DossierMedicaleTag.add"));
                permissions.add(new Permission("DossierMedicaleTag.delete"));
                permissions.add(new Permission("Ville.edit"));
                permissions.add(new Permission("Ville.list"));
                permissions.add(new Permission("Ville.view"));
                permissions.add(new Permission("Ville.add"));
                permissions.add(new Permission("Ville.delete"));
                permissions.add(new Permission("PhaseImage.edit"));
                permissions.add(new Permission("PhaseImage.list"));
                permissions.add(new Permission("PhaseImage.view"));
                permissions.add(new Permission("PhaseImage.add"));
                permissions.add(new Permission("PhaseImage.delete"));
            }
        private static void addPermissionForMedecin(List
        <Permission> permissions){
                permissions.add(new Permission("Biologie.edit"));
                permissions.add(new Permission("Biologie.list"));
                permissions.add(new Permission("Biologie.view"));
                permissions.add(new Permission("Biologie.add"));
                permissions.add(new Permission("Biologie.delete"));
                permissions.add(new Permission("Infirmier.edit"));
                permissions.add(new Permission("Infirmier.list"));
                permissions.add(new Permission("Infirmier.view"));
                permissions.add(new Permission("Infirmier.add"));
                permissions.add(new Permission("Infirmier.delete"));
                permissions.add(new Permission("Relation.edit"));
                permissions.add(new Permission("Relation.list"));
                permissions.add(new Permission("Relation.view"));
                permissions.add(new Permission("Relation.add"));
                permissions.add(new Permission("Relation.delete"));
                permissions.add(new Permission("Examen.edit"));
                permissions.add(new Permission("Examen.list"));
                permissions.add(new Permission("Examen.view"));
                permissions.add(new Permission("Examen.add"));
                permissions.add(new Permission("Examen.delete"));
                permissions.add(new Permission("Chercheur.edit"));
                permissions.add(new Permission("Chercheur.list"));
                permissions.add(new Permission("Chercheur.view"));
                permissions.add(new Permission("Chercheur.add"));
                permissions.add(new Permission("Chercheur.delete"));
                permissions.add(new Permission("Clinique.edit"));
                permissions.add(new Permission("Clinique.list"));
                permissions.add(new Permission("Clinique.view"));
                permissions.add(new Permission("Clinique.add"));
                permissions.add(new Permission("Clinique.delete"));
                permissions.add(new Permission("Tag.edit"));
                permissions.add(new Permission("Tag.list"));
                permissions.add(new Permission("Tag.view"));
                permissions.add(new Permission("Tag.add"));
                permissions.add(new Permission("Tag.delete"));
                permissions.add(new Permission("Imagerie.edit"));
                permissions.add(new Permission("Imagerie.list"));
                permissions.add(new Permission("Imagerie.view"));
                permissions.add(new Permission("Imagerie.add"));
                permissions.add(new Permission("Imagerie.delete"));
                permissions.add(new Permission("Traitement.edit"));
                permissions.add(new Permission("Traitement.list"));
                permissions.add(new Permission("Traitement.view"));
                permissions.add(new Permission("Traitement.add"));
                permissions.add(new Permission("Traitement.delete"));
                permissions.add(new Permission("DossierMedicale.edit"));
                permissions.add(new Permission("DossierMedicale.list"));
                permissions.add(new Permission("DossierMedicale.view"));
                permissions.add(new Permission("DossierMedicale.add"));
                permissions.add(new Permission("DossierMedicale.delete"));
                permissions.add(new Permission("Diagnostic.edit"));
                permissions.add(new Permission("Diagnostic.list"));
                permissions.add(new Permission("Diagnostic.view"));
                permissions.add(new Permission("Diagnostic.add"));
                permissions.add(new Permission("Diagnostic.delete"));
                permissions.add(new Permission("CompteRendu.edit"));
                permissions.add(new Permission("CompteRendu.list"));
                permissions.add(new Permission("CompteRendu.view"));
                permissions.add(new Permission("CompteRendu.add"));
                permissions.add(new Permission("CompteRendu.delete"));
                permissions.add(new Permission("RecueilDeDonnes.edit"));
                permissions.add(new Permission("RecueilDeDonnes.list"));
                permissions.add(new Permission("RecueilDeDonnes.view"));
                permissions.add(new Permission("RecueilDeDonnes.add"));
                permissions.add(new Permission("RecueilDeDonnes.delete"));
                permissions.add(new Permission("Sexe.edit"));
                permissions.add(new Permission("Sexe.list"));
                permissions.add(new Permission("Sexe.view"));
                permissions.add(new Permission("Sexe.add"));
                permissions.add(new Permission("Sexe.delete"));
                permissions.add(new Permission("Medecin.edit"));
                permissions.add(new Permission("Medecin.list"));
                permissions.add(new Permission("Medecin.view"));
                permissions.add(new Permission("Medecin.add"));
                permissions.add(new Permission("Medecin.delete"));
                permissions.add(new Permission("PatientContact.edit"));
                permissions.add(new Permission("PatientContact.list"));
                permissions.add(new Permission("PatientContact.view"));
                permissions.add(new Permission("PatientContact.add"));
                permissions.add(new Permission("PatientContact.delete"));
                permissions.add(new Permission("EvoSuiv.edit"));
                permissions.add(new Permission("EvoSuiv.list"));
                permissions.add(new Permission("EvoSuiv.view"));
                permissions.add(new Permission("EvoSuiv.add"));
                permissions.add(new Permission("EvoSuiv.delete"));
                permissions.add(new Permission("Soin.edit"));
                permissions.add(new Permission("Soin.list"));
                permissions.add(new Permission("Soin.view"));
                permissions.add(new Permission("Soin.add"));
                permissions.add(new Permission("Soin.delete"));
                permissions.add(new Permission("Patient.edit"));
                permissions.add(new Permission("Patient.list"));
                permissions.add(new Permission("Patient.view"));
                permissions.add(new Permission("Patient.add"));
                permissions.add(new Permission("Patient.delete"));
                permissions.add(new Permission("TypeImage.edit"));
                permissions.add(new Permission("TypeImage.list"));
                permissions.add(new Permission("TypeImage.view"));
                permissions.add(new Permission("TypeImage.add"));
                permissions.add(new Permission("TypeImage.delete"));
                permissions.add(new Permission("Etudiant.edit"));
                permissions.add(new Permission("Etudiant.list"));
                permissions.add(new Permission("Etudiant.view"));
                permissions.add(new Permission("Etudiant.add"));
                permissions.add(new Permission("Etudiant.delete"));
                permissions.add(new Permission("DossierMedicaleTag.edit"));
                permissions.add(new Permission("DossierMedicaleTag.list"));
                permissions.add(new Permission("DossierMedicaleTag.view"));
                permissions.add(new Permission("DossierMedicaleTag.add"));
                permissions.add(new Permission("DossierMedicaleTag.delete"));
                permissions.add(new Permission("Ville.edit"));
                permissions.add(new Permission("Ville.list"));
                permissions.add(new Permission("Ville.view"));
                permissions.add(new Permission("Ville.add"));
                permissions.add(new Permission("Ville.delete"));
                permissions.add(new Permission("PhaseImage.edit"));
                permissions.add(new Permission("PhaseImage.list"));
                permissions.add(new Permission("PhaseImage.view"));
                permissions.add(new Permission("PhaseImage.add"));
                permissions.add(new Permission("PhaseImage.delete"));
            }
        private static void addPermissionForEtudiant(List
        <Permission> permissions){
                permissions.add(new Permission("Biologie.edit"));
                permissions.add(new Permission("Biologie.list"));
                permissions.add(new Permission("Biologie.view"));
                permissions.add(new Permission("Biologie.add"));
                permissions.add(new Permission("Biologie.delete"));
                permissions.add(new Permission("Infirmier.edit"));
                permissions.add(new Permission("Infirmier.list"));
                permissions.add(new Permission("Infirmier.view"));
                permissions.add(new Permission("Infirmier.add"));
                permissions.add(new Permission("Infirmier.delete"));
                permissions.add(new Permission("Relation.edit"));
                permissions.add(new Permission("Relation.list"));
                permissions.add(new Permission("Relation.view"));
                permissions.add(new Permission("Relation.add"));
                permissions.add(new Permission("Relation.delete"));
                permissions.add(new Permission("Examen.edit"));
                permissions.add(new Permission("Examen.list"));
                permissions.add(new Permission("Examen.view"));
                permissions.add(new Permission("Examen.add"));
                permissions.add(new Permission("Examen.delete"));
                permissions.add(new Permission("Chercheur.edit"));
                permissions.add(new Permission("Chercheur.list"));
                permissions.add(new Permission("Chercheur.view"));
                permissions.add(new Permission("Chercheur.add"));
                permissions.add(new Permission("Chercheur.delete"));
                permissions.add(new Permission("Clinique.edit"));
                permissions.add(new Permission("Clinique.list"));
                permissions.add(new Permission("Clinique.view"));
                permissions.add(new Permission("Clinique.add"));
                permissions.add(new Permission("Clinique.delete"));
                permissions.add(new Permission("Tag.edit"));
                permissions.add(new Permission("Tag.list"));
                permissions.add(new Permission("Tag.view"));
                permissions.add(new Permission("Tag.add"));
                permissions.add(new Permission("Tag.delete"));
                permissions.add(new Permission("Imagerie.edit"));
                permissions.add(new Permission("Imagerie.list"));
                permissions.add(new Permission("Imagerie.view"));
                permissions.add(new Permission("Imagerie.add"));
                permissions.add(new Permission("Imagerie.delete"));
                permissions.add(new Permission("Traitement.edit"));
                permissions.add(new Permission("Traitement.list"));
                permissions.add(new Permission("Traitement.view"));
                permissions.add(new Permission("Traitement.add"));
                permissions.add(new Permission("Traitement.delete"));
                permissions.add(new Permission("DossierMedicale.edit"));
                permissions.add(new Permission("DossierMedicale.list"));
                permissions.add(new Permission("DossierMedicale.view"));
                permissions.add(new Permission("DossierMedicale.add"));
                permissions.add(new Permission("DossierMedicale.delete"));
                permissions.add(new Permission("Diagnostic.edit"));
                permissions.add(new Permission("Diagnostic.list"));
                permissions.add(new Permission("Diagnostic.view"));
                permissions.add(new Permission("Diagnostic.add"));
                permissions.add(new Permission("Diagnostic.delete"));
                permissions.add(new Permission("CompteRendu.edit"));
                permissions.add(new Permission("CompteRendu.list"));
                permissions.add(new Permission("CompteRendu.view"));
                permissions.add(new Permission("CompteRendu.add"));
                permissions.add(new Permission("CompteRendu.delete"));
                permissions.add(new Permission("RecueilDeDonnes.edit"));
                permissions.add(new Permission("RecueilDeDonnes.list"));
                permissions.add(new Permission("RecueilDeDonnes.view"));
                permissions.add(new Permission("RecueilDeDonnes.add"));
                permissions.add(new Permission("RecueilDeDonnes.delete"));
                permissions.add(new Permission("Sexe.edit"));
                permissions.add(new Permission("Sexe.list"));
                permissions.add(new Permission("Sexe.view"));
                permissions.add(new Permission("Sexe.add"));
                permissions.add(new Permission("Sexe.delete"));
                permissions.add(new Permission("Medecin.edit"));
                permissions.add(new Permission("Medecin.list"));
                permissions.add(new Permission("Medecin.view"));
                permissions.add(new Permission("Medecin.add"));
                permissions.add(new Permission("Medecin.delete"));
                permissions.add(new Permission("PatientContact.edit"));
                permissions.add(new Permission("PatientContact.list"));
                permissions.add(new Permission("PatientContact.view"));
                permissions.add(new Permission("PatientContact.add"));
                permissions.add(new Permission("PatientContact.delete"));
                permissions.add(new Permission("EvoSuiv.edit"));
                permissions.add(new Permission("EvoSuiv.list"));
                permissions.add(new Permission("EvoSuiv.view"));
                permissions.add(new Permission("EvoSuiv.add"));
                permissions.add(new Permission("EvoSuiv.delete"));
                permissions.add(new Permission("Soin.edit"));
                permissions.add(new Permission("Soin.list"));
                permissions.add(new Permission("Soin.view"));
                permissions.add(new Permission("Soin.add"));
                permissions.add(new Permission("Soin.delete"));
                permissions.add(new Permission("Patient.edit"));
                permissions.add(new Permission("Patient.list"));
                permissions.add(new Permission("Patient.view"));
                permissions.add(new Permission("Patient.add"));
                permissions.add(new Permission("Patient.delete"));
                permissions.add(new Permission("TypeImage.edit"));
                permissions.add(new Permission("TypeImage.list"));
                permissions.add(new Permission("TypeImage.view"));
                permissions.add(new Permission("TypeImage.add"));
                permissions.add(new Permission("TypeImage.delete"));
                permissions.add(new Permission("Etudiant.edit"));
                permissions.add(new Permission("Etudiant.list"));
                permissions.add(new Permission("Etudiant.view"));
                permissions.add(new Permission("Etudiant.add"));
                permissions.add(new Permission("Etudiant.delete"));
                permissions.add(new Permission("DossierMedicaleTag.edit"));
                permissions.add(new Permission("DossierMedicaleTag.list"));
                permissions.add(new Permission("DossierMedicaleTag.view"));
                permissions.add(new Permission("DossierMedicaleTag.add"));
                permissions.add(new Permission("DossierMedicaleTag.delete"));
                permissions.add(new Permission("Ville.edit"));
                permissions.add(new Permission("Ville.list"));
                permissions.add(new Permission("Ville.view"));
                permissions.add(new Permission("Ville.add"));
                permissions.add(new Permission("Ville.delete"));
                permissions.add(new Permission("PhaseImage.edit"));
                permissions.add(new Permission("PhaseImage.list"));
                permissions.add(new Permission("PhaseImage.view"));
                permissions.add(new Permission("PhaseImage.add"));
                permissions.add(new Permission("PhaseImage.delete"));
            }


            }


