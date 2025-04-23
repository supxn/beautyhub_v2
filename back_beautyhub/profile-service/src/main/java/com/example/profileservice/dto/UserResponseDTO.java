package com.example.profileservice.dto;

import com.example.profileservice.Enum.UserRole;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class UserResponseDTO{
    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String password;
    private UserRole role;
    private String email;
    private String city;
    private String phone;
}