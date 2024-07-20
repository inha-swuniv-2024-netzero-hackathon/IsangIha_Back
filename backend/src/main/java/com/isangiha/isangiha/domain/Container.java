package com.isangiha.isangiha.domain;

import com.isangiha.isangiha.constants.ContainerType;
import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "container")
public class Container {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long containerId;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

    @Enumerated(EnumType.STRING)
    private ContainerType containerType;

    private Integer quantity;

    public Container(Event event, ContainerType containerType, Integer quantity) {
        this.event = event;
        this.containerType = containerType;
        this.quantity = quantity;
    }
}
