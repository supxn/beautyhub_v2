package com.beautyhub.authservice.service;

import com.beautyhub.authservice.dto.*;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    UserResponseDTO createUser(UserRequestDTO userRequestDTO);
    UserResponseDTO getByUsername(String username);
    UserResponseDTO createByVkId(UserRequestDTO userRequestDTO, Long vkId);
}
