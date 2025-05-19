package com.example.profileservice.master.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MasterProfileRequestDTO {
    @NotBlank
    private String displayName;

    @Size(max = 1000)
    private String bio;

    @NotBlank
    private String phone;

    @NotBlank
    private String city;

    private String photoUrl;
    private String specialization;
    private List<String> workPhotos;
    private List<String> certificatePhotos;
}

