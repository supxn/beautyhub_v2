package com.example.booking_api.DTO;

import lombok.Data;

@Data
public class CreateBookingRequest {
    private Long slotId;
    private Long clientId;
}
