package com.example.profileservice.master.mapper;

import com.example.profileservice.master.dto.MasterProfileRequestDTO;
import com.example.profileservice.master.dto.MasterProfileResponseDTO;
import com.example.profileservice.master.entity.MasterProfile;

public class MasterProfileMapper {

    public static MasterProfileResponseDTO toDto(MasterProfile entity) {
        MasterProfileResponseDTO dto = new MasterProfileResponseDTO();
        dto.setId(entity.getId());
        dto.setUserId(entity.getUserId());
        dto.setDisplayName(entity.getDisplayName());
        dto.setBio(entity.getBio());
        dto.setPhone(entity.getPhone());
        dto.setCity(entity.getCity());
        dto.setPhotoUrl(entity.getPhotoUrl());
        dto.setRating(entity.getRating());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());
        return dto;
    }

    public static void updateEntity(MasterProfile entity, MasterProfileRequestDTO dto) {
        entity.setDisplayName(dto.getDisplayName());
        entity.setBio(dto.getBio());
        entity.setPhone(dto.getPhone());
        entity.setCity(dto.getCity());
        entity.setPhotoUrl(dto.getPhotoUrl());
    }
}

