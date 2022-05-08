package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Diagnostic;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface DiagnosticDao extends JpaRepository<Diagnostic,Long> {



    @Query("SELECT item FROM Diagnostic item ORDER BY item.dateDiagnostic ASC")
    List<Diagnostic> findAll();


    List<Diagnostic> findByDossierMedicaleRef(String ref);
    int deleteByDossierMedicaleRef(String ref);

    List<Diagnostic> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);


}
