package com.example.booking_api.controller;

import com.example.booking_api.DTO.CreateBookingRequest;
import com.example.booking_api.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody CreateBookingRequest request) {
        bookingService.createBooking(request);
        return ResponseEntity.ok().build();
    }
}
