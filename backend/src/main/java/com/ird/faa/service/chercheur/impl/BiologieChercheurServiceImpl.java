package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Biologie;
import com.ird.faa.bean.Examen;
import com.ird.faa.bean.DossierMedicale;
import com.ird.faa.dao.BiologieDao;
import com.ird.faa.service.chercheur.facade.BiologieChercheurService;
import com.ird.faa.service.chercheur.facade.ExamenChercheurService;
import com.ird.faa.service.chercheur.facade.DossierMedicaleChercheurService;

import com.ird.faa.ws.rest.provided.vo.BiologieVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class BiologieChercheurServiceImpl extends AbstractServiceImpl<Biologie> implements BiologieChercheurService {

@Autowired
private BiologieDao biologieDao;

        @Autowired
        private ExamenChercheurService examenService ;
        @Autowired
        private DossierMedicaleChercheurService dossierMedicaleService ;


@Autowired
private EntityManager entityManager;


@Override
public List<Biologie> findAll(){
        String query = "SELECT o FROM Biologie o where 1=1 ";
        query+= " ORDER BY o.dateBiologie";
        return entityManager.createQuery(query).getResultList();
}

        @Override
        public List<Biologie> findByExamenCode(String code){
        return biologieDao.findByExamenCode(code);
        }

        @Override
        @Transactional
        public int deleteByExamenCode(String code){
        return biologieDao.deleteByExamenCode(code);
        }

        @Override
        public List<Biologie> findByExamenId(Long id){
        return biologieDao.findByExamenId(id);
        }

        @Override
        @Transactional
        public int deleteByExamenId(Long id){
        return biologieDao.deleteByExamenId(id);
        }


        @Override
        public List<Biologie> findByDossierMedicaleRef(String ref){
        return biologieDao.findByDossierMedicaleRef(ref);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleRef(String ref){
        return biologieDao.deleteByDossierMedicaleRef(ref);
        }

        @Override
        public List<Biologie> findByDossierMedicaleId(Long id){
        return biologieDao.findByDossierMedicaleId(id);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleId(Long id){
        return biologieDao.deleteByDossierMedicaleId(id);
        }


@Override
public Biologie findById(Long id){
if(id==null) return null;
return biologieDao.getOne(id);
}

@Override
public Biologie findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(biologieDao.findById(id).isPresent())  {
biologieDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Biologie update(Biologie biologie){
Biologie foundedBiologie = findById(biologie.getId());
if(foundedBiologie==null) return null;
else{
return  biologieDao.save(biologie);
}
}

@Override
public Biologie save (Biologie biologie){



    findExamen(biologie);
    findDossierMedicale(biologie);

return biologieDao.save(biologie);


}

@Override
public List<Biologie> save(List<Biologie> biologies){
List<Biologie> list = new ArrayList<>();
for(Biologie biologie: biologies){
list.add(save(biologie));
}
return list;
}



@Override
@Transactional
public int delete(Biologie biologie){
    if(biologie.getId()==null) return -1;
    Biologie foundedBiologie = findById(biologie.getId());
    if(foundedBiologie==null) return -1;
biologieDao.delete(foundedBiologie);
return 1;
}


public List<Biologie> findByCriteria(BiologieVo biologieVo){

String query = "SELECT o FROM Biologie o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",biologieVo.getId());
        query += SearchUtil.addConstraintDate( "o", "dateBiologie","=",biologieVo.getDateBiologie());
            query += SearchUtil.addConstraint( "o", "resultat","LIKE",biologieVo.getResultat());
            query += SearchUtil.addConstraintMinMaxDate("o","dateBiologie",biologieVo.getDateBiologieMin(),biologieVo.getDateBiologieMax());
    if(biologieVo.getExamenVo()!=null){
        query += SearchUtil.addConstraint( "o", "examen.id","=",biologieVo.getExamenVo().getId());
            query += SearchUtil.addConstraint( "o", "examen.code","LIKE",biologieVo.getExamenVo().getCode());
    }

    if(biologieVo.getDossierMedicaleVo()!=null){
        query += SearchUtil.addConstraint( "o", "dossierMedicale.id","=",biologieVo.getDossierMedicaleVo().getId());
            query += SearchUtil.addConstraint( "o", "dossierMedicale.ref","LIKE",biologieVo.getDossierMedicaleVo().getRef());
    }

query+= " ORDER BY o.dateBiologie";
return entityManager.createQuery(query).getResultList();
}

    private void findExamen(Biologie biologie){
        Examen loadedExamen =examenService.findByIdOrCode(biologie.getExamen());

    if(loadedExamen==null ) {
        return;
    }
    biologie.setExamen(loadedExamen);
    }
    private void findDossierMedicale(Biologie biologie){
        DossierMedicale loadedDossierMedicale =dossierMedicaleService.findByIdOrRef(biologie.getDossierMedicale());

    if(loadedDossierMedicale==null ) {
        return;
    }
    biologie.setDossierMedicale(loadedDossierMedicale);
    }

@Override
@Transactional
public void delete(List<Biologie> biologies){
        if(ListUtil.isNotEmpty(biologies)){
        biologies.forEach(e->biologieDao.delete(e));
        }
}
@Override
public void update(List<Biologie> biologies){
if(ListUtil.isNotEmpty(biologies)){
biologies.forEach(e->biologieDao.save(e));
}
}



}
