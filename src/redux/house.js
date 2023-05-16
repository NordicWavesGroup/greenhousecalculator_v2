import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountry: "Denmark",
  numPeople: 1,

  electricity: 0,
  userElectricityFactor: null,
  electricityFootprint: 0,
  resetElectricityFootprint:0,
  showElectricityResult:false,

  naturalGas: 0,
  unitNaturalGas: "kWh",
  naturalGasFootprint: 0,
  resetNaturalGasFootprint:0,
  showNaturalGasResult:false,

  heatingOil: 0,
  unitHeatingOil: "kWh",
  heatingOilFootprint: 0,
  resetHeatingOilFootprint:0,
  showHeatingOilResult:false,
  
  coal: 0,
  unitCoal: "kWh",
  coalFootprint: 0,
  resetCoalFootprint:0,
  showCoalResult:false,

  LPG: 0,
  unitLPG: "kWh",
  LPGFootprint: 0,
  resetLPGFootprint:0,
  showLPGResult:false,

  propane: 0,
  unitPropane: "kWh",
  propaneFootprint: 0,
  resetPropaneFootprint:0,
  showPropaneResult:false,

  woodenPellets: 0,
  unitWoodenPellets: "kWh",
  woodenPelletsFootprint: 0,
  resetWoodenPelletsFootprint:0,
  showWoodenPelletsResult:false,

  houseFootprint:0,
};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setNumPeople: (state, action) => {
      state.numPeople = action.payload;
    },
    //Electricity Global State
    setElectricity: (state, action) => {
      state.electricity = action.payload;
    },
    setUserElectricityFactor: (state, action) => {
      state.userElectricityFactor = action.payload;
    },
    setElectricityFootprint: (state, action) => {
      state.electricityFootprint = action.payload;
    },
    resetElectricityFootprint: state => {
      state.electricityFootprint = initialState.electricityFootprint;
    },
    setShowElectricityResult: (state, action) => {
      state.showElectricityResult = action.payload;
    },
   //Natural Gas Global State
    setNaturalGas: (state, action) => {
      state.naturalGas = action.payload;
    },
    setUnitNaturalGasFactor: (state, action) => {
      state.unitNaturalGas = action.payload;
    },
    setNaturalGasFootprint: (state, action) => {
      state.naturalGasFootprint = action.payload;
    },
    resetNaturalGasFootprint: state => {
      state.naturalGasFootprint = initialState.naturalGasFootprint;
    },
    setShowNaturalGasResult: (state, action) => {
      state.showNaturalGasResult = action.payload;
    },
    //Heating Oil Global State
    setHeatingOil: (state, action) => {
      state.heatingOil = action.payload;
    },
    setUnitHeatingOilFactor: (state, action) => {
      state.unitHeatingOil = action.payload;
    },
    setHeatingOilFootprint: (state, action) => {
      state.heatingOilFootprint = action.payload;
    },
    resetHeatingOilFootprint: state => {
      state.heatingOilFootprint = initialState.heatingOilFootprint;
    },
    setShowHeatingOilResult: (state, action) => {
      state.showHeatingOilResult = action.payload;
    },
    //Coal Global State
    setCoal: (state, action) => {
      state.coal = action.payload;
    },
    setUnitCoalFactor: (state, action) => {
      state.unitCoal = action.payload;
    },
    setCoalFootprint: (state, action) => {
      state.coalFootprint = action.payload;
    },
    resetCoalFootprint: state => {
      state.coalFootprint = initialState.coalFootprint;
    },
    setShowCoalResult: (state, action) => {
      state.showCoalResult = action.payload;
    },
    //LPG Global State
    setLPG: (state, action) => {
      state.LPG = action.payload;
    },
    setUnitLPGFactor: (state, action) => {
      state.unitLPG = action.payload;
    },
    setLPGFootprint: (state, action) => {
      state.LPGFootprint = action.payload;
    },
    resetLPGFootprint: state => {
      state.LPGFootprint = initialState.LPGFootprint;
    },
    setShowLPGResult: (state, action) => {
      state.showLPGResult = action.payload;
    },
    //Propane Global State
    setPropane: (state, action) => {
      state.propane= action.payload;
    },
    setUnitPropaneFactor: (state, action) => {
      state.unitPropane = action.payload;
    },
    setPropaneFootprint: (state, action) => {
      state.propaneFootprint = action.payload;
    },
    resetPropaneFootprint: state => {
      state.propaneFootprint = initialState.propaneFootprint;
    },
    setShowPropaneResult: (state, action) => {
      state.showPropaneResult = action.payload;
    },
    //Wooden Pellets Global State
    setWoodenPellets: (state, action) => {
      state.woodenPellets= action.payload;
    },
    setUnitWoodenPelletsFactor: (state, action) => {
      state.unitWoodenPellets = action.payload;
    },
    setWoodenPelletsFootprint: (state, action) => {
      state.woodenPelletsFootprint = action.payload;
    },
    resetWoodenPelletsFootprint: state => {
      state.woodenPelletsFootprint = initialState.woodenPelletsFootprint;
    },
    setShowWoodenPelletsResult: (state, action) => {
      state.showWoodenPelletsResult = action.payload;
    },
    //House Total Footprint
    setHouseFootprint: (state, action) => {
      state.houseFootprint = action.payload;
    },
  }
});

export const { 
               selectCountry, 
               setNumPeople ,

               setElectricity, 
               setUserElectricityFactor, 
               setElectricityFootprint,
               resetElectricityFootprint, 
               setShowElectricityResult,

               setNaturalGas,
               setUnitNaturalGasFactor,
               setNaturalGasFootprint,
               resetNaturalGasFootprint,
               setShowNaturalGasResult,

               setHeatingOil,
               setUnitHeatingOilFactor,
               setHeatingOilFootprint,
               resetHeatingOilFootprint,
               setShowHeatingOilResult,

               setCoal,
               setUnitCoalFactor,
               setCoalFootprint,
               resetCoalFootprint,
               setShowCoalResult,

               setLPG,
               setUnitLPGFactor,
               setLPGFootprint,
               resetLPGFootprint,
               setShowLPGResult,

               setPropane,
               setUnitPropaneFactor,
               setPropaneFootprint,
               resetPropaneFootprint,
               setShowPropaneResult,

               setWoodenPellets,
               setUnitWoodenPelletsFactor,
               setWoodenPelletsFootprint,
               resetWoodenPelletsFootprint,
               setShowWoodenPelletsResult,

               setHouseFootprint,

              } = houseSlice.actions;

export default houseSlice.reducer;