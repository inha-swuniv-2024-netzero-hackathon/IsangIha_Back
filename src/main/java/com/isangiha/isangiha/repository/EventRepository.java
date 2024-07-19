package com.isangiha.isangiha.repository;

import com.isangiha.isangiha.domain.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
