package com.ird.faa.service.medecin.facade;

import java.util.List;
import com.ird.faa.bean.PatientContact;
import com.ird.faa.ws.rest.provided.vo.PatientContactVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface PatientContactMedecinService extends AbstractService<PatientContact,Long,PatientContactVo>{


    /**
    * find PatientContact from database by ref (reference)
    * @param ref - reference of PatientContact
    * @return the founded PatientContact , If no PatientContact were
    *         found in database return  null.
    */
    PatientContact findByRef(String ref);

    /**
    * find PatientContact from database by id (PK) or ref (reference)
    * @param id - id of PatientContact
    * @param ref - reference of PatientContact
    * @return the founded PatientContact , If no PatientContact were
    *         found in database return  null.
    */
    PatientContact findByIdOrRef(PatientContact patientContact);


/**
    * delete PatientContact from database
    * @param id - id of PatientContact to be deleted
    *
    */
    int deleteById(Long id);


    List<PatientContact> findByRelationCode(String code);

    int deleteByRelationCode(String code);

    List<PatientContact> findByRelationId(Long id);

    int deleteByRelationId(Long id);


    /**
    * delete PatientContact from database by ref (reference)
    *
    * @param ref - reference of PatientContact to be deleted
    * @return 1 if PatientContact deleted successfully
    */
    int deleteByRef(String ref);





}
