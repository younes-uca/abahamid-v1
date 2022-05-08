package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Patient;
import com.ird.faa.bean.Ville;
import com.ird.faa.bean.Sexe;
import com.ird.faa.dao.PatientDao;
import com.ird.faa.service.chercheur.facade.PatientChercheurService;
import com.ird.faa.service.chercheur.facade.SexeChercheurService;
import com.ird.faa.service.chercheur.facade.VilleChercheurService;

import com.ird.faa.ws.rest.provided.vo.PatientVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class PatientChercheurServiceImpl extends AbstractServiceImpl<Patient> implements PatientChercheurService {

@Autowired
private PatientDao patientDao;

        @Autowired
        private SexeChercheurService sexeService ;
        @Autowired
        private VilleChercheurService villeService ;


@Autowired
private EntityManager entityManager;


@Override
public List<Patient> findAll(){
        return patientDao.findAll();
}

        @Override
        public List<Patient> findByVilleCode(String code){
        return patientDao.findByVilleCode(code);
        }

        @Override
        @Transactional
        public int deleteByVilleCode(String code){
        return patientDao.deleteByVilleCode(code);
        }

        @Override
        public List<Patient> findByVilleId(Long id){
        return patientDao.findByVilleId(id);
        }

        @Override
        @Transactional
        public int deleteByVilleId(Long id){
        return patientDao.deleteByVilleId(id);
        }


        @Override
        public List<Patient> findBySexeCode(String code){
        return patientDao.findBySexeCode(code);
        }

        @Override
        @Transactional
        public int deleteBySexeCode(String code){
        return patientDao.deleteBySexeCode(code);
        }

        @Override
        public List<Patient> findBySexeId(Long id){
        return patientDao.findBySexeId(id);
        }

        @Override
        @Transactional
        public int deleteBySexeId(Long id){
        return patientDao.deleteBySexeId(id);
        }

    @Override
    public Patient findByCin(String cin){
    if( cin==null) return null;
    return patientDao.findByCin(cin);
    }

    @Override
    @Transactional
    public int deleteByCin(String  cin) {
    return patientDao.deleteByCin(cin);
    }
    @Override
    public Patient findByIdOrCin(Patient patient){
        Patient resultat=null;
        if(patient != null){
            if(StringUtil.isNotEmpty(patient.getId())){
            resultat= patientDao.getOne(patient.getId());
            }else if(StringUtil.isNotEmpty(patient.getCin())) {
            resultat= patientDao.findByCin(patient.getCin());
            }
        }
    return resultat;
    }

@Override
public Patient findById(Long id){
if(id==null) return null;
return patientDao.getOne(id);
}

@Override
public Patient findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(patientDao.findById(id).isPresent())  {
patientDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Patient update(Patient patient){
Patient foundedPatient = findById(patient.getId());
if(foundedPatient==null) return null;
else{
return  patientDao.save(patient);
}
}

@Override
public Patient save (Patient patient){

Patient result =null;
    Patient foundedPatient = findByCin(patient.getCin());
   if(foundedPatient == null){


    findVille(patient);
    findSexe(patient);

Patient savedPatient = patientDao.save(patient);

result = savedPatient;
   }

return result;
}

@Override
public List<Patient> save(List<Patient> patients){
List<Patient> list = new ArrayList<>();
for(Patient patient: patients){
list.add(save(patient));
}
return list;
}



@Override
@Transactional
public int delete(Patient patient){
    if(patient.getCin()==null) return -1;

    Patient foundedPatient = findByCin(patient.getCin());
    if(foundedPatient==null) return -1;
patientDao.delete(foundedPatient);
return 1;
}


public List<Patient> findByCriteria(PatientVo patientVo){

String query = "SELECT o FROM Patient o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",patientVo.getId());
            query += SearchUtil.addConstraint( "o", "cin","LIKE",patientVo.getCin());
            query += SearchUtil.addConstraint( "o", "nom","LIKE",patientVo.getNom());
            query += SearchUtil.addConstraint( "o", "prenom","LIKE",patientVo.getPrenom());
        query += SearchUtil.addConstraintDate( "o", "dateDeNaissance","=",patientVo.getDateDeNaissance());
            query += SearchUtil.addConstraint( "o", "profession","LIKE",patientVo.getProfession());
            query += SearchUtil.addConstraint( "o", "adresse","LIKE",patientVo.getAdresse());
            query += SearchUtil.addConstraint( "o", "telephone","LIKE",patientVo.getTelephone());
            query += SearchUtil.addConstraintMinMaxDate("o","dateDeNaissance",patientVo.getDateDeNaissanceMin(),patientVo.getDateDeNaissanceMax());
    if(patientVo.getVilleVo()!=null){
        query += SearchUtil.addConstraint( "o", "ville.id","=",patientVo.getVilleVo().getId());
            query += SearchUtil.addConstraint( "o", "ville.code","LIKE",patientVo.getVilleVo().getCode());
    }

    if(patientVo.getSexeVo()!=null){
        query += SearchUtil.addConstraint( "o", "sexe.id","=",patientVo.getSexeVo().getId());
            query += SearchUtil.addConstraint( "o", "sexe.code","LIKE",patientVo.getSexeVo().getCode());
    }

return entityManager.createQuery(query).getResultList();
}

    private void findVille(Patient patient){
        Ville loadedVille =villeService.findByIdOrCode(patient.getVille());

    if(loadedVille==null ) {
        return;
    }
    patient.setVille(loadedVille);
    }
    private void findSexe(Patient patient){
        Sexe loadedSexe =sexeService.findByIdOrCode(patient.getSexe());

    if(loadedSexe==null ) {
        return;
    }
    patient.setSexe(loadedSexe);
    }

@Override
@Transactional
public void delete(List<Patient> patients){
        if(ListUtil.isNotEmpty(patients)){
        patients.forEach(e->patientDao.delete(e));
        }
}
@Override
public void update(List<Patient> patients){
if(ListUtil.isNotEmpty(patients)){
patients.forEach(e->patientDao.save(e));
}
}



}
