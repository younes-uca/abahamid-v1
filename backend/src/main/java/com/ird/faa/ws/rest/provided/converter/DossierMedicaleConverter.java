package  com.ird.faa.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.ird.faa.service.util.*;


import com.ird.faa.bean.DossierMedicale;
import com.ird.faa.ws.rest.provided.vo.DossierMedicaleVo;

@Component
public class DossierMedicaleConverter extends AbstractConverter<DossierMedicale,DossierMedicaleVo>{

        @Autowired
        private PatientContactConverter patientContactConverter ;
        @Autowired
        private EvoSuivConverter evoSuivConverter ;
        @Autowired
        private CompteRenduConverter compteRenduConverter ;
        @Autowired
        private TraitementConverter traitementConverter ;
        @Autowired
        private DossierMedicaleTagConverter dossierMedicaleTagConverter ;
        @Autowired
        private PatientConverter patientConverter ;
        @Autowired
        private DiagnosticConverter diagnosticConverter ;
        @Autowired
        private CliniqueConverter cliniqueConverter ;
        @Autowired
        private BiologieConverter biologieConverter ;
        @Autowired
        private ImagerieConverter imagerieConverter ;
    private Boolean patient;
    private Boolean patientContact;
    private Boolean traitement;
        private Boolean diagnostics;
        private Boolean cliniques;
        private Boolean biologies;
        private Boolean imageries;
        private Boolean compteRendus;
        private Boolean evoSuivs;
        private Boolean dossierMedicaleTags;

public  DossierMedicaleConverter(){
init(true);
}

@Override
public DossierMedicale toItem(DossierMedicaleVo vo) {
if (vo == null) {
return null;
} else {
DossierMedicale item = new DossierMedicale();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getRef()))
        item.setRef(vo.getRef());
    if(vo.getPatientVo()!=null && this.patient)
        item.setPatient(patientConverter.toItem(vo.getPatientVo())) ;
    if(vo.getPatientContactVo()!=null && this.patientContact)
        item.setPatientContact(patientContactConverter.toItem(vo.getPatientContactVo())) ;
    if(vo.getTraitementVo()!=null && this.traitement)
        item.setTraitement(traitementConverter.toItem(vo.getTraitementVo())) ;

    if(ListUtil.isNotEmpty(vo.getDiagnosticsVo()) && this.diagnostics)
        item.setDiagnostics(diagnosticConverter.toItem(vo.getDiagnosticsVo()));
    if(ListUtil.isNotEmpty(vo.getCliniquesVo()) && this.cliniques)
        item.setCliniques(cliniqueConverter.toItem(vo.getCliniquesVo()));
    if(ListUtil.isNotEmpty(vo.getBiologiesVo()) && this.biologies)
        item.setBiologies(biologieConverter.toItem(vo.getBiologiesVo()));
    if(ListUtil.isNotEmpty(vo.getImageriesVo()) && this.imageries)
        item.setImageries(imagerieConverter.toItem(vo.getImageriesVo()));
    if(ListUtil.isNotEmpty(vo.getCompteRendusVo()) && this.compteRendus)
        item.setCompteRendus(compteRenduConverter.toItem(vo.getCompteRendusVo()));
    if(ListUtil.isNotEmpty(vo.getEvoSuivsVo()) && this.evoSuivs)
        item.setEvoSuivs(evoSuivConverter.toItem(vo.getEvoSuivsVo()));
    if(ListUtil.isNotEmpty(vo.getDossierMedicaleTagsVo()) && this.dossierMedicaleTags)
        item.setDossierMedicaleTags(dossierMedicaleTagConverter.toItem(vo.getDossierMedicaleTagsVo()));

return item;
}
}

@Override
public DossierMedicaleVo toVo(DossierMedicale item) {
if (item == null) {
return null;
} else {
DossierMedicaleVo vo = new DossierMedicaleVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getRef()))
        vo.setRef(item.getRef());

    if(item.getPatient()!=null && this.patient) {
        vo.setPatientVo(patientConverter.toVo(item.getPatient())) ;
    }
    if(item.getPatientContact()!=null && this.patientContact) {
        vo.setPatientContactVo(patientContactConverter.toVo(item.getPatientContact())) ;
    }
    if(item.getTraitement()!=null && this.traitement) {
        vo.setTraitementVo(traitementConverter.toVo(item.getTraitement())) ;
    }
        if(ListUtil.isNotEmpty(item.getDiagnostics()) && this.diagnostics){
        diagnosticConverter.init(true);
        diagnosticConverter.setDossierMedicale(false);
        vo.setDiagnosticsVo(diagnosticConverter.toVo(item.getDiagnostics()));
        diagnosticConverter.setDossierMedicale(true);
        }
        if(ListUtil.isNotEmpty(item.getCliniques()) && this.cliniques){
        cliniqueConverter.init(true);
        cliniqueConverter.setDossierMedicale(false);
        vo.setCliniquesVo(cliniqueConverter.toVo(item.getCliniques()));
        cliniqueConverter.setDossierMedicale(true);
        }
        if(ListUtil.isNotEmpty(item.getBiologies()) && this.biologies){
        biologieConverter.init(true);
        biologieConverter.setDossierMedicale(false);
        vo.setBiologiesVo(biologieConverter.toVo(item.getBiologies()));
        biologieConverter.setDossierMedicale(true);
        }
        if(ListUtil.isNotEmpty(item.getImageries()) && this.imageries){
        imagerieConverter.init(true);
        imagerieConverter.setDossierMedicale(false);
        vo.setImageriesVo(imagerieConverter.toVo(item.getImageries()));
        imagerieConverter.setDossierMedicale(true);
        }
        if(ListUtil.isNotEmpty(item.getCompteRendus()) && this.compteRendus){
        compteRenduConverter.init(true);
        compteRenduConverter.setDossierMedicale(false);
        vo.setCompteRendusVo(compteRenduConverter.toVo(item.getCompteRendus()));
        compteRenduConverter.setDossierMedicale(true);
        }
        if(ListUtil.isNotEmpty(item.getEvoSuivs()) && this.evoSuivs){
        evoSuivConverter.init(true);
        evoSuivConverter.setDossierMedicale(false);
        vo.setEvoSuivsVo(evoSuivConverter.toVo(item.getEvoSuivs()));
        evoSuivConverter.setDossierMedicale(true);
        }
        if(ListUtil.isNotEmpty(item.getDossierMedicaleTags()) && this.dossierMedicaleTags){
        dossierMedicaleTagConverter.init(true);
        dossierMedicaleTagConverter.setDossierMedicale(false);
        vo.setDossierMedicaleTagsVo(dossierMedicaleTagConverter.toVo(item.getDossierMedicaleTags()));
        dossierMedicaleTagConverter.setDossierMedicale(true);
        }

return vo;
}
}

public void init(Boolean value) {
    patient = value;
    patientContact = value;
    traitement = value;
        diagnostics = value;
        cliniques = value;
        biologies = value;
        imageries = value;
        compteRendus = value;
        evoSuivs = value;
        dossierMedicaleTags = value;
}


        public PatientContactConverter getPatientContactConverter(){
        return this.patientContactConverter;
        }
        public void setPatientContactConverter(PatientContactConverter patientContactConverter ){
        this.patientContactConverter = patientContactConverter;
        }
        public EvoSuivConverter getEvoSuivConverter(){
        return this.evoSuivConverter;
        }
        public void setEvoSuivConverter(EvoSuivConverter evoSuivConverter ){
        this.evoSuivConverter = evoSuivConverter;
        }
        public CompteRenduConverter getCompteRenduConverter(){
        return this.compteRenduConverter;
        }
        public void setCompteRenduConverter(CompteRenduConverter compteRenduConverter ){
        this.compteRenduConverter = compteRenduConverter;
        }
        public TraitementConverter getTraitementConverter(){
        return this.traitementConverter;
        }
        public void setTraitementConverter(TraitementConverter traitementConverter ){
        this.traitementConverter = traitementConverter;
        }
        public DossierMedicaleTagConverter getDossierMedicaleTagConverter(){
        return this.dossierMedicaleTagConverter;
        }
        public void setDossierMedicaleTagConverter(DossierMedicaleTagConverter dossierMedicaleTagConverter ){
        this.dossierMedicaleTagConverter = dossierMedicaleTagConverter;
        }
        public PatientConverter getPatientConverter(){
        return this.patientConverter;
        }
        public void setPatientConverter(PatientConverter patientConverter ){
        this.patientConverter = patientConverter;
        }
        public DiagnosticConverter getDiagnosticConverter(){
        return this.diagnosticConverter;
        }
        public void setDiagnosticConverter(DiagnosticConverter diagnosticConverter ){
        this.diagnosticConverter = diagnosticConverter;
        }
        public CliniqueConverter getCliniqueConverter(){
        return this.cliniqueConverter;
        }
        public void setCliniqueConverter(CliniqueConverter cliniqueConverter ){
        this.cliniqueConverter = cliniqueConverter;
        }
        public BiologieConverter getBiologieConverter(){
        return this.biologieConverter;
        }
        public void setBiologieConverter(BiologieConverter biologieConverter ){
        this.biologieConverter = biologieConverter;
        }
        public ImagerieConverter getImagerieConverter(){
        return this.imagerieConverter;
        }
        public void setImagerieConverter(ImagerieConverter imagerieConverter ){
        this.imagerieConverter = imagerieConverter;
        }

    public boolean  isPatient(){
    return this.patient;
    }
    public void  setPatient(boolean patient){
    this.patient = patient;
    }
    public boolean  isPatientContact(){
    return this.patientContact;
    }
    public void  setPatientContact(boolean patientContact){
    this.patientContact = patientContact;
    }
    public boolean  isTraitement(){
    return this.traitement;
    }
    public void  setTraitement(boolean traitement){
    this.traitement = traitement;
    }









        public Boolean  isDiagnostics(){
        return this.diagnostics ;
        }
        public void  setDiagnostics(Boolean diagnostics ){
        this.diagnostics  = diagnostics ;
        }



        public Boolean  isCliniques(){
        return this.cliniques ;
        }
        public void  setCliniques(Boolean cliniques ){
        this.cliniques  = cliniques ;
        }



        public Boolean  isBiologies(){
        return this.biologies ;
        }
        public void  setBiologies(Boolean biologies ){
        this.biologies  = biologies ;
        }



        public Boolean  isImageries(){
        return this.imageries ;
        }
        public void  setImageries(Boolean imageries ){
        this.imageries  = imageries ;
        }



        public Boolean  isCompteRendus(){
        return this.compteRendus ;
        }
        public void  setCompteRendus(Boolean compteRendus ){
        this.compteRendus  = compteRendus ;
        }





        public Boolean  isEvoSuivs(){
        return this.evoSuivs ;
        }
        public void  setEvoSuivs(Boolean evoSuivs ){
        this.evoSuivs  = evoSuivs ;
        }



        public Boolean  isDossierMedicaleTags(){
        return this.dossierMedicaleTags ;
        }
        public void  setDossierMedicaleTags(Boolean dossierMedicaleTags ){
        this.dossierMedicaleTags  = dossierMedicaleTags ;
        }


}
