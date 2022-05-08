package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.Sexe;
import com.ird.faa.ws.rest.provided.vo.SexeVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface SexeChercheurService extends AbstractService<Sexe,Long,SexeVo>{


    /**
    * find Sexe from database by code (reference)
    * @param code - reference of Sexe
    * @return the founded Sexe , If no Sexe were
    *         found in database return  null.
    */
    Sexe findByCode(String code);

    /**
    * find Sexe from database by id (PK) or code (reference)
    * @param id - id of Sexe
    * @param code - reference of Sexe
    * @return the founded Sexe , If no Sexe were
    *         found in database return  null.
    */
    Sexe findByIdOrCode(Sexe sexe);


/**
    * delete Sexe from database
    * @param id - id of Sexe to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete Sexe from database by code (reference)
    *
    * @param code - reference of Sexe to be deleted
    * @return 1 if Sexe deleted successfully
    */
    int deleteByCode(String code);





}
