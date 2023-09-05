package com.example.BackEnd.controllers;

import com.example.BackEnd.entities.Interview;
import com.example.BackEnd.services.InterviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/interview") // Base URL for this controller
public class InterviewsController {

    private final InterviewsService interviewsService;

    @Autowired
    public InterviewsController(InterviewsService interviewsService) {
        this.interviewsService = interviewsService;
    }

    @PostMapping("/add")
    public List<Interview> addInterview(@RequestBody List<Interview> interview) {
        return interviewsService.saveInterviewInformation(interview);
    }

//    @GetMapping("/{id}")
//    public Optional<Interview> getInterviewById(@PathVariable int id) {
//        return interviewsService.getInterviewById(id);
//    }

    @GetMapping("/list/{id}")
    public List<Interview> getAllInterviews(@PathVariable int id) {
        return interviewsService.getInterviewsByApplicantId(id);
    }

    @DeleteMapping("/{id}")
    public String deleteInterviewById(@PathVariable int id) {
        interviewsService.deleteInterview(id);
        return "Interview successfully deleted";
    }
}
