import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setMotorbikeMileage, setUnitMotorbikeFactor } from "../../redux/motorbike";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const MotorbikeMileage = () => {
  const { motorbikeMileage, unitMotorbike, selectedCountryMotorbike } = useSelector(
    (state) => state.motorbike
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountryMotorbike].motorbikeMileageUnits);

  const handleMotorbikeMileageChange = (e) => {
    dispatch(setMotorbikeMileage(parseFloat(e.target.value)));
  };
  const handleMotorbikeMileageUnitChange = (e) => {
    dispatch(setUnitMotorbikeFactor(e.target.value));
  };

  return (
    <>
        <section className="motorbike-mileage-container">
          <h5 className="global-input-description">Mileage:</h5>
          <TextInput
            id="motorbike-mileage"
            value={motorbikeMileage || ''}
            onChange={handleMotorbikeMileageChange}
            labelText=""
            className="motorbike-block-middle-form"
            size='lg'
          />

          <Select
            id="unit-motorbike-select"
            defaultValue={unitMotorbike}
            onChange={handleMotorbikeMileageUnitChange}
            labelText=""
            className="motorbike-block-middle-form"
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

export default MotorbikeMileage;
