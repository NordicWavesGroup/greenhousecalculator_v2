import React from 'react';
import {  useSelector } from "react-redux";

const MotorbikeTotalResult = () => {
  const { motorbikeFootprint } = useSelector(
    (state) => state.motorbike
  );
  const totalMotorbikeFootprint = (parseFloat(motorbikeFootprint)  ||  0);

  return <>
          <div className='motorbike-results'> Motorbike Footprint = <span style={{ marginLeft: '5px', marginRight: '5px' }}>{(totalMotorbikeFootprint.toFixed(2))}</span> Kg of CO2e</div>
  </>;
};

export default MotorbikeTotalResult;