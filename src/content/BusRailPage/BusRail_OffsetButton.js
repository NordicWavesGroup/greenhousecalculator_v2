import React, { useEffect } from 'react';
import {  useSelector, useDispatch } from "react-redux";
import { setHouseFootprint } from "../../redux/house";

import { Button } from '@carbon/react';


const HouseTotalResult = () => {
  const dispatch = useDispatch();

  const { electricityFootprint, naturalGasFootprint,heatingOilFootprint, coalFootprint,LPGFootprint, propaneFootprint, woodenPelletsFootprint } = useSelector(
    (state) => state.house
  );
  const totalHouseFootprint = (parseFloat(electricityFootprint) + parseFloat(naturalGasFootprint)+ parseFloat(heatingOilFootprint)+ parseFloat(coalFootprint)+ parseFloat(LPGFootprint)+ parseFloat(propaneFootprint)+ parseFloat(woodenPelletsFootprint) ||  0);

  useEffect(() => {
    dispatch(setHouseFootprint(totalHouseFootprint));
  }, [totalHouseFootprint]);


  return <>

      <Button 
          kind='secondary'
          className='bus-rail-calculate-footprint-button'
          > OFFSET NOW!
      </Button>
  
  </>;
};

export default HouseTotalResult;