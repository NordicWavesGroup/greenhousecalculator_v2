import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kWh_CO2Result: 0,
  kWh_average: 1500,
  kWh_factor: 0.50,

  naturalGas_CO2Result: 0,
  naturalGas_average: 100,
  naturalGas_factor_kWh: 0.50,
  naturalGas_factor_therms: 1,
};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    setkWh_CO2Result: (state, action) => {
      state.kWh_CO2Result = action.payload;
    },
    setkWh_average: (state, action) => {
      state.kWh_average = action.payload;
    },
    setkWh_factor: (state, action) => {
      state.kWh_factor = action.payload;
    },
    ///////////////////////////////////////////////
    setNaturalGas_CO2Result: (state, action) => {
      state.naturalGas_CO2Result = action.payload;
    },
    setNaturalGas_average: (state, action) => {
      state.naturalGas_average = action.payload;
    },
    setNaturalGas_factor_kWh: (state, action) => {
      state.naturalGas_factor_kWh = action.payload;
    },
    setNaturalGas_factor_therms: (state, action) => {
      state.naturalGas_factor_therms = action.payload;
    },
  }
});

export const { 
  setkWh_CO2Result,
  setkWh_average,
  setkWh_factor,
  ///////////////
  setNaturalGas_CO2Result,
  setNaturalGas_average,
  setNaturalGas_factor_kWh,
  setNaturalGas_factor_therms,

} = houseSlice.actions;

export default houseSlice.reducer;
