import React from "react";
import "./_house-page.scss";

import { FormGroup, TextInput } from "@carbon/react";

const HouseElectricity = () => {


  return (
    <>
   
      <div className="household-form">
        <FormGroup>
          <div className="input-group">
            <TextInput
              id="electricity-input"
              labelText="Custom"
              className="house-block-middle-form"
              size="lg"
              name="HouseElectricCustom"
              value={'number' || "average"}
              onChange
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
               0
              }
              onChange
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
