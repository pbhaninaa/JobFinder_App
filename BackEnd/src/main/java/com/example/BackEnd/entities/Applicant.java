package com.example.BackEnd.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Applicant_Information") // You should use underscores in the table name
public class Applicant {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String surname;
    private String email;
    private String phone;
    private String homeAddress;
    private String gender;
    private String profession;

    @Lob
    private String summary;

    private String image;

    // Define relationships with other entities
    @JsonIgnore
    @OneToMany(mappedBy = "applicant", fetch = FetchType.LAZY)
    private List<Skill> skills;

    @JsonIgnore
    @OneToMany(mappedBy = "applicant", fetch = FetchType.LAZY)
    private List<Notification> notifications;
    @JsonIgnore
    @OneToMany(mappedBy = "applicant", fetch = FetchType.LAZY)// Update "user" to "applicant" if this is the correct mapping
    private List<Application> applications;
    @JsonIgnore
    @OneToMany(mappedBy = "applicant", fetch = FetchType.LAZY)
    private List<Education> educationList;
    @JsonIgnore
    @OneToMany(mappedBy = "applicant", fetch = FetchType.LAZY)
    private List<Experience> experienceList;
    @JsonIgnore
    @OneToMany(mappedBy = "applicant", fetch = FetchType.LAZY)
    private List<Interview> interviews;
}
