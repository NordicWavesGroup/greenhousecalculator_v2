import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setHeatingOil, setUnitHeatingOilFactor } from "../../redux/house";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const HouseHeatingOil = () => {
  const {heatingOil, unitHeatingOil, selectedCountry } = useSelector(
    (state) => state.house
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountry].heatingOilUnits);

  const handleHeatingOilChange = (e) => {
    dispatch(setHeatingOil(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitHeatingOilFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Heating Oil:</h5>
          <TextInput
            id="heating-amount"
            value={heatingOil || ""}
            onChange={handleHeatingOilChange}
            labelText=""
            className="house-block-middle-form"
            size='lg'
          />
          <Select
            id="unit-heating-oil-select"
            defaultValue={unitHeatingOil}
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

export default HouseHeatingOil;