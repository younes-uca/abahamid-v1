package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Soin;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface SoinDao extends JpaRepository<Soin,Long> {



    @Query("SELECT item FROM Soin item ORDER BY item.dateSoin ASC")
    List<Soin> findAll();


    List<Soin> findByInfirmierRef(String ref);
    int deleteByInfirmierRef(String ref);

    List<Soin> findByInfirmierId(Long id);

    int deleteByInfirmierId(Long id);

    List<Soin> findByTraitementId(Long id);

    int deleteByTraitementId(Long id);


}
