package com.ird.faa.service.medecin.facade;

import java.util.List;
import com.ird.faa.bean.Clinique;
import com.ird.faa.ws.rest.provided.vo.CliniqueVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface CliniqueMedecinService extends AbstractService<Clinique,Long,CliniqueVo>{




/**
    * delete Clinique from database
    * @param id - id of Clinique to be deleted
    *
    */
    int deleteById(Long id);


    List<Clinique> findByDossierMedicaleRef(String ref);

    int deleteByDossierMedicaleRef(String ref);

    List<Clinique> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);







}
