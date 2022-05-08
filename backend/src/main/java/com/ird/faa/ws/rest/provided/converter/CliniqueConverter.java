package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Clinique;
import com.ird.faa.ws.rest.provided.vo.CliniqueVo;

@Component
public class CliniqueConverter extends AbstractConverter<Clinique,CliniqueVo>{

        @Autowired
        private DossierMedicaleConverter dossierMedicaleConverter ;
    private Boolean dossierMedicale;

public  CliniqueConverter(){
init(true);
}

@Override
public Clinique toItem(CliniqueVo vo) {
if (vo == null) {
return null;
} else {
Clinique item = new Clinique();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getDateClinique()))
        item.setDateClinique(DateUtil.parse(vo.getDateClinique()));
        if(StringUtil.isNotEmpty(vo.getAntecedentsPersonnels()))
        item.setAntecedentsPersonnels(vo.getAntecedentsPersonnels());
        if(StringUtil.isNotEmpty(vo.getAntecedentsFamiliaux()))
        item.setAntecedentsFamiliaux(vo.getAntecedentsFamiliaux());
        if(StringUtil.isNotEmpty(vo.getHistoireMaladie()))
        item.setHistoireMaladie(vo.getHistoireMaladie());
        if(StringUtil.isNotEmpty(vo.getExamenClinique()))
        item.setExamenClinique(vo.getExamenClinique());
        if(StringUtil.isNotEmpty(vo.getConclusionClinique()))
        item.setConclusionClinique(vo.getConclusionClinique());
    if(vo.getDossierMedicaleVo()!=null && this.dossierMedicale)
        item.setDossierMedicale(dossierMedicaleConverter.toItem(vo.getDossierMedicaleVo())) ;


return item;
}
}

@Override
public CliniqueVo toVo(Clinique item) {
if (item == null) {
return null;
} else {
CliniqueVo vo = new CliniqueVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(item.getDateClinique()!=null)
        vo.setDateClinique(DateUtil.formateDate(item.getDateClinique()));
        if(StringUtil.isNotEmpty(item.getAntecedentsPersonnels()))
        vo.setAntecedentsPersonnels(item.getAntecedentsPersonnels());

        if(StringUtil.isNotEmpty(item.getAntecedentsFamiliaux()))
        vo.setAntecedentsFamiliaux(item.getAntecedentsFamiliaux());

        if(StringUtil.isNotEmpty(item.getHistoireMaladie()))
        vo.setHistoireMaladie(item.getHistoireMaladie());

        if(StringUtil.isNotEmpty(item.getExamenClinique()))
        vo.setExamenClinique(item.getExamenClinique());

        if(StringUtil.isNotEmpty(item.getConclusionClinique()))
        vo.setConclusionClinique(item.getConclusionClinique());

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
