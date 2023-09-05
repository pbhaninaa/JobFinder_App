package com.example.BackEnd.repositories;

import com.example.BackEnd.entities.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepository extends JpaRepository<UserDetails, Integer> {
    UserDetails findByUsername(String username);

    UserDetails findByEmail(String email);
}
