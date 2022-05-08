package com.ird.faa.service.medecin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Traitement;
import com.ird.faa.bean.RecueilDeDonnes;
import com.ird.faa.bean.Soin;
import com.ird.faa.dao.TraitementDao;
import com.ird.faa.service.medecin.facade.TraitementMedecinService;
import com.ird.faa.service.medecin.facade.RecueilDeDonnesMedecinService;
import com.ird.faa.service.medecin.facade.SoinMedecinService;

import com.ird.faa.ws.rest.provided.vo.TraitementVo;
import com.ird.faa.service.util.*;
import com.ird.faa.bean.Soin;
import com.ird.faa.service.medecin.facade.SoinMedecinService;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class TraitementMedecinServiceImpl extends AbstractServiceImpl<Traitement> implements TraitementMedecinService {

@Autowired
private TraitementDao traitementDao;

        @Autowired
        private RecueilDeDonnesMedecinService recueilDeDonnesService ;
        @Autowired
        private SoinMedecinService soinService ;


@Autowired
private EntityManager entityManager;


@Override
public List<Traitement> findAll(){
        return traitementDao.findAll();
}
        @Override
        public List<Traitement> findByRecueilDeDonnesId(Long id){
        return traitementDao.findByRecueilDeDonnesId(id);
        }

        @Override
        @Transactional
        public int deleteByRecueilDeDonnesId(Long id){
        return traitementDao.deleteByRecueilDeDonnesId(id);
        }


@Override
public Traitement findById(Long id){
if(id==null) return null;
return traitementDao.getOne(id);
}

@Override
public Traitement findByIdWithAssociatedList(Long id){
Traitement traitement  = findById(id);
findAssociatedLists(traitement);
return traitement;
}
private void findAssociatedLists(Traitement traitement){
if(traitement!=null && traitement.getId() != null) {
        List<Soin> soins = soinService.findByTraitementId(traitement.getId());
        traitement.setSoins(soins);
}
}
private void deleteAssociatedLists(Long id){
if(id != null ) {
        soinService.deleteByTraitementId(id);
}
}

    private void updateAssociatedLists(Traitement traitement){
    if(traitement !=null && traitement.getId() != null){
            List<List<Soin>> resultSoins= soinService.getToBeSavedAndToBeDeleted(soinService.findByTraitementId(traitement.getId()),traitement.getSoins());
            soinService.delete(resultSoins.get(1));
            associateSoin(traitement,resultSoins.get(0));
            soinService.update(resultSoins.get(0));

    }
    }

@Transactional
public int deleteById(Long id){
int res=0;
if(traitementDao.findById(id).isPresent())  {
deleteAssociatedLists(id);
traitementDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Traitement update(Traitement traitement){
Traitement foundedTraitement = findById(traitement.getId());
if(foundedTraitement==null) return null;
else{
    updateAssociatedLists(traitement);
return  traitementDao.save(traitement);
}
}

@Override
public Traitement save (Traitement traitement){

Traitement result =null;


    findRecueilDeDonnes(traitement);

Traitement savedTraitement = traitementDao.save(traitement);

       saveSoins(savedTraitement,traitement.getSoins());
result = savedTraitement;

return result;
}

@Override
public List<Traitement> save(List<Traitement> traitements){
List<Traitement> list = new ArrayList<>();
for(Traitement traitement: traitements){
list.add(save(traitement));
}
return list;
}

        private List<Soin> prepareSoins(Traitement traitement,List<Soin> soins){
        for(Soin soin:soins ){
        soin.setTraitement(traitement);
        }
        return soins;
        }


@Override
@Transactional
public int delete(Traitement traitement){
    if(traitement.getId()==null) return -1;
    Traitement foundedTraitement = findById(traitement.getId());
    if(foundedTraitement==null) return -1;
traitementDao.delete(foundedTraitement);
return 1;
}


public List<Traitement> findByCriteria(TraitementVo traitementVo){

String query = "SELECT o FROM Traitement o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",traitementVo.getId());
            query += SearchUtil.addConstraint( "o", "imageOrdonnance","LIKE",traitementVo.getImageOrdonnance());
            query += SearchUtil.addConstraint( "o", "dossierMedicaleRef","LIKE",traitementVo.getDossierMedicaleRef());
    if(traitementVo.getRecueilDeDonnesVo()!=null){
        query += SearchUtil.addConstraint( "o", "recueilDeDonnes.id","=",traitementVo.getRecueilDeDonnesVo().getId());
    }

return entityManager.createQuery(query).getResultList();
}
        private  void saveSoins(Traitement traitement,List<Soin> soins){

        if (ListUtil.isNotEmpty(traitement.getSoins())) {
        List<Soin> savedSoins = new ArrayList<>();
        soins.forEach(element -> {
        element.setTraitement(traitement);
         soinService.save(element);
        });
        traitement.setSoins(savedSoins);
        }
        }

    private void findRecueilDeDonnes(Traitement traitement){
        RecueilDeDonnes loadedRecueilDeDonnes = null;
        if(traitement.getRecueilDeDonnes() != null && traitement.getRecueilDeDonnes().getId() !=null)
        loadedRecueilDeDonnes =recueilDeDonnesService.findById(traitement.getRecueilDeDonnes().getId());

    if(loadedRecueilDeDonnes==null ) {
        return;
    }
    traitement.setRecueilDeDonnes(loadedRecueilDeDonnes);
    }

@Override
@Transactional
public void delete(List<Traitement> traitements){
        if(ListUtil.isNotEmpty(traitements)){
        traitements.forEach(e->traitementDao.delete(e));
        }
}
@Override
public void update(List<Traitement> traitements){
if(ListUtil.isNotEmpty(traitements)){
traitements.forEach(e->traitementDao.save(e));
}
}

private void associateSoin(Traitement traitement, List<Soin> soin) {
    if (ListUtil.isNotEmpty(soin)) {
        soin.forEach(e -> e.setTraitement(traitement));
    }
    }


}
