package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.Medecin;
import com.ird.faa.ws.rest.provided.vo.MedecinVo;

@Component
public class MedecinConverter extends AbstractConverter<Medecin,MedecinVo>{


public  MedecinConverter(){
init(true);
}

@Override
public Medecin toItem(MedecinVo vo) {
if (vo == null) {
return null;
} else {
Medecin item = new Medecin();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getNumeroMatricule()))
        item.setNumeroMatricule(vo.getNumeroMatricule());
        if(StringUtil.isNotEmpty(vo.getEmailPrincipale()))
        item.setEmailPrincipale(vo.getEmailPrincipale());
            item.setCredentialsNonExpired(vo.getCredentialsNonExpired());
            item.setEnabled(vo.getEnabled());
            item.setAccountNonExpired(vo.getAccountNonExpired());
            item.setAccountNonLocked(vo.getAccountNonLocked());
            item.setPasswordChanged(vo.getPasswordChanged());
        if(StringUtil.isNotEmpty(vo.getCreatedAt()))
        item.setCreatedAt(DateUtil.parse(vo.getCreatedAt()));
        if(StringUtil.isNotEmpty(vo.getUpdatedAt()))
        item.setUpdatedAt(DateUtil.parse(vo.getUpdatedAt()));
        if(StringUtil.isNotEmpty(vo.getUsername()))
        item.setUsername(vo.getUsername());
        if(StringUtil.isNotEmpty(vo.getPassword()))
        item.setPassword(vo.getPassword());
        if(StringUtil.isNotEmpty(vo.getPrenom()))
        item.setPrenom(vo.getPrenom());
        if(StringUtil.isNotEmpty(vo.getNom()))
        item.setNom(vo.getNom());
        if(StringUtil.isNotEmpty(vo.getRole()))
        item.setRole(vo.getRole());


return item;
}
}

@Override
public MedecinVo toVo(Medecin item) {
if (item == null) {
return null;
} else {
MedecinVo vo = new MedecinVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getNumeroMatricule()))
        vo.setNumeroMatricule(item.getNumeroMatricule());

        if(StringUtil.isNotEmpty(item.getEmailPrincipale()))
        vo.setEmailPrincipale(item.getEmailPrincipale());

        vo.setCredentialsNonExpired(item.getCredentialsNonExpired());
        vo.setEnabled(item.getEnabled());
        vo.setAccountNonExpired(item.getAccountNonExpired());
        vo.setAccountNonLocked(item.getAccountNonLocked());
        vo.setPasswordChanged(item.getPasswordChanged());
        if(item.getCreatedAt()!=null)
        vo.setCreatedAt(DateUtil.formateDate(item.getCreatedAt()));
        if(item.getUpdatedAt()!=null)
        vo.setUpdatedAt(DateUtil.formateDate(item.getUpdatedAt()));
        if(StringUtil.isNotEmpty(item.getUsername()))
        vo.setUsername(item.getUsername());

        if(StringUtil.isNotEmpty(item.getPassword()))
        vo.setPassword(item.getPassword());

        if(StringUtil.isNotEmpty(item.getPrenom()))
        vo.setPrenom(item.getPrenom());

        if(StringUtil.isNotEmpty(item.getNom()))
        vo.setNom(item.getNom());

        if(StringUtil.isNotEmpty(item.getRole()))
        vo.setRole(item.getRole());


return vo;
}
}

public void init(Boolean value) {
}

































}
