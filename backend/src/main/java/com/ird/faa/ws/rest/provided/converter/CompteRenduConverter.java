package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.CompteRendu;
import com.ird.faa.ws.rest.provided.vo.CompteRenduVo;

@Component
public class CompteRenduConverter extends AbstractConverter<CompteRendu,CompteRenduVo>{

        @Autowired
        private DossierMedicaleConverter dossierMedicaleConverter ;
    private Boolean dossierMedicale;

public  CompteRenduConverter(){
init(true);
}

@Override
public CompteRendu toItem(CompteRenduVo vo) {
if (vo == null) {
return null;
} else {
CompteRendu item = new CompteRendu();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getDateCompteR()))
        item.setDateCompteR(DateUtil.parse(vo.getDateCompteR()));
        if(StringUtil.isNotEmpty(vo.getCompteR()))
        item.setCompteR(vo.getCompteR());
    if(vo.getDossierMedicaleVo()!=null && this.dossierMedicale)
        item.setDossierMedicale(dossierMedicaleConverter.toItem(vo.getDossierMedicaleVo())) ;


return item;
}
}

@Override
public CompteRenduVo toVo(CompteRendu item) {
if (item == null) {
return null;
} else {
CompteRenduVo vo = new CompteRenduVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(item.getDateCompteR()!=null)
        vo.setDateCompteR(DateUtil.formateDate(item.getDateCompteR()));
        if(StringUtil.isNotEmpty(item.getCompteR()))
        vo.setCompteR(item.getCompteR());

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
