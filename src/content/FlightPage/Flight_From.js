import React, { useEffect, useState } from "react";
import "./_flight-page.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedAirportFrom,
  setAirportFromLocation,
} from "../../redux/flights";
import { ComboBox } from "carbon-components-react";
import airportsIATA from "../../airportsIATA";

const FlightFrom = ({ index }) => {
  const { flights } = useSelector((state) => state.flights);
  const [filteredAirportsFrom, setFilteredAirportsFrom] =
    useState(airportsIATA);
  const dispatch = useDispatch();
  const handleAirportSelectionFrom = (selectedItem) => {
    console.log("selectedItem", selectedItem);
    if (selectedItem && selectedItem.selectedItem) {
      const { lat, lon } = selectedItem.selectedItem;
      selectedItem.selectedItem.index = index;
      dispatch(setSelectedAirportFrom(selectedItem.selectedItem));
      dispatch(setAirportFromLocation({ lat, lon, index }));
      console.log("selected airport from:", selectedItem.selectedItem);
      console.log("latitude and longitude", lat, lon);
      console.log("flights from", flights);
    }
  };

  useEffect(() => {}, []);

  const handleInputChangeFrom = (inputValue) => {
    const filtered = airportsIATA.filter((airport) => {
      const airportString = `${airport?.name ?? ""} ${airport?.city ?? ""} ${
        airport?.country ?? ""
      }  ${airport?.code ?? ""}`;
      return airportString.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredAirportsFrom(filtered);
  };
  return (
    <section className="flight-inputs">
      <h5 className="global-description">From:</h5>
      <ComboBox
        id="flight-from-select"
        data-index={index}
        items={filteredAirportsFrom}
        ///value={flights[index] ? flights[index].selectedAirportFrom.name : null}
        itemToString={(airport) =>
          airport
            ? `${airport.name ?? ""} ${airport.city ?? ""} ${
                airport.country ?? ""
              }  ${airport.code ?? ""}`
            : ""
        }
        titleText=""
        placeholder="Choose an Airport"
        onChange={handleAirportSelectionFrom}
        onInputChange={handleInputChangeFrom}
        shouldFilterItem={() => true}
        className="flight-block-middle-form-combobox"
        size="lg"
        style={{ fontSize: "16px" }}
      />
    </section>
  );
};

export default FlightFrom;
