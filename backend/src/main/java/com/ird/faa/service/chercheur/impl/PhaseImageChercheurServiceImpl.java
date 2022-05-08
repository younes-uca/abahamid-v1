package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.PhaseImage;
import com.ird.faa.dao.PhaseImageDao;
import com.ird.faa.service.chercheur.facade.PhaseImageChercheurService;

import com.ird.faa.ws.rest.provided.vo.PhaseImageVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class PhaseImageChercheurServiceImpl extends AbstractServiceImpl<PhaseImage> implements PhaseImageChercheurService {

@Autowired
private PhaseImageDao phaseImageDao;



@Autowired
private EntityManager entityManager;


@Override
public List<PhaseImage> findAll(){
        return phaseImageDao.findAll();
}
    @Override
    public PhaseImage findByCode(String code){
    if( code==null) return null;
    return phaseImageDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return phaseImageDao.deleteByCode(code);
    }
    @Override
    public PhaseImage findByIdOrCode(PhaseImage phaseImage){
        PhaseImage resultat=null;
        if(phaseImage != null){
            if(StringUtil.isNotEmpty(phaseImage.getId())){
            resultat= phaseImageDao.getOne(phaseImage.getId());
            }else if(StringUtil.isNotEmpty(phaseImage.getCode())) {
            resultat= phaseImageDao.findByCode(phaseImage.getCode());
            }
        }
    return resultat;
    }

@Override
public PhaseImage findById(Long id){
if(id==null) return null;
return phaseImageDao.getOne(id);
}

@Override
public PhaseImage findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(phaseImageDao.findById(id).isPresent())  {
phaseImageDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public PhaseImage update(PhaseImage phaseImage){
PhaseImage foundedPhaseImage = findById(phaseImage.getId());
if(foundedPhaseImage==null) return null;
else{
return  phaseImageDao.save(phaseImage);
}
}

@Override
public PhaseImage save (PhaseImage phaseImage){

PhaseImage result =null;
    PhaseImage foundedPhaseImage = findByCode(phaseImage.getCode());
   if(foundedPhaseImage == null){



PhaseImage savedPhaseImage = phaseImageDao.save(phaseImage);

result = savedPhaseImage;
   }

return result;
}

@Override
public List<PhaseImage> save(List<PhaseImage> phaseImages){
List<PhaseImage> list = new ArrayList<>();
for(PhaseImage phaseImage: phaseImages){
list.add(save(phaseImage));
}
return list;
}



@Override
@Transactional
public int delete(PhaseImage phaseImage){
    if(phaseImage.getCode()==null) return -1;

    PhaseImage foundedPhaseImage = findByCode(phaseImage.getCode());
    if(foundedPhaseImage==null) return -1;
phaseImageDao.delete(foundedPhaseImage);
return 1;
}


public List<PhaseImage> findByCriteria(PhaseImageVo phaseImageVo){

String query = "SELECT o FROM PhaseImage o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",phaseImageVo.getId());
            query += SearchUtil.addConstraint( "o", "code","LIKE",phaseImageVo.getCode());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",phaseImageVo.getLibelle());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<PhaseImage> phaseImages){
        if(ListUtil.isNotEmpty(phaseImages)){
        phaseImages.forEach(e->phaseImageDao.delete(e));
        }
}
@Override
public void update(List<PhaseImage> phaseImages){
if(ListUtil.isNotEmpty(phaseImages)){
phaseImages.forEach(e->phaseImageDao.save(e));
}
}



}
