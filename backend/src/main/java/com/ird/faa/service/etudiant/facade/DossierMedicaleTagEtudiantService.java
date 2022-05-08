package com.ird.faa.service.etudiant.facade;

import java.util.List;
import com.ird.faa.bean.DossierMedicaleTag;
import com.ird.faa.ws.rest.provided.vo.DossierMedicaleTagVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface DossierMedicaleTagEtudiantService extends AbstractService<DossierMedicaleTag,Long,DossierMedicaleTagVo>{




/**
    * delete DossierMedicaleTag from database
    * @param id - id of DossierMedicaleTag to be deleted
    *
    */
    int deleteById(Long id);


    List<DossierMedicaleTag> findByTagReference(String reference);

    int deleteByTagReference(String reference);

    List<DossierMedicaleTag> findByTagId(Long id);

    int deleteByTagId(Long id);
    List<DossierMedicaleTag> findByDossierMedicaleRef(String ref);

    int deleteByDossierMedicaleRef(String ref);

    List<DossierMedicaleTag> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);







}
