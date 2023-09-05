package com.example.BackEnd.controllers;

import com.example.BackEnd.entities.Education;
import com.example.BackEnd.services.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/education") // Base URL for this controller
public class EducationController {

    private final EducationService educationService;

    @Autowired
    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    @PostMapping("/add")
    public List<Education> addEducation(@RequestBody List<Education> education) {
        return educationService.saveEducationInformation(education);
    }

//    @GetMapping("/{id}")
//    public Optional<Education> getEducationById(@PathVariable int id) {
//        return educationService.getEducationById(id);
//    }

    @GetMapping("/list/{id}")
    public List<Education> getAllEducations(@PathVariable int id) {
        return educationService.getEducationsByApplicantId(id);
    }

    @DeleteMapping("/{id}")
    public String deleteEducationById(@PathVariable int id) {
        educationService.deleteEducation(id);
        return "Education successfully deleted";
    }
}
