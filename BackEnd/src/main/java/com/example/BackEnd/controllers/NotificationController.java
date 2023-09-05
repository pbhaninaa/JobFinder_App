package com.example.BackEnd.controllers;

import com.example.BackEnd.entities.Notification;
import com.example.BackEnd.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/notification") // Base URL for this controller
public class NotificationController {

    private final NotificationService notificationService;

    @Autowired
    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @PostMapping("/add")
    public List<Notification> addNotification(@RequestBody List<Notification> notification) {
        return notificationService.saveNotification(notification);
    }

//    @GetMapping("/{id}")
//    public Optional<Notification> getNotificationById(@PathVariable int id) {
//        return notificationService.getNotificationById(id);
//    }

    @GetMapping("/list/{id}")
    public List<Notification> getAllNotifications(@PathVariable int id) {
        return notificationService.getNotificationsByApplicantId(id);
    }

    @DeleteMapping("/{id}")
    public String deleteNotificationById(@PathVariable int id) {
        notificationService.deleteNotification(id);
        return "Notification successfully deleted";
    }
}
