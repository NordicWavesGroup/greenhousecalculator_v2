import React from 'react';
import {  useSelector } from "react-redux";

const CarTotalResult = () => {
  const {carFootprint} = useSelector(
    (state) => state.car
  );
  const totalCarFootprint = (parseFloat(carFootprint)||  0);

  return <>
          <div className='car-results'>Car Footprint = <span style={{ marginLeft: '5px', marginRight: '5px' }}>{(totalCarFootprint.toFixed(2))}</span> Kg of CO2e</div>
  </>;
};

export default CarTotalResult;