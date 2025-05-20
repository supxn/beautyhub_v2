package com.example.profileservice.master.mapper;

import com.example.profileservice.master.dto.MasterProfileRequestDTO;
import com.example.profileservice.master.dto.MasterProfileResponseDTO;
import com.example.profileservice.master.entity.MasterProfile;

import java.util.ArrayList;

public class MasterProfileMapper {

    public static MasterProfileResponseDTO toDto(MasterProfile entity) {
        MasterProfileResponseDTO dto = new MasterProfileResponseDTO();
        dto.setId(entity.getId());
        dto.setUserId(entity.getUserId());
        dto.setBio(entity.getBio());
        dto.setPhone(entity.getPhone());
        dto.setCity(entity.getCity());
        dto.setPhotoUrl(entity.getPhotoUrl());
        dto.setRating(entity.getRating());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());
        dto.setWorkPhotos(entity.getWorkPhotos());
        dto.setCertificatePhotos(entity.getCertificatePhotos());
        dto.setSpecialization(entity.getSpecialization());
        dto.setExperience(entity.getExperience());
        dto.setAddress(entity.getAddress());
        dto.setGender(entity.getGender());
        dto.setAcceptSAt(entity.getAcceptSAt());
        dto.setCategories(entity.getCategories());
        dto.setHasReviews(entity.getHasReviews());
        return dto;
    }

    public static void updateEntity(MasterProfile entity, MasterProfileRequestDTO dto) {
        entity.setBio(dto.getBio());
        entity.setPhone(dto.getPhone());
        entity.setCity(dto.getCity());
        entity.setPhotoUrl(dto.getPhotoUrl());
        entity.setWorkPhotos(dto.getWorkPhotos() != null ? dto.getWorkPhotos() : new ArrayList<>());
        entity.setCertificatePhotos(dto.getCertificatePhotos() != null ? dto.getCertificatePhotos() : new ArrayList<>());
        entity.setSpecialization(dto.getSpecialization());
        entity.setExperience(dto.getExperience());
        entity.setAddress(dto.getAddress());
        entity.setGender(dto.getGender());
        entity.setAcceptSAt(dto.getAcceptSAt());
        entity.setCategories(dto.getCategories());
        entity.setHasReviews(dto.getHasReviews());
    }
}

