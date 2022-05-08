package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Biologie;
import com.ird.faa.ws.rest.provided.vo.BiologieVo;

@Component
public class BiologieConverter extends AbstractConverter<Biologie,BiologieVo>{

        @Autowired
        private ExamenConverter examenConverter ;
        @Autowired
        private DossierMedicaleConverter dossierMedicaleConverter ;
    private Boolean examen;
    private Boolean dossierMedicale;

public  BiologieConverter(){
init(true);
}

@Override
public Biologie toItem(BiologieVo vo) {
if (vo == null) {
return null;
} else {
Biologie item = new Biologie();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getDateBiologie()))
        item.setDateBiologie(DateUtil.parse(vo.getDateBiologie()));
        if(StringUtil.isNotEmpty(vo.getResultat()))
        item.setResultat(vo.getResultat());
    if(vo.getExamenVo()!=null && this.examen)
        item.setExamen(examenConverter.toItem(vo.getExamenVo())) ;
    if(vo.getDossierMedicaleVo()!=null && this.dossierMedicale)
        item.setDossierMedicale(dossierMedicaleConverter.toItem(vo.getDossierMedicaleVo())) ;


return item;
}
}

@Override
public BiologieVo toVo(Biologie item) {
if (item == null) {
return null;
} else {
BiologieVo vo = new BiologieVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(item.getDateBiologie()!=null)
        vo.setDateBiologie(DateUtil.formateDate(item.getDateBiologie()));
        if(StringUtil.isNotEmpty(item.getResultat()))
        vo.setResultat(item.getResultat());

    if(item.getExamen()!=null && this.examen) {
        vo.setExamenVo(examenConverter.toVo(item.getExamen())) ;
    }
    if(item.getDossierMedicale()!=null && this.dossierMedicale) {
        vo.setDossierMedicaleVo(dossierMedicaleConverter.toVo(item.getDossierMedicale())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    examen = value;
    dossierMedicale = value;
}


        public ExamenConverter getExamenConverter(){
        return this.examenConverter;
        }
        public void setExamenConverter(ExamenConverter examenConverter ){
        this.examenConverter = examenConverter;
        }
        public DossierMedicaleConverter getDossierMedicaleConverter(){
        return this.dossierMedicaleConverter;
        }
        public void setDossierMedicaleConverter(DossierMedicaleConverter dossierMedicaleConverter ){
        this.dossierMedicaleConverter = dossierMedicaleConverter;
        }

    public boolean  isExamen(){
    return this.examen;
    }
    public void  setExamen(boolean examen){
    this.examen = examen;
    }
    public boolean  isDossierMedicale(){
    return this.dossierMedicale;
    }
    public void  setDossierMedicale(boolean dossierMedicale){
    this.dossierMedicale = dossierMedicale;
    }










}
