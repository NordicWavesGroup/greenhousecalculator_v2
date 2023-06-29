import React from "react";
import "./_bus-rail-page.scss";
import { useDispatch, useSelector } from "react-redux";
import { setBus, setUnitBusFactor } from "../../redux/busrail";
import {
  FormGroup,

  TextInput,
  Select,

} from "@carbon/react";


const BusFootprint = () => {
  const { bus, unitBus } = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();



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
          <FormGroup className='formGroup-container'>
              <TextInput
                value={bus || ""}
                onChange={handleBusChange}
                labelText="Bus Mileage"
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
          
              </Select>
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default BusFootprint;
