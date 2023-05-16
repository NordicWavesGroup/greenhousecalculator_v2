import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
    setShowMotorbikeResult, 
    resetMotorbikeFootprint,

} from "../../redux/motorbike";

import { Button } from '@carbon/react';
import { TrashCan } from '@carbon/react/icons';

const MotorbikeResults = () => {
  const {

    motorbikeMileage,
    unitMotorbike,
    motorbikeFootprint,
    showMotorbikeResult,

    } = useSelector(
    (state) => state.motorbike
  );
  const dispatch = useDispatch();

  const resetFootprintMotorbike = () => {
    dispatch(resetMotorbikeFootprint());
    dispatch(setShowMotorbikeResult(false))
  };
  console.log('the footprint',motorbikeFootprint)
  return <>  
  
    {showMotorbikeResult && motorbikeMileage > 0 &&  (
        <section className='motorbike-result-section'>
          <h5 
            className='motorbike-results-container-header'>
            {motorbikeFootprint} Kg:	{motorbikeMileage}  {unitMotorbike} 
          </h5>
          <Button
            kind='ghost'
            size='lg'
            className='motorbike-result-trashcan-icon-container'
            onClick={resetFootprintMotorbike} >
            <TrashCan />
          </Button>
        </section>
      )
    }
  </>
};

export default MotorbikeResults;