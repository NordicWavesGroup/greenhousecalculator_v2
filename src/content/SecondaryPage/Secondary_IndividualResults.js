import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
    setShowFoodDietResult, 
    setShowWaterResult,
    resetFoodDietFootprint,
    resetWaterFootprint
} from "../../redux/secondary";

import { Button } from '@carbon/react';
import { TrashCan } from '@carbon/react/icons';

const SecondaryResults = () => {
  const {
    foodDietFootprint,
    waterFootprint,
    water,
    showFoodDietResult,
    showWaterResult
  } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const resetFootprint = (type) => {
    if (type === 'food') {
      dispatch(resetFoodDietFootprint());
      dispatch(setShowFoodDietResult(false));
    } else if (type === 'water') {
      dispatch(resetWaterFootprint());
      dispatch(setShowWaterResult(false));
    }
  };

  return (
    <>  
      {showFoodDietResult && foodDietFootprint > 0 && (
        <section className='secondary-result-section'>
          <h5 
          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.448)' }}
          className='secondary-results-container'>
            {foodDietFootprint} Kg of CO2 
          </h5>
          <Button
            kind='ghost'
            size='lg'
            className='secondary-result-trashcan-icon-container'
            onClick={() => resetFootprint('food')}
          >
            <TrashCan />
          </Button>
        </section>
      )}

      {showWaterResult && water > 0 && (
        <section className='secondary-result-section'>
          <h5
          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.448)' }}
           className='secondary-results-container'>
            {waterFootprint} Kg of CO2 
          </h5>
          <Button
            kind='ghost'
            size='lg'
            className='secondary-result-trashcan-icon-container'
            onClick={() => resetFootprint('water')}
          >
            <TrashCan />
          </Button>
        </section>
      )}
    </>
  );
};

export default SecondaryResults;
