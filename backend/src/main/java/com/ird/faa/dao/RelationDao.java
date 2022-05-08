package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Relation;


@Repository
public interface RelationDao extends JpaRepository<Relation,Long> {




    Relation findByCode(String code);

    int deleteByCode(String code);



}
