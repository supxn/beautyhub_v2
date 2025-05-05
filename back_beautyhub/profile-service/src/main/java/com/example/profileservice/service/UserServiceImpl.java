package com.example.profileservice.service;

import com.example.profileservice.dto.UserRequestDTO;
import com.example.profileservice.dto.UserResponseDTO;
import com.example.profileservice.entity.User;
import com.example.profileservice.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Override
    public List<User> getList(){
        return userRepository.findAll();
    }
    //public List<User> allUsers();
    @Override
    public User saveUser(User user){
        return userRepository.save(user);
    }

    @Override
    public UserResponseDTO update(Long id, UserRequestDTO userDTO) {
        return userRepository.findById(id)
                .map(existingUser -> {
                    existingUser.setUsername(userDTO.getUsername());
                    existingUser.setEmail(userDTO.getEmail());
                    existingUser.setPhone(userDTO.getPhone());
                    existingUser.setFirstName(userDTO.getFirstName());
                    existingUser.setLastName(userDTO.getLastName());
                    existingUser.setPassword(userDTO.getPassword());
                    existingUser.setCity(userDTO.getCity());

                    User updatedUser = userRepository.save(existingUser);

                    return new UserResponseDTO(
                            updatedUser.getId(),
                            updatedUser.getUsername(),
                            updatedUser.getFirstName(),
                            updatedUser.getLastName(),
                            updatedUser.getPassword(),
                            existingUser.getRole(),
                            updatedUser.getEmail(),
                            updatedUser.getCity(),
                            updatedUser.getPhone()
                    );
                })
                .orElseThrow(() -> new EntityNotFoundException("User with id " + id + " not found"));
    }

    @Override
    @Transactional
    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

    @Override
    public UserResponseDTO getById(Long id){
        return userRepository.findById(id)
                .map(user -> new UserResponseDTO(
                        user.getId(),
                        user.getUsername(),
                        user.getFirstName(),
                        user.getLastName(),
                        user.getPassword(),
                        user.getRole(),
                        user.getEmail(),
                        user.getCity(),
                        user.getPhone()
                ))
                .orElseThrow(() -> new EntityNotFoundException("User with id " + id + " not found"));
    }
}
