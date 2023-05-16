import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setTram, setUnitTramFactor } from "../../redux/busrail";
import countryFactors from '../../countryFactors'

import { TextInput, Select, SelectItem } from '@carbon/react';

const BusRailTram = () => {
const { tram, unitTram, selectedCountryBusRail } = useSelector(
(state) => state.busrail
);
const dispatch = useDispatch();

const unitOptions = Object.keys(countryFactors[selectedCountryBusRail].tramUnits);

const handleTramChange = (e) => {
dispatch(setTram(parseFloat(e.target.value)));
};

const handleUnitChange = (e) => {
dispatch(setUnitTramFactor(e.target.value));
};

return (
<>
<section className="global-inputs-containers">
<h5 className="global-input-description">Tram:</h5>
<TextInput
id="tram-amount"
value={tram || ""}
onChange={handleTramChange}
labelText=""
className="bus-rail-block-middle-form"
size='lg'
/>
<Select
id="unit-tram-select"
defaultValue={unitTram}
onChange={handleUnitChange}
labelText=""
className="bus-rail-block-middle-form"
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

export default BusRailTram;