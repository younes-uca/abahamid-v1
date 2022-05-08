package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Etudiant;


@Repository
public interface EtudiantDao extends JpaRepository<Etudiant,Long> {

    Etudiant findByUsername(String username);



    Etudiant findByNumeroMatricule(String numeroMatricule);

    int deleteByNumeroMatricule(String numeroMatricule);



}
