package com.isangiha.isangiha.controller;

import com.isangiha.isangiha.domain.Event;
import com.isangiha.isangiha.dto.EventSummaryDto;
import com.isangiha.isangiha.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/event/{eventId}")
@RequiredArgsConstructor
public class EventController {

    private final EventRepository eventRepository;

    @GetMapping
    public EventSummaryDto getEventSummary(@PathVariable("eventId") Long eventId) {
        Event event = eventRepository.findById(eventId).get();
        EventSummaryDto eventSummary = new EventSummaryDto(event.getEventId(), event.getEnterpriseName(),
                event.getEventName(), event.getHeadcount(), event.getStartDate(), event.getEndDate());

        return eventSummary;
    }


}
