package com.example.profileservice.client.controller;

import com.example.profileservice.client.dto.ClientProfileRequestDTO;
import com.example.profileservice.client.dto.ClientProfileResponseDTO;
import com.example.profileservice.client.service.ClientProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/client-profiles")
@RequiredArgsConstructor
public class ClientProfileController {

    private final ClientProfileService service;

    @PutMapping
    public ResponseEntity<ClientProfileResponseDTO> createOrUpdate(
            @RequestHeader("X-User-Id") Long userId,
            @RequestBody ClientProfileRequestDTO dto) {
        return ResponseEntity.ok(service.createOrUpdate(userId, dto));
    }

    @GetMapping
    public ResponseEntity<ClientProfileResponseDTO> getProfile(
            @RequestHeader("X-User-Id") Long userId) {
        return ResponseEntity.ok(service.getByUserId(userId));
    }
}
