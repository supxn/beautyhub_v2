package com.example.profileservice.master.controller;

import com.example.profileservice.master.dto.MasterProfileRequestDTO;
import com.example.profileservice.master.dto.MasterProfileResponseDTO;
import com.example.profileservice.master.service.MasterProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/master-profiles")
@RequiredArgsConstructor
public class MasterProfileController {
    private final MasterProfileService service;

    @PutMapping
    public ResponseEntity<MasterProfileResponseDTO> createOrUpdate(
            @RequestHeader("X-User-Id") Long userId,
            @RequestBody MasterProfileRequestDTO dto) {
        return ResponseEntity.ok(service.createOrUpdate(userId, dto));
    }

    @GetMapping
    public ResponseEntity<MasterProfileResponseDTO> getProfile(
            @RequestHeader("X-User-Id") Long userId) {
        return ResponseEntity.ok(service.getByUserId(userId));
    }
}
