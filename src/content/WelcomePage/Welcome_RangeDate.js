import React from 'react';
import './_welcome-page.scss';

import {  DatePicker, DatePickerInput } from '@carbon/react';

const SecondaryPharmaceuticals = () => {

  return (
    <>
        <section className="global-inputs-containers4">
          <h5 className="global-input-description">Range Date:</h5>
      
          <DatePicker 
            datePickerType="range"
            className="welcome-date-picker-container"
            >
           <DatePickerInput
              id="date-picker-input-id-start"
              placeholder="mm/dd/yyyy"
              labelText="Start date"
              size="lg"
              className="welcome-date-picker-from"

            />
            <DatePickerInput
              id="date-picker-input-id-finish"
              placeholder="mm/dd/yyyy"
              labelText="End date"
              size="lg"
              className="welcome-date-picker-to"

          />
          </DatePicker>
        </section>
    </>
  );
};

export default SecondaryPharmaceuticals;
