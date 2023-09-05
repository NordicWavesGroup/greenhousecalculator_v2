import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountryCar: "Denmark",

  carMileage: 0,
  carUnit: "km",
  carType: "-select type-",
  carSize: "-select size-",
  carFootprint: 0,
  resetCarFootprint: 0,
  showCarResult: false,
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    selectCountryCar: (state, action) => {
      state.selectedCountryCar = action.payload;
    },
    //Car Global State
    setCarMileage: (state, action) => {
      state.carMileage = action.payload;
    },
    setCarUnitFactor: (state, action) => {
      state.carUnit = action.payload;
    },
    setCarTypeFactor: (state, action) => {
      state.carType = action.payload;
    },
    setCarSizeFactor: (state, action) => {
      state.carSize = action.payload;
    },

    setCarFootprint: (state, action) => {
      state.carFootprint = action.payload;
    },
    resetCarFootprint: (state) => {
      state.carFootprint = initialState.carFootprint;
    },
    setShowCarResult: (state, action) => {
      state.showCarResult = action.payload;
    },
  },
});

export const {
  selectedCountryCar,

  setCarMileage,
  setCarUnitFactor,
  setCarTypeFactor,
  setCarSizeFactor,

  setCarFootprint,
  resetCarFootprint,
  setShowCarResult,
} = carSlice.actions;

export default carSlice.reducer;
