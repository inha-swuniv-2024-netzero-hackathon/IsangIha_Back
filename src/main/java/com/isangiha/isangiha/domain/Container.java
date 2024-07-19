package com.isangiha.isangiha.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Container {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long containerId;

    private String containerType;
    private Integer quantity;
}
