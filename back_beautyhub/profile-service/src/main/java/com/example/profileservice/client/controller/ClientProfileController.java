package com.example.profileservice.client.controller;

import com.example.profileservice.client.dto.ClientProfileRequestDTO;
import com.example.profileservice.client.dto.ClientProfileResponseDTO;
import com.example.profileservice.client.service.ClientProfileService;
import com.example.profileservice.shared.service.FileStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/client-profiles")
@RequiredArgsConstructor
public class ClientProfileController {

    private final ClientProfileService service;
    private final FileStorageService fileStorageService;

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

    @PostMapping("/upload-photo")
    public ResponseEntity<String> uploadPhoto(
            @RequestHeader("X-User-Id") Long userId,
            @RequestParam("file") MultipartFile file) {
        try {
            String url = fileStorageService.uploadClientPhoto(userId, file);
            return ResponseEntity.ok(url);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Ошибка загрузки фото");
        }
    }
}
