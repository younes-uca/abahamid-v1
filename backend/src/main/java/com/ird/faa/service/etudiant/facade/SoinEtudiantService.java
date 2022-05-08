package com.ird.faa.service.etudiant.facade;

import java.util.List;
import com.ird.faa.bean.Soin;
import com.ird.faa.ws.rest.provided.vo.SoinVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface SoinEtudiantService extends AbstractService<Soin,Long,SoinVo>{




/**
    * delete Soin from database
    * @param id - id of Soin to be deleted
    *
    */
    int deleteById(Long id);


    List<Soin> findByInfirmierRef(String ref);

    int deleteByInfirmierRef(String ref);

    List<Soin> findByInfirmierId(Long id);

    int deleteByInfirmierId(Long id);

    List<Soin> findByTraitementId(Long id);

    int deleteByTraitementId(Long id);







}
