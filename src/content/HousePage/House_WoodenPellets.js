import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setWoodenPellets, setUnitWoodenPelletsFactor } from "../../redux/house";
import countryFactors from '../../countryFactors'
import { TextInput, Select, SelectItem } from '@carbon/react';

const HouseWoodenPellets = () => {
  const { woodenPellets, unitWoodenPellets, selectedCountry } = useSelector(
    (state) => state.house
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountry].woodenPelletsUnits);

  const handleWoodenPelletsChange = (e) => {
    dispatch(setWoodenPellets(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitWoodenPelletsFactor(e.target.value));
  };

  return (
    <>
        <section className="global-inputs-containers">
          <h5 className="global-input-description">Wooden Pellets:</h5>
          <TextInput
            id="naturalgas-amount"
            value={woodenPellets || ""}
            onChange={handleWoodenPelletsChange}
            labelText=""
            className="house-block-middle-form"
            size='lg'
            disabled={true}

          />
          <Select
            id="unit-gas-select"
            defaultValue={unitWoodenPellets}
            onChange={handleUnitChange}
            labelText=""
            className="house-block-middle-form"
            size='lg'
            disabled={true}

          >
            {unitOptions.map((unit) => (
              <SelectItem key={unit} value={unit} text={unit} />
            ))}
          </Select>

        </section>
    </>
  );
};

export default HouseWoodenPellets;
