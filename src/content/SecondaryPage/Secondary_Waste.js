import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  setRangeTextilesFactor } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import {  Select, SelectItem } from '@carbon/react';

const SecondaryTextiles= () => {
  const { rangeTextiles, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const rangeOptions = Object.keys(countryFactors[selectedCountrySecondary].wasteRange);

  const handleRangeChange = (e) => {
    dispatch(setRangeTextilesFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="secondary-input-description">Waste:</h5>
       
          <Select
            id="unit-heating-oil-select"
            defaultValue={rangeTextiles}
            onChange={handleRangeChange}
            labelText=""
            className="secondary-block-middle-form"
            size='lg'
          >
            {rangeOptions.map((range) => (
              <SelectItem key={range} value={range} text={range} />
            ))}
          </Select>
        </section>
    </>
  );
};

export default SecondaryTextiles;