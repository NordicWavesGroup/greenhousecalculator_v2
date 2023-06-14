import React from 'react';
import { TreemapChart } from '@carbon/charts-react';

import topCarbonEmittersPerCapita from '../../countryAverage';

const WorldAverage = () => {

  // Define the data for the treemap chart
  const treemapChartData = Object.entries(topCarbonEmittersPerCapita).map(([country, emissions]) => ({
    name: country,
    children: [
      {
        name: 'Emissions',
        value: emissions,
      },
    ],
  }));

  const treemapOptions = {
    title: 'Countries with the top 30 carbon emissions per capita',
    height: '400px',
  };

  return (
    <>
    <h2>TOP 30</h2>
   <h2>CO2 Emissions in tonnes per country per capita</h2>
      <TreemapChart  className="white-theme" data={treemapChartData} options={treemapOptions}  />
    </>
  );
};

export default WorldAverage;
