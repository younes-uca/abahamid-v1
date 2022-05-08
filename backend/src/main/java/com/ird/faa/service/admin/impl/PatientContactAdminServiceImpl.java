package com.ird.faa.service.admin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.PatientContact;
import com.ird.faa.bean.Relation;
import com.ird.faa.dao.PatientContactDao;
import com.ird.faa.service.admin.facade.PatientContactAdminService;
import com.ird.faa.service.admin.facade.RelationAdminService;

import com.ird.faa.ws.rest.provided.vo.PatientContactVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class PatientContactAdminServiceImpl extends AbstractServiceImpl<PatientContact> implements PatientContactAdminService {

@Autowired
private PatientContactDao patientContactDao;

        @Autowired
        private RelationAdminService relationService ;


@Autowired
private EntityManager entityManager;


@Override
public List<PatientContact> findAll(){
        return patientContactDao.findAll();
}

        @Override
        public List<PatientContact> findByRelationCode(String code){
        return patientContactDao.findByRelationCode(code);
        }

        @Override
        @Transactional
        public int deleteByRelationCode(String code){
        return patientContactDao.deleteByRelationCode(code);
        }

        @Override
        public List<PatientContact> findByRelationId(Long id){
        return patientContactDao.findByRelationId(id);
        }

        @Override
        @Transactional
        public int deleteByRelationId(Long id){
        return patientContactDao.deleteByRelationId(id);
        }

    @Override
    public PatientContact findByRef(String ref){
    if( ref==null) return null;
    return patientContactDao.findByRef(ref);
    }

    @Override
    @Transactional
    public int deleteByRef(String  ref) {
    return patientContactDao.deleteByRef(ref);
    }
    @Override
    public PatientContact findByIdOrRef(PatientContact patientContact){
        PatientContact resultat=null;
        if(patientContact != null){
            if(StringUtil.isNotEmpty(patientContact.getId())){
            resultat= patientContactDao.getOne(patientContact.getId());
            }else if(StringUtil.isNotEmpty(patientContact.getRef())) {
            resultat= patientContactDao.findByRef(patientContact.getRef());
            }
        }
    return resultat;
    }

@Override
public PatientContact findById(Long id){
if(id==null) return null;
return patientContactDao.getOne(id);
}

@Override
public PatientContact findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(patientContactDao.findById(id).isPresent())  {
patientContactDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public PatientContact update(PatientContact patientContact){
PatientContact foundedPatientContact = findById(patientContact.getId());
if(foundedPatientContact==null) return null;
else{
return  patientContactDao.save(patientContact);
}
}

@Override
public PatientContact save (PatientContact patientContact){

PatientContact result =null;
    PatientContact foundedPatientContact = findByRef(patientContact.getRef());
   if(foundedPatientContact == null){


    findRelation(patientContact);

PatientContact savedPatientContact = patientContactDao.save(patientContact);

result = savedPatientContact;
   }

return result;
}

@Override
public List<PatientContact> save(List<PatientContact> patientContacts){
List<PatientContact> list = new ArrayList<>();
for(PatientContact patientContact: patientContacts){
list.add(save(patientContact));
}
return list;
}



@Override
@Transactional
public int delete(PatientContact patientContact){
    if(patientContact.getRef()==null) return -1;

    PatientContact foundedPatientContact = findByRef(patientContact.getRef());
    if(foundedPatientContact==null) return -1;
patientContactDao.delete(foundedPatientContact);
return 1;
}


public List<PatientContact> findByCriteria(PatientContactVo patientContactVo){

String query = "SELECT o FROM PatientContact o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",patientContactVo.getId());
            query += SearchUtil.addConstraint( "o", "ref","LIKE",patientContactVo.getRef());
            query += SearchUtil.addConstraint( "o", "nom","LIKE",patientContactVo.getNom());
            query += SearchUtil.addConstraint( "o", "prenom","LIKE",patientContactVo.getPrenom());
            query += SearchUtil.addConstraint( "o", "adresse","LIKE",patientContactVo.getAdresse());
            query += SearchUtil.addConstraint( "o", "telephone","LIKE",patientContactVo.getTelephone());
            query += SearchUtil.addConstraint( "o", "mail","LIKE",patientContactVo.getMail());
    if(patientContactVo.getRelationVo()!=null){
        query += SearchUtil.addConstraint( "o", "relation.id","=",patientContactVo.getRelationVo().getId());
            query += SearchUtil.addConstraint( "o", "relation.code","LIKE",patientContactVo.getRelationVo().getCode());
    }

return entityManager.createQuery(query).getResultList();
}

    private void findRelation(PatientContact patientContact){
        Relation loadedRelation =relationService.findByIdOrCode(patientContact.getRelation());

    if(loadedRelation==null ) {
        return;
    }
    patientContact.setRelation(loadedRelation);
    }

@Override
@Transactional
public void delete(List<PatientContact> patientContacts){
        if(ListUtil.isNotEmpty(patientContacts)){
        patientContacts.forEach(e->patientContactDao.delete(e));
        }
}
@Override
public void update(List<PatientContact> patientContacts){
if(ListUtil.isNotEmpty(patientContacts)){
patientContacts.forEach(e->patientContactDao.save(e));
}
}



}
