package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.DossierMedicaleTag;
import com.ird.faa.ws.rest.provided.vo.DossierMedicaleTagVo;

@Component
public class DossierMedicaleTagConverter extends AbstractConverter<DossierMedicaleTag,DossierMedicaleTagVo>{

        @Autowired
        private TagConverter tagConverter ;
        @Autowired
        private DossierMedicaleConverter dossierMedicaleConverter ;
    private Boolean tag;
    private Boolean dossierMedicale;

public  DossierMedicaleTagConverter(){
init(true);
}

@Override
public DossierMedicaleTag toItem(DossierMedicaleTagVo vo) {
if (vo == null) {
return null;
} else {
DossierMedicaleTag item = new DossierMedicaleTag();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
    if(vo.getTagVo()!=null && this.tag)
        item.setTag(tagConverter.toItem(vo.getTagVo())) ;
    if(vo.getDossierMedicaleVo()!=null && this.dossierMedicale)
        item.setDossierMedicale(dossierMedicaleConverter.toItem(vo.getDossierMedicaleVo())) ;


return item;
}
}

@Override
public DossierMedicaleTagVo toVo(DossierMedicaleTag item) {
if (item == null) {
return null;
} else {
DossierMedicaleTagVo vo = new DossierMedicaleTagVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

    if(item.getTag()!=null && this.tag) {
        vo.setTagVo(tagConverter.toVo(item.getTag())) ;
    }
    if(item.getDossierMedicale()!=null && this.dossierMedicale) {
        vo.setDossierMedicaleVo(dossierMedicaleConverter.toVo(item.getDossierMedicale())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    tag = value;
    dossierMedicale = value;
}


        public TagConverter getTagConverter(){
        return this.tagConverter;
        }
        public void setTagConverter(TagConverter tagConverter ){
        this.tagConverter = tagConverter;
        }
        public DossierMedicaleConverter getDossierMedicaleConverter(){
        return this.dossierMedicaleConverter;
        }
        public void setDossierMedicaleConverter(DossierMedicaleConverter dossierMedicaleConverter ){
        this.dossierMedicaleConverter = dossierMedicaleConverter;
        }

    public boolean  isTag(){
    return this.tag;
    }
    public void  setTag(boolean tag){
    this.tag = tag;
    }
    public boolean  isDossierMedicale(){
    return this.dossierMedicale;
    }
    public void  setDossierMedicale(boolean dossierMedicale){
    this.dossierMedicale = dossierMedicale;
    }






}
