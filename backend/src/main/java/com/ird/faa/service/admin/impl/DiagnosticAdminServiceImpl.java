package com.ird.faa.service.admin.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.Diagnostic;
import com.ird.faa.bean.DossierMedicale;
import com.ird.faa.dao.DiagnosticDao;
import com.ird.faa.service.admin.facade.DiagnosticAdminService;
import com.ird.faa.service.admin.facade.DossierMedicaleAdminService;

import com.ird.faa.ws.rest.provided.vo.DiagnosticVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class DiagnosticAdminServiceImpl extends AbstractServiceImpl<Diagnostic> implements DiagnosticAdminService {

@Autowired
private DiagnosticDao diagnosticDao;

        @Autowired
        private DossierMedicaleAdminService dossierMedicaleService ;


@Autowired
private EntityManager entityManager;


@Override
public List<Diagnostic> findAll(){
        String query = "SELECT o FROM Diagnostic o where 1=1 ";
        query+= " ORDER BY o.dateDiagnostic";
        return entityManager.createQuery(query).getResultList();
}

        @Override
        public List<Diagnostic> findByDossierMedicaleRef(String ref){
        return diagnosticDao.findByDossierMedicaleRef(ref);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleRef(String ref){
        return diagnosticDao.deleteByDossierMedicaleRef(ref);
        }

        @Override
        public List<Diagnostic> findByDossierMedicaleId(Long id){
        return diagnosticDao.findByDossierMedicaleId(id);
        }

        @Override
        @Transactional
        public int deleteByDossierMedicaleId(Long id){
        return diagnosticDao.deleteByDossierMedicaleId(id);
        }


@Override
public Diagnostic findById(Long id){
if(id==null) return null;
return diagnosticDao.getOne(id);
}

@Override
public Diagnostic findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(diagnosticDao.findById(id).isPresent())  {
diagnosticDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public Diagnostic update(Diagnostic diagnostic){
Diagnostic foundedDiagnostic = findById(diagnostic.getId());
if(foundedDiagnostic==null) return null;
else{
return  diagnosticDao.save(diagnostic);
}
}

@Override
public Diagnostic save (Diagnostic diagnostic){



    findDossierMedicale(diagnostic);

return diagnosticDao.save(diagnostic);


}

@Override
public List<Diagnostic> save(List<Diagnostic> diagnostics){
List<Diagnostic> list = new ArrayList<>();
for(Diagnostic diagnostic: diagnostics){
list.add(save(diagnostic));
}
return list;
}



@Override
@Transactional
public int delete(Diagnostic diagnostic){
    if(diagnostic.getId()==null) return -1;
    Diagnostic foundedDiagnostic = findById(diagnostic.getId());
    if(foundedDiagnostic==null) return -1;
diagnosticDao.delete(foundedDiagnostic);
return 1;
}


public List<Diagnostic> findByCriteria(DiagnosticVo diagnosticVo){

String query = "SELECT o FROM Diagnostic o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",diagnosticVo.getId());
        query += SearchUtil.addConstraintDate( "o", "dateDiagnostic","=",diagnosticVo.getDateDiagnostic());
            query += SearchUtil.addConstraint( "o", "diag","LIKE",diagnosticVo.getDiag());
            query += SearchUtil.addConstraintMinMaxDate("o","dateDiagnostic",diagnosticVo.getDateDiagnosticMin(),diagnosticVo.getDateDiagnosticMax());
    if(diagnosticVo.getDossierMedicaleVo()!=null){
        query += SearchUtil.addConstraint( "o", "dossierMedicale.id","=",diagnosticVo.getDossierMedicaleVo().getId());
            query += SearchUtil.addConstraint( "o", "dossierMedicale.ref","LIKE",diagnosticVo.getDossierMedicaleVo().getRef());
    }

query+= " ORDER BY o.dateDiagnostic";
return entityManager.createQuery(query).getResultList();
}

    private void findDossierMedicale(Diagnostic diagnostic){
        DossierMedicale loadedDossierMedicale =dossierMedicaleService.findByIdOrRef(diagnostic.getDossierMedicale());

    if(loadedDossierMedicale==null ) {
        return;
    }
    diagnostic.setDossierMedicale(loadedDossierMedicale);
    }

@Override
@Transactional
public void delete(List<Diagnostic> diagnostics){
        if(ListUtil.isNotEmpty(diagnostics)){
        diagnostics.forEach(e->diagnosticDao.delete(e));
        }
}
@Override
public void update(List<Diagnostic> diagnostics){
if(ListUtil.isNotEmpty(diagnostics)){
diagnostics.forEach(e->diagnosticDao.save(e));
}
}



}
