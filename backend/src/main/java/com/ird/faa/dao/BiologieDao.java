package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Biologie;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface BiologieDao extends JpaRepository<Biologie,Long> {



    @Query("SELECT item FROM Biologie item ORDER BY item.dateBiologie ASC")
    List<Biologie> findAll();


    List<Biologie> findByExamenCode(String code);
    int deleteByExamenCode(String code);

    List<Biologie> findByExamenId(Long id);

    int deleteByExamenId(Long id);
    List<Biologie> findByDossierMedicaleRef(String ref);
    int deleteByDossierMedicaleRef(String ref);

    List<Biologie> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);


}
