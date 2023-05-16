import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCoach, setUnitCoachFactor } from "../../redux/busrail";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const BusCoach = () => {
  const { coach, unitCoach, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountryBusRail].coachUnits);

  const handleCoachChange = (e) => {
    dispatch(setCoach(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitCoachFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Coach:</h5>
          <TextInput
            id="coach-amount"
            value={coach || ''}
            onChange={handleCoachChange}
            labelText=""
            className="house-block-middle-form"
            size='lg'
          />

          <Select
            id="unit-coach-select"
            defaultValue={unitCoach}
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

export default BusCoach;
