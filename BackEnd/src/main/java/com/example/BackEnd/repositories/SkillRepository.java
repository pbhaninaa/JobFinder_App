package com.example.BackEnd.repositories;

import com.example.BackEnd.entities.Skill;
import com.example.BackEnd.entities.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SkillRepository extends JpaRepository<Skill, Integer> {
    List<Skill> findByApplicantId(int id);
}
