package com.isangiha.isangiha.service;

import com.isangiha.isangiha.domain.Application;
import com.isangiha.isangiha.dto.ApplicationDto;
import com.isangiha.isangiha.repository.ApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ApplyService {

    private final ApplicationRepository applicationRepository;

    @Transactional
    public void save(Application application) {
        applicationRepository.save(application);
    }


}
