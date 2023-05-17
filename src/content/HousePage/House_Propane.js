import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPropane, setUnitPropaneFactor } from "../../redux/house";
import countryFactors from "../../countryFactors";
import {
  TextInput,
  Select,
  SelectItem,
  FormGroup,
  FormLabel,
} from "@carbon/react";

const HousePropane = () => {
  const { propane, unitPropane, selectedCountry } = useSelector(
    (state) => state.house
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountry].propaneUnits);

  const handlePropaneChange = (e) => {
    dispatch(setPropane(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitPropaneFactor(e.target.value));
  };

  return (
    <>
      <FormGroup>
        <FormLabel>Propane</FormLabel>
        <div className="input-group">
          <TextInput
            id="electricity-input"
            className="house-block-middle-form"
            size="lg"
            value={propane || ""}
            onChange={handlePropaneChange}
            autoComplete="off"
          />
          <Select
            id="unit-gas-select"
            defaultValue={unitPropane}
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
      {/*}
      <section className="global-inputs-containers">
        <h5 className="global-input-description">Propane:</h5>
        <TextInput
          id="propane-amount"
          value={propane || ""}
          onChange={handlePropaneChange}
          labelText=""
          className="house-block-middle-form"
          size="lg"
        />
        <Select
          id="unit-gas-select"
          defaultValue={unitPropane}
          onChange={handleUnitChange}
          labelText=""
          className="house-block-middle-form"
          size="lg"
        >
          {unitOptions.map((unit) => (
            <SelectItem key={unit} value={unit} text={unit} />
          ))}
        </Select>
          </section>{*/}
    </>
  );
};

export default HousePropane;
