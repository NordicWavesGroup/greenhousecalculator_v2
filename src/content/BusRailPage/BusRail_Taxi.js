import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTaxi, setUnitTaxiFactor } from "../../redux/busrail";
import countryFactors from "../../countryFactors";
import {
  FormGroup,
  FormLabel,
  TextInput,
  Select,
  SelectItem,
} from "@carbon/react";
const BusRailTaxi = () => {
  const { taxi, unitTaxi, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(
    countryFactors[selectedCountryBusRail].taxiUnits
  );

  const handleTaxiChange = (e) => {
    dispatch(setTaxi(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitTaxiFactor(e.target.value));
  };

  return (
    <>
      <div className="household_form_cont car_form">
        <p> How many kilometers have you passed with a taxi ? </p>
        <div className="household-form">
          <FormGroup>
            <FormLabel>Taxi Mileage </FormLabel>
            <div className="input-group">
              <TextInput
                id="taxi-amount"
                value={taxi || ""}
                onChange={handleTaxiChange}
                labelText=""
                className="house-block-middle-form"
                size="lg"
                autoComplete="off"
              />
              <Select
                id="unit-taxi-select"
                defaultValue={unitTaxi}
                onChange={handleUnitChange}
                labelText=""
                className="bus-rail-block-middle-form"
                size="lg"
              >
                {unitOptions.map((unit) => (
                  <SelectItem key={unit} value={unit} text={unit} />
                ))}
              </Select>
            </div>
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default BusRailTaxi;
