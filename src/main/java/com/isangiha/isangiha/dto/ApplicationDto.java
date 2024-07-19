package com.isangiha.isangiha.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ApplicationDto {

    @NotNull
    private String enterpriseName;

    @NotNull
    private String eventName;

    @NotNull
    private Integer headcount;

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

    @Data
    private class Container {
        private String containerType;
        private Integer quantity;
    }
}
