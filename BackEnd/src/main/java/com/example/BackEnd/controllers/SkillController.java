package com.example.BackEnd.controllers;

import com.example.BackEnd.entities.Skill;
import com.example.BackEnd.services.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/api/skill")
public class SkillController {

    private final SkillService skillService;

    @Autowired
    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @PostMapping("/add")
    public List<Skill> addSkill(@RequestBody List<Skill> skill) {
        return skillService.saveSkillInformation(skill);
    }

//    @GetMapping("/{id}")
//    public Optional<Skill> getSkillById(@PathVariable int id) {
//        return skillService.getSkillById(id);
//    }

    @GetMapping("/list/{id}")
    public List<Skill> getAllSkills(@PathVariable int id) { // Add @PathVariable annotation
        return skillService.getSkillsByApplicantId(id);
    }

    @DeleteMapping("/{id}")
    public String deleteSkillById(@PathVariable int id) {
        skillService.deleteSkill(id);
        return "Skill successfully deleted";
    }
}
