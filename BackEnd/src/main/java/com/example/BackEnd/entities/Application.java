package com.example.BackEnd.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Applicant Applications")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String jobTitle;
    private String jobEmploymentType;
    private String company;
    private String employerLogo;
    private String jobCity;
    private String jobCountry;
    private String jobState;
    private String jobPostingLanguage;
    private double jobLatitude;
    private double jobLongitude;
    private String jobDescription;
    private String jobRequirements;
    private String jobMinSalary;
    private String postedAt;
    private String expiresAt;
    private String appliedAt;
    private String applyLink;
    private int companyRate;

    @ManyToOne
    @JoinColumn(name = "applicant_id")
    private Applicant applicant;
}

