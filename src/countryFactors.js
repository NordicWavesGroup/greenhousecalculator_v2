const countryFactors = {
    Denmark: {
      flag_icon:'🇩🇰',
      electricity_factor: 0.155,
      naturalGasUnits: {
        kWh: {naturalGas_factor: 0.2},
      },
      heatingOilUnits: {
        kWh: {heatingOil_factor: 1},
      },
      coalUnits: {
        kWh: {coal_factor: 0.34},
      },
      LPGUnits: {
        kWh: {LPG_factor: 0.23},
      },
      propaneUnits: {
        kWh: {propane_factor: 0.23},
      },
      woodenPelletsUnits: {
        kWh: {woodenPellets_factor: 0.10},
      },
      foodDietRange: {
        meatAlways: {
          foodDiet_factor: 7.26,
          description: "Meat with every meal"
        },
        meatSeveralTimesWeek: {
          foodDiet_factor: 5.66,
          description: "Meat several times a week"
        },
        meatRarely: {
          foodDiet_factor: 4.67,
          description: "Meat rarely"
        },
        vegetarian: {
          foodDiet_factor: 3.85,
          description: "Vegetarian"
        },
        vegan: {
          foodDiet_factor: 2.94,
          description: "Vegan"
        },        
      },
      waterRange: {
        year: {water_factor: 38},
       
      },
      wasteRange: {
        year: {waste_factor: 1},
        month: {waste_factor: 2},
        week: {waste_factor: 3}
      },
      busUnits: {
        km: {bus_factor: 0.02481},
      },
      coachUnits: {
        km: {coach_factor: 0.026},
      },
      localTrainUnits: {
        km: {localTrain_factor: 0.00413},
      },
      longTrainUnits: {
        km: {longTrain_factor: 0.041},
      },
      tramUnits: {
        km: {tram_factor: 0.00413},
      },
      subwayUnits: {
        km: {subway_factor: 0.00413},
      },
      taxiUnits: {
        km: {taxi_factor: 0.23},
      },
      motorbikeMileageUnits: {
        km: {motorbikeMileage_factor: 1},
      },
      motorbikeMotorSize: {
        small: {
          motorbikeSize_factor: 0.08306,
          description: " motorbike/moped/scooter up to 125cc"
        },
        medium: {
          motorbikeSize_factor: 0.1009,
          description: " motorbike over 125cc and up to 500cc"
        },
        large: {
          motorbikeSize_factor: 0.13245,
          description: " motorbike over 500cc"
        },
      },
      carMileageUnits: {
        km: {car_mileage_factor: 1},
      },
      carType: {
        electric: {
          carType_factor: 0.06,
          description: "average battery"
        },
        hybrid_: {
          carType_factor: 0.19,
          description: "( full ) average battery"
        },
        hybrid: {
          carType_factor: 0.171,
          description: "( plug-in ) average battery"
        },
        gasoline: {
          carType_factor: 0.241,
          description: ""
        },
        diesel: {
          carType_factor: 0.231,
          description: ""
        },
      },
      carSize: {
        small: {car_size_factor: 0.13989},
        medium: {car_size_factor: 0.168},
        large: {car_size_factor: 0.20953},
      },
    },
    Norway: {
      flag_icon:'🇳🇴',
      electricity_factor: 0.03,
      naturalGasUnits: {
        kWh: {naturalGas_factor: 0.2},
      },
      heatingOilUnits: {
        kWh: {heatingOil_factor: 1},
      },
      coalUnits: {
        kWh: {coal_factor: 0.34},
      },
      LPGUnits: {
        kWh: {LPG_factor: 0.23},
      },
      propaneUnits: {
        kWh: {propane_factor: 0.23},
      },
      woodenPelletsUnits: {
        kWh: {woodenPellets_factor: 0.10},
      },
      foodDietRange: {
        meatAlways: {
          foodDiet_factor: 7.26,
          description: "Meat with every meal"
        },
        meatSeveralTimesWeek: {
          foodDiet_factor: 5.66,
          description: "Meat several times a week"
        },
        meatRarely: {
          foodDiet_factor: 4.67,
          description: "Meat rarely"
        },
        vegetarian: {
          foodDiet_factor: 3.85,
          description: "Vegetarian"
        },
        vegan: {
          foodDiet_factor: 2.94,
          description: "Vegan"
        },        
      },
      waterRange: {
        year: {water_factor: 34},
      },
      wasteRange: {
        year: {waste_factor: 1},
        month: {waste_factor: 2},
        week: {waste_factor: 3}
      },
      busUnits: {
        km: {bus_factor: 0.02481},
      },
      coachUnits: {
        km: {coach_factor: 0.026},
      },
      localTrainUnits: {
        km: {localTrain_factor: 0.00413},
      },
      longTrainUnits: {
        km: {longTrain_factor: 0.041},
      },
      tramUnits: {
        km: {tram_factor: 0.00413},
      },
      subwayUnits: {
        km: {subway_factor: 0.00413},
      },
      taxiUnits: {
        km: {taxi_factor: 0.23},
      },
      motorbikeMileageUnits: {
        km: {motorbikeMileage_factor: 1},
      },
      motorbikeMotorSize: {
        small: {
          motorbikeSize_factor: 0.08306,
          description: " motorbike/moped/scooter up to 125cc"
        },
        medium: {
          motorbikeSize_factor: 0.1009,
          description: " motorbike over 125cc and up to 500cc"
        },
        large: {
          motorbikeSize_factor: 0.13245,
          description: " motorbike over 500cc"
        },
      },
      carMileageUnits: {
        km: {car_mileage_factor: 1},
      },
      carType: {
        electric: {
          carType_factor: 0.06,
          description: "average battery"
        },
        hybrid_: {
          carType_factor: 0.19,
          description: "( full ) average battery"
        },
        hybrid: {
          carType_factor: 0.171,
          description: "( plug-in ) average battery"
        },
        gasoline: {
          carType_factor: 0.241,
          description: ""
        },
        diesel: {
          carType_factor: 0.231,
          description: ""
        },
      },
      carSize: {
        small: {car_size_factor: 0.13989},
        medium: {car_size_factor: 0.168},
        large: {car_size_factor: 0.20953},
      },
    },
    Finland: {
      flag_icon:'🇫🇮',
      electricity_factor: 0.155,
      naturalGasUnits: {
        kWh: {naturalGas_factor: 0.2},
      },
      heatingOilUnits: {
        kWh: {heatingOil_factor: 1},
      },
      coalUnits: {
        kWh: {coal_factor: 0.34},
      },
      LPGUnits: {
        kWh: {LPG_factor: 0.23},
      },
      propaneUnits: {
        kWh: {propane_factor: 0.23},
      },
      woodenPelletsUnits: {
        kWh: {woodenPellets_factor: 0.10},
      },
      foodDietRange: {
        meatAlways: {
          foodDiet_factor: 7.26,
          description: "Meat with every meal"
        },
        meatSeveralTimesWeek: {
          foodDiet_factor: 5.66,
          description: "Meat several times a week"
        },
        meatRarely: {
          foodDiet_factor: 4.67,
          description: "Meat rarely"
        },
        vegetarian: {
          foodDiet_factor: 3.85,
          description: "Vegetarian"
        },
        vegan: {
          foodDiet_factor: 2.94,
          description: "Vegan"
        },        
      },
      waterRange: {
        year: {water_factor: 129},
       
      },
      wasteRange: {
        year: {waste_factor: 1},
        month: {waste_factor: 2},
        week: {waste_factor: 3}
      },
      busUnits: {
        km: {bus_factor: 0.02481},
      },
      coachUnits: {
        km: {coach_factor: 0.026},
      },
      localTrainUnits: {
        km: {localTrain_factor: 0.00413},
      },
      longTrainUnits: {
        km: {longTrain_factor: 0.041},
      },
      tramUnits: {
        km: {tram_factor: 0.00413},
      },
      subwayUnits: {
        km: {subway_factor: 0.00413},
      },
      taxiUnits: {
        km: {taxi_factor: 0.23},
      },
      motorbikeMileageUnits: {
        km: {motorbikeMileage_factor: 1},
      },
      motorbikeMotorSize: {
        small: {
          motorbikeSize_factor: 0.08306,
          description: " motorbike/moped/scooter up to 125cc"
        },
        medium: {
          motorbikeSize_factor: 0.1009,
          description: " motorbike over 125cc and up to 500cc"
        },
        large: {
          motorbikeSize_factor: 0.13245,
          description: " motorbike over 500cc"
        },
      },
      carMileageUnits: {
        km: {car_mileage_factor: 1},
      },
      carType: {
        electric: {
          carType_factor: 0.06,
          description: "average battery"
        },
        hybrid_: {
          carType_factor: 0.19,
          description: "( full ) average battery"
        },
        hybrid: {
          carType_factor: 0.171,
          description: "( plug-in ) average battery"
        },
        gasoline: {
          carType_factor: 0.241,
          description: ""
        },
        diesel: {
          carType_factor: 0.231,
          description: ""
        },
      },
      carSize: {
        small: {car_size_factor: 0.13989},
        medium: {car_size_factor: 0.168},
        large: {car_size_factor: 0.20953},
      },
    },
    UK: {
      flag_icon:'🇬🇧',
      electricity_factor: 0.155,
      naturalGasUnits: {
        kWh: {naturalGas_factor: 0.2},
      },
      heatingOilUnits: {
        kWh: {heatingOil_factor: 1},
      },
      coalUnits: {
        kWh: {coal_factor: 0.34},
      },
      LPGUnits: {
        kWh: {LPG_factor: 0.23},
      },
      propaneUnits: {
        kWh: {propane_factor: 0.23},
      },
      woodenPelletsUnits: {
        kWh: {woodenPellets_factor: 0.10},
      },
      foodDietRange: {
        meatAlways: {
          foodDiet_factor: 7.26,
          description: "Meat with every meal"
        },
        meatSeveralTimesWeek: {
          foodDiet_factor: 5.66,
          description: "Meat several times a week"
        },
        meatRarely: {
          foodDiet_factor: 4.67,
          description: "Meat rarely"
        },
        vegetarian: {
          foodDiet_factor: 3.85,
          description: "Vegetarian"
        },
        vegan: {
          foodDiet_factor: 2.94,
          description: "Vegan"
        },        
      },
      waterRange: {
        year: {water_factor: 91},
      },
      wasteRange: {
        year: {waste_factor: 1},
        month: {waste_factor: 2},
        week: {waste_factor: 3}
      },
      busUnits: {
        km: {bus_factor: 0.02481},
      },
      coachUnits: {
        km: {coach_factor: 0.026},
      },
      localTrainUnits: {
        km: {localTrain_factor: 0.00413},
      },
      longTrainUnits: {
        km: {longTrain_factor: 0.041},
      },
      tramUnits: {
        km: {tram_factor: 0.00413},
      },
      subwayUnits: {
        km: {subway_factor: 0.00413},
      },
      taxiUnits: {
        km: {taxi_factor: 0.23},
      },
      motorbikeMileageUnits: {
        km: {motorbikeMileage_factor: 1},
      },
      motorbikeMotorSize: {
        small: {
          motorbikeSize_factor: 0.08306,
          description: " motorbike/moped/scooter up to 125cc"
        },
        medium: {
          motorbikeSize_factor: 0.1009,
          description: " motorbike over 125cc and up to 500cc"
        },
        large: {
          motorbikeSize_factor: 0.13245,
          description: " motorbike over 500cc"
        },
      },
      carMileageUnits: {
        km: {car_mileage_factor: 1},
      },
      carType: {
        electric: {
          carType_factor: 0.06,
          description: "average battery"
        },
        hybrid_: {
          carType_factor: 0.19,
          description: "( full ) average battery"
        },
        hybrid: {
          carType_factor: 0.171,
          description: "( plug-in ) average battery"
        },
        gasoline: {
          carType_factor: 0.241,
          description: ""
        },
        diesel: {
          carType_factor: 0.231,
          description: ""
        },
      },
      carSize: {
        small: {car_size_factor: 0.13989},
        medium: {car_size_factor: 0.168},
        large: {car_size_factor: 0.20953},
      },
    },
    Sweden: {
      flag_icon:'🇸🇪',
      electricity_factor: 0.155,
      naturalGasUnits: {
        kWh: {naturalGas_factor: 0.2},
      },
      heatingOilUnits: {
        kWh: {heatingOil_factor: 1},
      },
      coalUnits: {
        kWh: {coal_factor: 0.34},
      },
      LPGUnits: {
        kWh: {LPG_factor: 0.23},
      },
      propaneUnits: {
        kWh: {propane_factor: 0.23},
      },
      woodenPelletsUnits: {
        kWh: {woodenPellets_factor: 0.10},
      },
      foodDietRange: {
        meatAlways: {
          foodDiet_factor: 7.26,
          description: "Meat with every meal"
        },
        meatSeveralTimesWeek: {
          foodDiet_factor: 5.66,
          description: "Meat several times a week"
        },
        meatRarely: {
          foodDiet_factor: 4.67,
          description: "Meat rarely"
        },
        vegetarian: {
          foodDiet_factor: 3.85,
          description: "Vegetarian"
        },
        vegan: {
          foodDiet_factor: 2.94,
          description: "Vegan"
        },        
      },
      waterRange: {
        year: {water_factor: 23},
      },
      wasteRange: {
        year: {waste_factor: 1},
        month: {waste_factor: 2},
        week: {waste_factor: 3}
      },
      busUnits: {
        km: {bus_factor: 0.02481},
      },
      coachUnits: {
        km: {coach_factor: 0.026},
      },
      localTrainUnits: {
        km: {localTrain_factor: 0.00413},
      },
      longTrainUnits: {
        km: {longTrain_factor: 0.041},
      },
      tramUnits: {
        km: {tram_factor: 0.00413},
      },
      subwayUnits: {
        km: {subway_factor: 0.00413},
      },
      taxiUnits: {
        km: {taxi_factor: 0.23},
      },
      motorbikeMileageUnits: {
        km: {motorbikeMileage_factor: 1},
      },
      motorbikeMotorSize: {
        small: {
          motorbikeSize_factor: 0.08306,
          description: " motorbike/moped/scooter up to 125cc"
        },
        medium: {
          motorbikeSize_factor: 0.1009,
          description: " motorbike over 125cc and up to 500cc"
        },
        large: {
          motorbikeSize_factor: 0.13245,
          description: " motorbike over 500cc"
        },
      },
      carMileageUnits: {
        km: {car_mileage_factor: 1},
      },
      carType: {
        electric: {
          carType_factor: 0.06,
          description: "average battery"
        },
        hybrid_: {
          carType_factor: 0.19,
          description: "( full ) average battery"
        },
        hybrid: {
          carType_factor: 0.171,
          description: "( plug-in ) average battery"
        },
        gasoline: {
          carType_factor: 0.241,
          description: ""
        },
        diesel: {
          carType_factor: 0.231,
          description: ""
        },
      },
      carSize: {
        small: {car_size_factor: 0.13989},
        medium: {car_size_factor: 0.168},
        large: {car_size_factor: 0.20953},
      },
    },
    World_Average: {
      flag_icon:'🌐',
      electricity_factor: 0.155,
      naturalGasUnits: {
        kWh: {naturalGas_factor: 0.2},
      },
      heatingOilUnits: {
        kWh: {heatingOil_factor: 1},
      },
      coalUnits: {
        kWh: {coal_factor: 0.34},
      },
      LPGUnits: {
        kWh: {LPG_factor: 0.23},
      },
      propaneUnits: {
        kWh: {propane_factor: 0.23},
      },
      woodenPelletsUnits: {
        kWh: {woodenPellets_factor: 0.10},
      },
      foodDietRange: {
        meatAlways: {
          foodDiet_factor: 7.26,
          description: "Meat with every meal"
        },
        meatSeveralTimesWeek: {
          foodDiet_factor: 5.66,
          description: "Meat several times a week"
        },
        meatRarely: {
          foodDiet_factor: 4.67,
          description: "Meat rarely"
        },
        vegetarian: {
          foodDiet_factor: 3.85,
          description: "Vegetarian"
        },
        vegan: {
          foodDiet_factor: 2.94,
          description: "Vegan"
        },        
      },
      waterRange: {
        year: {water_factor: 84},
      },
      wasteRange: {
        year: {waste_factor: 1},
        month: {waste_factor: 2},
        week: {waste_factor: 3}
      },
      busUnits: {
        km: {bus_factor: 0.02481},
      },
      coachUnits: {
        km: {coach_factor: 0.026},
      },
      localTrainUnits: {
        km: {localTrain_factor: 0.00413},
      },
      longTrainUnits: {
        km: {longTrain_factor: 0.041},
      },
      tramUnits: {
        km: {tram_factor: 0.00413},
      },
      subwayUnits: {
        km: {subway_factor: 0.00413},
      },
      taxiUnits: {
        km: {taxi_factor: 0.23},
      },
      motorbikeMileageUnits: {
        km: {motorbikeMileage_factor: 1},
      },
      motorbikeMotorSize: {
        small: {
          motorbikeSize_factor: 0.08306,
          description: " motorbike/moped/scooter up to 125cc"
        },
        medium: {
          motorbikeSize_factor: 0.1009,
          description: " motorbike over 125cc and up to 500cc"
        },
        large: {
          motorbikeSize_factor: 0.13245,
          description: " motorbike over 500cc"
        },
      },
      carMileageUnits: {
        km: {car_mileage_factor: 1},
      },
      carType: {
        electric: {
          carType_factor: 0.06,
          description: "average battery"
        },
        hybrid_: {
          carType_factor: 0.19,
          description: "( full ) average battery"
        },
        hybrid: {
          carType_factor: 0.171,
          description: "( plug-in ) average battery"
        },
        gasoline: {
          carType_factor: 0.241,
          description: ""
        },
        diesel: {
          carType_factor: 0.231,
          description: ""
        },
      },
      carSize: {
        small: {car_size_factor: 0.13989},
        medium: {car_size_factor: 0.168},
        large: {car_size_factor: 0.20953},
      },
    },
  };
  
  export default countryFactors;
  