package com.isangiha.isangiha.controller;

import com.isangiha.isangiha.dto.ApplicationDto;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class HomeController {

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public void welcomePage() {
    }

}

