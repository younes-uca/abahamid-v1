package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.CompteRendu;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface CompteRenduDao extends JpaRepository<CompteRendu,Long> {



    @Query("SELECT item FROM CompteRendu item ORDER BY item.dateCompteR ASC")
    List<CompteRendu> findAll();


    List<CompteRendu> findByDossierMedicaleRef(String ref);
    int deleteByDossierMedicaleRef(String ref);

    List<CompteRendu> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);


}
