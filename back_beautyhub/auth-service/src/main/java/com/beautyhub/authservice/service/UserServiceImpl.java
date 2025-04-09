package com.beautyhub.authservice.service;

import com.beautyhub.authservice.dto.UserResponseDTO;
import com.beautyhub.authservice.entity.User;
import com.beautyhub.authservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void createUser(User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        userRepository.save(user);
    }

    @Override
    public User getByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    public boolean existsByUsername(String username) {
        User user = userRepository.findByUsername(username).orElse(null);

        return user != null;
    }

    @Override
    public boolean existsByEmail(String email) {
        User user = userRepository.findByEmail(email).orElse(null);

        return user != null;
    }


    @Override
    public User getByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User with " + email + " email not found"));
    }

    public User getCurrentUser() {
        return getByUsername(SecurityContextHolder.getContext()
                .getAuthentication().getName());
    }
}
