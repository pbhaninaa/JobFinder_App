package com.example.BackEnd.services;

import com.example.BackEnd.entities.Experience;
import com.example.BackEnd.repositories.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ExperienceService {
    @Autowired
    ExperienceRepository repository;

    public List<Experience> saveExperience(List<Experience> experience){
        return repository.saveAll(experience);
    }
    public Optional<Experience> getExperienceById(int id){
        return repository.findById(id);
    }
    public List<Experience> getExperiencesByApplicantId(int id){
        return repository.findByApplicantId(id);
    }
    public String deleteExperience(int id){
        repository.deleteById(id);
        return "Experience successfully deleted";
    }

}
