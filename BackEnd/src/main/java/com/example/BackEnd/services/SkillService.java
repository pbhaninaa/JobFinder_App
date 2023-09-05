package com.example.BackEnd.services;

import com.example.BackEnd.entities.Skill;
import com.example.BackEnd.repositories.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillService {
    @Autowired
    SkillRepository repository;

    public List<Skill> saveSkillInformation(List<Skill> skill) {
        return repository.saveAll(skill);
    }

    public Optional<Skill> getSkillById(int id) {
        return repository.findById(id);
    }

    public List<Skill> getSkillsByApplicantId(int id){
        return repository.findByApplicantId(id);
    }

    public String deleteSkill(int id) {
        repository.deleteById(id);
        return "Skill successfully deleted";
    }
}
