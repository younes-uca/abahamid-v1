package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Tag;

import org.springframework.data.jpa.repository.Query;

@Repository
public interface TagDao extends JpaRepository<Tag,Long> {



    @Query("SELECT item FROM Tag item ORDER BY item.libelle ASC")
    List<Tag> findAll();

    Tag findByReference(String reference);

    int deleteByReference(String reference);



}
