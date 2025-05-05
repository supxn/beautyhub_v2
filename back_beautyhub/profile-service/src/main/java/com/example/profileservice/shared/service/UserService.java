package com.example.profileservice.shared.service;

import com.example.profileservice.shared.dto.UserRequestDTO;
import com.example.profileservice.shared.dto.UserResponseDTO;
import com.example.profileservice.shared.entity.User;

import java.util.List;


public interface UserService{
    List<User> getList();
    User saveUser(User user);
    void deleteUser(Long id);
    UserResponseDTO getById(Long id);
    UserResponseDTO update(Long id, UserRequestDTO userRequestDTO);

}