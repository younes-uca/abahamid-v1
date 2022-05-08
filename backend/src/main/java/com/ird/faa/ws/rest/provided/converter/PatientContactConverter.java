package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.PatientContact;
import com.ird.faa.ws.rest.provided.vo.PatientContactVo;

@Component
public class PatientContactConverter extends AbstractConverter<PatientContact,PatientContactVo>{

        @Autowired
        private RelationConverter relationConverter ;
    private Boolean relation;

public  PatientContactConverter(){
init(true);
}

@Override
public PatientContact toItem(PatientContactVo vo) {
if (vo == null) {
return null;
} else {
PatientContact item = new PatientContact();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getRef()))
        item.setRef(vo.getRef());
        if(StringUtil.isNotEmpty(vo.getNom()))
        item.setNom(vo.getNom());
        if(StringUtil.isNotEmpty(vo.getPrenom()))
        item.setPrenom(vo.getPrenom());
        if(StringUtil.isNotEmpty(vo.getAdresse()))
        item.setAdresse(vo.getAdresse());
        if(StringUtil.isNotEmpty(vo.getTelephone()))
        item.setTelephone(vo.getTelephone());
        if(StringUtil.isNotEmpty(vo.getMail()))
        item.setMail(vo.getMail());
    if(vo.getRelationVo()!=null && this.relation)
        item.setRelation(relationConverter.toItem(vo.getRelationVo())) ;


return item;
}
}

@Override
public PatientContactVo toVo(PatientContact item) {
if (item == null) {
return null;
} else {
PatientContactVo vo = new PatientContactVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getRef()))
        vo.setRef(item.getRef());

        if(StringUtil.isNotEmpty(item.getNom()))
        vo.setNom(item.getNom());

        if(StringUtil.isNotEmpty(item.getPrenom()))
        vo.setPrenom(item.getPrenom());

        if(StringUtil.isNotEmpty(item.getAdresse()))
        vo.setAdresse(item.getAdresse());

        if(StringUtil.isNotEmpty(item.getTelephone()))
        vo.setTelephone(item.getTelephone());

        if(StringUtil.isNotEmpty(item.getMail()))
        vo.setMail(item.getMail());

    if(item.getRelation()!=null && this.relation) {
        vo.setRelationVo(relationConverter.toVo(item.getRelation())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    relation = value;
}


        public RelationConverter getRelationConverter(){
        return this.relationConverter;
        }
        public void setRelationConverter(RelationConverter relationConverter ){
        this.relationConverter = relationConverter;
        }

    public boolean  isRelation(){
    return this.relation;
    }
    public void  setRelation(boolean relation){
    this.relation = relation;
    }
















}
