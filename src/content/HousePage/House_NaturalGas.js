import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNaturalGas_average, setNaturalGas_CO2Result } from '../../redux/house';
import { NumberInput, Select, SelectItem } from 'carbon-components-react';

const HouseNaturalGas = () => {
  const [selectedUnit, setSelectedUnit] = useState('kWh');

  const {
    naturalGas_average,
    naturalGas_factor_kWh,
    naturalGas_factor_therms,
    naturalGas_CO2Result
  } = useSelector((state) => state.house);

  const dispatch = useDispatch();

  const handleValueChange = (newValue) => {
    let newCO2Result;

    if (selectedUnit === 'kWh') {
      newCO2Result = newValue * naturalGas_factor_kWh;
    } else if (selectedUnit === 'Therms') {
      newCO2Result = newValue * naturalGas_factor_therms;
    }

    dispatch(setNaturalGas_average(newValue));
    dispatch(setNaturalGas_CO2Result(newCO2Result));
  };

  useEffect(() => {
    // Recalculate CO2 result when the unit selection changes
    let newCO2Result;

    if (selectedUnit === 'kWh') {
      newCO2Result = naturalGas_average * naturalGas_factor_kWh;
    } else if (selectedUnit === 'Therms') {
      newCO2Result = naturalGas_average * naturalGas_factor_therms;
    }

    dispatch(setNaturalGas_CO2Result(newCO2Result));
  }, [selectedUnit, naturalGas_average, naturalGas_factor_kWh, naturalGas_factor_therms, dispatch]);

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
          onChange={({ target: { value } }) => handleValueChange(Number(value))}
        />

        <Select
          defaultValue="placeholder-item"
          helperText=""
          id="select-1"
          invalidText="A valid value is required"
          labelText="Unit"
          className="SelectUnit"
          onChange={(e) => setSelectedUnit(e.target.value)}
        >
          <SelectItem text="kWh" value="kWh" />
          <SelectItem text="Therms" value="Therms" />
        </Select>

        <br />
      </div>
      {/*<p>Natural Gas Results in CO2: {naturalGas_CO2Result} Kg</p> */}
    </>
  );
};

export default HouseNaturalGas;
