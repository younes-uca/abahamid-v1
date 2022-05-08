package com.ird.faa.service.etudiant.facade;

import java.util.List;
import com.ird.faa.bean.TypeImage;
import com.ird.faa.ws.rest.provided.vo.TypeImageVo;
import com.ird.faa.service.core.facade.AbstractService;

public interface TypeImageEtudiantService extends AbstractService<TypeImage,Long,TypeImageVo>{


    /**
    * find TypeImage from database by code (reference)
    * @param code - reference of TypeImage
    * @return the founded TypeImage , If no TypeImage were
    *         found in database return  null.
    */
    TypeImage findByCode(String code);

    /**
    * find TypeImage from database by id (PK) or code (reference)
    * @param id - id of TypeImage
    * @param code - reference of TypeImage
    * @return the founded TypeImage , If no TypeImage were
    *         found in database return  null.
    */
    TypeImage findByIdOrCode(TypeImage typeImage);


/**
    * delete TypeImage from database
    * @param id - id of TypeImage to be deleted
    *
    */
    int deleteById(Long id);




    /**
    * delete TypeImage from database by code (reference)
    *
    * @param code - reference of TypeImage to be deleted
    * @return 1 if TypeImage deleted successfully
    */
    int deleteByCode(String code);





}
