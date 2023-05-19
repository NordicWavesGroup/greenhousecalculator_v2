import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoach, setUnitCoachFactor } from "../../redux/busrail";
import countryFactors from "../../countryFactors";
import {
  FormGroup,
  FormLabel,
  TextInput,
  Select,
  SelectItem,
} from "@carbon/react";
const BusCoach = () => {
  const { coach, unitCoach, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();
  const unitOptions = Object.keys(
    countryFactors[selectedCountryBusRail].coachUnits
  );
  const handleCoachChange = (e) => {
    dispatch(setCoach(parseFloat(e.target.value)));
  };
  const handleUnitChange = (e) => {
    dispatch(setUnitCoachFactor(e.target.value));
  };
  return (
    <>
      <div className="household_form_cont car_form">
        <p> How many kilometers have you passed with a coach ? </p>
        <div className="household-form">
          <FormGroup>
            <FormLabel>Coach Mileage </FormLabel>
            <div className="input-group">
              <TextInput
                id="coach-amount"
                value={coach || ""}
                onChange={handleCoachChange}
                labelText=""
                className="house-block-middle-form"
                size="lg"
                autoComplete="off"
              />
              <Select
                id="unit-coach-select"
                defaultValue={unitCoach}
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

export default BusCoach;
