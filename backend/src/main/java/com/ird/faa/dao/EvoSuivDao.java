package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.EvoSuiv;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface EvoSuivDao extends JpaRepository<EvoSuiv,Long> {



    @Query("SELECT item FROM EvoSuiv item ORDER BY item.dateEvoS ASC")
    List<EvoSuiv> findAll();


    List<EvoSuiv> findByDossierMedicaleRef(String ref);
    int deleteByDossierMedicaleRef(String ref);

    List<EvoSuiv> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);


}
