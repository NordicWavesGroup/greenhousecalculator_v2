import React from 'react';
import {  Select, SelectItem } from '@carbon/react';

const SecondaryFurniture = () => {


  return (
    <>
        <section className="flight-inputs-containers1">
          <h5 className="global-input-description"> Radiative forcing ?</h5>
         
          <Select
            id="range-furniture-select"
            defaultValue=''
            onChange=''
            labelText=""
            className="flight-block-middle-form"
            size='lg'
            disabled={true}
          >
              <SelectItem value="no" text="No" />
              <SelectItem value="yes" text="Yes" />
      
          </Select>
        </section>
    </>
  );
};

export default SecondaryFurniture;
