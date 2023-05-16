import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
  setFoodDietFootprint, 
  setShowFoodDietResult,
  setWaterFootprint,
  setShowWaterResult
 } from "../../redux/secondary";
import countryFactors from '../../countryFactors'

import { Button } from '@carbon/react';
import { Calculator } from '@carbon/react/icons';

const SecondaryFootprint = () => {
  const {  
    selectedCountrySecondary,
    foodDiet,
    waterFootprint
  } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const showFootprintResultsFoodDiet = () => {
    if (
      isNaN(parseFloat(waterFootprint)) 
    ) {
      dispatch(setFoodDietFootprint("Error, check your input"));
    } else {
      let total = 
        parseFloat(waterFootprint) + 
        countryFactors[selectedCountrySecondary].foodDietRange[foodDiet].foodDiet_factor;
  
      dispatch(setWaterFootprint(waterFootprint));
      dispatch(setFoodDietFootprint(total.toFixed(2)));
      dispatch(setShowWaterResult(true));
      dispatch(setShowFoodDietResult(true));
    };
  };
  

  return <>  
    <Button 
        onClick={showFootprintResultsFoodDiet} 
        className='secondary-calculate-footprint-button'
        > Calculate Household Consumption Footprint
        <Calculator className='secondary-calculator-icon' />
    </Button>
  </>
};

export default SecondaryFootprint;