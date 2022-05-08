package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.DossierMedicale;
import com.ird.faa.bean.Patient;
import com.ird.faa.bean.PatientContact;
import com.ird.faa.bean.Traitement;
import com.ird.faa.bean.Diagnostic;
import com.ird.faa.bean.Clinique;
import com.ird.faa.bean.Biologie;
import com.ird.faa.bean.Imagerie;
import com.ird.faa.bean.CompteRendu;
import com.ird.faa.bean.EvoSuiv;
import com.ird.faa.bean.DossierMedicaleTag;
import com.ird.faa.dao.DossierMedicaleDao;
import com.ird.faa.service.chercheur.facade.DossierMedicaleChercheurService;
import com.ird.faa.service.chercheur.facade.PatientContactChercheurService;
import com.ird.faa.service.chercheur.facade.EvoSuivChercheurService;
import com.ird.faa.service.chercheur.facade.CompteRenduChercheurService;
import com.ird.faa.service.chercheur.facade.TraitementChercheurService;
import com.ird.faa.service.chercheur.facade.DossierMedicaleTagChercheurService;
import com.ird.faa.service.chercheur.facade.PatientChercheurService;
import com.ird.faa.service.chercheur.facade.DiagnosticChercheurService;
import com.ird.faa.service.chercheur.facade.CliniqueChercheurService;
import com.ird.faa.service.chercheur.facade.BiologieChercheurService;
import com.ird.faa.service.chercheur.facade.ImagerieChercheurService;

import com.ird.faa.ws.rest.provided.vo.DossierMedicaleVo;
import com.ird.faa.service.util.*;
import com.ird.faa.bean.Diagnostic;
import com.ird.faa.service.chercheur.facade.DiagnosticChercheurService;
import com.ird.faa.bean.Clinique;
import com.ird.faa.service.chercheur.facade.CliniqueChercheurService;
import com.ird.faa.bean.Biologie;
import com.ird.faa.service.chercheur.facade.BiologieChercheurService;
import com.ird.faa.bean.Imagerie;
import com.ird.faa.service.chercheur.facade.ImagerieChercheurService;
import com.ird.faa.bean.CompteRendu;
import com.ird.faa.service.chercheur.facade.CompteRenduChercheurService;
import com.ird.faa.bean.EvoSuiv;
import com.ird.faa.service.chercheur.facade.EvoSuivChercheurService;
import com.ird.faa.bean.DossierMedicaleTag;
import com.ird.faa.service.chercheur.facade.DossierMedicaleTagChercheurService;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class DossierMedicaleChercheurServiceImpl extends AbstractServiceImpl<DossierMedicale> implements DossierMedicaleChercheurService {

@Autowired
private DossierMedicaleDao dossierMedicaleDao;

        @Autowired
        private PatientContactChercheurService patientContactService ;
        @Autowired
        private EvoSuivChercheurService evoSuivService ;
        @Autowired
        private CompteRenduChercheurService compteRenduService ;
        @Autowired
        private TraitementChercheurService traitementService ;
        @Autowired
        private DossierMedicaleTagChercheurService dossierMedicaleTagService ;
        @Autowired
        private PatientChercheurService patientService ;
        @Autowired
        private DiagnosticChercheurService diagnosticService ;
        @Autowired
        private CliniqueChercheurService cliniqueService ;
        @Autowired
        private BiologieChercheurService biologieService ;
        @Autowired
        private ImagerieChercheurService imagerieService ;


@Autowired
private EntityManager entityManager;


@Override
public List<DossierMedicale> findAll(){
        return dossierMedicaleDao.findAll();
}

        @Override
        public List<DossierMedicale> findByPatientCin(String cin){
        return dossierMedicaleDao.findByPatientCin(cin);
        }

        @Override
        @Transactional
        public int deleteByPatientCin(String cin){
        return dossierMedicaleDao.deleteByPatientCin(cin);
        }

        @Override
        public List<DossierMedicale> findByPatientId(Long id){
        return dossierMedicaleDao.findByPatientId(id);
        }

        @Override
        @Transactional
        public int deleteByPatientId(Long id){
        return dossierMedicaleDao.deleteByPatientId(id);
        }


        @Override
        public List<DossierMedicale> findByPatientContactRef(String ref){
        return dossierMedicaleDao.findByPatientContactRef(ref);
        }

        @Override
        @Transactional
        public int deleteByPatientContactRef(String ref){
        return dossierMedicaleDao.deleteByPatientContactRef(ref);
        }

        @Override
        public List<DossierMedicale> findByPatientContactId(Long id){
        return dossierMedicaleDao.findByPatientContactId(id);
        }

        @Override
        @Transactional
        public int deleteByPatientContactId(Long id){
        return dossierMedicaleDao.deleteByPatientContactId(id);
        }

        @Override
        public List<DossierMedicale> findByTraitementId(Long id){
        return dossierMedicaleDao.findByTraitementId(id);
        }

        @Override
        @Transactional
        public int deleteByTraitementId(Long id){
        return dossierMedicaleDao.deleteByTraitementId(id);
        }

    @Override
    public DossierMedicale findByRef(String ref){
    if( ref==null) return null;
    return dossierMedicaleDao.findByRef(ref);
    }

    @Override
    @Transactional
    public int deleteByRef(String  ref) {
    return dossierMedicaleDao.deleteByRef(ref);
    }
    @Override
    public DossierMedicale findByIdOrRef(DossierMedicale dossierMedicale){
        DossierMedicale resultat=null;
        if(dossierMedicale != null){
            if(StringUtil.isNotEmpty(dossierMedicale.getId())){
            resultat= dossierMedicaleDao.getOne(dossierMedicale.getId());
            }else if(StringUtil.isNotEmpty(dossierMedicale.getRef())) {
            resultat= dossierMedicaleDao.findByRef(dossierMedicale.getRef());
            }
        }
    return resultat;
    }

@Override
public DossierMedicale findById(Long id){
if(id==null) return null;
return dossierMedicaleDao.getOne(id);
}

@Override
public DossierMedicale findByIdWithAssociatedList(Long id){
DossierMedicale dossierMedicale  = findById(id);
findAssociatedLists(dossierMedicale);
return dossierMedicale;
}
private void findAssociatedLists(DossierMedicale dossierMedicale){
if(dossierMedicale!=null && dossierMedicale.getId() != null) {
        List<Diagnostic> diagnostics = diagnosticService.findByDossierMedicaleId(dossierMedicale.getId());
        dossierMedicale.setDiagnostics(diagnostics);
        List<Clinique> cliniques = cliniqueService.findByDossierMedicaleId(dossierMedicale.getId());
        dossierMedicale.setCliniques(cliniques);
        List<Biologie> biologies = biologieService.findByDossierMedicaleId(dossierMedicale.getId());
        dossierMedicale.setBiologies(biologies);
        List<Imagerie> imageries = imagerieService.findByDossierMedicaleId(dossierMedicale.getId());
        dossierMedicale.setImageries(imageries);
        List<CompteRendu> compteRendus = compteRenduService.findByDossierMedicaleId(dossierMedicale.getId());
        dossierMedicale.setCompteRendus(compteRendus);
        List<EvoSuiv> evoSuivs = evoSuivService.findByDossierMedicaleId(dossierMedicale.getId());
        dossierMedicale.setEvoSuivs(evoSuivs);
        List<DossierMedicaleTag> dossierMedicaleTags = dossierMedicaleTagService.findByDossierMedicaleId(dossierMedicale.getId());
        dossierMedicale.setDossierMedicaleTags(dossierMedicaleTags);
}
}
private void deleteAssociatedLists(Long id){
if(id != null ) {
        diagnosticService.deleteByDossierMedicaleId(id);
        cliniqueService.deleteByDossierMedicaleId(id);
        biologieService.deleteByDossierMedicaleId(id);
        imagerieService.deleteByDossierMedicaleId(id);
        compteRenduService.deleteByDossierMedicaleId(id);
        evoSuivService.deleteByDossierMedicaleId(id);
        dossierMedicaleTagService.deleteByDossierMedicaleId(id);
}
}

    private void updateAssociatedLists(DossierMedicale dossierMedicale){
    if(dossierMedicale !=null && dossierMedicale.getId() != null){
            List<List<Diagnostic>> resultDiagnostics= diagnosticService.getToBeSavedAndToBeDeleted(diagnosticService.findByDossierMedicaleId(dossierMedicale.getId()),dossierMedicale.getDiagnostics());
            diagnosticService.delete(resultDiagnostics.get(1));
            associateDiagnostic(dossierMedicale,resultDiagnostics.get(0));
            diagnosticService.update(resultDiagnostics.get(0));

            List<List<Clinique>> resultCliniques= cliniqueService.getToBeSavedAndToBeDeleted(cliniqueService.findByDossierMedicaleId(dossierMedicale.getId()),dossierMedicale.getCliniques());
            cliniqueService.delete(resultCliniques.get(1));
            associateClinique(dossierMedicale,resultCliniques.get(0));
            cliniqueService.update(resultCliniques.get(0));

            List<List<Biologie>> resultBiologies= biologieService.getToBeSavedAndToBeDeleted(biologieService.findByDossierMedicaleId(dossierMedicale.getId()),dossierMedicale.getBiologies());
            biologieService.delete(resultBiologies.get(1));
            associateBiologie(dossierMedicale,resultBiologies.get(0));
            biologieService.update(resultBiologies.get(0));

            List<List<Imagerie>> resultImageries= imagerieService.getToBeSavedAndToBeDeleted(imagerieService.findByDossierMedicaleId(dossierMedicale.getId()),dossierMedicale.getImageries());
            imagerieService.delete(resultImageries.get(1));
            associateImagerie(dossierMedicale,resultImageries.get(0));
            imagerieService.update(resultImageries.get(0));

            List<List<CompteRendu>> resultCompteRendus= compteRenduService.getToBeSavedAndToBeDeleted(compteRenduService.findByDossierMedicaleId(dossierMedicale.getId()),dossierMedicale.getCompteRendus());
            compteRenduService.delete(resultCompteRendus.get(1));
            associateCompteRendu(dossierMedicale,resultCompteRendus.get(0));
            compteRenduService.update(resultCompteRendus.get(0));

            List<List<EvoSuiv>> resultEvoSuivs= evoSuivService.getToBeSavedAndToBeDeleted(evoSuivService.findByDossierMedicaleId(dossierMedicale.getId()),dossierMedicale.getEvoSuivs());
            evoSuivService.delete(resultEvoSuivs.get(1));
            associateEvoSuiv(dossierMedicale,resultEvoSuivs.get(0));
            evoSuivService.update(resultEvoSuivs.get(0));

            List<List<DossierMedicaleTag>> resultDossierMedicaleTags= dossierMedicaleTagService.getToBeSavedAndToBeDeleted(dossierMedicaleTagService.findByDossierMedicaleId(dossierMedicale.getId()),dossierMedicale.getDossierMedicaleTags());
            dossierMedicaleTagService.delete(resultDossierMedicaleTags.get(1));
            associateDossierMedicaleTag(dossierMedicale,resultDossierMedicaleTags.get(0));
            dossierMedicaleTagService.update(resultDossierMedicaleTags.get(0));

    }
    }

@Transactional
public int deleteById(Long id){
int res=0;
if(dossierMedicaleDao.findById(id).isPresent())  {
deleteAssociatedLists(id);
dossierMedicaleDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public DossierMedicale update(DossierMedicale dossierMedicale){
DossierMedicale foundedDossierMedicale = findById(dossierMedicale.getId());
if(foundedDossierMedicale==null) return null;
else{
    updateAssociatedLists(dossierMedicale);
return  dossierMedicaleDao.save(dossierMedicale);
}
}

@Override
public DossierMedicale save (DossierMedicale dossierMedicale){

DossierMedicale result =null;
    DossierMedicale foundedDossierMedicale = findByRef(dossierMedicale.getRef());
   if(foundedDossierMedicale == null){


    findPatient(dossierMedicale);
    findPatientContact(dossierMedicale);
    findTraitement(dossierMedicale);

DossierMedicale savedDossierMedicale = dossierMedicaleDao.save(dossierMedicale);

       saveDiagnostics(savedDossierMedicale,dossierMedicale.getDiagnostics());
       saveCliniques(savedDossierMedicale,dossierMedicale.getCliniques());
       saveBiologies(savedDossierMedicale,dossierMedicale.getBiologies());
       saveImageries(savedDossierMedicale,dossierMedicale.getImageries());
       saveCompteRendus(savedDossierMedicale,dossierMedicale.getCompteRendus());
       saveEvoSuivs(savedDossierMedicale,dossierMedicale.getEvoSuivs());
       saveDossierMedicaleTags(savedDossierMedicale,dossierMedicale.getDossierMedicaleTags());
result = savedDossierMedicale;
   }

return result;
}

@Override
public List<DossierMedicale> save(List<DossierMedicale> dossierMedicales){
List<DossierMedicale> list = new ArrayList<>();
for(DossierMedicale dossierMedicale: dossierMedicales){
list.add(save(dossierMedicale));
}
return list;
}

        private List<Diagnostic> prepareDiagnostics(DossierMedicale dossierMedicale,List<Diagnostic> diagnostics){
        for(Diagnostic diagnostic:diagnostics ){
        diagnostic.setDossierMedicale(dossierMedicale);
        }
        return diagnostics;
        }
        private List<Clinique> prepareCliniques(DossierMedicale dossierMedicale,List<Clinique> cliniques){
        for(Clinique clinique:cliniques ){
        clinique.setDossierMedicale(dossierMedicale);
        }
        return cliniques;
        }
        private List<Biologie> prepareBiologies(DossierMedicale dossierMedicale,List<Biologie> biologies){
        for(Biologie biologie:biologies ){
        biologie.setDossierMedicale(dossierMedicale);
        }
        return biologies;
        }
        private List<Imagerie> prepareImageries(DossierMedicale dossierMedicale,List<Imagerie> imageries){
        for(Imagerie imagerie:imageries ){
        imagerie.setDossierMedicale(dossierMedicale);
        }
        return imageries;
        }
        private List<CompteRendu> prepareCompteRendus(DossierMedicale dossierMedicale,List<CompteRendu> compteRendus){
        for(CompteRendu compteRendu:compteRendus ){
        compteRendu.setDossierMedicale(dossierMedicale);
        }
        return compteRendus;
        }
        private List<EvoSuiv> prepareEvoSuivs(DossierMedicale dossierMedicale,List<EvoSuiv> evoSuivs){
        for(EvoSuiv evoSuiv:evoSuivs ){
        evoSuiv.setDossierMedicale(dossierMedicale);
        }
        return evoSuivs;
        }
        private List<DossierMedicaleTag> prepareDossierMedicaleTags(DossierMedicale dossierMedicale,List<DossierMedicaleTag> dossierMedicaleTags){
        for(DossierMedicaleTag dossierMedicaleTag:dossierMedicaleTags ){
        dossierMedicaleTag.setDossierMedicale(dossierMedicale);
        }
        return dossierMedicaleTags;
        }


@Override
@Transactional
public int delete(DossierMedicale dossierMedicale){
    if(dossierMedicale.getRef()==null) return -1;

    DossierMedicale foundedDossierMedicale = findByRef(dossierMedicale.getRef());
    if(foundedDossierMedicale==null) return -1;
dossierMedicaleDao.delete(foundedDossierMedicale);
return 1;
}


public List<DossierMedicale> findByCriteria(DossierMedicaleVo dossierMedicaleVo){

String query = "SELECT o FROM DossierMedicale o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",dossierMedicaleVo.getId());
            query += SearchUtil.addConstraint( "o", "ref","LIKE",dossierMedicaleVo.getRef());
    if(dossierMedicaleVo.getPatientVo()!=null){
        query += SearchUtil.addConstraint( "o", "patient.id","=",dossierMedicaleVo.getPatientVo().getId());
            query += SearchUtil.addConstraint( "o", "patient.cin","LIKE",dossierMedicaleVo.getPatientVo().getCin());
    }

    if(dossierMedicaleVo.getPatientContactVo()!=null){
        query += SearchUtil.addConstraint( "o", "patientContact.id","=",dossierMedicaleVo.getPatientContactVo().getId());
            query += SearchUtil.addConstraint( "o", "patientContact.ref","LIKE",dossierMedicaleVo.getPatientContactVo().getRef());
    }

    if(dossierMedicaleVo.getTraitementVo()!=null){
        query += SearchUtil.addConstraint( "o", "traitement.id","=",dossierMedicaleVo.getTraitementVo().getId());
    }

return entityManager.createQuery(query).getResultList();
}
        private  void saveDiagnostics(DossierMedicale dossierMedicale,List<Diagnostic> diagnostics){

        if (ListUtil.isNotEmpty(dossierMedicale.getDiagnostics())) {
        List<Diagnostic> savedDiagnostics = new ArrayList<>();
        diagnostics.forEach(element -> {
        element.setDossierMedicale(dossierMedicale);
         diagnosticService.save(element);
        });
        dossierMedicale.setDiagnostics(savedDiagnostics);
        }
        }
        private  void saveCliniques(DossierMedicale dossierMedicale,List<Clinique> cliniques){

        if (ListUtil.isNotEmpty(dossierMedicale.getCliniques())) {
        List<Clinique> savedCliniques = new ArrayList<>();
        cliniques.forEach(element -> {
        element.setDossierMedicale(dossierMedicale);
         cliniqueService.save(element);
        });
        dossierMedicale.setCliniques(savedCliniques);
        }
        }
        private  void saveBiologies(DossierMedicale dossierMedicale,List<Biologie> biologies){

        if (ListUtil.isNotEmpty(dossierMedicale.getBiologies())) {
        List<Biologie> savedBiologies = new ArrayList<>();
        biologies.forEach(element -> {
        element.setDossierMedicale(dossierMedicale);
         biologieService.save(element);
        });
        dossierMedicale.setBiologies(savedBiologies);
        }
        }
        private  void saveImageries(DossierMedicale dossierMedicale,List<Imagerie> imageries){

        if (ListUtil.isNotEmpty(dossierMedicale.getImageries())) {
        List<Imagerie> savedImageries = new ArrayList<>();
        imageries.forEach(element -> {
        element.setDossierMedicale(dossierMedicale);
         imagerieService.save(element);
        });
        dossierMedicale.setImageries(savedImageries);
        }
        }
        private  void saveCompteRendus(DossierMedicale dossierMedicale,List<CompteRendu> compteRendus){

        if (ListUtil.isNotEmpty(dossierMedicale.getCompteRendus())) {
        List<CompteRendu> savedCompteRendus = new ArrayList<>();
        compteRendus.forEach(element -> {
        element.setDossierMedicale(dossierMedicale);
         compteRenduService.save(element);
        });
        dossierMedicale.setCompteRendus(savedCompteRendus);
        }
        }
        private  void saveEvoSuivs(DossierMedicale dossierMedicale,List<EvoSuiv> evoSuivs){

        if (ListUtil.isNotEmpty(dossierMedicale.getEvoSuivs())) {
        List<EvoSuiv> savedEvoSuivs = new ArrayList<>();
        evoSuivs.forEach(element -> {
        element.setDossierMedicale(dossierMedicale);
         evoSuivService.save(element);
        });
        dossierMedicale.setEvoSuivs(savedEvoSuivs);
        }
        }
        private  void saveDossierMedicaleTags(DossierMedicale dossierMedicale,List<DossierMedicaleTag> dossierMedicaleTags){

        if (ListUtil.isNotEmpty(dossierMedicale.getDossierMedicaleTags())) {
        List<DossierMedicaleTag> savedDossierMedicaleTags = new ArrayList<>();
        dossierMedicaleTags.forEach(element -> {
        element.setDossierMedicale(dossierMedicale);
         dossierMedicaleTagService.save(element);
        });
        dossierMedicale.setDossierMedicaleTags(savedDossierMedicaleTags);
        }
        }

    private void findPatient(DossierMedicale dossierMedicale){
        Patient loadedPatient =patientService.findByIdOrCin(dossierMedicale.getPatient());

    if(loadedPatient==null ) {
        return;
    }
    dossierMedicale.setPatient(loadedPatient);
    }
    private void findPatientContact(DossierMedicale dossierMedicale){
        PatientContact loadedPatientContact =patientContactService.findByIdOrRef(dossierMedicale.getPatientContact());

    if(loadedPatientContact==null ) {
        return;
    }
    dossierMedicale.setPatientContact(loadedPatientContact);
    }
    private void findTraitement(DossierMedicale dossierMedicale){
        Traitement loadedTraitement = null;
        if(dossierMedicale.getTraitement() != null && dossierMedicale.getTraitement().getId() !=null)
        loadedTraitement =traitementService.findById(dossierMedicale.getTraitement().getId());

    if(loadedTraitement==null ) {
        return;
    }
    dossierMedicale.setTraitement(loadedTraitement);
    }

@Override
@Transactional
public void delete(List<DossierMedicale> dossierMedicales){
        if(ListUtil.isNotEmpty(dossierMedicales)){
        dossierMedicales.forEach(e->dossierMedicaleDao.delete(e));
        }
}
@Override
public void update(List<DossierMedicale> dossierMedicales){
if(ListUtil.isNotEmpty(dossierMedicales)){
dossierMedicales.forEach(e->dossierMedicaleDao.save(e));
}
}

private void associateDiagnostic(DossierMedicale dossierMedicale, List<Diagnostic> diagnostic) {
    if (ListUtil.isNotEmpty(diagnostic)) {
        diagnostic.forEach(e -> e.setDossierMedicale(dossierMedicale));
    }
    }
private void associateClinique(DossierMedicale dossierMedicale, List<Clinique> clinique) {
    if (ListUtil.isNotEmpty(clinique)) {
        clinique.forEach(e -> e.setDossierMedicale(dossierMedicale));
    }
    }
private void associateBiologie(DossierMedicale dossierMedicale, List<Biologie> biologie) {
    if (ListUtil.isNotEmpty(biologie)) {
        biologie.forEach(e -> e.setDossierMedicale(dossierMedicale));
    }
    }
private void associateImagerie(DossierMedicale dossierMedicale, List<Imagerie> imagerie) {
    if (ListUtil.isNotEmpty(imagerie)) {
        imagerie.forEach(e -> e.setDossierMedicale(dossierMedicale));
    }
    }
private void associateCompteRendu(DossierMedicale dossierMedicale, List<CompteRendu> compteRendu) {
    if (ListUtil.isNotEmpty(compteRendu)) {
        compteRendu.forEach(e -> e.setDossierMedicale(dossierMedicale));
    }
    }
private void associateEvoSuiv(DossierMedicale dossierMedicale, List<EvoSuiv> evoSuiv) {
    if (ListUtil.isNotEmpty(evoSuiv)) {
        evoSuiv.forEach(e -> e.setDossierMedicale(dossierMedicale));
    }
    }
private void associateDossierMedicaleTag(DossierMedicale dossierMedicale, List<DossierMedicaleTag> dossierMedicaleTag) {
    if (ListUtil.isNotEmpty(dossierMedicaleTag)) {
        dossierMedicaleTag.forEach(e -> e.setDossierMedicale(dossierMedicale));
    }
    }


}
