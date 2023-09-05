package com.example.BackEnd.services;

import com.example.BackEnd.entities.Interview;
import com.example.BackEnd.repositories.InterviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InterviewsService {


        @Autowired
        InterviewRepository repository;

        public List<Interview> saveInterviewInformation(List<Interview> interview){
            return repository.saveAll(interview);
        }
        public Optional<Interview> getInterviewById(int id){
            return repository.findById(id);
        }
        public List<Interview> getInterviewsByApplicantId(int id){
            return repository.findByApplicantId(id);
        }
        public String deleteInterview(int id){
            repository.deleteById(id);
            return "Interview successfully deleted";
        }

    }


