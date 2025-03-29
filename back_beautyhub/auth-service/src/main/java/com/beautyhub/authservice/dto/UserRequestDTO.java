package com.beautyhub.authservice.dto;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.*;

@Data
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
@JsonInclude(JsonInclude.Include.NON_NULL)
@Builder(toBuilder = true)
public class UserRequestDTO {
    private String firstName;
    private String lastName;
    private String username;
    private String password;


}
