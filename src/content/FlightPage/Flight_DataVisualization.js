import React from "react";
import { useSelector } from "react-redux";
import { DonutChart } from "@carbon/charts-react";

const HouseElectricity = () => {
  const { flights } = useSelector((state) => state.flights);
  // Define the data for the donut chart
  const data = [];
  for (let index = 0; index < flights.length; index++) {
    if (
      flights[index].showFlightResult &&
      parseFloat(flights[index].flightFootprint) > 0
    ) {
      data.push({
        group: "Flight-" + (index + 1),
        value: parseFloat(flights[index].flightFootprint),
      });
    }
  }
  // Define the options for the donut chart
  const options = {
    title: "",
    resizable: true,
    legend: {
      alignment: "center",
    },
    donut: {
      center: {
        label: "Kg of CO2e",
      },
      precision: 2,
      alignment: "center",
    },
    height: "360px",
  };

  return (
    <>
      <DonutChart data={data} options={options} />
    </>
  );
};

export default HouseElectricity;
