package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.EvoSuiv;
import com.ird.faa.ws.rest.provided.vo.EvoSuivVo;

@Component
public class EvoSuivConverter extends AbstractConverter<EvoSuiv,EvoSuivVo>{

        @Autowired
        private DossierMedicaleConverter dossierMedicaleConverter ;
    private Boolean dossierMedicale;

public  EvoSuivConverter(){
init(true);
}

@Override
public EvoSuiv toItem(EvoSuivVo vo) {
if (vo == null) {
return null;
} else {
EvoSuiv item = new EvoSuiv();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getDateEvoS()))
        item.setDateEvoS(DateUtil.parse(vo.getDateEvoS()));
        if(StringUtil.isNotEmpty(vo.getEvoS()))
        item.setEvoS(vo.getEvoS());
    if(vo.getDossierMedicaleVo()!=null && this.dossierMedicale)
        item.setDossierMedicale(dossierMedicaleConverter.toItem(vo.getDossierMedicaleVo())) ;


return item;
}
}

@Override
public EvoSuivVo toVo(EvoSuiv item) {
if (item == null) {
return null;
} else {
EvoSuivVo vo = new EvoSuivVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(item.getDateEvoS()!=null)
        vo.setDateEvoS(DateUtil.formateDate(item.getDateEvoS()));
        if(StringUtil.isNotEmpty(item.getEvoS()))
        vo.setEvoS(item.getEvoS());

    if(item.getDossierMedicale()!=null && this.dossierMedicale) {
        vo.setDossierMedicaleVo(dossierMedicaleConverter.toVo(item.getDossierMedicale())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    dossierMedicale = value;
}


        public DossierMedicaleConverter getDossierMedicaleConverter(){
        return this.dossierMedicaleConverter;
        }
        public void setDossierMedicaleConverter(DossierMedicaleConverter dossierMedicaleConverter ){
        this.dossierMedicaleConverter = dossierMedicaleConverter;
        }

    public boolean  isDossierMedicale(){
    return this.dossierMedicale;
    }
    public void  setDossierMedicale(boolean dossierMedicale){
    this.dossierMedicale = dossierMedicale;
    }








}
