import { createSlice } from "@reduxjs/toolkit";

const initialState = {


  co2Result: 0,

};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
  
    //Electricity Global State
    setElectricityAverage: (state, action) => {
      state.electricity = action.payload;
    },
 
    setElectricityFootprint: (state, action) => {
      state.electricityFootprint = action.payload;
    }
 
  }
});
export const setCO2Result = (state, action) => {
  state.co2Result = action.payload;
};

export const { 
               selectCountry, 
               setNumPeople ,

               setElectricity, 
               setUserElectricityFactor, 
               setElectricityFootprint,
               resetElectricityFootprint, 
               setShowElectricityResult,

               setHouseFootprint,

               co2Result

              } = houseSlice.actions;

export default houseSlice.reducer;