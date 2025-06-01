package com.example.booking_api.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "slot_id")
    private TimeSlot slot;

    private Long clientId;
    private LocalDateTime createdAt;
    private String status; // CONFIRMED, CANCELLED, COMPLETED
}
