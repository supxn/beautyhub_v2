package com.example.booking_api.controller;

import com.example.booking_api.DTO.CreateSlotsRequest;
import com.example.booking_api.DTO.TimeSlotDTO;
import com.example.booking_api.service.TimeSlotService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/timeslots")
@RequiredArgsConstructor
public class TimeSlotController {

    private final TimeSlotService timeSlotService;

    @GetMapping("/available-dates")
    public List<LocalDate> getAvailableDates(@RequestParam Long masterId) {
        return timeSlotService.getAvailableDates(masterId);
    }

    @GetMapping
    public List<TimeSlotDTO> getSlots(@RequestParam Long masterId,
                                      @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        return timeSlotService.getSlotsByDate(masterId, date);
    }

    @PostMapping
    public void addSlots(@RequestParam Long masterId, @RequestBody CreateSlotsRequest request) {
        timeSlotService.addSlots(masterId, request);
    }
}
