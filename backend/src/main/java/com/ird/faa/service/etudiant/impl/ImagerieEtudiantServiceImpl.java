package com.ird.faa.service.etudiant.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Imagerie;
import com.ird.faa.bean.TypeImage;
import com.ird.faa.bean.PhaseImage;
import com.ird.faa.bean.DossierMedicale;
import com.ird.faa.dao.ImagerieDao;
import com.ird.faa.service.etudiant.facade.ImagerieEtudiantService;
import com.ird.faa.service.etudiant.facade.DossierMedicaleEtudiantService;
import com.ird.faa.service.etudiant.facade.TypeImageEtudiantService;
import com.ird.faa.service.etudiant.facade.PhaseImageEtudiantService;

import com.ird.faa.ws.rest.provided.vo.ImagerieVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class ImagerieEtudiantServiceImpl extends AbstractServiceImpl<Imagerie> implements ImagerieEtudiantService {

@Autowired
private ImagerieDao imagerieDao;

        @Autowired
        private DossierMedicaleEtudiantService dossierMedicaleService ;
        @Autowired
        private TypeImageEtudiantService typeImageService ;
        @Autowired
        private PhaseImageEtudiantService phaseImageService ;


@Autowired
private EntityManager entityManager;


@Override
public List<Imagerie> findAll(){
        String query = "SELECT o FROM Imagerie o where 1=1 ";
        query+= " ORDER BY o.dateImagerie";
        return entityManager.createQuery(query).getResultList();
}

        @Override
        public List<Imagerie> findByTypeImageCode(String code){
        return imagerieDao.findByTypeImageCode(code);
        }

        @Override
        @Transactional
        public int deleteByTypeImageCode(String code){
        return imagerieDao.deleteByTypeImageCode(code);
        }

        @Override
        public List<Imagerie> findByTypeImageId(Long id){
        return imagerieDao.findByTypeImageId(id);
        }

        @Override
        @Transactional
        public int deleteByTypeImageId(Long id){
        return imagerieDao.deleteByTypeImageId(id);
        }


        @Override
        public List<Imagerie> findByPhaseImageCode(String code){
        return imagerieDao.findByPhaseImageCode(code);
        }

        @Override
        @Transactional
        public int deleteByPhaseImageCode(String code){
        return imagerieDao.deleteByPhaseImageCode(code);
        }

        @Override
        public List<Imagerie> findByPhaseImageId(Long id){
        return imagerieDao.findByPhaseImageId(id);
        }

        @Override
        @Transactional
        public int deleteByPhaseImageId(Long id){
        return imagerieDao.deleteByPhaseImageId(id);
        }


        @Override
        public List<Imagerie> findByDossierMedicaleRef(String ref){
        return imagerieDao.findByDossierMedicaleRef(ref);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleRef(String ref){
        return imagerieDao.deleteByDossierMedicaleRef(ref);
        }

        @Override
        public List<Imagerie> findByDossierMedicaleId(Long id){
        return imagerieDao.findByDossierMedicaleId(id);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleId(Long id){
        return imagerieDao.deleteByDossierMedicaleId(id);
        }


@Override
public Imagerie findById(Long id){
if(id==null) return null;
return imagerieDao.getOne(id);
}

@Override
public Imagerie findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(imagerieDao.findById(id).isPresent())  {
imagerieDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Imagerie update(Imagerie imagerie){
Imagerie foundedImagerie = findById(imagerie.getId());
if(foundedImagerie==null) return null;
else{
return  imagerieDao.save(imagerie);
}
}

@Override
public Imagerie save (Imagerie imagerie){



    findTypeImage(imagerie);
    findPhaseImage(imagerie);
    findDossierMedicale(imagerie);

return imagerieDao.save(imagerie);


}

@Override
public List<Imagerie> save(List<Imagerie> imageries){
List<Imagerie> list = new ArrayList<>();
for(Imagerie imagerie: imageries){
list.add(save(imagerie));
}
return list;
}



@Override
@Transactional
public int delete(Imagerie imagerie){
    if(imagerie.getId()==null) return -1;
    Imagerie foundedImagerie = findById(imagerie.getId());
    if(foundedImagerie==null) return -1;
imagerieDao.delete(foundedImagerie);
return 1;
}


public List<Imagerie> findByCriteria(ImagerieVo imagerieVo){

String query = "SELECT o FROM Imagerie o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",imagerieVo.getId());
        query += SearchUtil.addConstraintDate( "o", "dateImagerie","=",imagerieVo.getDateImagerie());
            query += SearchUtil.addConstraint( "o", "imageScan","LIKE",imagerieVo.getImageScan());
            query += SearchUtil.addConstraint( "o", "commanetaire","LIKE",imagerieVo.getCommanetaire());
            query += SearchUtil.addConstraintMinMaxDate("o","dateImagerie",imagerieVo.getDateImagerieMin(),imagerieVo.getDateImagerieMax());
    if(imagerieVo.getTypeImageVo()!=null){
        query += SearchUtil.addConstraint( "o", "typeImage.id","=",imagerieVo.getTypeImageVo().getId());
            query += SearchUtil.addConstraint( "o", "typeImage.code","LIKE",imagerieVo.getTypeImageVo().getCode());
    }

    if(imagerieVo.getPhaseImageVo()!=null){
        query += SearchUtil.addConstraint( "o", "phaseImage.id","=",imagerieVo.getPhaseImageVo().getId());
            query += SearchUtil.addConstraint( "o", "phaseImage.code","LIKE",imagerieVo.getPhaseImageVo().getCode());
    }

    if(imagerieVo.getDossierMedicaleVo()!=null){
        query += SearchUtil.addConstraint( "o", "dossierMedicale.id","=",imagerieVo.getDossierMedicaleVo().getId());
            query += SearchUtil.addConstraint( "o", "dossierMedicale.ref","LIKE",imagerieVo.getDossierMedicaleVo().getRef());
    }

query+= " ORDER BY o.dateImagerie";
return entityManager.createQuery(query).getResultList();
}

    private void findTypeImage(Imagerie imagerie){
        TypeImage loadedTypeImage =typeImageService.findByIdOrCode(imagerie.getTypeImage());

    if(loadedTypeImage==null ) {
        return;
    }
    imagerie.setTypeImage(loadedTypeImage);
    }
    private void findPhaseImage(Imagerie imagerie){
        PhaseImage loadedPhaseImage =phaseImageService.findByIdOrCode(imagerie.getPhaseImage());

    if(loadedPhaseImage==null ) {
        return;
    }
    imagerie.setPhaseImage(loadedPhaseImage);
    }
    private void findDossierMedicale(Imagerie imagerie){
        DossierMedicale loadedDossierMedicale =dossierMedicaleService.findByIdOrRef(imagerie.getDossierMedicale());

    if(loadedDossierMedicale==null ) {
        return;
    }
    imagerie.setDossierMedicale(loadedDossierMedicale);
    }

@Override
@Transactional
public void delete(List<Imagerie> imageries){
        if(ListUtil.isNotEmpty(imageries)){
        imageries.forEach(e->imagerieDao.delete(e));
        }
}
@Override
public void update(List<Imagerie> imageries){
if(ListUtil.isNotEmpty(imageries)){
imageries.forEach(e->imagerieDao.save(e));
}
}



}
