package com.ird.faa.service.medecin.facade;

import java.util.List;
import com.ird.faa.bean.Infirmier;
import com.ird.faa.ws.rest.provided.vo.InfirmierVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface InfirmierMedecinService extends AbstractService<Infirmier,Long,InfirmierVo>{


    /**
    * find Infirmier from database by ref (reference)
    * @param ref - reference of Infirmier
    * @return the founded Infirmier , If no Infirmier were
    *         found in database return  null.
    */
    Infirmier findByRef(String ref);

    /**
    * find Infirmier from database by id (PK) or ref (reference)
    * @param id - id of Infirmier
    * @param ref - reference of Infirmier
    * @return the founded Infirmier , If no Infirmier were
    *         found in database return  null.
    */
    Infirmier findByIdOrRef(Infirmier infirmier);


/**
    * delete Infirmier from database
    * @param id - id of Infirmier to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete Infirmier from database by ref (reference)
    *
    * @param ref - reference of Infirmier to be deleted
    * @return 1 if Infirmier deleted successfully
    */
    int deleteByRef(String ref);





}
