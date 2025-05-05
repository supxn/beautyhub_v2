package com.example.profileservice.client.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientProfileResponseDTO {
    private Long id;
    private Long userId;
    private String firstName;
    private String lastName;
    private String phone;
    private String city;
    private String photoUrl;
    private LocalDate birthDate;
}
