package com.example.form.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.form.controller.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}