package com.beautyhub.authservice.service;

import com.beautyhub.authservice.dto.AuthRequestDTO;
import com.beautyhub.authservice.dto.AuthResponseDTO;
import com.beautyhub.authservice.dto.SignUpRequest;
import com.beautyhub.authservice.entity.User;
import com.beautyhub.authservice.repository.UserRepository;
import com.beautyhub.authservice.security.jwt.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserService userService;
    private final UserDetailsService userDetailsServiceService;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponseDTO signUp(SignUpRequest request) {
        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .city(request.getCity())
                .role(request.getRole())
                .build();
        userService.createUser(user);
        var jwtToken = jwtService.generateToken(user);
        return new AuthResponseDTO(jwtToken);
    }

    public AuthResponseDTO login(AuthRequestDTO request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getUsername(), request.getPassword()
        ));
        var user = userDetailsServiceService.loadUserByUsername(request.getUsername());
        var jwt = jwtService.generateToken(user);
        return new AuthResponseDTO(jwt);
    }
}
