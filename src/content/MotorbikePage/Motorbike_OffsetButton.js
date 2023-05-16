import React, { useEffect } from 'react';
import {  useSelector, useDispatch } from "react-redux";
import { setHouseFootprint } from "../../redux/house";

import { Button } from '@carbon/react';

const MotorbikeTotalResult = () => {
  const dispatch = useDispatch();

  const { electricityFootprint, naturalGasFootprint,heatingOilFootprint, coalFootprint,LPGFootprint, propaneFootprint, woodenPelletsFootprint } = useSelector(
    (state) => state.house
  );
  const totalHouseFootprint = (parseFloat(electricityFootprint) + parseFloat(naturalGasFootprint)+ parseFloat(heatingOilFootprint)+ parseFloat(coalFootprint)+ parseFloat(LPGFootprint)+ parseFloat(propaneFootprint)+ parseFloat(woodenPelletsFootprint) ||  0);

  useEffect(() => {
    dispatch(setHouseFootprint(totalHouseFootprint));
  }, [totalHouseFootprint, dispatch]);

  return <>

      <Button 
          kind='secondary'
          className='motorbike-calculate-footprint-button'
          > 
      </Button>
  
  </>;
};

export default MotorbikeTotalResult;