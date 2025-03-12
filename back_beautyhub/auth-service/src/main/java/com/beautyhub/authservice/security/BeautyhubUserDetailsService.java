/*
package com.beautyhub.authservice.security;

import com.beautyhub.authservice.dto.UserResponseDTO;
import com.beautyhub.authservice.entity.User;
import com.beautyhub.authservice.security.jwt.*;
import com.beautyhub.authservice.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class BeautyhubUserDetailsService implements UserDetailsService {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public BeautyhubUserDetailsService(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserResponseDTO user = userService.getByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User with email " + username + " not found");
        }
        JwtUser jwtUser = JwtUserFactory.create(user);
        //log
        return jwtUser;
    }

}
*/
