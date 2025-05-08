package com.example.profileservice.master.service;

import com.example.profileservice.master.dto.MasterProfileRequestDTO;
import com.example.profileservice.master.dto.MasterProfileResponseDTO;

public interface MasterProfileService {
    MasterProfileResponseDTO createOrUpdate(Long userId, MasterProfileRequestDTO dto);
    MasterProfileResponseDTO getByUserId(Long userId);
}

