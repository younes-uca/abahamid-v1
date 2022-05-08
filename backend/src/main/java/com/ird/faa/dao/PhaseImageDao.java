package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.PhaseImage;


@Repository
public interface PhaseImageDao extends JpaRepository<PhaseImage,Long> {




    PhaseImage findByCode(String code);

    int deleteByCode(String code);



}
