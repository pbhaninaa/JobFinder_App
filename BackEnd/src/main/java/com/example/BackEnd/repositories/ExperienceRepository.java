package com.example.BackEnd.repositories;

import com.example.BackEnd.entities.Experience;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExperienceRepository extends JpaRepository<Experience,Integer> {
    List<Experience> findByApplicantId(int id);

}
