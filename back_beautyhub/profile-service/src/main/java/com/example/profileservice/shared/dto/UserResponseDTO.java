package com.example.profileservice.shared.dto;

import com.example.profileservice.shared.Enum.UserRole;
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