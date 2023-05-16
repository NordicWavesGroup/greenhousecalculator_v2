import React from 'react';
import { useSelector } from "react-redux";
const FlightTotalResult = () => {
  const { flights } = useSelector(
    (state) => state.flights
  );
  let totalFlightFootprint = 0;
  for (let index = 0; index < flights.length; index++) {
    if (parseFloat(flights[index].flightFootprint) > 0) {
      totalFlightFootprint += parseFloat(flights[index].flightFootprint);
    }
  }

  return <>
    <div className='flight-results'>Flights Footprint = <span style={{ marginLeft: '5px', marginRight: '5px' }}>{(totalFlightFootprint.toFixed(2))}</span> kilograms of CO2e</div>
  </>;
};

export default FlightTotalResult;