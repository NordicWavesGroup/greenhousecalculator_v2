import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setTaxi, setUnitTaxiFactor } from "../../redux/busrail";
import countryFactors from '../../countryFactors'
import { TextInput, Select, SelectItem } from '@carbon/react';

const BusRailTaxi = () => {
  const { taxi, unitTaxi, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountryBusRail].taxiUnits);

  const handleTaxiChange = (e) => {
    dispatch(setTaxi(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitTaxiFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Taxi:</h5>
          <TextInput
            id="taxi-amount"
            value={taxi || ""}
            onChange={handleTaxiChange}
            labelText=""
            className="bus-rail-block-middle-form"
            size='lg'
          />
          <Select
            id="unit-taxi-select"
            defaultValue={unitTaxi}
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

export default BusRailTaxi;
