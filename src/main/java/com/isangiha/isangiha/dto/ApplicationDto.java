package com.isangiha.isangiha.dto;

import lombok.Data;

import java.util.List;

@Data
public class ApplicationDto {

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

    private List<ContainerDto> containers;
}
