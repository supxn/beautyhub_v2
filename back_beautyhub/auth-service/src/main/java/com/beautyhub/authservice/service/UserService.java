package com.beautyhub.authservice.service;

import com.beautyhub.authservice.dto.*;
import com.beautyhub.authservice.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    void createUser(User user);
    User getByUsername(String username);
    //User createByVkId(User user, Long vkId);
    //User getByVkId(Long vkId);
    User getByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
