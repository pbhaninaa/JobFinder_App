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
@Table(name="Applicant Interviews")
public class Interview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String companyName;
    private String employerLogo;
    private Date interviewDate;

    @ManyToOne
    @JoinColumn(name = "applicant_id") // Assuming there's a foreign key column in Application referencing Applicant
    private Applicant applicant;
    // Getters and setters, constructors, and other methods
}

