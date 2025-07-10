package com.example.form.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.form.controller.Inquiry;

public interface InquiryRepository extends JpaRepository<Inquiry, Integer> {
}