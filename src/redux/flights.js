import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flights: [
    {
      selectedAirportFrom: {
        code: "",
        lat: "",
        lon: "",
        name: "",
        city: "",
        state: "",
        country: "",
        type: "",
      },
      selectedAirportTo: {
        code: "",
        lat: "",
        lon: "",
        name: "",
        city: "",
        state: "",
        country: "",
        type: "",
      },
      airportFromLocation: {
        lat: null,
        lon: null,
      },
      airportToLocation: {
        lat: null,
        lon: null,
      },
      distanceBetweenAirports: 0,
      showFlightResult: false,
      resetFlightFootprint: 0,
      flightFootprint: 0,
    },
  ],
};

export const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setSelectedAirportFrom: (state, action) => {
      const { index } = action.payload;
      const data = {
        code: action.payload.code ? action.payload.code : null,
        lat: action.payload.lat ? action.payload.lat : null,
        lon: action.payload.lon ? action.payload.lon : null,
        name: action.payload.name ? action.payload.name : null,
        city: action.payload.city ? action.payload.city : null,
        state: action.payload.state ? action.payload.state : null,
        country: action.payload.country ? action.payload.country : null,
        type: action.payload.type ? action.payload.type : null,
      };
      state.flights[index] = {
        ...state.flights[index],
        selectedAirportFrom: data,
      };
    },
    setSelectedAirportTo: (state, action) => {
      const { index } = action.payload;
      const data = {
        code: action.payload.code,
        lat: action.payload.lat,
        lon: action.payload.lon,
        name: action.payload.name,
        city: action.payload.city,
        state: action.payload.state,
        country: action.payload.country,
        type: action.payload.type,
      };
      state.flights[index] = {
        ...state.flights[index],
        selectedAirportTo: data,
      };
    },
    setAirportFromLocation: (state, action) => {
      const { index } = action.payload;
      const data = {
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
      state.flights[index] = {
        ...state.flights[index],
        airportFromLocation: data,
      };
    },
    setAirportToLocation: (state, action) => {
      const { index } = action.payload;
      const data = {
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
      state.flights[index] = {
        ...state.flights[index],
        airportToLocation: data,
      };
    },
    setDistanceBetweenAirports: (state, action) => {
      const { index } = action.payload;
      state.flights[index] = {
        ...state.flights[index],
        distanceBetweenAirports:
          action.payload.distanceBetweenAirports.toFixed(2),
      };
    },
    setFlightFootprint: (state, action) => {
      const { index } = action.payload;
      state.flights[index] = {
        ...state.flights[index],
        flightFootprint: action.payload.carbonFootprint.toFixed(2),
      };
    },
    resetFlightFootprint: (state, action) => {
      const { index } = action.payload;
      if (index > 0) {
        const newArray = [...state.flights];
        newArray.splice(index, 1);
        state.flights = newArray;
      }
    },
    setShowFlightResult: (state, action) => {
      const { index } = action.payload;
      state.flights[index] = {
        ...state.flights[index],
        showFlightResult: action.payload.showFlight,
      };
    },
  },
});

export const {
  setSelectedAirportFrom,
  setSelectedAirportTo,
  setAirportFromLocation,
  setAirportToLocation,
  setDistanceBetweenAirports,
  setFlightFootprint,
  setShowFlightResult,
  resetFlightFootprint,
} = flightsSlice.actions;

export default flightsSlice.reducer;
