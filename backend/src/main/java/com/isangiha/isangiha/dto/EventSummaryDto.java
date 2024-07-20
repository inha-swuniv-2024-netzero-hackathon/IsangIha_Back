package com.isangiha.isangiha.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EventSummaryDto {
    private Long eventId;
    private String enterpriseName;
    private String eventName;
    private Integer headcount;
    private String startDate;
    private String endDate;
}
