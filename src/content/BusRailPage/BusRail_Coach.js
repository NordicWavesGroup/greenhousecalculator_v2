import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoach, setUnitCoachFactor } from "../../redux/busrail";
import {
  FormGroup,
  TextInput,
  Select,

} from "@carbon/react";
const BusCoach = () => {
  const { coach, unitCoach} = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

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
          <FormGroup className='formGroup-container'>
              <TextInput
                id="coach-amount"
                value={coach || ""}
                onChange={handleCoachChange}
                labelText="Coach Mileage"
                className=""
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
              </Select>
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default BusCoach;
