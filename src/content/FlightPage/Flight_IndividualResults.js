import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowFlightResult, resetFlightFootprint } from "../../redux/flights";
import { Button } from "@carbon/react";
import { TrashCan } from "@carbon/react/icons";
const FlightResults = (props) => {
  const { flights } = useSelector((state) => state.flights);
  const dispatch = useDispatch();
  const resetFootprintFlight = (index) => {
    props.removeFormFields(index);
    // let showFlight = false;
    // let footerPrint = 0;
    // dispatch(resetFlightFootprint({ footerPrint, index }));
    // dispatch(setShowFlightResult({ showFlight, index }));
  };
  return (
    <>
      {flights.map((fly, index) =>
        fly.showFlightResult ? (
          fly.distanceBetweenAirports > 0 ? (
            <>
              <div className="resultOuter">
                <section className="flight-result-section">
                  <h5
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.448)",
                    }}
                    className="flight-results-container title"
                  >
                    {fly.flightFootprint} kg of CO2e in{" "}
                    {fly.distanceBetweenAirports} km between
                  </h5>
                  <Button
                    kind="ghost"
                    size="lg"
                    className="flight-result-trashcan-icon-container"
                    onClick={(e) => {
                      resetFootprintFlight(index);
                    }}
                  >
                    <TrashCan />
                  </Button>
                </section>
              </div>
            </>
          ) : null
        ) : null
      )}
    </>
  );
};
export default FlightResults;
