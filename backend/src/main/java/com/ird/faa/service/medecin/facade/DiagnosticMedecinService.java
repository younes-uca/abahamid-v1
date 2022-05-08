package com.ird.faa.service.medecin.facade;

import java.util.List;
import com.ird.faa.bean.Diagnostic;
import com.ird.faa.ws.rest.provided.vo.DiagnosticVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface DiagnosticMedecinService extends AbstractService<Diagnostic,Long,DiagnosticVo>{




/**
    * delete Diagnostic from database
    * @param id - id of Diagnostic to be deleted
    *
    */
    int deleteById(Long id);


    List<Diagnostic> findByDossierMedicaleRef(String ref);

    int deleteByDossierMedicaleRef(String ref);

    List<Diagnostic> findByDossierMedicaleId(Long id);

    int deleteByDossierMedicaleId(Long id);







}
