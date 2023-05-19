import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLongTrain, setUnitLongTrainFactor } from "../../redux/busrail";
import countryFactors from "../../countryFactors";
import {
  FormGroup,
  FormLabel,
  TextInput,
  Select,
  SelectItem,
} from "@carbon/react";

const HouseCoal = () => {
  const { longTrain, unitLongTrain, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(
    countryFactors[selectedCountryBusRail].longTrainUnits
  );

  const handleLongTrainChange = (e) => {
    dispatch(setLongTrain(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitLongTrainFactor(e.target.value));
  };

  return (
    <>
      <div className="household_form_cont car_form">
        <p> How many kilometers have you passed with a long train ? </p>
        <div className="household-form">
          <FormGroup>
            <FormLabel>Long Train Mileage </FormLabel>
            <div className="input-group">
              <TextInput
                id="long-train-amount"
                value={longTrain || ""}
                onChange={handleLongTrainChange}
                labelText=""
                className="house-block-middle-form"
                size="lg"
                autoComplete="off"
              />
              <Select
                id="unit-long-train-select"
                defaultValue={unitLongTrain}
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
export default HouseCoal;
