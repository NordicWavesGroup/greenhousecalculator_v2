import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoal_average, setCoal_CO2Result } from '../../redux/house';
import { NumberInput, Select, SelectItem } from 'carbon-components-react';

const HouseCoal = () => {
  const [selectedUnit, setSelectedUnit] = useState('kWh');

  const {
    coal_average,
    coal_factor_kWh,
    coal_factor_therms,
    coal_CO2Result
  } = useSelector((state) => state.house);

  const dispatch = useDispatch();

  const handleValueChange = (newValue) => {
    let newCO2Result;

    if (selectedUnit === 'kWh') {
      newCO2Result = newValue * coal_factor_kWh;
    } else if (selectedUnit === 'Therms') {
      newCO2Result = newValue * coal_factor_therms;
    }

    dispatch(setCoal_average(newValue));
    dispatch(setCoal_CO2Result(newCO2Result));
  };

  useEffect(() => {
    // Recalculate CO2 result when the unit selection changes
    let newCO2Result;

    if (selectedUnit === 'kWh') {
      newCO2Result = coal_average * coal_factor_kWh;
    } else if (selectedUnit === 'Therms') {
      newCO2Result = coal_average * coal_factor_therms;
    }

    dispatch(setCoal_CO2Result(newCO2Result));
  }, [selectedUnit, coal_average, coal_factor_kWh, coal_factor_therms, dispatch]);

  return (
    <>
      <div className="input-group-house-2">
        <NumberInput
          helperText=""
          id="tj-input"
          invalidText=""
          label="Coal"
          max={9999}
          min={0}
          step={10}
          value={coal_average}
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
      {/*<p>Coal Results in CO2: {coal_CO2Result} Kg</p>*/}
    </>
  );
};

export default HouseCoal;