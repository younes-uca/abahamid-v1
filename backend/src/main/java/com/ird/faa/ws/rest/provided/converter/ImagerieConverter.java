package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Imagerie;
import com.ird.faa.ws.rest.provided.vo.ImagerieVo;

@Component
public class ImagerieConverter extends AbstractConverter<Imagerie,ImagerieVo>{

        @Autowired
        private DossierMedicaleConverter dossierMedicaleConverter ;
        @Autowired
        private TypeImageConverter typeImageConverter ;
        @Autowired
        private PhaseImageConverter phaseImageConverter ;
    private Boolean typeImage;
    private Boolean phaseImage;
    private Boolean dossierMedicale;

public  ImagerieConverter(){
init(true);
}

@Override
public Imagerie toItem(ImagerieVo vo) {
if (vo == null) {
return null;
} else {
Imagerie item = new Imagerie();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getDateImagerie()))
        item.setDateImagerie(DateUtil.parse(vo.getDateImagerie()));
        if(StringUtil.isNotEmpty(vo.getImageScan()))
        item.setImageScan(vo.getImageScan());
        if(StringUtil.isNotEmpty(vo.getCommanetaire()))
        item.setCommanetaire(vo.getCommanetaire());
    if(vo.getTypeImageVo()!=null && this.typeImage)
        item.setTypeImage(typeImageConverter.toItem(vo.getTypeImageVo())) ;
    if(vo.getPhaseImageVo()!=null && this.phaseImage)
        item.setPhaseImage(phaseImageConverter.toItem(vo.getPhaseImageVo())) ;
    if(vo.getDossierMedicaleVo()!=null && this.dossierMedicale)
        item.setDossierMedicale(dossierMedicaleConverter.toItem(vo.getDossierMedicaleVo())) ;


return item;
}
}

@Override
public ImagerieVo toVo(Imagerie item) {
if (item == null) {
return null;
} else {
ImagerieVo vo = new ImagerieVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(item.getDateImagerie()!=null)
        vo.setDateImagerie(DateUtil.formateDate(item.getDateImagerie()));
        if(StringUtil.isNotEmpty(item.getImageScan()))
        vo.setImageScan(item.getImageScan());

        if(StringUtil.isNotEmpty(item.getCommanetaire()))
        vo.setCommanetaire(item.getCommanetaire());

    if(item.getTypeImage()!=null && this.typeImage) {
        vo.setTypeImageVo(typeImageConverter.toVo(item.getTypeImage())) ;
    }
    if(item.getPhaseImage()!=null && this.phaseImage) {
        vo.setPhaseImageVo(phaseImageConverter.toVo(item.getPhaseImage())) ;
    }
    if(item.getDossierMedicale()!=null && this.dossierMedicale) {
        vo.setDossierMedicaleVo(dossierMedicaleConverter.toVo(item.getDossierMedicale())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    typeImage = value;
    phaseImage = value;
    dossierMedicale = value;
}


        public DossierMedicaleConverter getDossierMedicaleConverter(){
        return this.dossierMedicaleConverter;
        }
        public void setDossierMedicaleConverter(DossierMedicaleConverter dossierMedicaleConverter ){
        this.dossierMedicaleConverter = dossierMedicaleConverter;
        }
        public TypeImageConverter getTypeImageConverter(){
        return this.typeImageConverter;
        }
        public void setTypeImageConverter(TypeImageConverter typeImageConverter ){
        this.typeImageConverter = typeImageConverter;
        }
        public PhaseImageConverter getPhaseImageConverter(){
        return this.phaseImageConverter;
        }
        public void setPhaseImageConverter(PhaseImageConverter phaseImageConverter ){
        this.phaseImageConverter = phaseImageConverter;
        }

    public boolean  isTypeImage(){
    return this.typeImage;
    }
    public void  setTypeImage(boolean typeImage){
    this.typeImage = typeImage;
    }
    public boolean  isPhaseImage(){
    return this.phaseImage;
    }
    public void  setPhaseImage(boolean phaseImage){
    this.phaseImage = phaseImage;
    }
    public boolean  isDossierMedicale(){
    return this.dossierMedicale;
    }
    public void  setDossierMedicale(boolean dossierMedicale){
    this.dossierMedicale = dossierMedicale;
    }














}
