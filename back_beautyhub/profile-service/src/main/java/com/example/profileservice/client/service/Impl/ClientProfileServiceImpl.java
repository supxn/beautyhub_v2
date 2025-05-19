package com.example.profileservice.client.service.Impl;

import com.example.profileservice.client.dto.ClientProfileRequestDTO;
import com.example.profileservice.client.dto.ClientProfileResponseDTO;
import com.example.profileservice.client.entity.ClientProfile;
import com.example.profileservice.client.repository.ClientProfileRepository;
import com.example.profileservice.client.service.ClientProfileService;
import com.example.profileservice.shared.service.FileStorageService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClientProfileServiceImpl implements ClientProfileService {

    private final ClientProfileRepository repository;
    private final FileStorageService fileStorageService;

    @Override
    public ClientProfileResponseDTO createOrUpdate(Long userId, ClientProfileRequestDTO dto) {
        ClientProfile profile = repository.findByUserId(userId)
                .orElse(new ClientProfile());
        profile.setUserId(userId);
        profile.setFirstName(dto.getFirstName());
        profile.setLastName(dto.getLastName());
        profile.setPhone(dto.getPhone());
        profile.setCity(dto.getCity());
        profile.setPhotoUrl(dto.getPhotoUrl());
        profile.setBirthDate(dto.getBirthDate());

        repository.save(profile);
        return toResponseDTO(profile);
    }

    @Override
    public ClientProfileResponseDTO getByUserId(Long userId) {
        ClientProfile profile = repository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Профиль клиента не найден"));
        return toResponseDTO(profile);
    }

    private ClientProfileResponseDTO toResponseDTO(ClientProfile profile) {
        ClientProfileResponseDTO dto = new ClientProfileResponseDTO();
        dto.setId(profile.getId());
        dto.setUserId(profile.getUserId());
        dto.setFirstName(profile.getFirstName());
        dto.setLastName(profile.getLastName());
        dto.setPhone(profile.getPhone());
        dto.setCity(profile.getCity());
        dto.setPhotoUrl(profile.getPhotoUrl());
        dto.setBirthDate(profile.getBirthDate());
        return dto;
    }

    @Override
    public ClientProfile getClientById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client profile not found"));
    }
}

