package com.isangiha.isangiha.controller;

import com.isangiha.isangiha.constants.ContainerType;
import com.isangiha.isangiha.domain.Container;
import com.isangiha.isangiha.domain.Event;
import com.isangiha.isangiha.dto.MonitorDto;
import com.isangiha.isangiha.repository.ContainerRepository;
import com.isangiha.isangiha.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/monitors/{eventId}")
@RequiredArgsConstructor
public class MonitorController {

    private final EventRepository eventRepository;
    private final ContainerRepository containerRepository;

    @GetMapping
    public MonitorDto getEventMonitor(@PathVariable("eventId") Long eventId) {
        Event event = eventRepository.findById(eventId).get();
        List<Container> containers = containerRepository.findAllByEvent(event);
        Integer money = 0;
        Integer carbon = 0;
        for (Container container : containers) {
            ContainerType type = container.getContainerType();
            Integer quantity = container.getQuantity();
            money += (type.getSavedMoney() * quantity);
            carbon += (type.getSavedCarbon() * quantity);
        }

        MonitorDto monitorDto = new MonitorDto(money, carbon);
        return monitorDto;
    }
}
