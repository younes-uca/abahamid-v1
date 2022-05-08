package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Imagerie;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface ImagerieDao extends JpaRepository<Imagerie,Long> {



    @Query("SELECT item FROM Imagerie item ORDER BY item.dateImagerie ASC")
    List<Imagerie> findAll();


    List<Imagerie> findByTypeImageCode(String code);
    int deleteByTypeImageCode(String code);

    List<Imagerie> findByTypeImageId(Long id);

    int deleteByTypeImageId(Long id);
    List<Imagerie> findByPhaseImageCode(String code);
    int deleteByPhaseImageCode(String code);

    List<Imagerie> findByPhaseImageId(Long id);

    int deleteByPhaseImageId(Long id);
    List<Imagerie> findByDossierMedicaleRef(String ref);
    int deleteByDossierMedicaleRef(String ref);

    List<Imagerie> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);


}
