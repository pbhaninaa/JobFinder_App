package com.example.BackEnd.services;

import com.example.BackEnd.entities.Education;
import com.example.BackEnd.repositories.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EducationService {

        @Autowired
        EducationRepository repository;

        public List<Education> saveEducationInformation(List<Education> education){
            return repository.saveAll(education);
        }
        public Optional<Education> getEducationById(int id){
            return repository.findById(id);
        }

        public List<Education> getEducationsByApplicantId(int id){
            return repository.findByApplicantId(id);
        }
        public String deleteEducation(int id){
            repository.deleteById(id);
            return "Education successfully deleted";
        }

    }


