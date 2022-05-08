package com.ird.faa.service.etudiant.facade;

import java.util.List;
import com.ird.faa.bean.Biologie;
import com.ird.faa.ws.rest.provided.vo.BiologieVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface BiologieEtudiantService extends AbstractService<Biologie,Long,BiologieVo>{




/**
    * delete Biologie from database
    * @param id - id of Biologie to be deleted
    *
    */
    int deleteById(Long id);


    List<Biologie> findByExamenCode(String code);

    int deleteByExamenCode(String code);

    List<Biologie> findByExamenId(Long id);

    int deleteByExamenId(Long id);
    List<Biologie> findByDossierMedicaleRef(String ref);

    int deleteByDossierMedicaleRef(String ref);

    List<Biologie> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);







}
