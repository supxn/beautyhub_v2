package com.example.profileservice.client.service;

import com.example.profileservice.client.dto.ClientProfileRequestDTO;
import com.example.profileservice.client.dto.ClientProfileResponseDTO;

public interface ClientProfileService {
    ClientProfileResponseDTO createOrUpdate(Long userId, ClientProfileRequestDTO dto);
    ClientProfileResponseDTO getByUserId(Long userId);
}

