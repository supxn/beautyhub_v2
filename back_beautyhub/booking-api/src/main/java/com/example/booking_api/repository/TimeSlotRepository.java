package com.example.booking_api.repository;

import com.example.booking_api.entity.TimeSlot;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface TimeSlotRepository extends JpaRepository<TimeSlot, Long> {

    List<TimeSlot> findByMasterIdAndDateAndIsBookedFalse(Long masterId, LocalDate date);

    @Query("SELECT DISTINCT t.date FROM TimeSlot t WHERE t.masterId = :masterId AND t.isBooked = false")
    List<LocalDate> findDistinctDateByMasterIdAndIsBookedFalse(@Param("masterId") Long masterId);
}
