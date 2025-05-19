package com.example.profileservice.master.controller;

import com.example.profileservice.master.dto.MasterProfileRequestDTO;
import com.example.profileservice.master.dto.MasterProfileResponseDTO;
import com.example.profileservice.master.service.MasterProfileService;
import com.example.profileservice.shared.service.FileStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/master-profiles")
@RequiredArgsConstructor
public class MasterProfileController {

    private final MasterProfileService service;
    private final FileStorageService fileStorageService;

    // Create (for admin)
    @PostMapping
    public ResponseEntity<MasterProfileResponseDTO> create(
            @RequestBody MasterProfileRequestDTO dto) {
        return new ResponseEntity<>(service.create(dto), HttpStatus.CREATED);
    }

    // Read (self)
    @GetMapping("/me")
    public ResponseEntity<MasterProfileResponseDTO> getMyProfile(
            @RequestHeader("X-User-Id") Long userId) {
        return ResponseEntity.ok(service.getByUserId(userId));
    }

    // Read by ID
    @GetMapping("/{id}")
    public ResponseEntity<MasterProfileResponseDTO> getById(
            @PathVariable Long id) {
        return ResponseEntity.ok(service.getById(id));
    }

    // Update (self)
    @PutMapping("/me")
    public ResponseEntity<MasterProfileResponseDTO> updateMyProfile(
            @RequestHeader("X-User-Id") Long userId,
            @RequestBody MasterProfileRequestDTO dto) {
        return ResponseEntity.ok(service.updateByUserId(userId, dto));
    }

    // Update by ID (admin)
    @PutMapping("/{id}")
    public ResponseEntity<MasterProfileResponseDTO> update(
            @PathVariable Long id,
            @RequestBody MasterProfileRequestDTO dto) {
        return ResponseEntity.ok(service.update(id, dto));
    }

    // Delete (self)
    @DeleteMapping("/me")
    public ResponseEntity<Void> deleteMyProfile(
            @RequestHeader("X-User-Id") Long userId) {
        service.deleteByUserId(userId);
        return ResponseEntity.noContent().build();
    }

    // Delete by ID (admin)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    // List with pagination
    @GetMapping
    public ResponseEntity<Page<MasterProfileResponseDTO>> getAll(
            Pageable pageable,
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String specialization) {
        return ResponseEntity.ok(service.getAllFiltered(pageable, city, specialization));
    }

    // File uploads remain the same
    @PostMapping("/upload-work")
    public ResponseEntity<String> uploadWorkPhoto(
            @RequestHeader("X-User-Id") Long userId,
            @RequestParam("file") MultipartFile file) {
        try {
            String url = fileStorageService.uploadMasterWork(userId, file);
            return ResponseEntity.ok(url);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Ошибка загрузки фото работы");
        }
    }

    @PostMapping("/upload-certificate")
    public ResponseEntity<String> uploadCertificate(
            @RequestHeader("X-User-Id") Long userId,
            @RequestParam("file") MultipartFile file) {
        try {
            String url = fileStorageService.uploadCertificate(userId, file);
            return ResponseEntity.ok(url);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Ошибка загрузки сертификата");
        }
    }
}