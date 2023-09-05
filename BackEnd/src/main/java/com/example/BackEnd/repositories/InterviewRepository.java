package com.example.BackEnd.repositories;

import com.example.BackEnd.entities.Interview;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InterviewRepository extends JpaRepository<Interview, Integer> {
    List<Interview> findByApplicantId(int id);

}
