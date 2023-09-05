package com.example.BackEnd.services;


import com.example.BackEnd.entities.Applicant;
import com.example.BackEnd.repositories.ApplicantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicantService {
    @Autowired
    ApplicantRepository repository;

    public Applicant saveApplicantInformation(Applicant applicantInfor){
        return repository.save(applicantInfor);
    }
    public Optional<Applicant> getApplicantById(int id){
        return repository.findById(id);
    }
    public List<Applicant> getApplicants(){
        return repository.findAll();
    }
    public String deleteApplicant(int id){
        repository.deleteById(id);
        return "Applicant successfully deleted";
    }

}
