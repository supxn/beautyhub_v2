package com.example.profileservice.master.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MasterProfileResponseDTO {

    private Long id;
    private Long userId;
    private String displayName;
    private String bio;
    private String phone;
    private String city;
    private String photoUrl;
    private Double rating;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}

