import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  CO2Result: 4380,
  kWh_factor:0.50,
  kWh: 1500,
  

};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
 
    setCO2Result: (state, action) => {
      state.CO2Result = action.payload;
    },

    setkWh: (state, action) => {
      state.kWh = action.payload;
    },
    
    
    setkWh_factor: (state, action) => {
      state.kWh_factor = action.payload;
    },
    
    setElectricityFootprint: (state, action) => {
      state.electricityFootprint = action.payload;
    },
  }
});

export const { 
              
              CO2Result,
         
              kWh,
              kWh_factor,
              setElectricityFootprint,
              setCO2Result

              } = houseSlice.actions;

export default houseSlice.reducer;