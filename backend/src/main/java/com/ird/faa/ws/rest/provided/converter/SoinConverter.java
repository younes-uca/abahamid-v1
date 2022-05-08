package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Soin;
import com.ird.faa.ws.rest.provided.vo.SoinVo;

@Component
public class SoinConverter extends AbstractConverter<Soin,SoinVo>{

        @Autowired
        private TraitementConverter traitementConverter ;
        @Autowired
        private InfirmierConverter infirmierConverter ;
    private Boolean infirmier;
    private Boolean traitement;

public  SoinConverter(){
init(true);
}

@Override
public Soin toItem(SoinVo vo) {
if (vo == null) {
return null;
} else {
Soin item = new Soin();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getDateSoin()))
        item.setDateSoin(DateUtil.parse(vo.getDateSoin()));
        if(StringUtil.isNotEmpty(vo.getSoinsProd()))
        item.setSoinsProd(vo.getSoinsProd());
        if(StringUtil.isNotEmpty(vo.getConsigne()))
        item.setConsigne(vo.getConsigne());
    if(vo.getInfirmierVo()!=null && this.infirmier)
        item.setInfirmier(infirmierConverter.toItem(vo.getInfirmierVo())) ;
    if(vo.getTraitementVo()!=null && this.traitement)
        item.setTraitement(traitementConverter.toItem(vo.getTraitementVo())) ;


return item;
}
}

@Override
public SoinVo toVo(Soin item) {
if (item == null) {
return null;
} else {
SoinVo vo = new SoinVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(item.getDateSoin()!=null)
        vo.setDateSoin(DateUtil.formateDate(item.getDateSoin()));
        if(StringUtil.isNotEmpty(item.getSoinsProd()))
        vo.setSoinsProd(item.getSoinsProd());

        if(StringUtil.isNotEmpty(item.getConsigne()))
        vo.setConsigne(item.getConsigne());

    if(item.getInfirmier()!=null && this.infirmier) {
        vo.setInfirmierVo(infirmierConverter.toVo(item.getInfirmier())) ;
    }
    if(item.getTraitement()!=null && this.traitement) {
        vo.setTraitementVo(traitementConverter.toVo(item.getTraitement())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    infirmier = value;
    traitement = value;
}


        public TraitementConverter getTraitementConverter(){
        return this.traitementConverter;
        }
        public void setTraitementConverter(TraitementConverter traitementConverter ){
        this.traitementConverter = traitementConverter;
        }
        public InfirmierConverter getInfirmierConverter(){
        return this.infirmierConverter;
        }
        public void setInfirmierConverter(InfirmierConverter infirmierConverter ){
        this.infirmierConverter = infirmierConverter;
        }

    public boolean  isInfirmier(){
    return this.infirmier;
    }
    public void  setInfirmier(boolean infirmier){
    this.infirmier = infirmier;
    }
    public boolean  isTraitement(){
    return this.traitement;
    }
    public void  setTraitement(boolean traitement){
    this.traitement = traitement;
    }












}
