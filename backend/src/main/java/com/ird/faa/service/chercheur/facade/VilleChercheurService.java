package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.Ville;
import com.ird.faa.ws.rest.provided.vo.VilleVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface VilleChercheurService extends AbstractService<Ville,Long,VilleVo>{


    /**
    * find Ville from database by code (reference)
    * @param code - reference of Ville
    * @return the founded Ville , If no Ville were
    *         found in database return  null.
    */
    Ville findByCode(String code);

    /**
    * find Ville from database by id (PK) or code (reference)
    * @param id - id of Ville
    * @param code - reference of Ville
    * @return the founded Ville , If no Ville were
    *         found in database return  null.
    */
    Ville findByIdOrCode(Ville ville);


/**
    * delete Ville from database
    * @param id - id of Ville to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete Ville from database by code (reference)
    *
    * @param code - reference of Ville to be deleted
    * @return 1 if Ville deleted successfully
    */
    int deleteByCode(String code);





}
