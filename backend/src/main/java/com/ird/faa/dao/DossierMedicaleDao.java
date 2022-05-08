package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.DossierMedicale;


@Repository
public interface DossierMedicaleDao extends JpaRepository<DossierMedicale,Long> {




    DossierMedicale findByRef(String ref);

    int deleteByRef(String ref);

    List<DossierMedicale> findByPatientCin(String cin);
    int deleteByPatientCin(String cin);

    List<DossierMedicale> findByPatientId(Long id);

    int deleteByPatientId(Long id);
    List<DossierMedicale> findByPatientContactRef(String ref);
    int deleteByPatientContactRef(String ref);

    List<DossierMedicale> findByPatientContactId(Long id);

    int deleteByPatientContactId(Long id);

    List<DossierMedicale> findByTraitementId(Long id);

    int deleteByTraitementId(Long id);


}
