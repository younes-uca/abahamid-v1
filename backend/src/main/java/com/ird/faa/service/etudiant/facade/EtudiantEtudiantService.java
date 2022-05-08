package com.ird.faa.service.etudiant.facade;

import java.util.List;
import com.ird.faa.bean.Etudiant;
import com.ird.faa.ws.rest.provided.vo.EtudiantVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface EtudiantEtudiantService extends AbstractService<Etudiant,Long,EtudiantVo>{

    Etudiant findByUsername(String username);

    /**
    * find Etudiant from database by numeroMatricule (reference)
    * @param numeroMatricule - reference of Etudiant
    * @return the founded Etudiant , If no Etudiant were
    *         found in database return  null.
    */
    Etudiant findByNumeroMatricule(String numeroMatricule);

    /**
    * find Etudiant from database by id (PK) or numeroMatricule (reference)
    * @param id - id of Etudiant
    * @param numeroMatricule - reference of Etudiant
    * @return the founded Etudiant , If no Etudiant were
    *         found in database return  null.
    */
    Etudiant findByIdOrNumeroMatricule(Etudiant etudiant);


/**
    * delete Etudiant from database
    * @param id - id of Etudiant to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete Etudiant from database by numeroMatricule (reference)
    *
    * @param numeroMatricule - reference of Etudiant to be deleted
    * @return 1 if Etudiant deleted successfully
    */
    int deleteByNumeroMatricule(String numeroMatricule);





}
