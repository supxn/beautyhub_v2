package com.beautyhub.authservice.repository;

import com.beautyhub.authservice.dto.UserResponseDTO;
import com.beautyhub.authservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    User findByVkId(Long vkId);
}
