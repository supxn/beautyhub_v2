package com.beautyhub.authservice.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Data;

import java.util.Date;

@Data
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class AuthResponseDTO {
    private Long userId;
    private Date issuedAt;
    private String accessToken;
    private Date accessExpiresAt;
    private String refreshToken;
    private Date refreshExpiresAt;
}
