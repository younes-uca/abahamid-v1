package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Sexe;
import com.ird.faa.dao.SexeDao;
import com.ird.faa.service.chercheur.facade.SexeChercheurService;

import com.ird.faa.ws.rest.provided.vo.SexeVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class SexeChercheurServiceImpl extends AbstractServiceImpl<Sexe> implements SexeChercheurService {

@Autowired
private SexeDao sexeDao;



@Autowired
private EntityManager entityManager;


@Override
public List<Sexe> findAll(){
        return sexeDao.findAll();
}
    @Override
    public Sexe findByCode(String code){
    if( code==null) return null;
    return sexeDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return sexeDao.deleteByCode(code);
    }
    @Override
    public Sexe findByIdOrCode(Sexe sexe){
        Sexe resultat=null;
        if(sexe != null){
            if(StringUtil.isNotEmpty(sexe.getId())){
            resultat= sexeDao.getOne(sexe.getId());
            }else if(StringUtil.isNotEmpty(sexe.getCode())) {
            resultat= sexeDao.findByCode(sexe.getCode());
            }
        }
    return resultat;
    }

@Override
public Sexe findById(Long id){
if(id==null) return null;
return sexeDao.getOne(id);
}

@Override
public Sexe findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(sexeDao.findById(id).isPresent())  {
sexeDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Sexe update(Sexe sexe){
Sexe foundedSexe = findById(sexe.getId());
if(foundedSexe==null) return null;
else{
return  sexeDao.save(sexe);
}
}

@Override
public Sexe save (Sexe sexe){

Sexe result =null;
    Sexe foundedSexe = findByCode(sexe.getCode());
   if(foundedSexe == null){



Sexe savedSexe = sexeDao.save(sexe);

result = savedSexe;
   }

return result;
}

@Override
public List<Sexe> save(List<Sexe> sexes){
List<Sexe> list = new ArrayList<>();
for(Sexe sexe: sexes){
list.add(save(sexe));
}
return list;
}



@Override
@Transactional
public int delete(Sexe sexe){
    if(sexe.getCode()==null) return -1;

    Sexe foundedSexe = findByCode(sexe.getCode());
    if(foundedSexe==null) return -1;
sexeDao.delete(foundedSexe);
return 1;
}


public List<Sexe> findByCriteria(SexeVo sexeVo){

String query = "SELECT o FROM Sexe o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",sexeVo.getId());
            query += SearchUtil.addConstraint( "o", "code","LIKE",sexeVo.getCode());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",sexeVo.getLibelle());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<Sexe> sexes){
        if(ListUtil.isNotEmpty(sexes)){
        sexes.forEach(e->sexeDao.delete(e));
        }
}
@Override
public void update(List<Sexe> sexes){
if(ListUtil.isNotEmpty(sexes)){
sexes.forEach(e->sexeDao.save(e));
}
}



}
