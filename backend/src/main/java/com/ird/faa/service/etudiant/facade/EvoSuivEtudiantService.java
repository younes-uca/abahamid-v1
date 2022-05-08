package com.ird.faa.service.etudiant.facade;

import java.util.List;
import com.ird.faa.bean.EvoSuiv;
import com.ird.faa.ws.rest.provided.vo.EvoSuivVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface EvoSuivEtudiantService extends AbstractService<EvoSuiv,Long,EvoSuivVo>{




/**
    * delete EvoSuiv from database
    * @param id - id of EvoSuiv to be deleted
    *
    */
    int deleteById(Long id);


    List<EvoSuiv> findByDossierMedicaleRef(String ref);

    int deleteByDossierMedicaleRef(String ref);

    List<EvoSuiv> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);







}
