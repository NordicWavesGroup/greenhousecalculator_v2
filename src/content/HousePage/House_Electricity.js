import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  setkWh_CO2Result} from '../../redux/house';

import { NumberInput } from 'carbon-components-react';

import { Slider } from '@carbon/react';

const HouseElectricity = () => {
  const { kWh, kWh_factor, kWh_CO2Result} = useSelector((state) => state.house);

  const dispatch = useDispatch();


  const handleSliderChange = (event) => {
    const newValue = event.value;
  
    // Calculate the CO2 result based on the slider value
    const kWh_CO2Result = newValue * kWh_factor; // Replace 4 with the actual factor value
  
    // Dispatch the CO2 result to the Redux store
    dispatch(setkWh_CO2Result (kWh_CO2Result));

    // Update the CO2 result state
    setkWh_CO2Result(kWh_CO2Result);
  };
  

  return (
    <>
      <div className="input-group">
        <Slider
          id="electricity-slider"
          labelText="Electricity Consumption"
          className="house-block-middle-form"
          min={0}
          max={9999}
          step={1}
          value={kWh}
          onChange={handleSliderChange}
        />

        
    
      </div>
        <NumberInput
              helperText=""
              id="tj-input"
              invalidText=""
              label="Custom"
              max={9999}
              min={0}
              step={10}
              value={kWh}
              size={'md'}
              onChange={handleSliderChange}

        />
  
      <p>kWh Results in CO2: {kWh_CO2Result} Kg</p>
    </>
  );
};

export default HouseElectricity;
