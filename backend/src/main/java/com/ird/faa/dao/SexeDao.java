package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Sexe;


@Repository
public interface SexeDao extends JpaRepository<Sexe,Long> {




    Sexe findByCode(String code);

    int deleteByCode(String code);



}
