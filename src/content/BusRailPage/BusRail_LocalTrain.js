import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocalTrain, setUnitLocalTrainFactor } from "../../redux/busrail";
import countryFactors from "../../countryFactors";
import {
  FormGroup,
  FormLabel,
  TextInput,
  Select,
  SelectItem,
} from "@carbon/react";

const BusRailLocalTrain = () => {
  const { localTrain, unitLocalTrain, selectedCountryBusRail } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();


  const handleLocalTrainChange = (e) => {
    dispatch(setLocalTrain(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitLocalTrainFactor(e.target.value));
  };

  return (
    <>
      <div className="household_form_cont car_form">
        <p> How many kilometers have you passed with a local train ? </p>
        <div className="household-form">
          <FormGroup className='formGroup-container'>
              <TextInput
                id="local-train-amount"
                value={localTrain || ""}
                onChange={handleLocalTrainChange}
                labelText="Local Train Mileage"
                className="house-block-middle-form"
                size="lg"
                autoComplete="off"
              />
              <Select
                id="unit-local-train-select"
                defaultValue={unitLocalTrain}
                onChange={handleUnitChange}
                labelText=""
                className="bus-rail-block-middle-form"
                size="lg"
              >
              </Select>
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default BusRailLocalTrain;
