package com.beautyhub.authservice.entity;

import com.beautyhub.authservice.enums.UserRole;
import jakarta.persistence.*;

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String password;
    private String city;
    private UserRole roles;
}
