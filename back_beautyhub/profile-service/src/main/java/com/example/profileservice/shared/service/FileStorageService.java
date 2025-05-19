package com.example.profileservice.shared.service;

import io.minio.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class FileStorageService {

    private final MinioClient minioClient;

    @Value("${minio.bucket.client-photos}")
    private String clientPhotosBucket;

    @Value("${minio.bucket.master-works}")
    private String masterWorksBucket;

    @Value("${minio.bucket.certificates}")
    private String certificatesBucket;

    @Value("${minio.public-url}")
    private String minioPublicUrl;

    public String uploadClientPhoto(Long userId, MultipartFile file) throws Exception {
        String extension = FilenameUtils.getExtension(file.getOriginalFilename());
        String objectName = String.format("client-%d-%s.%s", userId, UUID.randomUUID(), extension);
        return uploadFile(file, clientPhotosBucket, objectName);
    }

    public String uploadMasterWork(Long masterId, MultipartFile file) throws Exception {
        String extension = FilenameUtils.getExtension(file.getOriginalFilename());
        String objectName = String.format("work-%d-%s.%s", masterId, UUID.randomUUID(), extension);
        return uploadFile(file, masterWorksBucket, objectName);
    }

    public String uploadCertificate(Long masterId, MultipartFile file) throws Exception {
        String extension = FilenameUtils.getExtension(file.getOriginalFilename());
        String objectName = String.format("cert-%d-%s.%s", masterId, UUID.randomUUID(), extension);
        return uploadFile(file, certificatesBucket, objectName);
    }

    private String uploadFile(MultipartFile file, String bucket, String objectName) throws Exception {
        createBucketIfNotExists(bucket);

        try (InputStream inputStream = file.getInputStream()) {
            long fileSize = file.getSize() > 0 ? file.getSize() : -1;

            minioClient.putObject(
                    PutObjectArgs.builder()
                            .bucket(bucket)
                            .object(objectName)
                            .stream(inputStream, fileSize, -1)
                            .contentType(file.getContentType())
                            .build());
        } catch (Exception e) {
            log.error("File upload failed: {}", e.getMessage());
            throw new RuntimeException("File upload failed", e);
        }

        return constructObjectUrl(bucket, objectName);
    }

    private void createBucketIfNotExists(String bucket) {
        try {
            if (!minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucket).build())) {
                minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucket).build());
            }
        } catch (Exception e) {
            log.error("Bucket creation failed: {}", e.getMessage());
            throw new RuntimeException("Bucket operation failed", e);
        }
    }

    private String constructObjectUrl(String bucket, String objectName) {
        return String.format("%s/%s/%s", minioPublicUrl, bucket, objectName);
    }
}