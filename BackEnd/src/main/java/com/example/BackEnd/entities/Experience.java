package com.example.BackEnd.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Applicant Experience")
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String company;
    private String position;
    private String period;

    @ManyToOne
    @JoinColumn(name = "applicant_id") // Assuming there's a foreign key column in Application referencing Applicant
    private Applicant applicant;

    // Getters and setters, constructors, and other methods
}

