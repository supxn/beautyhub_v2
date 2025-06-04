package com.example.booking_api.service;

import com.example.booking_api.DTO.CreateBookingRequest;
import com.example.booking_api.entity.Booking;
import com.example.booking_api.entity.BookingStatus;
import com.example.booking_api.entity.TimeSlot;
import com.example.booking_api.repository.BookingRepository;
import com.example.booking_api.repository.TimeSlotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;
    private final TimeSlotRepository timeSlotRepository;

    public void createBooking(CreateBookingRequest request) {
        TimeSlot slot = timeSlotRepository.findById(request.getSlotId())
                .orElseThrow(() -> new RuntimeException("Slot not found"));

        if (slot.isBooked()) {
            throw new RuntimeException("Slot already booked");
        }

        slot.setBooked(true);
        timeSlotRepository.save(slot);

        Booking booking = new Booking();
        booking.setSlot(slot);
        booking.setClientId(request.getClientId());
        booking.setCreatedAt(LocalDateTime.now());
        booking.setStatus(BookingStatus.CONFIRMED);
        bookingRepository.save(booking);
    }
}
