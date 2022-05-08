package com.ird.faa.service.admin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.RecueilDeDonnes;
import com.ird.faa.dao.RecueilDeDonnesDao;
import com.ird.faa.service.admin.facade.RecueilDeDonnesAdminService;

import com.ird.faa.ws.rest.provided.vo.RecueilDeDonnesVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class RecueilDeDonnesAdminServiceImpl extends AbstractServiceImpl<RecueilDeDonnes> implements RecueilDeDonnesAdminService {

@Autowired
private RecueilDeDonnesDao recueilDeDonnesDao;



@Autowired
private EntityManager entityManager;


@Override
public List<RecueilDeDonnes> findAll(){
        return recueilDeDonnesDao.findAll();
}

@Override
public RecueilDeDonnes findById(Long id){
if(id==null) return null;
return recueilDeDonnesDao.getOne(id);
}

@Override
public RecueilDeDonnes findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(recueilDeDonnesDao.findById(id).isPresent())  {
recueilDeDonnesDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public RecueilDeDonnes update(RecueilDeDonnes recueilDeDonnes){
RecueilDeDonnes foundedRecueilDeDonnes = findById(recueilDeDonnes.getId());
if(foundedRecueilDeDonnes==null) return null;
else{
return  recueilDeDonnesDao.save(recueilDeDonnes);
}
}

@Override
public RecueilDeDonnes save (RecueilDeDonnes recueilDeDonnes){




return recueilDeDonnesDao.save(recueilDeDonnes);


}

@Override
public List<RecueilDeDonnes> save(List<RecueilDeDonnes> recueilDeDonness){
List<RecueilDeDonnes> list = new ArrayList<>();
for(RecueilDeDonnes recueilDeDonnes: recueilDeDonness){
list.add(save(recueilDeDonnes));
}
return list;
}



@Override
@Transactional
public int delete(RecueilDeDonnes recueilDeDonnes){
    if(recueilDeDonnes.getId()==null) return -1;
    RecueilDeDonnes foundedRecueilDeDonnes = findById(recueilDeDonnes.getId());
    if(foundedRecueilDeDonnes==null) return -1;
recueilDeDonnesDao.delete(foundedRecueilDeDonnes);
return 1;
}


public List<RecueilDeDonnes> findByCriteria(RecueilDeDonnesVo recueilDeDonnesVo){

String query = "SELECT o FROM RecueilDeDonnes o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",recueilDeDonnesVo.getId());
            query += SearchUtil.addConstraint( "o", "allergie","LIKE",recueilDeDonnesVo.getAllergie());
            query += SearchUtil.addConstraint( "o", "etatPsy","LIKE",recueilDeDonnesVo.getEtatPsy());
            query += SearchUtil.addConstraint( "o", "respiration","LIKE",recueilDeDonnesVo.getRespiration());
            query += SearchUtil.addConstraint( "o", "alimentation","LIKE",recueilDeDonnesVo.getAlimentation());
            query += SearchUtil.addConstraint( "o", "mouvement","LIKE",recueilDeDonnesVo.getMouvement());
            query += SearchUtil.addConstraint( "o", "sommeil","LIKE",recueilDeDonnesVo.getSommeil());
            query += SearchUtil.addConstraint( "o", "regulation","LIKE",recueilDeDonnesVo.getRegulation());
            query += SearchUtil.addConstraint( "o", "autre","LIKE",recueilDeDonnesVo.getAutre());
            query += SearchUtil.addConstraint( "o", "traitementRef","LIKE",recueilDeDonnesVo.getTraitementRef());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<RecueilDeDonnes> recueilDeDonness){
        if(ListUtil.isNotEmpty(recueilDeDonness)){
        recueilDeDonness.forEach(e->recueilDeDonnesDao.delete(e));
        }
}
@Override
public void update(List<RecueilDeDonnes> recueilDeDonness){
if(ListUtil.isNotEmpty(recueilDeDonness)){
recueilDeDonness.forEach(e->recueilDeDonnesDao.save(e));
}
}



}
