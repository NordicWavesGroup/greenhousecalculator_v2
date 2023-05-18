import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ToastNotification } from "@carbon/react";
import { Calculator } from "@carbon/react/icons";
import {
  setDistanceBetweenAirports,
  setShowFlightResult,
  setFlightFootprint,
} from "../../redux/flights";

const FlightFootprint = (formIndex) => {
  const dispatch = useDispatch();
  const [apiMessage, setApiMessage] = useState("");
  const [notification, setNotification] = useState(false);
  const [alertClass, setalertClass] = useState("error");
  const handleCloseNotify = () => {
    setNotification(false);
  };
  function distance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }
  const { flights } = useSelector((state) => state.flights);
  const calculateFlightsFootprint = () => {
    let showFlight = true;
    if (formIndex.formIndex > flights.length) {
      setApiMessage("Please fill all flight From && To ");
      setalertClass("error");
      setNotification(true);
    }
    if (flights.length > 0) {
      for (let index = 0; index < flights.length; index++) {
        let flight = flights[index];
        if (flight.airportFromLocation && flight.airportToLocation) {
          const { lat: lat1, lon: lon1 } = flight.airportFromLocation;
          const { lat: lat2, lon: lon2 } = flight.airportToLocation;
          const distanceBetweenAirports = distance(lat1, lon1, lat2, lon2);
          console.log(
            `Distance between airports: ${distanceBetweenAirports} km`
          );

          const fuelConsumption = 0.2; // liters per km per passenger
          const co2EmissionFactor = 2.68; // kg of CO2 per liter of fuel
          const conversionFactor = 3.67; // conversion factor for CO2 to carbon
          const passengerCount = 1; // number of passengers

          const co2Emissions =
            (fuelConsumption *
              co2EmissionFactor *
              distanceBetweenAirports *
              passengerCount) /
            1000; // kg of CO2 emissions
          const carbonFootprint = co2Emissions * conversionFactor;
          console.log(`Carbon footprint: ${carbonFootprint} kg CO2e`);
          dispatch(
            setDistanceBetweenAirports({ distanceBetweenAirports, index })
          );
          dispatch(setFlightFootprint({ carbonFootprint, index }));
          dispatch(setShowFlightResult({ showFlight, index }));
        } else {
          alert("please");
        }
      }
    }
  };

  return (
    <>
      {notification && (
        <>
          <ToastNotification
            kind={"error"}
            title="Alert"
            subtitle={apiMessage}
            caption=""
            onCloseButtonClick={handleCloseNotify}
            hideCloseButton={false}
            lowContrast={false}
            open={notification}
            className="custom-toast-notification" // Add custom CSS class name
          />
        </>
      )}
      <Button
        onClick={calculateFlightsFootprint}
        className="flight-calculate-footprint-button"
      >
        Calculate Flights Footprint
        <Calculator className="secondary-calculator-icon" />
      </Button>
    </>
  );
};

export default FlightFootprint;
