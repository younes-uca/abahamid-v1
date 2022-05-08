package com.ird.faa.service.admin.facade;

import java.util.List;
import com.ird.faa.bean.Imagerie;
import com.ird.faa.ws.rest.provided.vo.ImagerieVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface ImagerieAdminService extends AbstractService<Imagerie,Long,ImagerieVo>{




/**
    * delete Imagerie from database
    * @param id - id of Imagerie to be deleted
    *
    */
    int deleteById(Long id);


    List<Imagerie> findByTypeImageCode(String code);

    int deleteByTypeImageCode(String code);

    List<Imagerie> findByTypeImageId(Long id);

    int deleteByTypeImageId(Long id);
    List<Imagerie> findByPhaseImageCode(String code);

    int deleteByPhaseImageCode(String code);

    List<Imagerie> findByPhaseImageId(Long id);

    int deleteByPhaseImageId(Long id);
    List<Imagerie> findByDossierMedicaleRef(String ref);

    int deleteByDossierMedicaleRef(String ref);

    List<Imagerie> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);







}
