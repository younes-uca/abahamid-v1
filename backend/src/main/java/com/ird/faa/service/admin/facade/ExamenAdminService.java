package com.ird.faa.service.admin.facade;

import java.util.List;
import com.ird.faa.bean.Examen;
import com.ird.faa.ws.rest.provided.vo.ExamenVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface ExamenAdminService extends AbstractService<Examen,Long,ExamenVo>{


    /**
    * find Examen from database by code (reference)
    * @param code - reference of Examen
    * @return the founded Examen , If no Examen were
    *         found in database return  null.
    */
    Examen findByCode(String code);

    /**
    * find Examen from database by id (PK) or code (reference)
    * @param id - id of Examen
    * @param code - reference of Examen
    * @return the founded Examen , If no Examen were
    *         found in database return  null.
    */
    Examen findByIdOrCode(Examen examen);


/**
    * delete Examen from database
    * @param id - id of Examen to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete Examen from database by code (reference)
    *
    * @param code - reference of Examen to be deleted
    * @return 1 if Examen deleted successfully
    */
    int deleteByCode(String code);





}
