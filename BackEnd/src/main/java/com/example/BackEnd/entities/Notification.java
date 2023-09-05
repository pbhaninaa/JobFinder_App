package com.example.BackEnd.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Applicant Notifications")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String notificationSender;
    private String notificationTitle;
    private String notificationBody;
    private Time responseTime;

    @ManyToOne
    @JoinColumn(name = "applicant_id")
    private Applicant applicant;
}

