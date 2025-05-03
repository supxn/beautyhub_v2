package com.beautyhub.Service;

import com.beautyhub.DTO.UserRequestDTO;
import com.beautyhub.DTO.UserResponseDTO;
import com.beautyhub.Entity.User;
import java.util.List;


public interface UserService{
    List<User> getList();
    //List<User> allUsers();
    User saveUser(User user);
    User findByEmail(String email);
    User findByUsername(String username);
    void deleteUser(Long id);
    UserResponseDTO getById(Long id);
    UserResponseDTO update(Long id, UserRequestDTO userRequestDTO);
    User register(User user);

}