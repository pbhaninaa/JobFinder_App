package com.example.BackEnd.services;

import com.example.BackEnd.entities.Applicant;
import com.example.BackEnd.entities.UserDetails;
import com.example.BackEnd.repositories.ApplicantRepository;
import com.example.BackEnd.repositories.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserDetailsRepository repository;

    public UserDetails saveUserDetails(UserDetails userDetails) {
        // Check if a user with the same username or email already exists
        UserDetails existingUserByUsername = repository.findByUsername(userDetails.getUsername());
        UserDetails existingUserByEmail = repository.findByEmail(userDetails.getEmail());

        if (existingUserByUsername == null && existingUserByEmail == null) {

            return repository.save(userDetails);
        } else {
            throw new RuntimeException("User with the same username or email already registered");
        }
    }
    public Optional<UserDetails> getUserById(int id){
        return repository.findById(id);
    }
    public List<UserDetails> getUsers(){
        return repository.findAll();
    }
    public String deleteUser(int id){
        repository.deleteById(id);
        return "User successfully deleted";
    }

}
