package com.ird.faa.service.medecin.facade;

import java.util.List;
import com.ird.faa.bean.PhaseImage;
import com.ird.faa.ws.rest.provided.vo.PhaseImageVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface PhaseImageMedecinService extends AbstractService<PhaseImage,Long,PhaseImageVo>{


    /**
    * find PhaseImage from database by code (reference)
    * @param code - reference of PhaseImage
    * @return the founded PhaseImage , If no PhaseImage were
    *         found in database return  null.
    */
    PhaseImage findByCode(String code);

    /**
    * find PhaseImage from database by id (PK) or code (reference)
    * @param id - id of PhaseImage
    * @param code - reference of PhaseImage
    * @return the founded PhaseImage , If no PhaseImage were
    *         found in database return  null.
    */
    PhaseImage findByIdOrCode(PhaseImage phaseImage);


/**
    * delete PhaseImage from database
    * @param id - id of PhaseImage to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete PhaseImage from database by code (reference)
    *
    * @param code - reference of PhaseImage to be deleted
    * @return 1 if PhaseImage deleted successfully
    */
    int deleteByCode(String code);





}
