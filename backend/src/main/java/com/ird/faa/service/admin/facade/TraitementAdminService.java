package com.ird.faa.service.admin.facade;

import java.util.List;
import com.ird.faa.bean.Traitement;
import com.ird.faa.ws.rest.provided.vo.TraitementVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface TraitementAdminService extends AbstractService<Traitement,Long,TraitementVo>{




/**
    * delete Traitement from database
    * @param id - id of Traitement to be deleted
    *
    */
    int deleteById(Long id);



    List<Traitement> findByRecueilDeDonnesId(Long id);

    int deleteByRecueilDeDonnesId(Long id);







}
