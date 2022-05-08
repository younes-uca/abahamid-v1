package com.ird.faa.service.admin.facade;

import java.util.List;
import com.ird.faa.bean.CompteRendu;
import com.ird.faa.ws.rest.provided.vo.CompteRenduVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface CompteRenduAdminService extends AbstractService<CompteRendu,Long,CompteRenduVo>{




/**
    * delete CompteRendu from database
    * @param id - id of CompteRendu to be deleted
    *
    */
    int deleteById(Long id);


    List<CompteRendu> findByDossierMedicaleRef(String ref);

    int deleteByDossierMedicaleRef(String ref);

    List<CompteRendu> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);







}
