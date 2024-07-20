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
    public void apply(@RequestBody ApplicationDto applicationDto) {
        applyService.save(applicationDto);
    }

}
