package com.example.BackEnd.services;

import com.example.BackEnd.entities.Notification;
import com.example.BackEnd.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {
    @Autowired
    NotificationRepository repository;

    public List<Notification> saveNotification(List<Notification> notification){
        return repository.saveAll(notification);
    }
    public Optional<Notification> getNotificationById(int id){
        return repository.findById(id);
    }
    public List<Notification> getNotificationsByApplicantId(int id){
        return repository.findByApplicantId(id);
    }
    public String deleteNotification(int id){
        repository.deleteById(id);
        return "Notification successfully deleted";
    }

}
