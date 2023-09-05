package com.example.BackEnd.controllers;

import com.example.BackEnd.entities.Application;
import com.example.BackEnd.services.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/application") // Base URL for this controller
public class ApplicationController {

    private final ApplicationService applicationService;

    @Autowired
    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping("/add")
    public List<Application> addApplication(@RequestBody List<Application> application) {
        return applicationService.saveApplicationInformation(application);
    }

//    @GetMapping("/{id}")
//    public Optional<Application> getApplicationById(@PathVariable int id) {
//        return applicationService.getApplicationById(id);
//    }

    @GetMapping("/list/{id}")
    public List<Application> getAllApplications(@PathVariable int id) {
        return applicationService.getApplicationsByApplicantId(id);
    }

    @DeleteMapping("/{id}")
    public String deleteApplicationById(@PathVariable int id) {
        applicationService.deleteApplication(id);
        return "Application successfully deleted";
    }
}
