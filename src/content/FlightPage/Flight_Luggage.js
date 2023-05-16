import React from 'react';

import { Select, SelectItem } from '@carbon/react';

const SecondaryHotels = () => {


  return (
    <>
        <section className="flight-inputs-containers1">
          <h5 className="global-input-description">Luggage</h5>
        
          <Select
            id="hotels-select"
            defaultValue=''
            onChange=''
            labelText=""
            className="flight-block-middle-form"
            size='lg'
            disabled={true}
          >
            <SelectItem value="small" text="Small" />
            <SelectItem value="medium" text="Medium" />
            <SelectItem value="large" text="Large" />

          </Select>

        </section>
    </>
  );
};

export default SecondaryHotels;
