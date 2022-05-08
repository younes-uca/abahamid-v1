package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Ville;
import com.ird.faa.ws.rest.provided.vo.VilleVo;

@Component
public class VilleConverter extends AbstractConverter<Ville,VilleVo>{


public  VilleConverter(){
init(true);
}

@Override
public Ville toItem(VilleVo vo) {
if (vo == null) {
return null;
} else {
Ville item = new Ville();
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
public VilleVo toVo(Ville item) {
if (item == null) {
return null;
} else {
VilleVo vo = new VilleVo();
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
