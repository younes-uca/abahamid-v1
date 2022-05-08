package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.Patient;
import com.ird.faa.ws.rest.provided.vo.PatientVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface PatientChercheurService extends AbstractService<Patient,Long,PatientVo>{


    /**
    * find Patient from database by cin (reference)
    * @param cin - reference of Patient
    * @return the founded Patient , If no Patient were
    *         found in database return  null.
    */
    Patient findByCin(String cin);

    /**
    * find Patient from database by id (PK) or cin (reference)
    * @param id - id of Patient
    * @param cin - reference of Patient
    * @return the founded Patient , If no Patient were
    *         found in database return  null.
    */
    Patient findByIdOrCin(Patient patient);


/**
    * delete Patient from database
    * @param id - id of Patient to be deleted
    *
    */
    int deleteById(Long id);


    List<Patient> findByVilleCode(String code);

    int deleteByVilleCode(String code);

    List<Patient> findByVilleId(Long id);

    int deleteByVilleId(Long id);
    List<Patient> findBySexeCode(String code);

    int deleteBySexeCode(String code);

    List<Patient> findBySexeId(Long id);

    int deleteBySexeId(Long id);


    /**
    * delete Patient from database by cin (reference)
    *
    * @param cin - reference of Patient to be deleted
    * @return 1 if Patient deleted successfully
    */
    int deleteByCin(String cin);





}
