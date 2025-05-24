// CategoryDocument.java
package com.example.profileservice.master.document;

import lombok.Data;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import java.util.List;

@Data
public class CategoryDocument {
    private String category;

    @Field(type = FieldType.Nested)
    private List<ServiceDocument> services;
}
