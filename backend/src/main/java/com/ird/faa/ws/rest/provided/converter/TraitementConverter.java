package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Traitement;
import com.ird.faa.ws.rest.provided.vo.TraitementVo;

@Component
public class TraitementConverter extends AbstractConverter<Traitement,TraitementVo>{

        @Autowired
        private RecueilDeDonnesConverter recueilDeDonnesConverter ;
        @Autowired
        private SoinConverter soinConverter ;
    private Boolean recueilDeDonnes;
        private Boolean soins;

public  TraitementConverter(){
init(true);
}

@Override
public Traitement toItem(TraitementVo vo) {
if (vo == null) {
return null;
} else {
Traitement item = new Traitement();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getImageOrdonnance()))
        item.setImageOrdonnance(vo.getImageOrdonnance());
        if(StringUtil.isNotEmpty(vo.getDossierMedicaleRef()))
        item.setDossierMedicaleRef(vo.getDossierMedicaleRef());
    if(vo.getRecueilDeDonnesVo()!=null && this.recueilDeDonnes)
        item.setRecueilDeDonnes(recueilDeDonnesConverter.toItem(vo.getRecueilDeDonnesVo())) ;

    if(ListUtil.isNotEmpty(vo.getSoinsVo()) && this.soins)
        item.setSoins(soinConverter.toItem(vo.getSoinsVo()));

return item;
}
}

@Override
public TraitementVo toVo(Traitement item) {
if (item == null) {
return null;
} else {
TraitementVo vo = new TraitementVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getImageOrdonnance()))
        vo.setImageOrdonnance(item.getImageOrdonnance());

        if(StringUtil.isNotEmpty(item.getDossierMedicaleRef()))
        vo.setDossierMedicaleRef(item.getDossierMedicaleRef());

    if(item.getRecueilDeDonnes()!=null && this.recueilDeDonnes) {
        vo.setRecueilDeDonnesVo(recueilDeDonnesConverter.toVo(item.getRecueilDeDonnes())) ;
    }
        if(ListUtil.isNotEmpty(item.getSoins()) && this.soins){
        soinConverter.init(true);
        soinConverter.setTraitement(false);
        vo.setSoinsVo(soinConverter.toVo(item.getSoins()));
        soinConverter.setTraitement(true);
        }

return vo;
}
}

public void init(Boolean value) {
    recueilDeDonnes = value;
        soins = value;
}


        public RecueilDeDonnesConverter getRecueilDeDonnesConverter(){
        return this.recueilDeDonnesConverter;
        }
        public void setRecueilDeDonnesConverter(RecueilDeDonnesConverter recueilDeDonnesConverter ){
        this.recueilDeDonnesConverter = recueilDeDonnesConverter;
        }
        public SoinConverter getSoinConverter(){
        return this.soinConverter;
        }
        public void setSoinConverter(SoinConverter soinConverter ){
        this.soinConverter = soinConverter;
        }

    public boolean  isRecueilDeDonnes(){
    return this.recueilDeDonnes;
    }
    public void  setRecueilDeDonnes(boolean recueilDeDonnes){
    this.recueilDeDonnes = recueilDeDonnes;
    }





        public Boolean  isSoins(){
        return this.soins ;
        }
        public void  setSoins(Boolean soins ){
        this.soins  = soins ;
        }






}
