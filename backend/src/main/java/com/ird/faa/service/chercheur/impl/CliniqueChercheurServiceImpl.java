package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Clinique;
import com.ird.faa.bean.DossierMedicale;
import com.ird.faa.dao.CliniqueDao;
import com.ird.faa.service.chercheur.facade.CliniqueChercheurService;
import com.ird.faa.service.chercheur.facade.DossierMedicaleChercheurService;

import com.ird.faa.ws.rest.provided.vo.CliniqueVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class CliniqueChercheurServiceImpl extends AbstractServiceImpl<Clinique> implements CliniqueChercheurService {

@Autowired
private CliniqueDao cliniqueDao;

        @Autowired
        private DossierMedicaleChercheurService dossierMedicaleService ;


@Autowired
private EntityManager entityManager;


@Override
public List<Clinique> findAll(){
        String query = "SELECT o FROM Clinique o where 1=1 ";
        query+= " ORDER BY o.dateClinique";
        return entityManager.createQuery(query).getResultList();
}

        @Override
        public List<Clinique> findByDossierMedicaleRef(String ref){
        return cliniqueDao.findByDossierMedicaleRef(ref);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleRef(String ref){
        return cliniqueDao.deleteByDossierMedicaleRef(ref);
        }

        @Override
        public List<Clinique> findByDossierMedicaleId(Long id){
        return cliniqueDao.findByDossierMedicaleId(id);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleId(Long id){
        return cliniqueDao.deleteByDossierMedicaleId(id);
        }


@Override
public Clinique findById(Long id){
if(id==null) return null;
return cliniqueDao.getOne(id);
}

@Override
public Clinique findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(cliniqueDao.findById(id).isPresent())  {
cliniqueDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Clinique update(Clinique clinique){
Clinique foundedClinique = findById(clinique.getId());
if(foundedClinique==null) return null;
else{
return  cliniqueDao.save(clinique);
}
}

@Override
public Clinique save (Clinique clinique){



    findDossierMedicale(clinique);

return cliniqueDao.save(clinique);


}

@Override
public List<Clinique> save(List<Clinique> cliniques){
List<Clinique> list = new ArrayList<>();
for(Clinique clinique: cliniques){
list.add(save(clinique));
}
return list;
}



@Override
@Transactional
public int delete(Clinique clinique){
    if(clinique.getId()==null) return -1;
    Clinique foundedClinique = findById(clinique.getId());
    if(foundedClinique==null) return -1;
cliniqueDao.delete(foundedClinique);
return 1;
}


public List<Clinique> findByCriteria(CliniqueVo cliniqueVo){

String query = "SELECT o FROM Clinique o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",cliniqueVo.getId());
        query += SearchUtil.addConstraintDate( "o", "dateClinique","=",cliniqueVo.getDateClinique());
            query += SearchUtil.addConstraint( "o", "antecedentsPersonnels","LIKE",cliniqueVo.getAntecedentsPersonnels());
            query += SearchUtil.addConstraint( "o", "antecedentsFamiliaux","LIKE",cliniqueVo.getAntecedentsFamiliaux());
            query += SearchUtil.addConstraint( "o", "histoireMaladie","LIKE",cliniqueVo.getHistoireMaladie());
            query += SearchUtil.addConstraint( "o", "examenClinique","LIKE",cliniqueVo.getExamenClinique());
            query += SearchUtil.addConstraint( "o", "conclusionClinique","LIKE",cliniqueVo.getConclusionClinique());
            query += SearchUtil.addConstraintMinMaxDate("o","dateClinique",cliniqueVo.getDateCliniqueMin(),cliniqueVo.getDateCliniqueMax());
    if(cliniqueVo.getDossierMedicaleVo()!=null){
        query += SearchUtil.addConstraint( "o", "dossierMedicale.id","=",cliniqueVo.getDossierMedicaleVo().getId());
            query += SearchUtil.addConstraint( "o", "dossierMedicale.ref","LIKE",cliniqueVo.getDossierMedicaleVo().getRef());
    }

query+= " ORDER BY o.dateClinique";
return entityManager.createQuery(query).getResultList();
}

    private void findDossierMedicale(Clinique clinique){
        DossierMedicale loadedDossierMedicale =dossierMedicaleService.findByIdOrRef(clinique.getDossierMedicale());

    if(loadedDossierMedicale==null ) {
        return;
    }
    clinique.setDossierMedicale(loadedDossierMedicale);
    }

@Override
@Transactional
public void delete(List<Clinique> cliniques){
        if(ListUtil.isNotEmpty(cliniques)){
        cliniques.forEach(e->cliniqueDao.delete(e));
        }
}
@Override
public void update(List<Clinique> cliniques){
if(ListUtil.isNotEmpty(cliniques)){
cliniques.forEach(e->cliniqueDao.save(e));
}
}



}
