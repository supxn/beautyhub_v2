package com.example.profileservice.service;

import com.example.profileservice.dto.UserRequestDTO;
import com.example.profileservice.dto.UserResponseDTO;
import com.example.profileservice.entity.User;

import java.util.List;


public interface UserService{
    List<User> getList();
    User saveUser(User user);
    void deleteUser(Long id);
    UserResponseDTO getById(Long id);
    UserResponseDTO update(Long id, UserRequestDTO userRequestDTO);

}