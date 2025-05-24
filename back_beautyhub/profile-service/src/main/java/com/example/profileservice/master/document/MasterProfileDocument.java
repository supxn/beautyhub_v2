package com.example.profileservice.master.document;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.*;

import java.util.List;

@Data
@Document(indexName = "master_profiles")
@Setting(settingPath = "elasticsearch/settings.json")
@Mapping(mappingPath = "elasticsearch/mappings/master-profile-mapping.json")
public class MasterProfileDocument {

    @Id
    private Long id;

    private Long userId;
    private String bio;
    private String phone;
    private String city;
    private String photoUrl;
    private Double rating;
    private String specialization;
    private Integer experience;
    private String address;
    private String gender;
    private String acceptSAt;
    private Boolean hasReviews;

    @Field(type = FieldType.Nested)
    private List<CategoryDocument> categories;
}