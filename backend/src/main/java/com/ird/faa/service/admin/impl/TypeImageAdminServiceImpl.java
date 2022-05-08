package com.ird.faa.service.admin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.TypeImage;
import com.ird.faa.dao.TypeImageDao;
import com.ird.faa.service.admin.facade.TypeImageAdminService;

import com.ird.faa.ws.rest.provided.vo.TypeImageVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class TypeImageAdminServiceImpl extends AbstractServiceImpl<TypeImage> implements TypeImageAdminService {

@Autowired
private TypeImageDao typeImageDao;



@Autowired
private EntityManager entityManager;


@Override
public List<TypeImage> findAll(){
        return typeImageDao.findAll();
}
    @Override
    public TypeImage findByCode(String code){
    if( code==null) return null;
    return typeImageDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return typeImageDao.deleteByCode(code);
    }
    @Override
    public TypeImage findByIdOrCode(TypeImage typeImage){
        TypeImage resultat=null;
        if(typeImage != null){
            if(StringUtil.isNotEmpty(typeImage.getId())){
            resultat= typeImageDao.getOne(typeImage.getId());
            }else if(StringUtil.isNotEmpty(typeImage.getCode())) {
            resultat= typeImageDao.findByCode(typeImage.getCode());
            }
        }
    return resultat;
    }

@Override
public TypeImage findById(Long id){
if(id==null) return null;
return typeImageDao.getOne(id);
}

@Override
public TypeImage findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(typeImageDao.findById(id).isPresent())  {
typeImageDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public TypeImage update(TypeImage typeImage){
TypeImage foundedTypeImage = findById(typeImage.getId());
if(foundedTypeImage==null) return null;
else{
return  typeImageDao.save(typeImage);
}
}

@Override
public TypeImage save (TypeImage typeImage){

TypeImage result =null;
    TypeImage foundedTypeImage = findByCode(typeImage.getCode());
   if(foundedTypeImage == null){



TypeImage savedTypeImage = typeImageDao.save(typeImage);

result = savedTypeImage;
   }

return result;
}

@Override
public List<TypeImage> save(List<TypeImage> typeImages){
List<TypeImage> list = new ArrayList<>();
for(TypeImage typeImage: typeImages){
list.add(save(typeImage));
}
return list;
}



@Override
@Transactional
public int delete(TypeImage typeImage){
    if(typeImage.getCode()==null) return -1;

    TypeImage foundedTypeImage = findByCode(typeImage.getCode());
    if(foundedTypeImage==null) return -1;
typeImageDao.delete(foundedTypeImage);
return 1;
}


public List<TypeImage> findByCriteria(TypeImageVo typeImageVo){

String query = "SELECT o FROM TypeImage o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",typeImageVo.getId());
            query += SearchUtil.addConstraint( "o", "code","LIKE",typeImageVo.getCode());
            query += SearchUtil.addConstraint( "o", "libelle","LIKE",typeImageVo.getLibelle());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<TypeImage> typeImages){
        if(ListUtil.isNotEmpty(typeImages)){
        typeImages.forEach(e->typeImageDao.delete(e));
        }
}
@Override
public void update(List<TypeImage> typeImages){
if(ListUtil.isNotEmpty(typeImages)){
typeImages.forEach(e->typeImageDao.save(e));
}
}



}
