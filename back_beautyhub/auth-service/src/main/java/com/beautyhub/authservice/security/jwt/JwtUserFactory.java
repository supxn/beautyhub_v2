/*
package com.beautyhub.authservice.security.jwt;

import com.beautyhub.authservice.entity.User;
import com.beautyhub.authservice.enums.UserRole;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

public final class JwtUserFactory {
    public JwtUserFactory() {
    }

    public static JwtUser create(User user) {
        return new JwtUser(
                user.getId(),
                user.getUsername(),
                user.getFirstName(),
                user.getLastName(),
                user.getPassword(),
                mapToGrantedAuthorities(user.getRoles()),
                user.getEmail(),
                //user.getRoles().equals(UserRole.CLIENT),
                null //user.getUpdated()
        );
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(UserRole userRole) {
        return List.of(new SimpleGrantedAuthority(userRole.toString()));
    }
}
*/
