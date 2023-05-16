import React from 'react';
import './_motorbike-page.scss';
import { useDispatch, useSelector } from "react-redux";
import { setMotorbikeSizeFactor } from "../../redux/motorbike";
import countryFactors from '../../countryFactors'

import { Select, SelectItem } from '@carbon/react';

const MotorbikeSize = () => {
  const { motorbikeSize, selectedCountryMotorbike } = useSelector(
    (state) => state.motorbike
  );
  const dispatch = useDispatch();

  const unitOptions = [
    "-select type-",
    ...Object.keys(countryFactors[selectedCountryMotorbike]?.motorbikeMotorSize || {})
  ];

  const handleSizeChange = (e) => {
    dispatch(setMotorbikeSizeFactor(e.target.value));
  };

  return (
    <>
      <section className="motorbike-mileage-container">
        <h5 className="global-input-description">Motorbike Size</h5>
        {console.log(motorbikeSize)}

        <Select
          id="motorbike-select"
          defaultValue={motorbikeSize}
          onChange={handleSizeChange}
          labelText=""
          className="motorbike-block-middle-form"
          size='lg'
        >
          {unitOptions.map((unit) => (
            <SelectItem
              key={unit}
              value={unit}
              text={
                unit === "-select type-"
                  ? unit
                  : `${unit.charAt(0).toUpperCase() + unit.slice(1)} - ${countryFactors[selectedCountryMotorbike]?.motorbikeMotorSize[unit]?.description || ""}`
              }
            />
          ))}
        </Select>
      </section>
    </>
  );
};

export default MotorbikeSize;
