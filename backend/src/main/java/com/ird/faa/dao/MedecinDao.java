package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Medecin;


@Repository
public interface MedecinDao extends JpaRepository<Medecin,Long> {

    Medecin findByUsername(String username);



    Medecin findByNumeroMatricule(String numeroMatricule);

    int deleteByNumeroMatricule(String numeroMatricule);



}
