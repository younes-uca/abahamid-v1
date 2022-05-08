package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.TypeImage;
import com.ird.faa.ws.rest.provided.vo.TypeImageVo;

@Component
public class TypeImageConverter extends AbstractConverter<TypeImage,TypeImageVo>{


public  TypeImageConverter(){
init(true);
}

@Override
public TypeImage toItem(TypeImageVo vo) {
if (vo == null) {
return null;
} else {
TypeImage item = new TypeImage();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getCode()))
        item.setCode(vo.getCode());
        if(StringUtil.isNotEmpty(vo.getLibelle()))
        item.setLibelle(vo.getLibelle());


return item;
}
}

@Override
public TypeImageVo toVo(TypeImage item) {
if (item == null) {
return null;
} else {
TypeImageVo vo = new TypeImageVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getCode()))
        vo.setCode(item.getCode());

        if(StringUtil.isNotEmpty(item.getLibelle()))
        vo.setLibelle(item.getLibelle());


return vo;
}
}

public void init(Boolean value) {
}









}
