package com.example.profileservice.shared.repository;

import com.example.profileservice.shared.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
}
