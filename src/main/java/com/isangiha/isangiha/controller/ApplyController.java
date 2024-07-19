package com.isangiha.isangiha.controller;

import com.isangiha.isangiha.domain.Event;
import com.isangiha.isangiha.dto.ApplicationDto;
import com.isangiha.isangiha.service.ApplyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
@Slf4j
public class ApplyController {

    private final ApplyService applyService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public void applyPage() {
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void apply(@RequestBody Event event) {
        applyService.save(event);
    }

//    @PostMapping
//    @ResponseBody
//    public Application mockApply() {
//        Application application = new Application();
//        Container container = new Container(8L);
//        container.setContainerType("standard");
//        container.setQuantity(2);
//        application.setContainer(container);
//        application.setEventName("festival");
//        application.setCollectionDate("2023-02-19");
//        application.setStartDate("2023-01-19");
//        application.setEndDate("2022-01-10");
//        application.setDeliveryDate("2021-02-19");
//        application.setHeadcount(2000);
//        application.setLocation("Inha university");
//        application.setMeeting(Boolean.FALSE);
//        application.setEnterpriseName("enterprise");
//        applyService.save(application);
//        return application;
//    }

}
