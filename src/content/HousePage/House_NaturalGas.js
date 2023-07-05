import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNaturalGas_average, setNaturalGas_CO2Result } from '../../redux/house';
import { NumberInput, Select, SelectItem } from 'carbon-components-react';

const HouseNaturalGas = () => {
  const { naturalGas_average, naturalGas_factor_kWh, naturalGas_CO2Result } = useSelector((state) => state.house);
  const dispatch = useDispatch();

  const handleValueChange = (newValue) => {
    const newCO2Result = newValue * naturalGas_factor_kWh;
  
    dispatch(setNaturalGas_average(newValue));
    dispatch(setNaturalGas_CO2Result(newCO2Result));
  };

  return (
    <>
  <div className="input-group-house-2">
    
      <NumberInput
        helperText=""
        id="tj-input"
        invalidText=""
        label="Natural Gas"
        max={9999}
        min={0}
        step={10}
        value={naturalGas_average}
        size={'md'}
        className="numberInput"
        onChange={({target: {value}}) => handleValueChange(Number(value))}
      />

      <Select
        defaultValue="placeholder-item"
        helperText=""
        id="select-1"
        invalidText="A valid value is required"
        labelText="Unit"
        className="SelectUnit"
      >
        <SelectItem
          text="kWh"
          value={3}
        />
          <SelectItem
          text="Therms"
          value={6}
        />
      </Select>

      <br />

    </div>
      <p>Natural Gas Results in CO2: {naturalGas_CO2Result} Kg</p>
    </>
  );
};

export default HouseNaturalGas;
