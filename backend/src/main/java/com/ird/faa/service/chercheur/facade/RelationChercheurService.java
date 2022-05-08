package com.ird.faa.service.chercheur.facade;

import java.util.List;
import com.ird.faa.bean.Relation;
import com.ird.faa.ws.rest.provided.vo.RelationVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface RelationChercheurService extends AbstractService<Relation,Long,RelationVo>{


    /**
    * find Relation from database by code (reference)
    * @param code - reference of Relation
    * @return the founded Relation , If no Relation were
    *         found in database return  null.
    */
    Relation findByCode(String code);

    /**
    * find Relation from database by id (PK) or code (reference)
    * @param id - id of Relation
    * @param code - reference of Relation
    * @return the founded Relation , If no Relation were
    *         found in database return  null.
    */
    Relation findByIdOrCode(Relation relation);


/**
    * delete Relation from database
    * @param id - id of Relation to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete Relation from database by code (reference)
    *
    * @param code - reference of Relation to be deleted
    * @return 1 if Relation deleted successfully
    */
    int deleteByCode(String code);





}
