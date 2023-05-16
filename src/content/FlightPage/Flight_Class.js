import React from 'react';

import { Select, SelectItem } from '@carbon/react';

const SecondaryPaper = () => {
  return (
    <>
        <section className="flight-inputs-containers1">
          <h5 className="global-input-description">Class:</h5>

          <Select
            id="unit-gas-select"
            labelText=""
            className="flight-block-middle-form"
            size='lg'
            disabled={true}
          >
            <SelectItem value="economy" text="Economy" />
            <SelectItem value="premium-economy" text="Premium Economy" />
            <SelectItem value="business" text="Business" />
            <SelectItem value="first" text="First Class" />
            <SelectItem value="private-jet" text="Private Jet" />
          </Select>
  
        </section>
    </>
  );
};

export default SecondaryPaper;
