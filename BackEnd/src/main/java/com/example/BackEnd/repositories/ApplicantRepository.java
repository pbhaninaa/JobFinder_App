package com.example.BackEnd.repositories;


import com.example.BackEnd.entities.Applicant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicantRepository extends JpaRepository<Applicant, Integer> {

}
