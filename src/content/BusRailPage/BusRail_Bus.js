import React from 'react';
import './_bus-rail-page.scss'
import { useDispatch, useSelector } from "react-redux";
import { setBus, setUnitBusFactor } from "../../redux/busrail";


import { TextInput, Select, SelectItem  } from '@carbon/react';
import countryFactors from '../../countryFactors'

const BusFootprint = () => {
  const { bus, unitBus, selectedCountryBusRail} = useSelector(
    (state) => state.busrail
  );
  const dispatch = useDispatch();

  const unitOptions = Object.keys(countryFactors[selectedCountryBusRail].busUnits);


  const handleBusChange = (e) => {
    dispatch(setBus(parseFloat(e.target.value)));
  };

  const handleUnitChange = (e) => {
    dispatch(setUnitBusFactor(e.target.value));
  };
 
  return <>  
        <section className='global-inputs-containers'>
          <h5 className='global-input-description'>Bus:</h5>
          <TextInput
              id="bus-input"
              value={bus || ""}
              onChange={handleBusChange}    
              labelText=""
              className='bus-rail-block-middle-form'
              size='lg'
          />
      
      <Select
            id="unit-bus-select"
            defaultValue={unitBus}
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
};

export default BusFootprint;