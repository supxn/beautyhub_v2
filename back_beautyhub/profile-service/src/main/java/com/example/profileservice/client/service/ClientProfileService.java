package com.example.profileservice.client.service;

import com.example.profileservice.client.dto.ClientProfileRequestDTO;
import com.example.profileservice.client.dto.ClientProfileResponseDTO;
import com.example.profileservice.client.entity.ClientProfile;

public interface ClientProfileService {
    ClientProfileResponseDTO createOrUpdate(Long userId, ClientProfileRequestDTO dto);
    ClientProfileResponseDTO getByUserId(Long userId);

    ClientProfile getClientById(Long id);
}

