package com.example.profileservice.master.service;

import com.example.profileservice.master.dto.MasterProfileRequestDTO;
import com.example.profileservice.master.dto.MasterProfileResponseDTO;
import com.example.profileservice.master.entity.MasterProfile;
import com.example.profileservice.master.mapper.MasterProfileMapper;
import com.example.profileservice.master.repository.MasterProfileRepository;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class MasterProfileServiceImpl implements MasterProfileService {

    private final MasterProfileRepository repository;

    public MasterProfileServiceImpl(MasterProfileRepository repository) {
        this.repository = repository;
    }

    @Override
    public MasterProfileResponseDTO createOrUpdate(Long userId, MasterProfileRequestDTO dto) {
        MasterProfile profile = repository.findByUserId(userId)
                .orElseGet(() -> {
                    MasterProfile newProfile = new MasterProfile();
                    newProfile.setUserId(userId);
                    newProfile.setRating(0.0); // initial rating
                    return newProfile;
                });

        MasterProfileMapper.updateEntity(profile, dto);
        MasterProfile saved = repository.save(profile);

        return MasterProfileMapper.toDto(saved);
    }

    @Override
    public MasterProfileResponseDTO getByUserId(Long userId) {
        MasterProfile profile = repository.findByUserId(userId)
                .orElseThrow(() -> new NoSuchElementException("Профиль мастера не найден"));
        return MasterProfileMapper.toDto(profile);
    }
}

