package com.beautyhub.authservice.repository;

import com.beautyhub.authservice.dto.UserResponseDTO;
import com.beautyhub.authservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);

    //User findByVkId(Long vkId);

    boolean existsByUsername(String username);
    //boolean existsByVkId(Long vkId);
    boolean existsByEmail(String email);
}
