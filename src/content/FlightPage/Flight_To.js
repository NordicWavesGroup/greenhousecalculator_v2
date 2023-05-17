import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setSelectedAirportTo,
  setAirportToLocation,
} from "../../redux/flights";

import { ComboBox } from "carbon-components-react";
import airportsIATA from "../../airportsIATA";

const FlightTo = ({ index, setFormFields, formFields }) => {
  const [filteredAirportsTo, setFilteredAirportsTo] = useState(airportsIATA);
  const dispatch = useDispatch();

  const handleAirportSelectionTo = (selectedItem) => {
    if (selectedItem && selectedItem.selectedItem) {
      const { lat, lon } = selectedItem.selectedItem;
      selectedItem.selectedItem.index = index;
      dispatch(setSelectedAirportTo(selectedItem.selectedItem));
      dispatch(setAirportToLocation({ lat, lon, index }));
      console.log("selected airport to:", selectedItem.selectedItem);
      console.log("latitude and longitude", lat, lon);
    }
  };

  const handleInputChangeTo = (inputValue) => {
    const filtered = airportsIATA.filter((airport) => {
      const airportString = `${airport?.name ?? ""} ${airport?.city ?? ""} ${
        airport?.country ?? ""
      }${airport?.code ?? ""}`;
      return airportString.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilteredAirportsTo(filtered);
  };
  return (
    <>
      <section className="flight-inputs">
        <h5 className="global-description">To:</h5>
        <ComboBox
          id="flight-to-select"
          data-index={index}
          items={filteredAirportsTo}
          itemToString={(airport) =>
            airport
              ? `${airport.name ?? ""} ${airport.city ?? ""} ${
                  airport.country ?? ""
                }  ${airport.code ?? ""}`
              : ""
          }
          titleText=""
          placeholder="Choose an Airport"
          onChange={handleAirportSelectionTo}
          onInputChange={handleInputChangeTo}
          shouldFilterItem={() => true}
          className="flight-block-middle-form-combobox"
          size="lg"
          style={{ fontSize: "16px" }}
        />
      </section>
    </>
  );
};
export default FlightTo;
