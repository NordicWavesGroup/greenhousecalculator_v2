import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setLongTrain, setUnitLongTrainFactor } from "../../redux/busrail";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const HouseCoal = () => {
  const {longTrain, unitLongTrain, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountryBusRail].longTrainUnits);

  const handleLongTrainChange = (e) => {
    dispatch(setLongTrain(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitLongTrainFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Long Train:</h5>
          <TextInput
            id="long-train-amount"
            value={longTrain || ""}
            onChange={handleLongTrainChange}
            labelText=""
            className="bus-rail-block-middle-form"
            size='lg'
          />
          <Select
            id="unit-long-train-select"
            defaultValue={unitLongTrain}
            onChange={handleUnitChange}
            labelText=""
            className="bus-rail-block-middle-form"
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

export default HouseCoal;
