// MasterProfileServiceImpl.java
package com.example.profileservice.master.service;

import com.example.profileservice.master.dto.MasterProfileRequestDTO;
import com.example.profileservice.master.dto.MasterProfileResponseDTO;
import com.example.profileservice.master.entity.MasterProfile;
import com.example.profileservice.master.mapper.MasterProfileMapper;
import com.example.profileservice.master.repository.MasterProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class MasterProfileServiceImpl implements MasterProfileService {

    private final MasterProfileRepository repository;

    @Override
    public MasterProfileResponseDTO create(MasterProfileRequestDTO dto) {
        MasterProfile profile = new MasterProfile();
        updateEntityFromDto(profile, dto);
        profile.setRating(0.0);
        return MasterProfileMapper.toDto(repository.save(profile));
    }

    @Override
    public MasterProfileResponseDTO getById(Long id) {
        return repository.findById(id)
                .map(MasterProfileMapper::toDto)
                .orElseThrow(() -> new NoSuchElementException("Master profile not found"));
    }

    @Override
    public MasterProfileResponseDTO getByUserId(Long userId) {
        return repository.findByUserId(userId)
                .map(MasterProfileMapper::toDto)
                .orElseThrow(() -> new NoSuchElementException("Профиль мастера не найден"));
    }

    @Override
    public MasterProfileResponseDTO update(Long id, MasterProfileRequestDTO dto) {
        MasterProfile profile = repository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Master profile not found"));
        updateEntityFromDto(profile, dto);
        return MasterProfileMapper.toDto(repository.save(profile));
    }

    @Override
    public MasterProfileResponseDTO updateByUserId(Long userId, MasterProfileRequestDTO dto) {
        MasterProfile profile = repository.findByUserId(userId)
                .orElseThrow(() -> new NoSuchElementException("Профиль мастера не найден"));
        updateEntityFromDto(profile, dto);
        return MasterProfileMapper.toDto(repository.save(profile));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void deleteByUserId(Long userId) {
        MasterProfile profile = repository.findByUserId(userId)
                .orElseThrow(() -> new NoSuchElementException("Профиль мастера не найден"));
        repository.delete(profile);
    }

    @Override
    public Page<MasterProfileResponseDTO> getAllFiltered(Pageable pageable, String city, String specialization) {
        return repository.findAllByFilters(city, specialization, pageable)
                .map(MasterProfileMapper::toDto);
    }

    private void updateEntityFromDto(MasterProfile entity, MasterProfileRequestDTO dto) {
        entity.setBio(dto.getBio());
        entity.setPhone(dto.getPhone());
        entity.setCity(dto.getCity());
        entity.setPhotoUrl(dto.getPhotoUrl());
        entity.setSpecialization(dto.getSpecialization());
        entity.setWorkPhotos(dto.getWorkPhotos() != null ? dto.getWorkPhotos() : List.of());
        entity.setCertificatePhotos(dto.getCertificatePhotos() != null ? dto.getCertificatePhotos() : List.of());
    }
}