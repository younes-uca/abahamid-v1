package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Infirmier;


@Repository
public interface InfirmierDao extends JpaRepository<Infirmier,Long> {




    Infirmier findByRef(String ref);

    int deleteByRef(String ref);



}
