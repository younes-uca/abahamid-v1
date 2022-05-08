package com.ird.faa.service.medecin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Etudiant;
import com.ird.faa.dao.EtudiantDao;
import com.ird.faa.service.medecin.facade.EtudiantMedecinService;

import com.ird.faa.ws.rest.provided.vo.EtudiantVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class EtudiantMedecinServiceImpl extends AbstractServiceImpl<Etudiant> implements EtudiantMedecinService {

@Autowired
private EtudiantDao etudiantDao;



@Autowired
private EntityManager entityManager;

    @Override
   public Etudiant findByUsername(String username){
    return etudiantDao.findByUsername(username);
    }

@Override
public List<Etudiant> findAll(){
        return etudiantDao.findAll();
}
    @Override
    public Etudiant findByNumeroMatricule(String numeroMatricule){
    if( numeroMatricule==null) return null;
    return etudiantDao.findByNumeroMatricule(numeroMatricule);
    }

    @Override
    @Transactional
    public int deleteByNumeroMatricule(String  numeroMatricule) {
    return etudiantDao.deleteByNumeroMatricule(numeroMatricule);
    }
    @Override
    public Etudiant findByIdOrNumeroMatricule(Etudiant etudiant){
        Etudiant resultat=null;
        if(etudiant != null){
            if(StringUtil.isNotEmpty(etudiant.getId())){
            resultat= etudiantDao.getOne(etudiant.getId());
            }else if(StringUtil.isNotEmpty(etudiant.getNumeroMatricule())) {
            resultat= etudiantDao.findByNumeroMatricule(etudiant.getNumeroMatricule());
            }else if(StringUtil.isNotEmpty(etudiant.getUsername())) {
            resultat = etudiantDao.findByUsername(etudiant.getUsername());
            }
        }
    return resultat;
    }

@Override
public Etudiant findById(Long id){
if(id==null) return null;
return etudiantDao.getOne(id);
}

@Override
public Etudiant findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(etudiantDao.findById(id).isPresent())  {
etudiantDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Etudiant update(Etudiant etudiant){
Etudiant foundedEtudiant = findById(etudiant.getId());
if(foundedEtudiant==null) return null;
else{
return  etudiantDao.save(etudiant);
}
}
private void prepareSave(Etudiant etudiant){
  etudiant.setCredentialsNonExpired(false);
  etudiant.setEnabled(false);
  etudiant.setAccountNonExpired(false);
  etudiant.setAccountNonLocked(false);
  etudiant.setPasswordChanged(false);



}

@Override
public Etudiant save (Etudiant etudiant){
prepareSave(etudiant);

Etudiant result =null;
    Etudiant foundedEtudiant = findByNumeroMatricule(etudiant.getNumeroMatricule());
   if(foundedEtudiant == null){



Etudiant savedEtudiant = etudiantDao.save(etudiant);

result = savedEtudiant;
   }

return result;
}

@Override
public List<Etudiant> save(List<Etudiant> etudiants){
List<Etudiant> list = new ArrayList<>();
for(Etudiant etudiant: etudiants){
list.add(save(etudiant));
}
return list;
}



@Override
@Transactional
public int delete(Etudiant etudiant){
    if(etudiant.getNumeroMatricule()==null) return -1;

    Etudiant foundedEtudiant = findByNumeroMatricule(etudiant.getNumeroMatricule());
    if(foundedEtudiant==null) return -1;
etudiantDao.delete(foundedEtudiant);
return 1;
}


public List<Etudiant> findByCriteria(EtudiantVo etudiantVo){

String query = "SELECT o FROM Etudiant o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",etudiantVo.getId());
            query += SearchUtil.addConstraint( "o", "numeroMatricule","LIKE",etudiantVo.getNumeroMatricule());
            query += SearchUtil.addConstraint( "o", "emailPrincipale","LIKE",etudiantVo.getEmailPrincipale());
            query += SearchUtil.addConstraint( "o", "credentialsNonExpired","=",etudiantVo.getCredentialsNonExpired());
            query += SearchUtil.addConstraint( "o", "enabled","=",etudiantVo.getEnabled());
            query += SearchUtil.addConstraint( "o", "accountNonExpired","=",etudiantVo.getAccountNonExpired());
            query += SearchUtil.addConstraint( "o", "accountNonLocked","=",etudiantVo.getAccountNonLocked());
            query += SearchUtil.addConstraint( "o", "passwordChanged","=",etudiantVo.getPasswordChanged());
        query += SearchUtil.addConstraintDate( "o", "createdAt","=",etudiantVo.getCreatedAt());
        query += SearchUtil.addConstraintDate( "o", "updatedAt","=",etudiantVo.getUpdatedAt());
            query += SearchUtil.addConstraint( "o", "username","LIKE",etudiantVo.getUsername());
            query += SearchUtil.addConstraint( "o", "password","LIKE",etudiantVo.getPassword());
            query += SearchUtil.addConstraint( "o", "prenom","LIKE",etudiantVo.getPrenom());
            query += SearchUtil.addConstraint( "o", "nom","LIKE",etudiantVo.getNom());
            query += SearchUtil.addConstraint( "o", "role","LIKE",etudiantVo.getRole());
            query += SearchUtil.addConstraintMinMaxDate("o","createdAt",etudiantVo.getCreatedAtMin(),etudiantVo.getCreatedAtMax());
            query += SearchUtil.addConstraintMinMaxDate("o","updatedAt",etudiantVo.getUpdatedAtMin(),etudiantVo.getUpdatedAtMax());
return entityManager.createQuery(query).getResultList();
}


@Override
@Transactional
public void delete(List<Etudiant> etudiants){
        if(ListUtil.isNotEmpty(etudiants)){
        etudiants.forEach(e->etudiantDao.delete(e));
        }
}
@Override
public void update(List<Etudiant> etudiants){
if(ListUtil.isNotEmpty(etudiants)){
etudiants.forEach(e->etudiantDao.save(e));
}
}



}
