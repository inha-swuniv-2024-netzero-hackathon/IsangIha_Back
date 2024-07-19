package com.isangiha.isangiha.repository;

import com.isangiha.isangiha.domain.Coordinate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoordinateRepository extends JpaRepository<Coordinate, Long> {
}
