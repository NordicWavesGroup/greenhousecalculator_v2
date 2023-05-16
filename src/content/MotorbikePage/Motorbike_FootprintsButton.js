import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
  setMotorbikeFootprint, setShowMotorbikeResult 
} from "../../redux/motorbike";
import countryFactors from '../../countryFactors'

import { Button } from '@carbon/react';
import { Calculator } from '@carbon/react/icons';

const MotorbikeFootprint = () => {
  const {
    selectedCountryMotorbike, 
    motorbikeMileage,
    unitMotorbike,

    motorbikeSize

  } = useSelector(
    (state) => state.motorbike
  );
  const dispatch = useDispatch();

  const showFootprintResultsMotorbike = () => {
    
    if (
      isNaN(parseFloat(motorbikeMileage)) 

    ) {
      dispatch(setMotorbikeFootprint("Error, check your input"));
    } else {
      let total = 
      parseFloat(motorbikeMileage) * 
      countryFactors[selectedCountryMotorbike].motorbikeMileageUnits[unitMotorbike].motorbikeMileage_factor *  
      countryFactors[selectedCountryMotorbike].motorbikeMotorSize[motorbikeSize].motorbikeSize_factor * 1;

      dispatch (setMotorbikeFootprint(total.toFixed(2)));
      dispatch(setShowMotorbikeResult(true));
    };

  };

  return (
    <Button 
      onClick={showFootprintResultsMotorbike} 
      className='motorbike-calculate-footprint-button'
    >
      Calculate Motorbike Footprint
      <Calculator className='motorbike-calculator-icon' />
    </Button>
  );
}

export default MotorbikeFootprint;
