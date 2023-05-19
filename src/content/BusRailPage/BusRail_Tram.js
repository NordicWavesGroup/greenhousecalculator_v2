import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTram, setUnitTramFactor } from "../../redux/busrail";
import countryFactors from "../../countryFactors";
import {
  FormGroup,
  FormLabel,
  TextInput,
  Select,
  SelectItem,
} from "@carbon/react";
const BusRailTram = () => {
  const { tram, unitTram, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(
    countryFactors[selectedCountryBusRail].tramUnits
  );

  const handleTramChange = (e) => {
    dispatch(setTram(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitTramFactor(e.target.value));
  };

  return (
    <>
      <div className="household_form_cont car_form">
        <p> How many kilometers have you passed with a long tram ? </p>
        <div className="household-form">
          <FormGroup>
            <FormLabel>Tram Mileage </FormLabel>
            <div className="input-group">
              <TextInput
                id="tram-amount"
                value={tram || ""}
                onChange={handleTramChange}
                labelText=""
                className="house-block-middle-form"
                size="lg"
                autoComplete="off"
              />
              <Select
                id="unit-tram-select"
                defaultValue={unitTram}
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

export default BusRailTram;
