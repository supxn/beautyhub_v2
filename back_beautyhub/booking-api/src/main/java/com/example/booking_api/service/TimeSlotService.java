package com.example.booking_api.service;

import com.example.booking_api.DTO.CreateSlotsRequest;
import com.example.booking_api.DTO.TimeSlotDTO;
import com.example.booking_api.entity.TimeSlot;
import com.example.booking_api.repository.TimeSlotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TimeSlotService {

    private final TimeSlotRepository timeSlotRepository;

    public List<LocalDate> getAvailableDates(Long masterId) {
        return timeSlotRepository.findDistinctDateByMasterIdAndIsBookedFalse(masterId);
    }

    public List<TimeSlotDTO> getSlotsByDate(Long masterId, LocalDate date) {
        return timeSlotRepository.findByMasterIdAndDateAndIsBookedFalse(masterId, date)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public void addSlots(Long masterId, CreateSlotsRequest request) {
        for (CreateSlotsRequest.TimeRange range : request.getTimeRanges()) {
            TimeSlot slot = new TimeSlot();
            slot.setMasterId(masterId);
            slot.setDate(request.getDate());
            slot.setStartTime(LocalTime.parse(range.getStartTime()));
            slot.setEndTime(LocalTime.parse(range.getEndTime()));
            slot.setBooked(false);
            timeSlotRepository.save(slot);
        }
    }

    private TimeSlotDTO toDTO(TimeSlot slot) {
        TimeSlotDTO dto = new TimeSlotDTO();
        dto.setId(slot.getId());
        dto.setDate(slot.getDate());
        dto.setStartTime(slot.getStartTime());
        dto.setEndTime(slot.getEndTime());
        dto.setBooked(slot.isBooked());
        return dto;
    }
}
