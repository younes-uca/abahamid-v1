package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Examen;


@Repository
public interface ExamenDao extends JpaRepository<Examen,Long> {




    Examen findByCode(String code);

    int deleteByCode(String code);



}
