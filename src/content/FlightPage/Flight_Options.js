import React from 'react';
import { RadioButtonGroup, RadioButton } from 'carbon-components-react';

const FlightOptions = () => {

  return (
    <>
        <section className="flight-options-container">
          <RadioButtonGroup
            legendText=""
            name="radio-button-group"
            defaultSelected="radio-1"
            className="flight-block-middle-form-options"
            disabled={true}
            >
            <RadioButton
              labelText="Return trip"
              value="radio-1"
              id="radio-1"
            />
            <RadioButton
              labelText="One way flight"
              value="radio-2"
              id="radio-2"
            />
          </RadioButtonGroup>
        </section>
    </>
  );
};

export default FlightOptions;
