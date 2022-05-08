package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.Traitement;


@Repository
public interface TraitementDao extends JpaRepository<Traitement,Long> {






    List<Traitement> findByRecueilDeDonnesId(Long id);

    int deleteByRecueilDeDonnesId(Long id);


}
