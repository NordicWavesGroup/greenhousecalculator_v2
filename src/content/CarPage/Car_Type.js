import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCarTypeFactor } from "../../redux/car";
import countryFactors from '../../countryFactors'

import {  Select, SelectItem } from '@carbon/react';

const SecondaryPharmaceuticals = () => {
  const { carType, selectedCountryCar } = useSelector(
    (state) => state.car
  );
  const dispatch = useDispatch();

  const typeOptions = [
    "-select type-",
    ...Object.keys(countryFactors[selectedCountryCar]?.carType || {})
  ];

  const handleTypeChange = (e) => {
    dispatch(setCarTypeFactor(e.target.value));
  };

  return (
    <>
        <section className="car-inputs-containers1">
          <h5 className="global-input-description">Car Type:</h5>
       
          <Select
            id="pharmaceuticals-select"
            defaultValue={carType}
            onChange={handleTypeChange}
            labelText=""
            className="car-block-middle-form"
            size='lg'
          >
                 {typeOptions.map((type) => (
            <SelectItem
              key={type}
              value={type}
              text={
                type === "-select type-"
                  ? type
                  : `${type.charAt(0).toUpperCase() + type.slice(1)}  ${countryFactors[selectedCountryCar]?.carType[type]?.description || ""}`
              }
            />
          ))}
          </Select>
        </section>
    </>
  );
};

export default SecondaryPharmaceuticals;
