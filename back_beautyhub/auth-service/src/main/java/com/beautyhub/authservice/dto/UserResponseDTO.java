package com.beautyhub.authservice.dto;

import com.beautyhub.authservice.enums.UserRole;
import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.persistence.Id;
import lombok.*;

import java.security.Provider;
import java.time.LocalDateTime;

@Data
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@Builder(toBuilder = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserResponseDTO {
    @Id
    private Long id;

    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;
    private UserRole role;
    private String phoneNumber;
    private String city;
    private Long vkId;
    private Provider provider;
    private boolean enabled;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
