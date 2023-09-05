package com.example.BackEnd.controllers;

import com.example.BackEnd.entities.Experience;
import com.example.BackEnd.services.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/experience") // Base URL for this controller
public class ExperienceController {

    private final ExperienceService experienceService;

    @Autowired
    public ExperienceController(ExperienceService experienceService) {
        this.experienceService = experienceService;
    }

    @PostMapping("/add")
    public List<Experience> addExperience(@RequestBody List<Experience> experience) {
        return experienceService.saveExperience(experience);
    }
//
//    @GetMapping("/{id}")
//    public Optional<Experience> getExperienceById(@PathVariable int id) {
//        return experienceService.getExperienceById(id);
//    }

    @GetMapping("/list/{id}")
    public List<Experience> getAllExperiences(@PathVariable int id) {
        return experienceService.getExperiencesByApplicantId(id);
    }

    @DeleteMapping("/{id}")
    public String deleteExperienceById(@PathVariable int id) {
        experienceService.deleteExperience(id);
        return "Experience successfully deleted";
    }
}
