import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setElectricityFootprint } from '../../redux/house';

import { Slider } from '@carbon/react';

const HouseElectricity = () => {
  const dispatch = useDispatch();

  const [electricityConsumption, setElectricityConsumption] = useState(40);
  const [co2Result, setCO2Result] = useState(0);

  const handleSliderChange = (event) => {
    const newValue = event.value;
    setElectricityConsumption(newValue);
  
    // Calculate the CO2 result based on the slider value
    const co2Result = newValue * 4; // Replace 4 with the actual factor value
  
    // Dispatch the CO2 result to the Redux store
    dispatch(setElectricityFootprint(co2Result));
  
    // Update the CO2 result state
    setCO2Result(co2Result);
  };
  

  return (
    <>
      <div className="input-group">
        <Slider
          id="electricity-slider"
          labelText="Electricity Consumption"
          className="house-block-middle-form"
          min={0}
          max={100000}
          step={1}
          value={electricityConsumption}
          onChange={handleSliderChange}
        />
      </div>
  
      <p>Results in CO2: {co2Result}</p>
    </>
  );
};

export default HouseElectricity;
