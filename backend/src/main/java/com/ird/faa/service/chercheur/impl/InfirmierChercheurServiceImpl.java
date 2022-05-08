package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Infirmier;
import com.ird.faa.dao.InfirmierDao;
import com.ird.faa.service.chercheur.facade.InfirmierChercheurService;

import com.ird.faa.ws.rest.provided.vo.InfirmierVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class InfirmierChercheurServiceImpl extends AbstractServiceImpl<Infirmier> implements InfirmierChercheurService {

@Autowired
private InfirmierDao infirmierDao;



@Autowired
private EntityManager entityManager;


@Override
public List<Infirmier> findAll(){
        return infirmierDao.findAll();
}
    @Override
    public Infirmier findByRef(String ref){
    if( ref==null) return null;
    return infirmierDao.findByRef(ref);
    }

    @Override
    @Transactional
    public int deleteByRef(String  ref) {
    return infirmierDao.deleteByRef(ref);
    }
    @Override
    public Infirmier findByIdOrRef(Infirmier infirmier){
        Infirmier resultat=null;
        if(infirmier != null){
            if(StringUtil.isNotEmpty(infirmier.getId())){
            resultat= infirmierDao.getOne(infirmier.getId());
            }else if(StringUtil.isNotEmpty(infirmier.getRef())) {
            resultat= infirmierDao.findByRef(infirmier.getRef());
            }
        }
    return resultat;
    }

@Override
public Infirmier findById(Long id){
if(id==null) return null;
return infirmierDao.getOne(id);
}

@Override
public Infirmier findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(infirmierDao.findById(id).isPresent())  {
infirmierDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Infirmier update(Infirmier infirmier){
Infirmier foundedInfirmier = findById(infirmier.getId());
if(foundedInfirmier==null) return null;
else{
return  infirmierDao.save(infirmier);
}
}

@Override
public Infirmier save (Infirmier infirmier){

Infirmier result =null;
    Infirmier foundedInfirmier = findByRef(infirmier.getRef());
   if(foundedInfirmier == null){



Infirmier savedInfirmier = infirmierDao.save(infirmier);

result = savedInfirmier;
   }

return result;
}

@Override
public List<Infirmier> save(List<Infirmier> infirmiers){
List<Infirmier> list = new ArrayList<>();
for(Infirmier infirmier: infirmiers){
list.add(save(infirmier));
}
return list;
}



@Override
@Transactional
public int delete(Infirmier infirmier){
    if(infirmier.getRef()==null) return -1;

    Infirmier foundedInfirmier = findByRef(infirmier.getRef());
    if(foundedInfirmier==null) return -1;
infirmierDao.delete(foundedInfirmier);
return 1;
}


public List<Infirmier> findByCriteria(InfirmierVo infirmierVo){

String query = "SELECT o FROM Infirmier o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",infirmierVo.getId());
            query += SearchUtil.addConstraint( "o", "ref","LIKE",infirmierVo.getRef());
            query += SearchUtil.addConstraint( "o", "nom","LIKE",infirmierVo.getNom());
            query += SearchUtil.addConstraint( "o", "prenom","LIKE",infirmierVo.getPrenom());
            query += SearchUtil.addConstraint( "o", "sexe","LIKE",infirmierVo.getSexe());
            query += SearchUtil.addConstraint( "o", "telephone","LIKE",infirmierVo.getTelephone());
            query += SearchUtil.addConstraint( "o", "mail","LIKE",infirmierVo.getMail());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<Infirmier> infirmiers){
        if(ListUtil.isNotEmpty(infirmiers)){
        infirmiers.forEach(e->infirmierDao.delete(e));
        }
}
@Override
public void update(List<Infirmier> infirmiers){
if(ListUtil.isNotEmpty(infirmiers)){
infirmiers.forEach(e->infirmierDao.save(e));
}
}



}
