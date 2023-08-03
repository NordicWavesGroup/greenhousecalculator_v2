import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setkWh_average, setkWh_CO2Result } from '../../redux/house';
import { NumberInput } from 'carbon-components-react';
import { Slider } from '@carbon/react';

const HouseElectricity = () => {
  const { kWh_average, kWh_factor, kWh_CO2Result } = useSelector((state) => state.house);
  const dispatch = useDispatch();

  const handleValueChange = (newValue) => {
    const newCO2Result = newValue * kWh_factor;
  
    dispatch(setkWh_average(newValue));
    dispatch(setkWh_CO2Result(newCO2Result));
  };

  return (
    <div className="input-group-house">
      <Slider
        id="electricity-slider"
        labelText="Electricity Consumption"
        className="house-block-middle-form"
        min={0}
        max={9999}
        step={1}
        value={kWh_average}
        onChange={({value}) => handleValueChange(value)}
      />
      <NumberInput
        helperText=""
        id="tj-input"
        invalidText=""
        label="Custom"
        max={9999}
        min={0}
        step={10}
        value={kWh_average}
        size={'md'}
        className="numberInput"
        onChange={({target: {value}}) => handleValueChange(Number(value))}
      />
      <p>kWh Results in CO2: {kWh_CO2Result} Kg</p>
    </div>
  );
};

export default HouseElectricity;
