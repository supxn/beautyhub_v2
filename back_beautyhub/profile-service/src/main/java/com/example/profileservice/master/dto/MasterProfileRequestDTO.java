package com.example.profileservice.master.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MasterProfileRequestDTO {

    @NotBlank
    private String displayName;

    @Size(max = 1000)
    private String bio;

    private String phone;

    private String city;
    private String photoUrl;

}

