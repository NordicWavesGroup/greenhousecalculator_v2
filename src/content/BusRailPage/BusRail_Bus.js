import React from "react";
import "./_bus-rail-page.scss";
import { useDispatch, useSelector } from "react-redux";
import { setBus, setUnitBusFactor } from "../../redux/busrail";
import {
  FormGroup,
  FormLabel,
  TextInput,
  Select,
  SelectItem,
} from "@carbon/react";
import countryFactors from "../../countryFactors";

const BusFootprint = () => {
  const { bus, unitBus, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(
    countryFactors[selectedCountryBusRail].busUnits
  );

  const handleBusChange = (e) => {
    dispatch(setBus(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitBusFactor(e.target.value));
  };

  return (
    <>
      <div className="household_form_cont car_form">
        <p> How many kilometers have you passed with a bus ? </p>
        <div className="household-form">
          <FormGroup>
            <FormLabel>Bus Mileage </FormLabel>
            <div className="input-group">
              <TextInput
                value={bus || ""}
                onChange={handleBusChange}
                labelText=""
                id="electricity-input"
                className="house-block-middle-form"
                size="lg"
                autoComplete="off"
              />
              <Select
                id="unit-bus-select"
                defaultValue={unitBus}
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

export default BusFootprint;
