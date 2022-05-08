package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Examen;
import com.ird.faa.ws.rest.provided.vo.ExamenVo;

@Component
public class ExamenConverter extends AbstractConverter<Examen,ExamenVo>{


public  ExamenConverter(){
init(true);
}

@Override
public Examen toItem(ExamenVo vo) {
if (vo == null) {
return null;
} else {
Examen item = new Examen();
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
public ExamenVo toVo(Examen item) {
if (item == null) {
return null;
} else {
ExamenVo vo = new ExamenVo();
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
