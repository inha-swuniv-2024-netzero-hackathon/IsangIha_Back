package com.isangiha.isangiha.repository;

import com.isangiha.isangiha.domain.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
}
