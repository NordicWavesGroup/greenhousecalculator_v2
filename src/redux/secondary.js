import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountrySecondary: "Denmark",

  foodDiet: "Vegetarian",
  foodDietFootprint: 0,
  resetFoodDietFootprint: 0,
  showFoodDietResult: false,

  water: 0,
  waterFootprint: 0,
  showWaterResult: false,

  secondaryFootprint: 0,
};

export const secondarySlice = createSlice({
  name: "secondary",
  initialState,
  reducers: {
    selectCountrySecondary: (state, action) => {
      state.selectedCountrySecondary = action.payload;
    },
    //Food Diet Global State
    setFoodDiet: (state, action) => {
      state.foodDiet = action.payload;
    },
    setFoodDietFootprint: (state, action) => {
      state.foodDietFootprint = action.payload;
    },
    resetFoodDietFootprint: (state) => {
      state.foodDietFootprint = initialState.foodDietFootprint;
    },
    setShowFoodDietResult: (state, action) => {
      state.showFoodDietResult = action.payload;
    },
    //Water
    setWater: (state, action) => {
      state.water = action.payload;
    },
    setWaterFootprint: (state, action) => {
      state.waterFootprint = action.payload;
    },
    resetWaterFootprint: (state) => {
      state.waterFootprint = initialState.waterFootprint;
    },
    setShowWaterResult: (state, action) => {
      state.showWaterResult = action.payload;
    },
    //Secondary Total Footprint
    setSecondaryFootprint: (state, action) => {
      state.secondaryFootprint = action.payload;
    },
  },
});

export const {
  selectCountrySecondary,
  setFoodDiet,
  setRangeFoodDietFactor,
  setFoodDietFootprint,
  resetFoodDietFootprint,
  setShowFoodDietResult,

  setWater,
  setWaterFootprint,
  resetWaterFootprint,
  setShowWaterResult,

  setSecondaryFootprint,
} = secondarySlice.actions;

export default secondarySlice.reducer;
