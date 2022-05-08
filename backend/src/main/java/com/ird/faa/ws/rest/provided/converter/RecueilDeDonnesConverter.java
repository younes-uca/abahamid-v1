package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.RecueilDeDonnes;
import com.ird.faa.ws.rest.provided.vo.RecueilDeDonnesVo;

@Component
public class RecueilDeDonnesConverter extends AbstractConverter<RecueilDeDonnes,RecueilDeDonnesVo>{


public  RecueilDeDonnesConverter(){
init(true);
}

@Override
public RecueilDeDonnes toItem(RecueilDeDonnesVo vo) {
if (vo == null) {
return null;
} else {
RecueilDeDonnes item = new RecueilDeDonnes();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getAllergie()))
        item.setAllergie(vo.getAllergie());
        if(StringUtil.isNotEmpty(vo.getEtatPsy()))
        item.setEtatPsy(vo.getEtatPsy());
        if(StringUtil.isNotEmpty(vo.getRespiration()))
        item.setRespiration(vo.getRespiration());
        if(StringUtil.isNotEmpty(vo.getAlimentation()))
        item.setAlimentation(vo.getAlimentation());
        if(StringUtil.isNotEmpty(vo.getMouvement()))
        item.setMouvement(vo.getMouvement());
        if(StringUtil.isNotEmpty(vo.getSommeil()))
        item.setSommeil(vo.getSommeil());
        if(StringUtil.isNotEmpty(vo.getRegulation()))
        item.setRegulation(vo.getRegulation());
        if(StringUtil.isNotEmpty(vo.getAutre()))
        item.setAutre(vo.getAutre());
        if(StringUtil.isNotEmpty(vo.getTraitementRef()))
        item.setTraitementRef(vo.getTraitementRef());


return item;
}
}

@Override
public RecueilDeDonnesVo toVo(RecueilDeDonnes item) {
if (item == null) {
return null;
} else {
RecueilDeDonnesVo vo = new RecueilDeDonnesVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getAllergie()))
        vo.setAllergie(item.getAllergie());

        if(StringUtil.isNotEmpty(item.getEtatPsy()))
        vo.setEtatPsy(item.getEtatPsy());

        if(StringUtil.isNotEmpty(item.getRespiration()))
        vo.setRespiration(item.getRespiration());

        if(StringUtil.isNotEmpty(item.getAlimentation()))
        vo.setAlimentation(item.getAlimentation());

        if(StringUtil.isNotEmpty(item.getMouvement()))
        vo.setMouvement(item.getMouvement());

        if(StringUtil.isNotEmpty(item.getSommeil()))
        vo.setSommeil(item.getSommeil());

        if(StringUtil.isNotEmpty(item.getRegulation()))
        vo.setRegulation(item.getRegulation());

        if(StringUtil.isNotEmpty(item.getAutre()))
        vo.setAutre(item.getAutre());

        if(StringUtil.isNotEmpty(item.getTraitementRef()))
        vo.setTraitementRef(item.getTraitementRef());


return vo;
}
}

public void init(Boolean value) {
}























}
