package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Patient;


@Repository
public interface PatientDao extends JpaRepository<Patient,Long> {




    Patient findByCin(String cin);

    int deleteByCin(String cin);

    List<Patient> findByVilleCode(String code);
    int deleteByVilleCode(String code);

    List<Patient> findByVilleId(Long id);

    int deleteByVilleId(Long id);
    List<Patient> findBySexeCode(String code);
    int deleteBySexeCode(String code);

    List<Patient> findBySexeId(Long id);

    int deleteBySexeId(Long id);


}
