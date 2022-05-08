package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Clinique;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface CliniqueDao extends JpaRepository<Clinique,Long> {



    @Query("SELECT item FROM Clinique item ORDER BY item.dateClinique ASC")
    List<Clinique> findAll();


    List<Clinique> findByDossierMedicaleRef(String ref);
    int deleteByDossierMedicaleRef(String ref);

    List<Clinique> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);


}
