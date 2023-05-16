import React from 'react';
import { useSelector } from 'react-redux';
import { DonutChart } from '@carbon/charts-react';

const Car = () => {
  const {
    carFootprint,

  } = useSelector((state) => state.car);

  const totalCarFootprint = (parseFloat( carFootprint) || 0);


  // Define the data for the donut chart
  const data = [
    {
      group: 'Car',
      value: totalCarFootprint,
    }
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
  
      <div>
      <DonutChart data={data} options={options} />
      </div>
     
    </>
  );
};

export default Car;

