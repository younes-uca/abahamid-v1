package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Tag;
import com.ird.faa.ws.rest.provided.vo.TagVo;

@Component
public class TagConverter extends AbstractConverter<Tag,TagVo>{


public  TagConverter(){
init(true);
}

@Override
public Tag toItem(TagVo vo) {
if (vo == null) {
return null;
} else {
Tag item = new Tag();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getReference()))
        item.setReference(vo.getReference());
        if(StringUtil.isNotEmpty(vo.getLibelle()))
        item.setLibelle(vo.getLibelle());


return item;
}
}

@Override
public TagVo toVo(Tag item) {
if (item == null) {
return null;
} else {
TagVo vo = new TagVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getReference()))
        vo.setReference(item.getReference());

        if(StringUtil.isNotEmpty(item.getLibelle()))
        vo.setLibelle(item.getLibelle());


return vo;
}
}

public void init(Boolean value) {
}









}
