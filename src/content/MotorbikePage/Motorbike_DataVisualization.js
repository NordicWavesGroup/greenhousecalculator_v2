import React from 'react';
import { useSelector } from 'react-redux';
import { DonutChart } from '@carbon/charts-react';

const Motorbike = () => {
  const {
    motorbikeFootprint,
  
  } = useSelector((state) => state.motorbike);

  const totalMotorbikeFootprint = (parseFloat( motorbikeFootprint) || 0);


  // Define the data for the donut chart
  const data = [
    {
      group: 'Motorbike',
      value: totalMotorbikeFootprint,
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

export default Motorbike;

