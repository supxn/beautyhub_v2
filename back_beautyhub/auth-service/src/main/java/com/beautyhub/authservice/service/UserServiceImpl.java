package com.beautyhub.authservice.service;

import com.beautyhub.authservice.dto.UserRequestDTO;
import com.beautyhub.authservice.dto.UserResponseDTO;

public class UserServiceImpl implements UserService {
    @Override
    public UserResponseDTO createUser(UserRequestDTO userRequestDTO) {
        return null;
    }

    @Override
    public UserResponseDTO getByUsername(String username) {
        return null;
    }

    @Override
    public UserResponseDTO createByVkId(UserRequestDTO userRequestDTO, Long vkId) {
        return null;
    }
}
