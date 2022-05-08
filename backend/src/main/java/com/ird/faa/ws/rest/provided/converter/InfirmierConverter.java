package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Infirmier;
import com.ird.faa.ws.rest.provided.vo.InfirmierVo;

@Component
public class InfirmierConverter extends AbstractConverter<Infirmier,InfirmierVo>{


public  InfirmierConverter(){
init(true);
}

@Override
public Infirmier toItem(InfirmierVo vo) {
if (vo == null) {
return null;
} else {
Infirmier item = new Infirmier();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getRef()))
        item.setRef(vo.getRef());
        if(StringUtil.isNotEmpty(vo.getNom()))
        item.setNom(vo.getNom());
        if(StringUtil.isNotEmpty(vo.getPrenom()))
        item.setPrenom(vo.getPrenom());
        if(StringUtil.isNotEmpty(vo.getSexe()))
        item.setSexe(vo.getSexe());
        if(StringUtil.isNotEmpty(vo.getTelephone()))
        item.setTelephone(vo.getTelephone());
        if(StringUtil.isNotEmpty(vo.getMail()))
        item.setMail(vo.getMail());


return item;
}
}

@Override
public InfirmierVo toVo(Infirmier item) {
if (item == null) {
return null;
} else {
InfirmierVo vo = new InfirmierVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getRef()))
        vo.setRef(item.getRef());

        if(StringUtil.isNotEmpty(item.getNom()))
        vo.setNom(item.getNom());

        if(StringUtil.isNotEmpty(item.getPrenom()))
        vo.setPrenom(item.getPrenom());

        if(StringUtil.isNotEmpty(item.getSexe()))
        vo.setSexe(item.getSexe());

        if(StringUtil.isNotEmpty(item.getTelephone()))
        vo.setTelephone(item.getTelephone());

        if(StringUtil.isNotEmpty(item.getMail()))
        vo.setMail(item.getMail());


return vo;
}
}

public void init(Boolean value) {
}

















}
