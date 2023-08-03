import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTram, setUnitTramFactor } from "../../redux/busrail";
import {
  FormGroup,
  TextInput,
  Select,
} from "@carbon/react";
const BusRailTram = () => {
  const { tram, unitTram } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

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
          <FormGroup className='formGroup-container'>
              <TextInput
                id="tram-amount"
                value={tram || ""}
                onChange={handleTramChange}
                labelText="Tram Mileage"
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
              </Select>
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default BusRailTram;
