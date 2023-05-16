import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setLPG, setUnitLPGFactor } from "../../redux/house";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const HouseLPG = () => {
const { LPG, unitLPG, selectedCountry } = useSelector(
(state) => state.house
);
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
<section className="global-inputs-containers">
<h5 className="global-input-description">LPG:</h5>
<TextInput
id="LPG-amount"
value={LPG || ""}
onChange={handleLPGChange}
labelText=""
className="house-block-middle-form"
size='lg'
/>
<Select
id="unit-LPG-select"
defaultValue={unitLPG}
onChange={handleUnitChange}
labelText=""
className="house-block-middle-form"
size='lg'
>
{unitOptions.map((unit) => (
<SelectItem key={unit} value={unit} text={unit} />
))}
</Select>
    </section>
</>
);
};

export default HouseLPG;