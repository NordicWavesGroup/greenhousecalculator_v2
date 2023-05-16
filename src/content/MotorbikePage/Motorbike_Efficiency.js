import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setMotorbikeEfficiency, setMotorbikeEfficiencyUnit } from "../../redux/motorbike";
import countryFactors from '../../countryFactors'
import { TextInput, Select, SelectItem } from '@carbon/react';

const MotorbikeEfficiency = () => {
  const { efficiencyMotorbike, efficiencyMotorbikeUnit,motorbikeSize, selectedCountryMotorbike } = useSelector(
    (state) => state.motorbike
  );
  const dispatch = useDispatch();

  const rangeOptions = Object.keys(countryFactors[selectedCountryMotorbike].motorbikeEfficiencyUnits);

  const handleEfficiencyChange = (e) => {
    dispatch(setMotorbikeEfficiency(parseFloat(e.target.value)));
  };

  const handleUnitEfficiencyChange = (e) => {
    dispatch(setMotorbikeEfficiencyUnit(e.target.value));
  };

  const isSizeSelected = motorbikeSize !== "-select type-";


  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Or, enter efficiency</h5>
          <TextInput
            id="hotels-amount"
            value={efficiencyMotorbike || ""}
            onChange={handleEfficiencyChange}
            labelText=""
            className="house-block-middle-form"
            size='lg'
            disabled={isSizeSelected}

          />
          <Select
            id="hotels-select"
            defaultValue={efficiencyMotorbikeUnit}
            onChange={handleUnitEfficiencyChange}
            labelText=""
            className="motorbike-block-middle-form"
            size='lg'
            disabled={isSizeSelected}

          >
            {rangeOptions.map((range) => (
              <SelectItem key={range} value={range} text={range} />
            ))}
          </Select>
        </section>
    </>
  );
};

export default MotorbikeEfficiency;
