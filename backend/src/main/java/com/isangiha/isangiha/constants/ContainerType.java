package com.isangiha.isangiha.constants;

public enum ContainerType {

    // 용기 유형 ( 비용(원), 줄인 탄소배출량(g), 절감된 비용(원))
    CUP_MINI(30,1,10),
    CUP_SMALL(50,2,20),
    CUP_MEDIUM(70,3,30),
    CUP_LARGE(90, 4,40),
    PLATE_MINI(50,4,10),
    PLATE_SMALL(50,4,10),
    PLATE_MEDIUM(50,4,10),
    PLATE_LARGE(50,4,10),
    TUMBLR_SMALL(50,4,10),
    TUMBLR_LARGE(50,4,10),
    TRAY_SMALL(50,4,10),
    TRAY_LARGE(50,4,10),
    BOX_SMALL(50,4,10),
    BOX_MEDIUM(50,4,10),
    BOX_LARGE(50,4,10);

    private final Integer cost;
    private final Integer savedMoney;
    private final Integer savedCarbon;

    ContainerType(Integer cost, Integer savedCarbon, Integer savedMoney) {
        this.cost = cost;
        this.savedCarbon = savedCarbon;
        this.savedMoney = savedMoney;
    }

    public Integer getSavedCarbon() {
        return savedCarbon;
    }

    public Integer getCost() {
        return cost;
    }

    public Integer getSavedMoney() {
        return savedMoney;
    }

    }
