import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountryMotorbike: "Denmark",

  motorbikeMileage: 0,
  unitMotorbike: "km",
  motorbikeSize:"-select type-",
  motorbikeFootprint: 0,
  resetMotorbikeFootprint:0,
  showMotorbikeResult:false,
};

export const motorbikeSlice = createSlice({
  name: "motorbike",
  initialState,
  reducers: {
    selectCountryMotorbike: (state, action) => {
      state.selectedCountryMotorbike = action.payload;
    },
    //Motorbike Global State
    setMotorbikeMileage: (state, action) => {
      state.motorbikeMileage = action.payload;
    },
    setUnitMotorbikeFactor: (state, action) => {
      state.unitMotorbike = action.payload;
    },
    setMotorbikeSizeFactor: (state, action) => {
      state.motorbikeSize = action.payload;
    },
    setMotorbikeEfficiency: (state, action) => {
      state.efficiencyMotorbike = action.payload;
    },
    setMotorbikeEfficiencyUnit: (state, action) => {
      state.efficiencyMotorbikeUnit = action.payload;
    },
    setMotorbikeFootprint: (state, action) => {
      state.motorbikeFootprint = action.payload;
    },
    resetMotorbikeFootprint: state => {
      state.motorbikeFootprint = initialState.motorbikeFootprint;
    },
    setShowMotorbikeResult: (state, action) => {
      state.showMotorbikeResult = action.payload;
    },
  }
});

export const { 
               selectCountryMotorbike, 

               setMotorbikeMileage, 
               setUnitMotorbikeFactor,
               setMotorbikeSizeFactor,
               setMotorbikeEfficiency, 
               setMotorbikeEfficiencyUnit,
               setMotorbikeFootprint,
               resetMotorbikeFootprint, 
               setShowMotorbikeResult,

              } = motorbikeSlice.actions;

export default motorbikeSlice.reducer;