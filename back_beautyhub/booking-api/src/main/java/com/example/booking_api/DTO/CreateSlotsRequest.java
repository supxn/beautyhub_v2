package com.example.booking_api.DTO;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class CreateSlotsRequest {
    private LocalDate date;
    private List<TimeRange> timeRanges;

    @Data
    public static class TimeRange {
        private String startTime;
        private String endTime;
    }
}
