import React from "react";
import { useSelector } from "react-redux";
const FlightTotalResult = () => {
  const { flights } = useSelector((state) => state.flights);
  let totalFlightFootprint = 0;
  for (let index = 0; index < flights.length; index++) {
    if (parseFloat(flights[index].flightFootprint) > 0) {
      totalFlightFootprint += parseFloat(flights[index].flightFootprint);
    }
  }

  return (
    <>
      <p>
        {totalFlightFootprint ? (
          <>{totalFlightFootprint.toFixed(2)} Kg of CO2e</>
        ) : null}
      </p>
    </>
  );
};

export default FlightTotalResult;
