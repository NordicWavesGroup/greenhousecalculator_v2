import React from 'react';
import { useSelector } from 'react-redux';
import { DonutChart } from '@carbon/charts-react';

const Secondary = () => {
  const {
    secondaryFootprint,
  
  } = useSelector((state) => state.secondary);

  const totalSecondaryFootprint = (parseFloat( secondaryFootprint) || 0);


  // Define the data for the donut chart
  const data = [
    {
      group: 'Household Consumption',
      value: totalSecondaryFootprint,
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

export default Secondary;

