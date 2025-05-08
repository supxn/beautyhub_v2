package com.example.profileservice.master.repository;

import com.example.profileservice.master.entity.MasterProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MasterProfileRepository extends JpaRepository<MasterProfile, Long> {
    Optional<MasterProfile> findByUserId(Long userId);
}

