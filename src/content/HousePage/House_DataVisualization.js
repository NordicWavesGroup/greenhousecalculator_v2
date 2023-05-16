import React from 'react';
import { useSelector } from 'react-redux';
import { DonutChart } from '@carbon/charts-react';

const HouseElectricity = () => {
  const {
    electricityFootprint,
    naturalGasFootprint,
    coalFootprint,
    LPGFootprint,
    propaneFootprint,
    woodenPelletsFootprint,
  } = useSelector((state) => state.house);

  const totalElectricityFootprint = (parseFloat( electricityFootprint) || 0);
  const totalNaturalGasFootprint = (parseFloat( naturalGasFootprint) || 0);

  const totalCoalFootprint = (parseFloat(coalFootprint) || 0);
  const totalLPGFootprint = (parseFloat(LPGFootprint) || 0);

  const totalPropaneFootprint = (parseFloat(propaneFootprint) || 0);
  const totalWoodenPelletsFootprint = (parseFloat(woodenPelletsFootprint) || 0);

  // Define the data for the donut chart
  const data = [
    {
      group: 'Electricity',
      value: totalElectricityFootprint,
    },
    {
      group: 'Natural Gas',
      value: totalNaturalGasFootprint,
    },
    {
      group: 'Coal',
      value: totalCoalFootprint,
    },
    {
      group: 'LPG',
      value: totalLPGFootprint,
    },
    {
      group: 'Propane',
      value: totalPropaneFootprint,
    },
    {
      group: 'Wooden Pellets',
      value: totalWoodenPelletsFootprint,
    },
  ];

  // Define the options for the donut chart
  const options = {
    "title": "",
    "resizable": true,
    "legend": {
      "alignment": "center"
    },
    "donut": {
      "center": {
        "label": "Kg of CO2e"
      },
      "precision": 2,
      "alignment": "center"
    },
    "height": "360px",
  }

  return (
    <>
      <DonutChart data={data} options={options} />
     
    </>
  );
};

export default HouseElectricity;

