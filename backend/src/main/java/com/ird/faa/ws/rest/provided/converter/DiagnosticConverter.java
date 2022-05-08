package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Diagnostic;
import com.ird.faa.ws.rest.provided.vo.DiagnosticVo;

@Component
public class DiagnosticConverter extends AbstractConverter<Diagnostic,DiagnosticVo>{

        @Autowired
        private DossierMedicaleConverter dossierMedicaleConverter ;
    private Boolean dossierMedicale;

public  DiagnosticConverter(){
init(true);
}

@Override
public Diagnostic toItem(DiagnosticVo vo) {
if (vo == null) {
return null;
} else {
Diagnostic item = new Diagnostic();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getDateDiagnostic()))
        item.setDateDiagnostic(DateUtil.parse(vo.getDateDiagnostic()));
        if(StringUtil.isNotEmpty(vo.getDiag()))
        item.setDiag(vo.getDiag());
    if(vo.getDossierMedicaleVo()!=null && this.dossierMedicale)
        item.setDossierMedicale(dossierMedicaleConverter.toItem(vo.getDossierMedicaleVo())) ;


return item;
}
}

@Override
public DiagnosticVo toVo(Diagnostic item) {
if (item == null) {
return null;
} else {
DiagnosticVo vo = new DiagnosticVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(item.getDateDiagnostic()!=null)
        vo.setDateDiagnostic(DateUtil.formateDate(item.getDateDiagnostic()));
        if(StringUtil.isNotEmpty(item.getDiag()))
        vo.setDiag(item.getDiag());

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
