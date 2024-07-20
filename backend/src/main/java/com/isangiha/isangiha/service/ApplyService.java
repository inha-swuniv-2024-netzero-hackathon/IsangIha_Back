package com.isangiha.isangiha.service;

import com.isangiha.isangiha.domain.Coordinate;
import com.isangiha.isangiha.domain.Event;
import com.isangiha.isangiha.domain.Container;
import com.isangiha.isangiha.dto.ApplicationDto;
import com.isangiha.isangiha.dto.ContainerDto;
import com.isangiha.isangiha.repository.CoordinateRepository;
import com.isangiha.isangiha.repository.EventRepository;
import com.isangiha.isangiha.repository.ContainerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplyService {

    private final EventRepository eventRepository;
    private final ContainerRepository containerRepository;
    private final CoordinateRepository coordinateRepository;

    @Transactional
    public void save(ApplicationDto applicationDto) {

        //make mock coordinates data
        List<Coordinate> tempList = new ArrayList<>();
        tempList.add(new Coordinate("37.4503128", "126.6540368"));
        tempList.add(new Coordinate("37.4482966", "126.6560403"));
        tempList.add(new Coordinate("37.4478707", "126.6574029"));
        app.setCoordinates(tempList);

        for (Container container : app.getContainers()) {
            container.setEvent(app);
            containerRepository.save(container);
        }

        for (Coordinate coordinate : app.getCoordinates()) {
            coordinate.setEvent(app);
            coordinateRepository.save(coordinate);
        }
    }


//    public void processAndSave(ApplicationDto application) {
//        Event e = applicationToEvent(application);
//        Event event = eventRepository.save(e);
//
//
//
//
//    }
//
//    public void containerDtoToContainer(ContainerDto c, ApplicationDto a) {
//    }
//
//    public Event applicationToEvent(ApplicationDto app) {
//        Event event = new Event();
//        event.setCluster(app.getCluster());
//        event.setEventName(app.getEventName());
//        event.setCollectionDate(app.getCollectionDate());
//        event.setDeliveryDate(app.getDeliveryDate());
//        event.setEnterpriseName(app.getEnterpriseName());
//        event.setStartDate(app.getStartDate());
//        event.setEndDate(app.getEndDate());
//        event.setHeadcount(app.getHeadcount());
//
//        return event;
//    }
}
