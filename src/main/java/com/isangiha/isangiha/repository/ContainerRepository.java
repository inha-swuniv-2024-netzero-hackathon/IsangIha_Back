package com.isangiha.isangiha.repository;

import com.isangiha.isangiha.domain.Container;
import com.isangiha.isangiha.domain.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContainerRepository extends JpaRepository<Container, Long> {

    List<Container> findAllByEvent(Event event);
}
