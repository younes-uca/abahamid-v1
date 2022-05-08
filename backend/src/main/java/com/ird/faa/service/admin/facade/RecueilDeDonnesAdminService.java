package com.ird.faa.service.admin.facade;

import java.util.List;
import com.ird.faa.bean.RecueilDeDonnes;
import com.ird.faa.ws.rest.provided.vo.RecueilDeDonnesVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface RecueilDeDonnesAdminService extends AbstractService<RecueilDeDonnes,Long,RecueilDeDonnesVo>{




/**
    * delete RecueilDeDonnes from database
    * @param id - id of RecueilDeDonnes to be deleted
    *
    */
    int deleteById(Long id);









}
