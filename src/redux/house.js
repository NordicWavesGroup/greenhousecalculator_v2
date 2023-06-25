import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  kWh_CO2Result: 0,
  kWh_factor:0.50,
  kWh: 1500,
  

};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
 
    setkWh_CO2Result: (state, action) => {
      state.kWh_CO2Result = action.payload;
    },

    setkWh: (state, action) => {
      state.kWh = action.payload;
    },
    
    
    setkWh_factor: (state, action) => {
      state.kWh_factor = action.payload;
    },
    
  
  }
});

export const { 
              
              kWh_CO2Result,
         
              kWh,
              kWh_factor,
              setkWh_CO2Result

              } = houseSlice.actions;

export default houseSlice.reducer;