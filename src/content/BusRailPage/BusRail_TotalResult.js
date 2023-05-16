import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setBusRailFootprint } from "../../redux/busrail";


const BusRailTotalResult = () => {
  const dispatch = useDispatch();

  const { busFootprint, coachFootprint,localTrainFootprint,longTrainFootprint,tramFootprint,subwayFootprint, taxiFootprint } = useSelector(
    (state) => state.busrail
  );
  const totalBusRailFootprint = 
    (
      parseFloat(busFootprint) + 
      parseFloat(coachFootprint)+ 
      parseFloat(localTrainFootprint)+ 
      parseFloat(longTrainFootprint)+ 
      parseFloat(tramFootprint)+ 
      parseFloat(subwayFootprint)+ 
      parseFloat(taxiFootprint) 
    ||  0);

    useEffect(() => {
      dispatch(setBusRailFootprint(totalBusRailFootprint));
    }, [totalBusRailFootprint, dispatch]);

  return <>
        <div className='bus-rail-results'> Public Transport Footprint = <span style={{ marginLeft: '5px', marginRight: '5px' }}>{(totalBusRailFootprint.toFixed(2))}</span> Kg of CO2e</div>
  </>;
};

export default BusRailTotalResult;