package com.beautyhub.authservice.dto;

import com.beautyhub.authservice.enums.UserRole;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class AuthRequestDTO {
    @Size(min = 4, max = 255,
            message = "Имя пользователя не может быть короче 4 символов")
    @NotBlank(message = "Имя пользователя не может быть пустым")
    private String username;

    @Size(min = 5, max = 255,
            message = "Адрес электронной почты не может быть короче 4 символов")
    @NotBlank(message = "Адрес электронной почты не может быть пустым")
    @Email
    private String email;

    @Size(min = 9, max = 255,
            message = "Длина пароля должна быть не менее 9 символов")
    private String password;

    private UserRole userRole;
}
