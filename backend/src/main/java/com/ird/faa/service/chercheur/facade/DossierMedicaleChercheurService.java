package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.DossierMedicale;
import com.ird.faa.ws.rest.provided.vo.DossierMedicaleVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface DossierMedicaleChercheurService extends AbstractService<DossierMedicale,Long,DossierMedicaleVo>{


    /**
    * find DossierMedicale from database by ref (reference)
    * @param ref - reference of DossierMedicale
    * @return the founded DossierMedicale , If no DossierMedicale were
    *         found in database return  null.
    */
    DossierMedicale findByRef(String ref);

    /**
    * find DossierMedicale from database by id (PK) or ref (reference)
    * @param id - id of DossierMedicale
    * @param ref - reference of DossierMedicale
    * @return the founded DossierMedicale , If no DossierMedicale were
    *         found in database return  null.
    */
    DossierMedicale findByIdOrRef(DossierMedicale dossierMedicale);


/**
    * delete DossierMedicale from database
    * @param id - id of DossierMedicale to be deleted
    *
    */
    int deleteById(Long id);


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


    /**
    * delete DossierMedicale from database by ref (reference)
    *
    * @param ref - reference of DossierMedicale to be deleted
    * @return 1 if DossierMedicale deleted successfully
    */
    int deleteByRef(String ref);





}
