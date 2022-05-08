package com.ird.faa.service.admin.facade;

import java.util.List;
import com.ird.faa.bean.Medecin;
import com.ird.faa.ws.rest.provided.vo.MedecinVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface MedecinAdminService extends AbstractService<Medecin,Long,MedecinVo>{

    Medecin findByUsername(String username);

    /**
    * find Medecin from database by numeroMatricule (reference)
    * @param numeroMatricule - reference of Medecin
    * @return the founded Medecin , If no Medecin were
    *         found in database return  null.
    */
    Medecin findByNumeroMatricule(String numeroMatricule);

    /**
    * find Medecin from database by id (PK) or numeroMatricule (reference)
    * @param id - id of Medecin
    * @param numeroMatricule - reference of Medecin
    * @return the founded Medecin , If no Medecin were
    *         found in database return  null.
    */
    Medecin findByIdOrNumeroMatricule(Medecin medecin);


/**
    * delete Medecin from database
    * @param id - id of Medecin to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete Medecin from database by numeroMatricule (reference)
    *
    * @param numeroMatricule - reference of Medecin to be deleted
    * @return 1 if Medecin deleted successfully
    */
    int deleteByNumeroMatricule(String numeroMatricule);





}
