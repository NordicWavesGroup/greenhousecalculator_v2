import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSubway, setUnitSubwayFactor } from "../../redux/busrail";
import countryFactors from "../../countryFactors";
import {
  FormGroup,
  FormLabel,
  TextInput,
  Select,
  SelectItem,
} from "@carbon/react";
const BusRailSubway = () => {
  const { subway, unitSubway, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(
    countryFactors[selectedCountryBusRail].subwayUnits
  );

  const handleSubwayChange = (e) => {
    dispatch(setSubway(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitSubwayFactor(e.target.value));
  };

  return (
    <>
      <div className="household_form_cont car_form">
        <p> How many kilometers have you passed with a subway ? </p>
        <div className="household-form">
          <FormGroup>
            <FormLabel>Subway Mileage </FormLabel>
            <div className="input-group">
              <TextInput
                id="subway-amount"
                value={subway || ""}
                onChange={handleSubwayChange}
                labelText=""
                className="house-block-middle-form"
                size="lg"
                autoComplete="off"
              />
              <Select
                id="unit-subway-select"
                defaultValue={unitSubway}
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

export default BusRailSubway;
