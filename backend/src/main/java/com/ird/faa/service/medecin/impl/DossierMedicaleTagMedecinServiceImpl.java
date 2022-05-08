package com.ird.faa.service.medecin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.DossierMedicaleTag;
import com.ird.faa.bean.Tag;
import com.ird.faa.bean.DossierMedicale;
import com.ird.faa.dao.DossierMedicaleTagDao;
import com.ird.faa.service.medecin.facade.DossierMedicaleTagMedecinService;
import com.ird.faa.service.medecin.facade.TagMedecinService;
import com.ird.faa.service.medecin.facade.DossierMedicaleMedecinService;

import com.ird.faa.ws.rest.provided.vo.DossierMedicaleTagVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class DossierMedicaleTagMedecinServiceImpl extends AbstractServiceImpl<DossierMedicaleTag> implements DossierMedicaleTagMedecinService {

@Autowired
private DossierMedicaleTagDao dossierMedicaleTagDao;

        @Autowired
        private TagMedecinService tagService ;
        @Autowired
        private DossierMedicaleMedecinService dossierMedicaleService ;


@Autowired
private EntityManager entityManager;


@Override
public List<DossierMedicaleTag> findAll(){
        return dossierMedicaleTagDao.findAll();
}

        @Override
        public List<DossierMedicaleTag> findByTagReference(String reference){
        return dossierMedicaleTagDao.findByTagReference(reference);
        }

        @Override
        @Transactional
        public int deleteByTagReference(String reference){
        return dossierMedicaleTagDao.deleteByTagReference(reference);
        }

        @Override
        public List<DossierMedicaleTag> findByTagId(Long id){
        return dossierMedicaleTagDao.findByTagId(id);
        }

        @Override
        @Transactional
        public int deleteByTagId(Long id){
        return dossierMedicaleTagDao.deleteByTagId(id);
        }


        @Override
        public List<DossierMedicaleTag> findByDossierMedicaleRef(String ref){
        return dossierMedicaleTagDao.findByDossierMedicaleRef(ref);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleRef(String ref){
        return dossierMedicaleTagDao.deleteByDossierMedicaleRef(ref);
        }

        @Override
        public List<DossierMedicaleTag> findByDossierMedicaleId(Long id){
        return dossierMedicaleTagDao.findByDossierMedicaleId(id);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleId(Long id){
        return dossierMedicaleTagDao.deleteByDossierMedicaleId(id);
        }


@Override
public DossierMedicaleTag findById(Long id){
if(id==null) return null;
return dossierMedicaleTagDao.getOne(id);
}

@Override
public DossierMedicaleTag findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(dossierMedicaleTagDao.findById(id).isPresent())  {
dossierMedicaleTagDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public DossierMedicaleTag update(DossierMedicaleTag dossierMedicaleTag){
DossierMedicaleTag foundedDossierMedicaleTag = findById(dossierMedicaleTag.getId());
if(foundedDossierMedicaleTag==null) return null;
else{
return  dossierMedicaleTagDao.save(dossierMedicaleTag);
}
}

@Override
public DossierMedicaleTag save (DossierMedicaleTag dossierMedicaleTag){



    findTag(dossierMedicaleTag);
    findDossierMedicale(dossierMedicaleTag);

return dossierMedicaleTagDao.save(dossierMedicaleTag);


}

@Override
public List<DossierMedicaleTag> save(List<DossierMedicaleTag> dossierMedicaleTags){
List<DossierMedicaleTag> list = new ArrayList<>();
for(DossierMedicaleTag dossierMedicaleTag: dossierMedicaleTags){
list.add(save(dossierMedicaleTag));
}
return list;
}



@Override
@Transactional
public int delete(DossierMedicaleTag dossierMedicaleTag){
    if(dossierMedicaleTag.getId()==null) return -1;
    DossierMedicaleTag foundedDossierMedicaleTag = findById(dossierMedicaleTag.getId());
    if(foundedDossierMedicaleTag==null) return -1;
dossierMedicaleTagDao.delete(foundedDossierMedicaleTag);
return 1;
}


public List<DossierMedicaleTag> findByCriteria(DossierMedicaleTagVo dossierMedicaleTagVo){

String query = "SELECT o FROM DossierMedicaleTag o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",dossierMedicaleTagVo.getId());
    if(dossierMedicaleTagVo.getTagVo()!=null){
        query += SearchUtil.addConstraint( "o", "tag.id","=",dossierMedicaleTagVo.getTagVo().getId());
            query += SearchUtil.addConstraint( "o", "tag.reference","LIKE",dossierMedicaleTagVo.getTagVo().getReference());
    }

    if(dossierMedicaleTagVo.getDossierMedicaleVo()!=null){
        query += SearchUtil.addConstraint( "o", "dossierMedicale.id","=",dossierMedicaleTagVo.getDossierMedicaleVo().getId());
            query += SearchUtil.addConstraint( "o", "dossierMedicale.ref","LIKE",dossierMedicaleTagVo.getDossierMedicaleVo().getRef());
    }

return entityManager.createQuery(query).getResultList();
}

    private void findTag(DossierMedicaleTag dossierMedicaleTag){
        Tag loadedTag =tagService.findByIdOrReference(dossierMedicaleTag.getTag());

    if(loadedTag==null ) {
        return;
    }
    dossierMedicaleTag.setTag(loadedTag);
    }
    private void findDossierMedicale(DossierMedicaleTag dossierMedicaleTag){
        DossierMedicale loadedDossierMedicale =dossierMedicaleService.findByIdOrRef(dossierMedicaleTag.getDossierMedicale());

    if(loadedDossierMedicale==null ) {
        return;
    }
    dossierMedicaleTag.setDossierMedicale(loadedDossierMedicale);
    }

@Override
@Transactional
public void delete(List<DossierMedicaleTag> dossierMedicaleTags){
        if(ListUtil.isNotEmpty(dossierMedicaleTags)){
        dossierMedicaleTags.forEach(e->dossierMedicaleTagDao.delete(e));
        }
}
@Override
public void update(List<DossierMedicaleTag> dossierMedicaleTags){
if(ListUtil.isNotEmpty(dossierMedicaleTags)){
dossierMedicaleTags.forEach(e->dossierMedicaleTagDao.save(e));
}
}



}
