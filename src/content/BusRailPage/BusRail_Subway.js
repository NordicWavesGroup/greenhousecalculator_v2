import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSubway, setUnitSubwayFactor } from "../../redux/busrail";
import countryFactors from '../../countryFactors'
import { TextInput, Select, SelectItem } from '@carbon/react';

const BusRailSubway = () => {
  const { subway, unitSubway, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountryBusRail].subwayUnits);

  const handleSubwayChange = (e) => {
    dispatch(setSubway(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitSubwayFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Subway:</h5>
          <TextInput
            id="subway-amount"
            value={subway || ""}
            onChange={handleSubwayChange}
            labelText=""
            className="bus-rail-block-middle-form"
            size='lg'
          />
          <Select
            id="unit-subway-select"
            defaultValue={unitSubway}
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

export default BusRailSubway;
