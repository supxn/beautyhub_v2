package com.beautyhub.authservice.security.jwt;

import com.beautyhub.authservice.dto.AuthRequestDTO;
import com.beautyhub.authservice.dto.AuthResponseDTO;
import com.beautyhub.authservice.dto.SignUpRequest;
import com.beautyhub.authservice.entity.Token;
import com.beautyhub.authservice.entity.User;
import com.beautyhub.authservice.repository.TokenRepository;
import com.beautyhub.authservice.repository.UserRepository;
import com.beautyhub.authservice.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;
    private final UserDetailsService userDetailsService;
    private final UserService userService;

    public void register(SignUpRequest request) {
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
    }

    public AuthResponseDTO authenticate(AuthRequestDTO request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getUsername(), request.getPassword()
        ));

        User user = (User) userDetailsService.loadUserByUsername(request.getUsername());

        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        revokeAllTokens(user);

        saveUserToken(accessToken, refreshToken, user);

        return new AuthResponseDTO(accessToken, refreshToken);
    }

    private void revokeAllTokens(User user) {
        List<Token> validTokens = tokenRepository.findAllAccessTokensByUser(user.getId());

        if (!validTokens.isEmpty()) {
            validTokens.forEach(token -> {
                token.setLoggedOut(true);
            });
        }

        tokenRepository.saveAll(validTokens);
    }

    private void saveUserToken(String accessToken, String refreshToken, User user) {
        Token token = new Token();

        token.setAccessToken(accessToken);
        token.setRefreshToken(refreshToken);
        token.setLoggedOut(false);
        token.setUser(user);

        tokenRepository.save(token);
    }

    public ResponseEntity<AuthResponseDTO> refreshToken(
            HttpServletRequest request,
            HttpServletResponse response){

        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if(authHeader != null && !authHeader.startsWith("Bearer ")){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String token = authHeader.substring(7);
        String username = jwtService.extractUsername(token);

        User user = (User) userDetailsService.loadUserByUsername(username);

        if(jwtService.isValidRefresh(token, user)){
            String accessToken = jwtService.generateAccessToken(user);
            String refreshToken = jwtService.generateRefreshToken(user);

            revokeAllTokens(user);

            saveUserToken(accessToken, refreshToken, user);

            return new ResponseEntity<>(new AuthResponseDTO(accessToken, refreshToken), HttpStatus.OK);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}
