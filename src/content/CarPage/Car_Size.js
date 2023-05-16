import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCarSizeFactor } from "../../redux/car";
import countryFactors from '../../countryFactors'

import { Select, SelectItem } from '@carbon/react';

const CarSize= () => {
  const { carSize, selectedCountryCar } = useSelector(
    (state) => state.car
  );
  const dispatch = useDispatch();

  const sizeOptions = Object.keys(countryFactors[selectedCountryCar].carSize);

  const handleSizeChange = (e) => {
    dispatch(setCarSizeFactor(e.target.value));
  };

  return (
    <>
        <section className="car-inputs-containers1">
          <h5 className="global-input-description"> Car Size:</h5>
      
          <Select
            id="unit-heating-oil-select"
            defaultValue={carSize}
            onChange={handleSizeChange}
            labelText=""
            className="car-block-middle-form"
            size='lg'
          >
            {sizeOptions.map((size) => (
              <SelectItem key={size} value={size} text={size} />
            ))}
          </Select>
        </section>
    </>
  );
};

export default CarSize;