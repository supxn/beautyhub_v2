package com.example.profileservice.entity;

import com.example.profileservice.Enum.UserRole;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue()
    private Long id;

    private String username;
    private String firstName;
    private String lastName;
    private String password;
    private UserRole role;
    private String email;
    private String city;
    private String phone;
}
