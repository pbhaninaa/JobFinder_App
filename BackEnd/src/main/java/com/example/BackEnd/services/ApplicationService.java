package com.example.BackEnd.services;

import com.example.BackEnd.entities.Application;
import com.example.BackEnd.repositories.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {
    @Autowired
    ApplicationRepository repository;

    public List<Application> saveApplicationInformation(List<Application> application){
        return repository.saveAll(application);
    }
    public Optional<Application> getApplicationById(int id){
        return repository.findById(id);
    }

    public List<Application> getApplicationsByApplicantId(int id){
        return repository.findByApplicantId(id);
    }
    public String deleteApplication(int id){
        repository.deleteById(id);
        return "Application successfully deleted";
    }

}

