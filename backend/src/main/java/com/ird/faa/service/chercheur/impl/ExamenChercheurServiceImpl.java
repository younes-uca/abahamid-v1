package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Examen;
import com.ird.faa.dao.ExamenDao;
import com.ird.faa.service.chercheur.facade.ExamenChercheurService;

import com.ird.faa.ws.rest.provided.vo.ExamenVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class ExamenChercheurServiceImpl extends AbstractServiceImpl<Examen> implements ExamenChercheurService {

@Autowired
private ExamenDao examenDao;



@Autowired
private EntityManager entityManager;


@Override
public List<Examen> findAll(){
        return examenDao.findAll();
}
    @Override
    public Examen findByCode(String code){
    if( code==null) return null;
    return examenDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return examenDao.deleteByCode(code);
    }
    @Override
    public Examen findByIdOrCode(Examen examen){
        Examen resultat=null;
        if(examen != null){
            if(StringUtil.isNotEmpty(examen.getId())){
            resultat= examenDao.getOne(examen.getId());
            }else if(StringUtil.isNotEmpty(examen.getCode())) {
            resultat= examenDao.findByCode(examen.getCode());
            }
        }
    return resultat;
    }

@Override
public Examen findById(Long id){
if(id==null) return null;
return examenDao.getOne(id);
}

@Override
public Examen findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(examenDao.findById(id).isPresent())  {
examenDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Examen update(Examen examen){
Examen foundedExamen = findById(examen.getId());
if(foundedExamen==null) return null;
else{
return  examenDao.save(examen);
}
}

@Override
public Examen save (Examen examen){

Examen result =null;
    Examen foundedExamen = findByCode(examen.getCode());
   if(foundedExamen == null){



Examen savedExamen = examenDao.save(examen);

result = savedExamen;
   }

return result;
}

@Override
public List<Examen> save(List<Examen> examens){
List<Examen> list = new ArrayList<>();
for(Examen examen: examens){
list.add(save(examen));
}
return list;
}



@Override
@Transactional
public int delete(Examen examen){
    if(examen.getCode()==null) return -1;

    Examen foundedExamen = findByCode(examen.getCode());
    if(foundedExamen==null) return -1;
examenDao.delete(foundedExamen);
return 1;
}


public List<Examen> findByCriteria(ExamenVo examenVo){

String query = "SELECT o FROM Examen o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",examenVo.getId());
            query += SearchUtil.addConstraint( "o", "code","LIKE",examenVo.getCode());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",examenVo.getLibelle());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<Examen> examens){
        if(ListUtil.isNotEmpty(examens)){
        examens.forEach(e->examenDao.delete(e));
        }
}
@Override
public void update(List<Examen> examens){
if(ListUtil.isNotEmpty(examens)){
examens.forEach(e->examenDao.save(e));
}
}



}
