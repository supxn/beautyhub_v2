package com.example.profileservice.master.repository;

import com.example.profileservice.master.entity.MasterProfile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MasterProfileRepository extends JpaRepository<MasterProfile, Long> {

    Optional<MasterProfile> findByUserId(Long userId);

    @Query("SELECT m FROM MasterProfile m WHERE " +
            "(:city IS NULL OR m.city = :city) AND " +
            "(:specialization IS NULL OR m.specialization = :specialization)")
    Page<MasterProfile> findAllByFilters(
            @Param("city") String city,
            @Param("specialization") String specialization,
            Pageable pageable);
}