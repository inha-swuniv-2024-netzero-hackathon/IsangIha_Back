package com.isangiha.isangiha.controller;

import com.isangiha.isangiha.domain.Application;
import com.isangiha.isangiha.dto.ApplicationDto;
import com.isangiha.isangiha.service.ApplyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/applications")
@RequiredArgsConstructor
public class ApplyController {

    private final ApplyService applyService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public void applyPage() {
    }

    @PostMapping
    @ResponseBody
    public Application apply(@ModelAttribute("application") @Valid Application application) {
        applyService.save(application);
        return application;
    }

}
