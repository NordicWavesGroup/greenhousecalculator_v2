import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
    setShowElectricityResult, 
    resetElectricityFootprint,
    
    setShowNaturalGasResult,
    resetNaturalGasFootprint,

    setShowCoalResult,
    resetCoalFootprint,

    setShowLPGResult,
    resetLPGFootprint,

    setShowPropaneResult,
    resetPropaneFootprint,

    setShowWoodenPelletsResult,
    resetWoodenPelletsFootprint

} from "../../redux/house";

import { Button } from '@carbon/react';
import { TrashCan } from '@carbon/react/icons';

const HouseElectricity = () => {
  const {

    electricity,
    electricityFootprint,
    showElectricityResult,
    
    naturalGas,
    unitNaturalGas,
    naturalGasFootprint,
    showNaturalGasResult,

    coal,
    unitCoal,
    coalFootprint,
    showCoalResult,

    LPG,
    unitLPG,
    LPGFootprint,
    showLPGResult,

    propane,
    unitPropane,
    propaneFootprint,
    showPropaneResult,

    woodenPellets,
    unitWoodenPellets,
    woodenPelletsFootprint,
    showWoodenPelletsResult

    } = useSelector(
    (state) => state.house
  );
  const dispatch = useDispatch();

  const resetFootprintElectricity = () => {
    dispatch(resetElectricityFootprint());
    dispatch(setShowElectricityResult(false))
  };
  const resetFootprintNaturalGas = () => {
    dispatch(resetNaturalGasFootprint());
    dispatch(setShowNaturalGasResult(false))
  };

  const resetFootprintCoal = () => {
    dispatch(resetCoalFootprint());
    dispatch(setShowCoalResult(false))
  };
  const resetFootprintLPG = () => {
    dispatch(resetLPGFootprint());
    dispatch(setShowLPGResult(false))
  };
  const resetFootprintPropane = () => {
    dispatch(resetPropaneFootprint());
    dispatch(setShowPropaneResult(false))
  };
  const resetFootprintWoodenPellets = () => {
    dispatch(resetWoodenPelletsFootprint());
    dispatch(setShowWoodenPelletsResult(false))
  };

  return <>  

    {showElectricityResult && electricity > 0 &&  (
        <section className='house-result-section'>
          <h5 
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.448)' }}
            className='house-results-container'>
            {electricityFootprint} Kg:	{electricity} kWh of Electricity 
          </h5>
          <Button
            kind='ghost'
            size='lg'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintElectricity} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showNaturalGasResult && naturalGas > 0 &&  (
        <section className='house-result-section'>
          <h5 
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.448)' }}
            className='house-results-container'>
            {naturalGasFootprint} Kg:	{naturalGas}   {unitNaturalGas} of Natural Gas
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintNaturalGas} >
            <TrashCan />
          </Button>
        </section>
      )
    }
 
    {showCoalResult && coal > 0 &&  (
        <section className='house-result-section'>
          <h5 
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.448)' }}
            className='house-results-container'>
            {coalFootprint} Kg:	{coal}   {unitCoal} of Coal
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintCoal} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showLPGResult && LPG > 0 &&  (
        <section className='house-result-section'>
          <h5 
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.448)' }}
            className='house-results-container'>
            {LPGFootprint} Kg:	{LPG}   {unitLPG} of Liquefied Petroleum Gas
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintLPG} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showPropaneResult && propane > 0 &&  (
        <section className='house-result-section'>
          <h5
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.448)' }} 
            className='house-results-container'>
            {propaneFootprint} Kg:	{propane}   {unitPropane} of Propane
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintPropane} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showWoodenPelletsResult && woodenPellets > 0 &&  (
        <section className='house-result-section'>
          <h5 
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.448)' }}
            className='house-results-container'>
            {woodenPelletsFootprint} Kg:	{woodenPellets}   {unitWoodenPellets} of Wooden Pellets
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='house-result-trashcan-icon-container'
            onClick={resetFootprintWoodenPellets} >
            <TrashCan />
          </Button>
        </section>
      )
    }
  </>
};

export default HouseElectricity;