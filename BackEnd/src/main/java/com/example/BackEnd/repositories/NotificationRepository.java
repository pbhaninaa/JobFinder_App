package com.example.BackEnd.repositories;

import com.example.BackEnd.entities.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
    List<Notification> findByApplicantId(int id);

}
