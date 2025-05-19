package com.example.profileservice.master.service;

import com.example.profileservice.master.dto.MasterProfileRequestDTO;
import com.example.profileservice.master.dto.MasterProfileResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MasterProfileService {
    MasterProfileResponseDTO create(MasterProfileRequestDTO dto);
    MasterProfileResponseDTO getById(Long id);
    MasterProfileResponseDTO getByUserId(Long userId);
    MasterProfileResponseDTO update(Long id, MasterProfileRequestDTO dto);
    MasterProfileResponseDTO updateByUserId(Long userId, MasterProfileRequestDTO dto);
    void delete(Long id);
    void deleteByUserId(Long userId);
    Page<MasterProfileResponseDTO> getAllFiltered(Pageable pageable, String city, String specialization);
}