package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.RecueilDeDonnes;


@Repository
public interface RecueilDeDonnesDao extends JpaRepository<RecueilDeDonnes,Long> {







}
