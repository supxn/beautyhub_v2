package com.example.profileservice.master.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

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
    private String specialization;
    private List<String> workPhotos;
    private List<String> certificatePhotos;

}

