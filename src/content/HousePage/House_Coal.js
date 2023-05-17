import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoal, setUnitCoalFactor } from "../../redux/house";
import countryFactors from "../../countryFactors";

import {
  TextInput,
  FormGroup,
  FormLabel,
  Select,
  SelectItem,
} from "@carbon/react";

const HouseCoal = () => {
  const { coal, unitCoal, selectedCountry } = useSelector(
    (state) => state.house
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountry].coalUnits);

  const handleCoalChange = (e) => {
    dispatch(setCoal(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitCoalFactor(e.target.value));
  };

  return (
    <>
      <FormGroup>
        <FormLabel>Coal</FormLabel>
        <div className="input-group">
          <TextInput
            id="electricity-input"
            className="house-block-middle-form"
            size="lg"
            value={coal || ""}
            onChange={handleCoalChange}
            autoComplete="off"
          />
          <Select
            id="unit-coal-select"
            defaultValue={unitCoal}
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
      {/* }
      <section className="global-inputs-containers">
        <h5 className="global-input-description">Coal:</h5>
        <TextInput
          id="coal-amount"
          value={coal || ""}
          onChange={handleCoalChange}
          labelText=""
          className="house-block-middle-form"
          size="lg"
        />
        <Select
          id="unit-coal-select"
          defaultValue={unitCoal}
          onChange={handleUnitChange}
          labelText=""
          className="house-block-middle-form"
          size="lg"
        >
          {unitOptions.map((unit) => (
            <SelectItem key={unit} value={unit} text={unit} />
          ))}
        </Select>
          </section> {*/}
    </>
  );
};

export default HouseCoal;
