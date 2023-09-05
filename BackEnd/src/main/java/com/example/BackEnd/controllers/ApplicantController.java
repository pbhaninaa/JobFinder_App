package com.example.BackEnd.controllers;

import com.example.BackEnd.entities.Applicant;
import com.example.BackEnd.services.ApplicantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/applicant")
public class ApplicantController {

    private final ApplicantService userService;

    @Autowired
    public ApplicantController(ApplicantService userService) {
        this.userService = userService;
    }

    @PostMapping("/save")
    public Applicant addApplicant(@RequestBody Applicant applicant) {
        return userService.saveApplicantInformation(applicant);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Applicant> getApplicantById(@PathVariable int id) {
        Optional<Applicant> applicantOptional = userService.getApplicantById(id);

        if (applicantOptional.isPresent()) {
            // Applicant found
            Applicant applicant = applicantOptional.get();
            return ResponseEntity.ok(applicant);
        } else {
            // Applicant not found
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/get/all")
    public List<Applicant> getAllApplicants() {
        return userService.getApplicants();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteApplicantById(@PathVariable int id) {

        return userService.deleteApplicant(id);
    }
}
