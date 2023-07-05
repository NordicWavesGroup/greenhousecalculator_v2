import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kWh_CO2Result: 0,
  kWh_average: 0,
  kWh_factor: 0.50,
  ////////////////////////////////
  naturalGas_CO2Result: 0,
  naturalGas_average: 0,
  naturalGas_factor_kWh: 0.50,
  naturalGas_factor_therms: 0.80,
  ////////////////////////////////
  coal_CO2Result: 0,
  coal_average: 0,
  coal_factor_kWh: 0.30,
  coal_factor_therms: 0.75,
  ////////////////////////////////
  lpg_CO2Result: 0,
  lpg_average: 0,
  lpg_factor_kWh: 0.95,
  lpg_factor_therms: 0.13,
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
    ///////////////////////////////////////////////
    setCoal_CO2Result: (state, action) => {
      state.coal_CO2Result = action.payload;
    },
    setCoal_average: (state, action) => {
      state.coal_average = action.payload;
    },
    setCoal_factor_kWh: (state, action) => {
      state.coal_factor_kWh = action.payload;
    },
    setCoal_factor_therms: (state, action) => {
      state.coal_factor_therms = action.payload;
    },
    ///////////////////////////////////////////////
    setLpg_CO2Result: (state, action) => {
      state.lpg_CO2Result = action.payload;
    },
    setLpg_average: (state, action) => {
      state.lpg_average = action.payload;
    },
    setLpg_factor_kWh: (state, action) => {
      state.lpg_factor_kWh = action.payload;
    },
    setLpg_factor_therms: (state, action) => {
      state.lpg_factor_therms = action.payload;
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
  ///////////////
  setCoal_CO2Result,
  setCoal_average,
  setCoal_factor_kWh,
  setCoal_factor_therms,
  ///////////////
  setLpg_CO2Result,
  setLpg_average,
  setLpg_factor_kWh,
  setLpg_factor_therms,

} = houseSlice.actions;

export default houseSlice.reducer;
