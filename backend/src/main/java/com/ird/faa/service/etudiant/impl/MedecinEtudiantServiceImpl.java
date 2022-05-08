package com.ird.faa.service.etudiant.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Medecin;
import com.ird.faa.dao.MedecinDao;
import com.ird.faa.service.etudiant.facade.MedecinEtudiantService;

import com.ird.faa.ws.rest.provided.vo.MedecinVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class MedecinEtudiantServiceImpl extends AbstractServiceImpl<Medecin> implements MedecinEtudiantService {

@Autowired
private MedecinDao medecinDao;



@Autowired
private EntityManager entityManager;

    @Override
   public Medecin findByUsername(String username){
    return medecinDao.findByUsername(username);
    }

@Override
public List<Medecin> findAll(){
        return medecinDao.findAll();
}
    @Override
    public Medecin findByNumeroMatricule(String numeroMatricule){
    if( numeroMatricule==null) return null;
    return medecinDao.findByNumeroMatricule(numeroMatricule);
    }

    @Override
    @Transactional
    public int deleteByNumeroMatricule(String  numeroMatricule) {
    return medecinDao.deleteByNumeroMatricule(numeroMatricule);
    }
    @Override
    public Medecin findByIdOrNumeroMatricule(Medecin medecin){
        Medecin resultat=null;
        if(medecin != null){
            if(StringUtil.isNotEmpty(medecin.getId())){
            resultat= medecinDao.getOne(medecin.getId());
            }else if(StringUtil.isNotEmpty(medecin.getNumeroMatricule())) {
            resultat= medecinDao.findByNumeroMatricule(medecin.getNumeroMatricule());
            }else if(StringUtil.isNotEmpty(medecin.getUsername())) {
            resultat = medecinDao.findByUsername(medecin.getUsername());
            }
        }
    return resultat;
    }

@Override
public Medecin findById(Long id){
if(id==null) return null;
return medecinDao.getOne(id);
}

@Override
public Medecin findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(medecinDao.findById(id).isPresent())  {
medecinDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Medecin update(Medecin medecin){
Medecin foundedMedecin = findById(medecin.getId());
if(foundedMedecin==null) return null;
else{
return  medecinDao.save(medecin);
}
}
private void prepareSave(Medecin medecin){
  medecin.setCredentialsNonExpired(false);
  medecin.setEnabled(false);
  medecin.setAccountNonExpired(false);
  medecin.setAccountNonLocked(false);
  medecin.setPasswordChanged(false);



}

@Override
public Medecin save (Medecin medecin){
prepareSave(medecin);

Medecin result =null;
    Medecin foundedMedecin = findByNumeroMatricule(medecin.getNumeroMatricule());
   if(foundedMedecin == null){



Medecin savedMedecin = medecinDao.save(medecin);

result = savedMedecin;
   }

return result;
}

@Override
public List<Medecin> save(List<Medecin> medecins){
List<Medecin> list = new ArrayList<>();
for(Medecin medecin: medecins){
list.add(save(medecin));
}
return list;
}



@Override
@Transactional
public int delete(Medecin medecin){
    if(medecin.getNumeroMatricule()==null) return -1;

    Medecin foundedMedecin = findByNumeroMatricule(medecin.getNumeroMatricule());
    if(foundedMedecin==null) return -1;
medecinDao.delete(foundedMedecin);
return 1;
}


public List<Medecin> findByCriteria(MedecinVo medecinVo){

String query = "SELECT o FROM Medecin o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",medecinVo.getId());
            query += SearchUtil.addConstraint( "o", "numeroMatricule","LIKE",medecinVo.getNumeroMatricule());
            query += SearchUtil.addConstraint( "o", "emailPrincipale","LIKE",medecinVo.getEmailPrincipale());
            query += SearchUtil.addConstraint( "o", "credentialsNonExpired","=",medecinVo.getCredentialsNonExpired());
            query += SearchUtil.addConstraint( "o", "enabled","=",medecinVo.getEnabled());
            query += SearchUtil.addConstraint( "o", "accountNonExpired","=",medecinVo.getAccountNonExpired());
            query += SearchUtil.addConstraint( "o", "accountNonLocked","=",medecinVo.getAccountNonLocked());
            query += SearchUtil.addConstraint( "o", "passwordChanged","=",medecinVo.getPasswordChanged());
        query += SearchUtil.addConstraintDate( "o", "createdAt","=",medecinVo.getCreatedAt());
        query += SearchUtil.addConstraintDate( "o", "updatedAt","=",medecinVo.getUpdatedAt());
            query += SearchUtil.addConstraint( "o", "username","LIKE",medecinVo.getUsername());
            query += SearchUtil.addConstraint( "o", "password","LIKE",medecinVo.getPassword());
            query += SearchUtil.addConstraint( "o", "prenom","LIKE",medecinVo.getPrenom());
            query += SearchUtil.addConstraint( "o", "nom","LIKE",medecinVo.getNom());
            query += SearchUtil.addConstraint( "o", "role","LIKE",medecinVo.getRole());
            query += SearchUtil.addConstraintMinMaxDate("o","createdAt",medecinVo.getCreatedAtMin(),medecinVo.getCreatedAtMax());
            query += SearchUtil.addConstraintMinMaxDate("o","updatedAt",medecinVo.getUpdatedAtMin(),medecinVo.getUpdatedAtMax());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<Medecin> medecins){
        if(ListUtil.isNotEmpty(medecins)){
        medecins.forEach(e->medecinDao.delete(e));
        }
}
@Override
public void update(List<Medecin> medecins){
if(ListUtil.isNotEmpty(medecins)){
medecins.forEach(e->medecinDao.save(e));
}
}



}
