import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLPG, setUnitLPGFactor } from "../../redux/house";
import countryFactors from "../../countryFactors";

import {
  TextInput,
  FormGroup,
  FormLabel,
  Select,
  SelectItem,
} from "@carbon/react";

const HouseLPG = () => {
  const { LPG, unitLPG, selectedCountry } = useSelector((state) => state.house);
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountry].LPGUnits);

  const handleLPGChange = (e) => {
    dispatch(setLPG(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitLPGFactor(e.target.value));
  };

  return (
    <>
      <FormGroup>
        <FormLabel>LPG</FormLabel>
        <div className="input-group">
          <TextInput
            id="electricity-input"
            className="house-block-middle-form"
            size="lg"
            value={LPG || ""}
            onChange={handleLPGChange}
            autoComplete="off"
          />
          <Select
            id="unit-LPG-select"
            defaultValue={unitLPG}
            onChange={handleUnitChange}
            labelText=""
            className="house-block-middle-form"
            size="lg"
          >
            {unitOptions.map((unit) => (
              <SelectItem key={unit} value={unit} text={unit} />
            ))}
          </Select>
        </div>
      </FormGroup>
    </>
  );
};

export default HouseLPG;
