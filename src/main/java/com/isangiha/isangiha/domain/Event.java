package com.isangiha.isangiha.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;

    private String enterpriseName;

    private String eventName;

    private Integer headcount;

    private String startDate;

    private String endDate;

    private String deliveryDate;

    private String collectionDate;

    private String location;

    private Integer cluster;

    private Boolean meeting;

    private String meetingDate;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Coordinate> coordinates;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Container> containers;

}
