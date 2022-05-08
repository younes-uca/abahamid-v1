package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.EvoSuiv;
import com.ird.faa.bean.DossierMedicale;
import com.ird.faa.dao.EvoSuivDao;
import com.ird.faa.service.chercheur.facade.EvoSuivChercheurService;
import com.ird.faa.service.chercheur.facade.DossierMedicaleChercheurService;

import com.ird.faa.ws.rest.provided.vo.EvoSuivVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class EvoSuivChercheurServiceImpl extends AbstractServiceImpl<EvoSuiv> implements EvoSuivChercheurService {

@Autowired
private EvoSuivDao evoSuivDao;

        @Autowired
        private DossierMedicaleChercheurService dossierMedicaleService ;


@Autowired
private EntityManager entityManager;


@Override
public List<EvoSuiv> findAll(){
        String query = "SELECT o FROM EvoSuiv o where 1=1 ";
        query+= " ORDER BY o.dateEvoS";
        return entityManager.createQuery(query).getResultList();
}

        @Override
        public List<EvoSuiv> findByDossierMedicaleRef(String ref){
        return evoSuivDao.findByDossierMedicaleRef(ref);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleRef(String ref){
        return evoSuivDao.deleteByDossierMedicaleRef(ref);
        }

        @Override
        public List<EvoSuiv> findByDossierMedicaleId(Long id){
        return evoSuivDao.findByDossierMedicaleId(id);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleId(Long id){
        return evoSuivDao.deleteByDossierMedicaleId(id);
        }


@Override
public EvoSuiv findById(Long id){
if(id==null) return null;
return evoSuivDao.getOne(id);
}

@Override
public EvoSuiv findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(evoSuivDao.findById(id).isPresent())  {
evoSuivDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public EvoSuiv update(EvoSuiv evoSuiv){
EvoSuiv foundedEvoSuiv = findById(evoSuiv.getId());
if(foundedEvoSuiv==null) return null;
else{
return  evoSuivDao.save(evoSuiv);
}
}

@Override
public EvoSuiv save (EvoSuiv evoSuiv){



    findDossierMedicale(evoSuiv);

return evoSuivDao.save(evoSuiv);


}

@Override
public List<EvoSuiv> save(List<EvoSuiv> evoSuivs){
List<EvoSuiv> list = new ArrayList<>();
for(EvoSuiv evoSuiv: evoSuivs){
list.add(save(evoSuiv));
}
return list;
}



@Override
@Transactional
public int delete(EvoSuiv evoSuiv){
    if(evoSuiv.getId()==null) return -1;
    EvoSuiv foundedEvoSuiv = findById(evoSuiv.getId());
    if(foundedEvoSuiv==null) return -1;
evoSuivDao.delete(foundedEvoSuiv);
return 1;
}


public List<EvoSuiv> findByCriteria(EvoSuivVo evoSuivVo){

String query = "SELECT o FROM EvoSuiv o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",evoSuivVo.getId());
        query += SearchUtil.addConstraintDate( "o", "dateEvoS","=",evoSuivVo.getDateEvoS());
            query += SearchUtil.addConstraint( "o", "evoS","LIKE",evoSuivVo.getEvoS());
            query += SearchUtil.addConstraintMinMaxDate("o","dateEvoS",evoSuivVo.getDateEvoSMin(),evoSuivVo.getDateEvoSMax());
    if(evoSuivVo.getDossierMedicaleVo()!=null){
        query += SearchUtil.addConstraint( "o", "dossierMedicale.id","=",evoSuivVo.getDossierMedicaleVo().getId());
            query += SearchUtil.addConstraint( "o", "dossierMedicale.ref","LIKE",evoSuivVo.getDossierMedicaleVo().getRef());
    }

query+= " ORDER BY o.dateEvoS";
return entityManager.createQuery(query).getResultList();
}

    private void findDossierMedicale(EvoSuiv evoSuiv){
        DossierMedicale loadedDossierMedicale =dossierMedicaleService.findByIdOrRef(evoSuiv.getDossierMedicale());

    if(loadedDossierMedicale==null ) {
        return;
    }
    evoSuiv.setDossierMedicale(loadedDossierMedicale);
    }

@Override
@Transactional
public void delete(List<EvoSuiv> evoSuivs){
        if(ListUtil.isNotEmpty(evoSuivs)){
        evoSuivs.forEach(e->evoSuivDao.delete(e));
        }
}
@Override
public void update(List<EvoSuiv> evoSuivs){
if(ListUtil.isNotEmpty(evoSuivs)){
evoSuivs.forEach(e->evoSuivDao.save(e));
}
}



}
