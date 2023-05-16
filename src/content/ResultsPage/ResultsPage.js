import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./_results-page.scss";
import "@carbon/charts/styles.css";

import ResultsHeader from "./Results_Header";

import ResultsFootprintsButton from "./Results_FootprintsButton";
import ResultTotalResults from "./Results_TotalResults";
import IconsNavigation from "../IconsNavigation/IconsNavigation";

import { Button } from "@carbon/react";
import { Link } from "react-router-dom";
import { NextOutline, PreviousOutline } from "@carbon/react/icons";
import { SimpleBarChart } from "@carbon/charts-react";
import { setTotalSelectedFootprint } from "../../redux/totalfootprint";
import ResultsCheckboxes from "./Results_Checkboxes";
import Waves from "../Waves";

const ResultsPage = () => {
  const dispatch = useDispatch();

  const { houseFootprint } = useSelector((state) => state.house);
  const { flights } = useSelector((state) => state.flights);
  const { motorbikeFootprint } = useSelector((state) => state.motorbike);
  const { carFootprint } = useSelector((state) => state.car);
  const { busrailFootprint } = useSelector((state) => state.busrail);
  const { secondaryFootprint } = useSelector((state) => state.secondary);
  const totalHouseFootprint = parseFloat(houseFootprint) || 0;
  ///mulitple flights total
  let totalFlightFootprint = 0;
  for (let index = 0; index < flights.length; index++) {
    if (parseFloat(flights[index].flightFootprint) > 0) {
      totalFlightFootprint += parseFloat(flights[index].flightFootprint);
    }
  }

  //const totalFlightFootprint = parseFloat(flightFootprint) || 0;
  const totalCarFootprint = parseFloat(carFootprint) || 0;
  const totalMotorbikeFootprint = parseFloat(motorbikeFootprint) || 0;
  const totalBusRailFootprint = parseFloat(busrailFootprint) || 0;
  const totalSecondaryFootprint = parseFloat(secondaryFootprint) || 0;

  const [checkboxState, setCheckboxState] = React.useState({
    house: true,
    flights: true,
    car: true,
    motorbike: true,
    busrail: true,
    secondary: true,
  });
  const totalSelectedFootprint = (
    (checkboxState.house ? totalHouseFootprint : 0) +
    (checkboxState.flights ? totalFlightFootprint : 0) +
    (checkboxState.car ? totalCarFootprint : 0) +
    (checkboxState.motorbike ? totalMotorbikeFootprint : 0) +
    (checkboxState.busrail ? totalBusRailFootprint : 0) +
    (checkboxState.secondary ? totalSecondaryFootprint : 0)
  ).toFixed(4);

  useEffect(() => {
    dispatch(setTotalSelectedFootprint(totalSelectedFootprint));
  }, [totalSelectedFootprint, dispatch]);

  const data = [
    {
      group: "World Average",
      value: 4690,
    },
    {
      group: "Household",
      value: checkboxState.house ? totalHouseFootprint : 0,
    },
    {
      group: "Flights",
      value: checkboxState.flights ? totalFlightFootprint : 0,
    },
    {
      group: "Car",
      value: checkboxState.car ? totalCarFootprint : 0,
    },
    {
      group: "Motorbike",
      value: checkboxState.motorbike ? totalMotorbikeFootprint : 0,
    },
    {
      group: "Bus & Rail",
      value: checkboxState.busrail ? totalBusRailFootprint : 0,
    },
    {
      group: "Consumption",
      value: checkboxState.secondary ? totalSecondaryFootprint : 0,
    },
  ];
  const options = {
    title: "Total Footprint per Category",
    axes: {
      left: {
        mapsTo: "value",
        title: "Kg of CO2e",
        scaleType: "linear",
      },
      bottom: {
        mapsTo: "group",
        title: "Category",
        scaleType: "labels",
        visible: false,
      },
      legend: {
        alignment: "center",
      },
    },
    height: "400px",
  };
  return (
    <>
      <IconsNavigation />
      <section className="global-frame-calculator">
        <div className="global-block-top">
          <h4>Per capita annual footprint</h4>
        </div>
        <div className="results-main-container">
          <div className="results-checkmark-block">
            <ResultsHeader />
            <fieldset className="results-checkmark-container">
              <ResultsCheckboxes
                checkboxState={checkboxState}
                setCheckboxState={setCheckboxState}
              />
            </fieldset>
            <div className="results-button-container">
              <ResultTotalResults />
            </div>
          </div>
          <div className="results-visualization-block">
            <div
              className="div2PDF"
              style={{ backgroundColor: "white", padding: "0.6rem" }}
            >
              <SimpleBarChart
                data={data}
                options={options}
                className="simplebar-chart"
              />
            </div>
            <div>
              <ResultsFootprintsButton />
            </div>
          </div>
        </div>
      </section>
      <div className="global-block-bottom">
        <Link className="global-buttons-link-back-and-forth" to="/secondary">
          <Button
            className="global-re-styled-button-back-and-forth"
            renderIcon={PreviousOutline}
            kind="tertiary"
          >
            Household
          </Button>
        </Link>
        <Link className="global-buttons-link-back-and-forth" to="/welcome">
          <Button
            renderIcon={NextOutline}
            className="global-re-styled-button-back-and-forth"
            kind="tertiary"
          >
            Start Again
          </Button>
        </Link>
      </div>
      <Waves />
    </>
  );
};

export default ResultsPage;
