import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
  setShowCarResult, 
  resetCarFootprint,
} from "../../redux/car";

import { Button } from '@carbon/react';
import { TrashCan } from '@carbon/react/icons';

const CarResults = () => {
  const {
    carMileage,
    carUnit,
    carFootprint,
    showCarResult,
  } = useSelector((state) => state.car);

  const dispatch = useDispatch();

  const resetFootprintCar = () => {
    dispatch(resetCarFootprint());
    dispatch(setShowCarResult(false))
  };

  return showCarResult && carMileage > 0 && (
    <section className='car-result-section'>
      <h5 className='car-results-container' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.448)' }}>
        {carFootprint} Kg of CO2: in  {carMileage} {carUnit} 
      </h5>
      <Button
        kind='ghost'
        size='lg'
        className='car-result-trashcan-icon-container'
        onClick={resetFootprintCar}>
        <TrashCan />
      </Button>
    </section>
  );
};

export default CarResults;
