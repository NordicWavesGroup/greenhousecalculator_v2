import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setLocalTrain, setUnitLocalTrainFactor } from "../../redux/busrail";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const BusRailLocalTrain = () => {
  const {localTrain, unitLocalTrain, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountryBusRail].localTrainUnits);

  const handleLocalTrainChange = (e) => {
    dispatch(setLocalTrain(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitLocalTrainFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Local Train:</h5>
          <TextInput
            id="local-train-amount"
            value={localTrain || ""}
            onChange={handleLocalTrainChange}
            labelText=""
            className="bus-rail-block-middle-form"
            size='lg'
          />
          <Select
            id="unit-local-train-select"
            defaultValue={unitLocalTrain}
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

export default BusRailLocalTrain;