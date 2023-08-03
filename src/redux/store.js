import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./house";
import secondaryReducer from "./secondary"
import busrailReducer from "./busrail";
import motorbikeReducer from "./motorbike";
import totalfootprintReducer from "./totalfootprint";
import flightsReducer from "./flights";
import carReducer from "./car";

export default configureStore({
  reducer: {
    house: houseReducer,
    secondary: secondaryReducer,
    busrail: busrailReducer,
    motorbike: motorbikeReducer,
    totalfootprint: totalfootprintReducer,
    flights: flightsReducer,
    car: carReducer,

  }
});