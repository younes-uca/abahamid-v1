package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.PatientContact;


@Repository
public interface PatientContactDao extends JpaRepository<PatientContact,Long> {




    PatientContact findByRef(String ref);

    int deleteByRef(String ref);

    List<PatientContact> findByRelationCode(String code);
    int deleteByRelationCode(String code);

    List<PatientContact> findByRelationId(Long id);

    int deleteByRelationId(Long id);


}
