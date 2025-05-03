package com.beautyhub.authservice.controller;

import com.beautyhub.authservice.dto.AuthRequestDTO;
import com.beautyhub.authservice.dto.AuthResponseDTO;
import com.beautyhub.authservice.dto.SignUpRequest;
import com.beautyhub.authservice.security.jwt.AuthService;
import com.beautyhub.authservice.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
@Tag(name = "Аутентификация")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authenticationService;
    private final UserService userService;

    @Operation(summary = "Регистрация пользователя")
    @PostMapping("/sign-up")
    public ResponseEntity<String> signUp(@RequestBody @Valid SignUpRequest request) {
        if(userService.existsByUsername(request.getUsername())) {
            return ResponseEntity.badRequest().body("Имя пользователя уже занято");
        }

        if(userService.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Email уже занят");
        }

        authenticationService.register(request);

        return ResponseEntity.ok("Регистрация прошла успешно");
    }

    @Operation(summary = "Авторизация пользователя")
    @PostMapping("/sign-in")
    public AuthResponseDTO signIn(@RequestBody @Valid AuthRequestDTO request) {
        return authenticationService.authenticate(request);
    }

    @Operation(summary = "Обновление refresh токена")
    @PostMapping("/refresh-token")
    public ResponseEntity<AuthResponseDTO> refreshToken(
            HttpServletRequest request,
            HttpServletResponse response){
        return authenticationService.refreshToken(request, response);
    }

    @GetMapping("/hello")
    @Operation(summary = "Доступен только авторизованным пользователям")
    public String example() {
        return "Hello, world!";
    }
}