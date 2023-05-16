import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { 
    setShowFoodDrinksResult, 
    resetFoodDrinksFootprint,
    
    setShowPharmaceuticalsResult,
    resetPharmaceuticalsFootprint,

    setShowTextilesResult,
    resetTextilesFootprint,

    setShowPaperResult,
    resetPaperFootprint,

    setShowElectronicsResult,
    resetElectronicsFootprint,

    setShowFurnitureResult,
    resetFurnitureFootprint,

    setShowHotelsResult,
    resetHotelsFootprint

} from "../../redux/secondary";

import { Button } from '@carbon/react';
import { TrashCan } from '@carbon/react/icons';

const SecondaryResults = () => {
  const {

    foodDrinks,
    rangeFoodDrinks,
    foodDrinksFootprint,
    showFoodDrinksResult,
    
    pharmaceuticals,
    rangePharmaceuticals,
    pharmaceuticalsFootprint,
    showPharmaceuticalsResult,

    textiles,
    rangeTextiles,
    textilesFootprint,
    showTextilesResult,

    paper,
    rangePaper,
    paperFootprint,
    showPaperResult,

    electronics,
    rangeElectronics,
    electronicsFootprint,
    showElectronicsResult,

    furniture,
    rangeFurniture,
    furnitureFootprint,
    showFurnitureResult,

    hotels,
    rangeHotels,
    hotelsFootprint,
    showHotelsResult

    } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const resetFootprintFoodDrinks = () => {
    dispatch(resetFoodDrinksFootprint());
    dispatch(setShowFoodDrinksResult(false))
  };
  const resetFootprintPharmaceuticals = () => {
    dispatch(resetPharmaceuticalsFootprint());
    dispatch(setShowPharmaceuticalsResult(false))
  };
  const resetFootprintTextiles = () => {
    dispatch(resetTextilesFootprint());
    dispatch(setShowTextilesResult(false))
  };
  const resetFootprintPaper = () => {
    dispatch(resetPaperFootprint());
    dispatch(setShowPaperResult(false))
  };
  const resetFootprintElectronics = () => {
    dispatch(resetElectronicsFootprint());
    dispatch(setShowElectronicsResult(false))
  };
  const resetFootprintFurniture = () => {
    dispatch(resetFurnitureFootprint());
    dispatch(setShowFurnitureResult(false))
  };
  const resetFootprintHotels = () => {
    dispatch(resetHotelsFootprint());
    dispatch(setShowHotelsResult(false))
  };

  return <>  

    {showFoodDrinksResult && foodDrinks > 0 &&  (
        <section className='car-result-section'>
          <h5 
            className='car-results-container'>
            {foodDrinksFootprint} Kg:	{foodDrinks}  {rangeFoodDrinks} 
          </h5>
          <Button
            kind='ghost'
            size='lg'
            className='car-result-trashcan-icon-container'
            onClick={resetFootprintFoodDrinks} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showPharmaceuticalsResult && pharmaceuticals > 0 &&  (
        <section className='car-result-section'>
          <h5 
            className='car-results-container'>
            {pharmaceuticalsFootprint} Kg:	{pharmaceuticals}   {rangePharmaceuticals} 
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='car-result-trashcan-icon-container'
            onClick={resetFootprintPharmaceuticals} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showTextilesResult && textiles > 0 &&  (
        <section className='car-result-section'>
          <h5 
            className='car-results-container'>
            {textilesFootprint} Kg:	{textiles}   {rangeTextiles} 
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='car-result-trashcan-icon-container'
            onClick={resetFootprintTextiles} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showPaperResult && paper > 0 &&  (
        <section className='car-result-section'>
          <h5 
            className='car-results-container'>
            {paperFootprint} Kg:	{paper}   {rangePaper} 
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='car-result-trashcan-icon-container'
            onClick={resetFootprintPaper} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showElectronicsResult && electronics > 0 &&  (
        <section className='car-result-section'>
          <h5 
            className='car-results-container'>
            {electronicsFootprint} Kg:	{electronics}   {rangeElectronics} 
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='car-result-trashcan-icon-container'
            onClick={resetFootprintElectronics} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showFurnitureResult && furniture > 0 &&  (
        <section className='car-result-section'>
          <h5 
            className='car-results-container'>
            {furnitureFootprint} Kg:	{furniture}   {rangeFurniture} 
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='car-result-trashcan-icon-container'
            onClick={resetFootprintFurniture} >
            <TrashCan />
          </Button>
        </section>
      )
    }
    {showHotelsResult && hotels > 0 &&  (
        <section className='car-result-section'>
          <h5 
            className='car-results-container'>
            {hotelsFootprint} Kg:	{hotels}   {rangeHotels} 
          </h5>
          <Button
            kind='ghost'
            size='md'
            className='car-result-trashcan-icon-container'
            onClick={resetFootprintHotels} >
            <TrashCan />
          </Button>
        </section>
      )
    }
  </>
};

export default SecondaryResults;