package com.ird.faa.service.etudiant.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.CompteRendu;
import com.ird.faa.bean.DossierMedicale;
import com.ird.faa.dao.CompteRenduDao;
import com.ird.faa.service.etudiant.facade.CompteRenduEtudiantService;
import com.ird.faa.service.etudiant.facade.DossierMedicaleEtudiantService;

import com.ird.faa.ws.rest.provided.vo.CompteRenduVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class CompteRenduEtudiantServiceImpl extends AbstractServiceImpl<CompteRendu> implements CompteRenduEtudiantService {

@Autowired
private CompteRenduDao compteRenduDao;

        @Autowired
        private DossierMedicaleEtudiantService dossierMedicaleService ;


@Autowired
private EntityManager entityManager;


@Override
public List<CompteRendu> findAll(){
        String query = "SELECT o FROM CompteRendu o where 1=1 ";
        query+= " ORDER BY o.dateCompteR";
        return entityManager.createQuery(query).getResultList();
}

        @Override
        public List<CompteRendu> findByDossierMedicaleRef(String ref){
        return compteRenduDao.findByDossierMedicaleRef(ref);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleRef(String ref){
        return compteRenduDao.deleteByDossierMedicaleRef(ref);
        }

        @Override
        public List<CompteRendu> findByDossierMedicaleId(Long id){
        return compteRenduDao.findByDossierMedicaleId(id);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleId(Long id){
        return compteRenduDao.deleteByDossierMedicaleId(id);
        }


@Override
public CompteRendu findById(Long id){
if(id==null) return null;
return compteRenduDao.getOne(id);
}

@Override
public CompteRendu findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(compteRenduDao.findById(id).isPresent())  {
compteRenduDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public CompteRendu update(CompteRendu compteRendu){
CompteRendu foundedCompteRendu = findById(compteRendu.getId());
if(foundedCompteRendu==null) return null;
else{
return  compteRenduDao.save(compteRendu);
}
}

@Override
public CompteRendu save (CompteRendu compteRendu){



    findDossierMedicale(compteRendu);

return compteRenduDao.save(compteRendu);


}

@Override
public List<CompteRendu> save(List<CompteRendu> compteRendus){
List<CompteRendu> list = new ArrayList<>();
for(CompteRendu compteRendu: compteRendus){
list.add(save(compteRendu));
}
return list;
}



@Override
@Transactional
public int delete(CompteRendu compteRendu){
    if(compteRendu.getId()==null) return -1;
    CompteRendu foundedCompteRendu = findById(compteRendu.getId());
    if(foundedCompteRendu==null) return -1;
compteRenduDao.delete(foundedCompteRendu);
return 1;
}


public List<CompteRendu> findByCriteria(CompteRenduVo compteRenduVo){

String query = "SELECT o FROM CompteRendu o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",compteRenduVo.getId());
        query += SearchUtil.addConstraintDate( "o", "dateCompteR","=",compteRenduVo.getDateCompteR());
            query += SearchUtil.addConstraint( "o", "compteR","LIKE",compteRenduVo.getCompteR());
            query += SearchUtil.addConstraintMinMaxDate("o","dateCompteR",compteRenduVo.getDateCompteRMin(),compteRenduVo.getDateCompteRMax());
    if(compteRenduVo.getDossierMedicaleVo()!=null){
        query += SearchUtil.addConstraint( "o", "dossierMedicale.id","=",compteRenduVo.getDossierMedicaleVo().getId());
            query += SearchUtil.addConstraint( "o", "dossierMedicale.ref","LIKE",compteRenduVo.getDossierMedicaleVo().getRef());
    }

query+= " ORDER BY o.dateCompteR";
return entityManager.createQuery(query).getResultList();
}

    private void findDossierMedicale(CompteRendu compteRendu){
        DossierMedicale loadedDossierMedicale =dossierMedicaleService.findByIdOrRef(compteRendu.getDossierMedicale());

    if(loadedDossierMedicale==null ) {
        return;
    }
    compteRendu.setDossierMedicale(loadedDossierMedicale);
    }

@Override
@Transactional
public void delete(List<CompteRendu> compteRendus){
        if(ListUtil.isNotEmpty(compteRendus)){
        compteRendus.forEach(e->compteRenduDao.delete(e));
        }
}
@Override
public void update(List<CompteRendu> compteRendus){
if(ListUtil.isNotEmpty(compteRendus)){
compteRendus.forEach(e->compteRenduDao.save(e));
}
}



}
