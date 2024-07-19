package com.isangiha.isangiha.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "application")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicationId;

    @NotNull
    private String enterpriseName;

    @NotNull
    private String eventName;

    @NotNull
    private Integer headcount;

    @ManyToOne
    @NotNull
    private Container container;

    @NotNull
    private String startDate;

    @NotNull
    private String endDate;

    @NotNull
    private String deliveryDate;

    @NotNull
    private String collectionDate;

    @NotNull
    private String location;

    private String cluster;

    @NotNull
    private Boolean meeting;

    private String meetingDate;

}
