package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.DossierMedicaleTag;


@Repository
public interface DossierMedicaleTagDao extends JpaRepository<DossierMedicaleTag,Long> {





    List<DossierMedicaleTag> findByTagReference(String reference);
    int deleteByTagReference(String reference);

    List<DossierMedicaleTag> findByTagId(Long id);

    int deleteByTagId(Long id);
    List<DossierMedicaleTag> findByDossierMedicaleRef(String ref);
    int deleteByDossierMedicaleRef(String ref);

    List<DossierMedicaleTag> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);


}
