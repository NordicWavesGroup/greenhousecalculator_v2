import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setSecondaryFootprint } from "../../redux/secondary";
import countryFactors from '../../countryFactors';

const SecondaryTotalResult = () => {
  const dispatch = useDispatch();

  const { foodDiet, foodDietFootprint, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );

  const totalSecondaryFootprint = parseFloat(foodDietFootprint) || 0;
  const foodDietFactor = countryFactors[selectedCountrySecondary]?.foodDietRange[foodDiet]?.foodDiet_factor;

  useEffect(() => {
    dispatch(setSecondaryFootprint(totalSecondaryFootprint));
  }, [totalSecondaryFootprint, dispatch]);

  useEffect(() => {
    console.log(`Factor of current food diet (${foodDiet}): ${foodDietFactor}`);
  }, [foodDiet, foodDietFactor]);

  return (
    <>
      <div className='secondary-results'> Consumption Footprint = <span style={{ marginLeft: '5px', marginRight: '5px' }}>{(totalSecondaryFootprint.toFixed(2))}</span> Kg of CO2e</div>
    </>
  );
};

export default SecondaryTotalResult;
