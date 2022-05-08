package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Patient;
import com.ird.faa.ws.rest.provided.vo.PatientVo;

@Component
public class PatientConverter extends AbstractConverter<Patient,PatientVo>{

        @Autowired
        private SexeConverter sexeConverter ;
        @Autowired
        private VilleConverter villeConverter ;
    private Boolean ville;
    private Boolean sexe;

public  PatientConverter(){
init(true);
}

@Override
public Patient toItem(PatientVo vo) {
if (vo == null) {
return null;
} else {
Patient item = new Patient();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getCin()))
        item.setCin(vo.getCin());
        if(StringUtil.isNotEmpty(vo.getNom()))
        item.setNom(vo.getNom());
        if(StringUtil.isNotEmpty(vo.getPrenom()))
        item.setPrenom(vo.getPrenom());
        if(StringUtil.isNotEmpty(vo.getDateDeNaissance()))
        item.setDateDeNaissance(DateUtil.parse(vo.getDateDeNaissance()));
        if(StringUtil.isNotEmpty(vo.getProfession()))
        item.setProfession(vo.getProfession());
        if(StringUtil.isNotEmpty(vo.getAdresse()))
        item.setAdresse(vo.getAdresse());
        if(StringUtil.isNotEmpty(vo.getTelephone()))
        item.setTelephone(vo.getTelephone());
    if(vo.getVilleVo()!=null && this.ville)
        item.setVille(villeConverter.toItem(vo.getVilleVo())) ;
    if(vo.getSexeVo()!=null && this.sexe)
        item.setSexe(sexeConverter.toItem(vo.getSexeVo())) ;


return item;
}
}

@Override
public PatientVo toVo(Patient item) {
if (item == null) {
return null;
} else {
PatientVo vo = new PatientVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getCin()))
        vo.setCin(item.getCin());

        if(StringUtil.isNotEmpty(item.getNom()))
        vo.setNom(item.getNom());

        if(StringUtil.isNotEmpty(item.getPrenom()))
        vo.setPrenom(item.getPrenom());

        if(item.getDateDeNaissance()!=null)
        vo.setDateDeNaissance(DateUtil.formateDate(item.getDateDeNaissance()));
        if(StringUtil.isNotEmpty(item.getProfession()))
        vo.setProfession(item.getProfession());

        if(StringUtil.isNotEmpty(item.getAdresse()))
        vo.setAdresse(item.getAdresse());

        if(StringUtil.isNotEmpty(item.getTelephone()))
        vo.setTelephone(item.getTelephone());

    if(item.getVille()!=null && this.ville) {
        vo.setVilleVo(villeConverter.toVo(item.getVille())) ;
    }
    if(item.getSexe()!=null && this.sexe) {
        vo.setSexeVo(sexeConverter.toVo(item.getSexe())) ;
    }

return vo;
}
}

public void init(Boolean value) {
    ville = value;
    sexe = value;
}


        public SexeConverter getSexeConverter(){
        return this.sexeConverter;
        }
        public void setSexeConverter(SexeConverter sexeConverter ){
        this.sexeConverter = sexeConverter;
        }
        public VilleConverter getVilleConverter(){
        return this.villeConverter;
        }
        public void setVilleConverter(VilleConverter villeConverter ){
        this.villeConverter = villeConverter;
        }

    public boolean  isVille(){
    return this.ville;
    }
    public void  setVille(boolean ville){
    this.ville = ville;
    }
    public boolean  isSexe(){
    return this.sexe;
    }
    public void  setSexe(boolean sexe){
    this.sexe = sexe;
    }




















}
