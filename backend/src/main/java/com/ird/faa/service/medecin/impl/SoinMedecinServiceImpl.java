package com.ird.faa.service.medecin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Soin;
import com.ird.faa.bean.Infirmier;
import com.ird.faa.bean.Traitement;
import com.ird.faa.dao.SoinDao;
import com.ird.faa.service.medecin.facade.SoinMedecinService;
import com.ird.faa.service.medecin.facade.TraitementMedecinService;
import com.ird.faa.service.medecin.facade.InfirmierMedecinService;

import com.ird.faa.ws.rest.provided.vo.SoinVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class SoinMedecinServiceImpl extends AbstractServiceImpl<Soin> implements SoinMedecinService {

@Autowired
private SoinDao soinDao;

        @Autowired
        private TraitementMedecinService traitementService ;
        @Autowired
        private InfirmierMedecinService infirmierService ;


@Autowired
private EntityManager entityManager;


@Override
public List<Soin> findAll(){
        String query = "SELECT o FROM Soin o where 1=1 ";
        query+= " ORDER BY o.dateSoin";
        return entityManager.createQuery(query).getResultList();
}

        @Override
        public List<Soin> findByInfirmierRef(String ref){
        return soinDao.findByInfirmierRef(ref);
        }

        @Override
        @Transactional
        public int deleteByInfirmierRef(String ref){
        return soinDao.deleteByInfirmierRef(ref);
        }

        @Override
        public List<Soin> findByInfirmierId(Long id){
        return soinDao.findByInfirmierId(id);
        }

        @Override
        @Transactional
        public int deleteByInfirmierId(Long id){
        return soinDao.deleteByInfirmierId(id);
        }

        @Override
        public List<Soin> findByTraitementId(Long id){
        return soinDao.findByTraitementId(id);
        }

        @Override
        @Transactional
        public int deleteByTraitementId(Long id){
        return soinDao.deleteByTraitementId(id);
        }


@Override
public Soin findById(Long id){
if(id==null) return null;
return soinDao.getOne(id);
}

@Override
public Soin findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(soinDao.findById(id).isPresent())  {
soinDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Soin update(Soin soin){
Soin foundedSoin = findById(soin.getId());
if(foundedSoin==null) return null;
else{
return  soinDao.save(soin);
}
}

@Override
public Soin save (Soin soin){



    findInfirmier(soin);
    findTraitement(soin);

return soinDao.save(soin);


}

@Override
public List<Soin> save(List<Soin> soins){
List<Soin> list = new ArrayList<>();
for(Soin soin: soins){
list.add(save(soin));
}
return list;
}



@Override
@Transactional
public int delete(Soin soin){
    if(soin.getId()==null) return -1;
    Soin foundedSoin = findById(soin.getId());
    if(foundedSoin==null) return -1;
soinDao.delete(foundedSoin);
return 1;
}


public List<Soin> findByCriteria(SoinVo soinVo){

String query = "SELECT o FROM Soin o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",soinVo.getId());
        query += SearchUtil.addConstraintDate( "o", "dateSoin","=",soinVo.getDateSoin());
            query += SearchUtil.addConstraint( "o", "soinsProd","LIKE",soinVo.getSoinsProd());
            query += SearchUtil.addConstraint( "o", "consigne","LIKE",soinVo.getConsigne());
            query += SearchUtil.addConstraintMinMaxDate("o","dateSoin",soinVo.getDateSoinMin(),soinVo.getDateSoinMax());
    if(soinVo.getInfirmierVo()!=null){
        query += SearchUtil.addConstraint( "o", "infirmier.id","=",soinVo.getInfirmierVo().getId());
            query += SearchUtil.addConstraint( "o", "infirmier.ref","LIKE",soinVo.getInfirmierVo().getRef());
    }

    if(soinVo.getTraitementVo()!=null){
        query += SearchUtil.addConstraint( "o", "traitement.id","=",soinVo.getTraitementVo().getId());
    }

query+= " ORDER BY o.dateSoin";
return entityManager.createQuery(query).getResultList();
}

    private void findInfirmier(Soin soin){
        Infirmier loadedInfirmier =infirmierService.findByIdOrRef(soin.getInfirmier());

    if(loadedInfirmier==null ) {
        return;
    }
    soin.setInfirmier(loadedInfirmier);
    }
    private void findTraitement(Soin soin){
        Traitement loadedTraitement = null;
        if(soin.getTraitement() != null && soin.getTraitement().getId() !=null)
        loadedTraitement =traitementService.findById(soin.getTraitement().getId());

    if(loadedTraitement==null ) {
        return;
    }
    soin.setTraitement(loadedTraitement);
    }

@Override
@Transactional
public void delete(List<Soin> soins){
        if(ListUtil.isNotEmpty(soins)){
        soins.forEach(e->soinDao.delete(e));
        }
}
@Override
public void update(List<Soin> soins){
if(ListUtil.isNotEmpty(soins)){
soins.forEach(e->soinDao.save(e));
}
}



}
