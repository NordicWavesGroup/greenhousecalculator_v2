import React from 'react';
import { useSelector } from "react-redux";

const ResultsTotalResult = () => {
  const { totalSelectedFootprint } = useSelector(
    (state) => state.totalfootprint
  );
  const totalFootprintToOffset = (parseFloat(totalSelectedFootprint) || 0);

  return <>
      <div className='car-results'>Total to Offset = <span style={{ marginLeft: '5px', marginRight: '5px' }}>{(totalFootprintToOffset.toFixed(2))}</span> Kg of CO2e</div>
  </>;
};

export default ResultsTotalResult;