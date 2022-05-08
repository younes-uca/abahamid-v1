package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.TypeImage;


@Repository
public interface TypeImageDao extends JpaRepository<TypeImage,Long> {




    TypeImage findByCode(String code);

    int deleteByCode(String code);



}
