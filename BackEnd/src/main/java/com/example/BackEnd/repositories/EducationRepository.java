package com.example.BackEnd.repositories;

import com.example.BackEnd.entities.Education;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EducationRepository extends JpaRepository<Education,Integer> {
    List<Education> findByApplicantId(int id);

}
