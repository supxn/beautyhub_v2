package com.example.profileservice.master.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@Table(name = "master_profiles")
public class MasterProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private Long userId;

    @Column(nullable = false)
    private String displayName;

    @Column(length = 1000)
    private String bio;

    private String phone;
    private String city;
    private String photoUrl;

    private Double rating;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    private String specialization;

    @ElementCollection
    @CollectionTable(
            name = "master_work_photos",
            joinColumns = @JoinColumn(name = "master_id")
    )
    @Column(name = "photo_url", length = 1024)
    private List<String> workPhotos = new ArrayList<>();

    @ElementCollection
    @CollectionTable(
            name = "master_certificate_photos",
            joinColumns = @JoinColumn(name = "master_id")
    )
    @Column(name = "photo_url", length = 1024)
    private List<String> certificatePhotos = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        this.createdAt = this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}

