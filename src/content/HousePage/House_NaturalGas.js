import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setNaturalGas, setUnitNaturalGasFactor } from "../../redux/house";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const HouseNaturalGas = () => {
  const { naturalGas, unitNaturalGas, selectedCountry } = useSelector(
    (state) => state.house
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountry].naturalGasUnits);

  const handleNaturalGasChange = (e) => {
    dispatch(setNaturalGas(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitNaturalGasFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Natural Gas:</h5>
          <TextInput
            id="naturalgas-amount"
            value={naturalGas || ''}
            onChange={handleNaturalGasChange}
            labelText=""
            className="house-block-middle-form"
            size='lg'
          />

          <Select
            id="unit-gas-select"
            defaultValue={unitNaturalGas}
            onChange={handleUnitChange}
            labelText=""
            className="house-block-middle-form"
            size='lg'
          >
            {unitOptions.map((unit) => (
              <SelectItem key={unit} value={unit} text={unit} />
            ))}
          </Select>
        </section>
    </>
  );
};

export default HouseNaturalGas;
