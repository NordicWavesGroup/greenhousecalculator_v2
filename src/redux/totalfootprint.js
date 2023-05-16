import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalFootprint:0,
  totalSelectedFootprint:0
};

export const totalFootprintSlice = createSlice({
  name: "totalfootprint",
  initialState,
  reducers: {

    // Total Footprint
    setTotalFootprint: (state, action) => {
    state.totalFootprint = action.payload;
  },
    // Total Selected Footprint
    setTotalSelectedFootprint: (state, action) => {
    state.totalSelectedFootprint = action.payload;
  },
  }
});

export const { 
               setTotalFootprint,
               setTotalSelectedFootprint

              } = totalFootprintSlice.actions;

export default totalFootprintSlice.reducer;