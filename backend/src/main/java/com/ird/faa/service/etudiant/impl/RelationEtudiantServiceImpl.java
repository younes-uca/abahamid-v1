package com.ird.faa.service.etudiant.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Relation;
import com.ird.faa.dao.RelationDao;
import com.ird.faa.service.etudiant.facade.RelationEtudiantService;

import com.ird.faa.ws.rest.provided.vo.RelationVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class RelationEtudiantServiceImpl extends AbstractServiceImpl<Relation> implements RelationEtudiantService {

@Autowired
private RelationDao relationDao;



@Autowired
private EntityManager entityManager;


@Override
public List<Relation> findAll(){
        return relationDao.findAll();
}
    @Override
    public Relation findByCode(String code){
    if( code==null) return null;
    return relationDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return relationDao.deleteByCode(code);
    }
    @Override
    public Relation findByIdOrCode(Relation relation){
        Relation resultat=null;
        if(relation != null){
            if(StringUtil.isNotEmpty(relation.getId())){
            resultat= relationDao.getOne(relation.getId());
            }else if(StringUtil.isNotEmpty(relation.getCode())) {
            resultat= relationDao.findByCode(relation.getCode());
            }
        }
    return resultat;
    }

@Override
public Relation findById(Long id){
if(id==null) return null;
return relationDao.getOne(id);
}

@Override
public Relation findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(relationDao.findById(id).isPresent())  {
relationDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Relation update(Relation relation){
Relation foundedRelation = findById(relation.getId());
if(foundedRelation==null) return null;
else{
return  relationDao.save(relation);
}
}

@Override
public Relation save (Relation relation){

Relation result =null;
    Relation foundedRelation = findByCode(relation.getCode());
   if(foundedRelation == null){



Relation savedRelation = relationDao.save(relation);

result = savedRelation;
   }

return result;
}

@Override
public List<Relation> save(List<Relation> relations){
List<Relation> list = new ArrayList<>();
for(Relation relation: relations){
list.add(save(relation));
}
return list;
}



@Override
@Transactional
public int delete(Relation relation){
    if(relation.getCode()==null) return -1;

    Relation foundedRelation = findByCode(relation.getCode());
    if(foundedRelation==null) return -1;
relationDao.delete(foundedRelation);
return 1;
}


public List<Relation> findByCriteria(RelationVo relationVo){

String query = "SELECT o FROM Relation o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",relationVo.getId());
            query += SearchUtil.addConstraint( "o", "code","LIKE",relationVo.getCode());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",relationVo.getLibelle());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<Relation> relations){
        if(ListUtil.isNotEmpty(relations)){
        relations.forEach(e->relationDao.delete(e));
        }
}
@Override
public void update(List<Relation> relations){
if(ListUtil.isNotEmpty(relations)){
relations.forEach(e->relationDao.save(e));
}
}



}
