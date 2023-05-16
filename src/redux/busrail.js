import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountryBusRail: "Denmark",
  numPeople: 1,

  bus: 0,
  unitBus: "km",
  busFootprint: 0,
  resetBusFootprint:0,
  showBusResult:false,

  coach: 0,
  unitCoach: "km",
  coachFootprint: 0,
  resetCoachFootprint:0,
  showCoachResult:false,

  localTrain: 0,
  unitLocalTrain: "km",
  localTrainFootprint: 0,
  resetLocalTrainFootprint:0,
  showLocalTrainResult:false,
  
  
  longTrain: 0,
  unitLongTrain: "km",
  longTrainFootprint: 0,
  resetLongTrainFootprint:0,
  showLongTrainResult:false,
  
  tram: 0,
  unitTram: "km",
  tramFootprint: 0,
  resetTramFootprint:0,
  showTramResult:false,
  
  subway: 0,
  unitSubway: "km",
  subwayFootprint: 0,
  resetSubwayFootprint:0,
  showSubwayResult:false,

  taxi: 0,
  unitTaxi: "km",
  taxiFootprint: 0,
  resetTaxiFootprint:0,
  showTaxiResult:false,

  busrailFootprint:0,
};

export const busRailSlice = createSlice({
  name: "busrail",
  initialState,
  reducers: {
    selectCountryBusRail: (state, action) => {
      state.selectedCountryBusRail = action.payload;
    },
    setNumPeople: (state, action) => {
      state.numPeople = action.payload;
    },
    //Bus Global State
    setBus: (state, action) => {
      state.bus = action.payload;
    },
    setUnitBusFactor: (state, action) => {
      state.unitBus = action.payload;
    },
    setBusFootprint: (state, action) => {
      state.busFootprint = action.payload;
    },
    resetBusFootprint: state => {
      state.busFootprint = initialState.busFootprint;
    },
    setShowBusResult: (state, action) => {
      state.showBusResult = action.payload;
    },
   // Coach State
    setCoach: (state, action) => {
      state.coach = action.payload;
    },
    setUnitCoachFactor: (state, action) => {
      state.unitCoach = action.payload;
    },
    setCoachFootprint: (state, action) => {
      state.coachFootprint = action.payload;
    },
    resetCoachFootprint: state => {
      state.coachFootprint = initialState.coachFootprint;
    },
    setShowCoachResult: (state, action) => {
      state.showCoachResult = action.payload;
    },
    //Local Train Global State
    setLocalTrain: (state, action) => {
      state.localTrain = action.payload;
    },
    setUnitLocalTrainFactor: (state, action) => {
      state.unitLocalTrain = action.payload;
    },
    setLocalTrainFootprint: (state, action) => {
      state.localTrainFootprint = action.payload;
    },
    resetLocalTrainFootprint: state => {
      state.localTrainFootprint = initialState.localTrainFootprint;
    },
    setShowLocalTrainResult: (state, action) => {
      state.showLocalTrainResult = action.payload;
    },
    //Long Train Global State
    setLongTrain: (state, action) => {
      state.longTrain = action.payload;
    },
    setUnitLongTrainFactor: (state, action) => {
      state.unitLongTrain = action.payload;
    },
    setLongTrainFootprint: (state, action) => {
      state.longTrainFootprint = action.payload;
    },
    resetLongTrainFootprint: state => {
      state.longTrainFootprint = initialState.longTrainFootprint;
    },
    setShowLongTrainResult: (state, action) => {
      state.showLongTrainResult = action.payload;
    },
    //Tram Global State
    setTram: (state, action) => {
      state.tram = action.payload;
    },
    setUnitTramFactor: (state, action) => {
      state.unitTram = action.payload;
    },
    setTramFootprint: (state, action) => {
      state.tramFootprint = action.payload;
    },
    resetTramFootprint: state => {
      state.tramFootprint = initialState.tramFootprint;
    },
    setShowTramResult: (state, action) => {
      state.showTramResult = action.payload;
    },
    //Subway Global State
    setSubway: (state, action) => {
      state.subway= action.payload;
    },
    setUnitSubwayFactor: (state, action) => {
      state.unitSubway = action.payload;
    },
    setSubwayFootprint: (state, action) => {
      state.subwayFootprint = action.payload;
    },
    resetSubwayFootprint: state => {
      state.subwayFootprint = initialState.subwayFootprint;
    },
    setShowSubwayResult: (state, action) => {
      state.showSubwayResult = action.payload;
    },
    // Taxi Global State
    setTaxi: (state, action) => {
      state.taxi= action.payload;
    },
    setUnitTaxiFactor: (state, action) => {
      state.unitTaxi = action.payload;
    },
    setTaxiFootprint: (state, action) => {
      state.taxiFootprint = action.payload;
    },
    resetTaxiFootprint: state => {
      state.taxiFootprint = initialState.taxiFootprint;
    },
    setShowTaxiResult: (state, action) => {
      state.showTaxiResult = action.payload;
    },
     //House Total Footprint
     setBusRailFootprint: (state, action) => {
      state.busrailFootprint = action.payload;
    },
  }
});

export const { 
               selectCountryBusRail, 
               setNumPeople ,

               setBus, 
               setUnitBusFactor, 
               setBusFootprint,
               resetBusFootprint, 
               setShowBusResult,

               setCoach,
               setUnitCoachFactor,
               setCoachFootprint,
               resetCoachFootprint,
               setShowCoachResult,

               setLocalTrain,
               setUnitLocalTrainFactor,
               setLocalTrainFootprint,
               resetLocalTrainFootprint,
               setShowLocalTrainResult,

               setLongTrain,
               setUnitLongTrainFactor,
               setLongTrainFootprint,
               resetLongTrainFootprint,
               setShowLongTrainResult,

               setTram,
               setUnitTramFactor,
               setTramFootprint,
               resetTramFootprint,
               setShowTramResult,

               setSubway,
               setUnitSubwayFactor,
               setSubwayFootprint,
               resetSubwayFootprint,
               setShowSubwayResult,

               setTaxi,
               setUnitTaxiFactor,
               setTaxiFootprint,
               resetTaxiFootprint,
               setShowTaxiResult,

               setBusRailFootprint,


              } = busRailSlice.actions;

export default busRailSlice.reducer;