import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLongTrain, setUnitLongTrainFactor } from "../../redux/busrail";
import {
  FormGroup,
  TextInput,
  Select,
} from "@carbon/react";

const HouseCoal = () => {
  const { longTrain, unitLongTrain } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

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
          <FormGroup  className='formGroup-container'>
              <TextInput
                id="long-train-amount"
                value={longTrain || ""}
                onChange={handleLongTrainChange}
                labelText="Long Train Mileage"
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
              </Select>
          </FormGroup>
        </div>
      </div>
    </>
  );
};
export default HouseCoal;
