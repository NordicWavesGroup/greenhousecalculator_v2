import React from "react";
import "./_house-page.scss";
import { useDispatch, useSelector } from "react-redux";
import { setElectricity, setUserElectricityFactor } from "../../redux/house";

import { FormGroup, TextInput } from "@carbon/react";
import countryFactors from "../../countryFactors";

const HouseElectricity = () => {
  const { selectedCountry, electricity, userElectricityFactor } = useSelector(
    (state) => state.house
  );
  const dispatch = useDispatch();

  const handleUserElectricityChange = (e) => {
    const factor = parseFloat(e.target.value);
    dispatch(setUserElectricityFactor(factor));
  };

  // function to handle input changes

  const handleElectricityChange = (e) => {
    dispatch(setElectricity(parseFloat(e.target.value)));
  };

  return (
    <>
      {" "}
      <div className="household-form">
        <FormGroup>
          <div className="input-group">
            <TextInput
              id="electricity-input"
              labelText="Custom"
              className="house-block-middle-form"
              size="lg"
              name="HouseElectricCustom"
              value={electricity || "average"}
              onChange={handleElectricityChange}
              autoComplete="off"
            />
            <TextInput
              id="electricity-factor"
              labelText="at a factor of:"
              type="number"
              className="house-block-middle-form"
              size="lg"
              name="HouseElectricFactor"
              value={
                userElectricityFactor !== null
                  ? userElectricityFactor
                  : countryFactors[selectedCountry].electricity_factor || ""
              }
              onChange={handleUserElectricityChange}
              min={0}
              autoComplete="off"
            />
          </div>
        </FormGroup>
      </div>
  
    </>
  );
};

export default HouseElectricity;
