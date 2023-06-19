import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  co2Result: 4380,

};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
  
    setElectricityAverage: (state, action) => {
      state.electricity = action.payload;
    },
 
    setElectricityFootprint: (state, action) => {
      state.electricityFootprint = action.payload;
    },
 
    setCO2Result: (state, action) => {
      state.co2Result = action.payload;
    }
  }
});

export const { 
               
               setElectricityFootprint,
               resetElectricityFootprint, 
               setShowElectricityResult,

               co2Result

              } = houseSlice.actions;

export default houseSlice.reducer;