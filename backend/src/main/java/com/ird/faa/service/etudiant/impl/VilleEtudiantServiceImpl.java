package com.ird.faa.service.etudiant.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Ville;
import com.ird.faa.dao.VilleDao;
import com.ird.faa.service.etudiant.facade.VilleEtudiantService;

import com.ird.faa.ws.rest.provided.vo.VilleVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class VilleEtudiantServiceImpl extends AbstractServiceImpl<Ville> implements VilleEtudiantService {

@Autowired
private VilleDao villeDao;



@Autowired
private EntityManager entityManager;


@Override
public List<Ville> findAll(){
        return villeDao.findAll();
}
    @Override
    public Ville findByCode(String code){
    if( code==null) return null;
    return villeDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return villeDao.deleteByCode(code);
    }
    @Override
    public Ville findByIdOrCode(Ville ville){
        Ville resultat=null;
        if(ville != null){
            if(StringUtil.isNotEmpty(ville.getId())){
            resultat= villeDao.getOne(ville.getId());
            }else if(StringUtil.isNotEmpty(ville.getCode())) {
            resultat= villeDao.findByCode(ville.getCode());
            }
        }
    return resultat;
    }

@Override
public Ville findById(Long id){
if(id==null) return null;
return villeDao.getOne(id);
}

@Override
public Ville findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(villeDao.findById(id).isPresent())  {
villeDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Ville update(Ville ville){
Ville foundedVille = findById(ville.getId());
if(foundedVille==null) return null;
else{
return  villeDao.save(ville);
}
}

@Override
public Ville save (Ville ville){

Ville result =null;
    Ville foundedVille = findByCode(ville.getCode());
   if(foundedVille == null){



Ville savedVille = villeDao.save(ville);

result = savedVille;
   }

return result;
}

@Override
public List<Ville> save(List<Ville> villes){
List<Ville> list = new ArrayList<>();
for(Ville ville: villes){
list.add(save(ville));
}
return list;
}



@Override
@Transactional
public int delete(Ville ville){
    if(ville.getCode()==null) return -1;

    Ville foundedVille = findByCode(ville.getCode());
    if(foundedVille==null) return -1;
villeDao.delete(foundedVille);
return 1;
}


public List<Ville> findByCriteria(VilleVo villeVo){

String query = "SELECT o FROM Ville o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",villeVo.getId());
            query += SearchUtil.addConstraint( "o", "code","LIKE",villeVo.getCode());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",villeVo.getLibelle());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<Ville> villes){
        if(ListUtil.isNotEmpty(villes)){
        villes.forEach(e->villeDao.delete(e));
        }
}
@Override
public void update(List<Ville> villes){
if(ListUtil.isNotEmpty(villes)){
villes.forEach(e->villeDao.save(e));
}
}



}
