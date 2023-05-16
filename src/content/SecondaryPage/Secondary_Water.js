import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { 
  setWaterFootprint,
  setWater 
 } from "../../redux/secondary";
import countryFactors from '../../countryFactors'
import { Tabs, Tab, TabList } from '@carbon/react';

const SecondaryWater = () => {
  const { selectedCountrySecondary, waterFootprint, water } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const waterFactor = countryFactors[selectedCountrySecondary].waterRange.year.water_factor;
    dispatch(setWaterFootprint(waterFactor));
    dispatch(setWater(waterFactor));

  }, [selectedCountrySecondary, dispatch]);

  const flagIcon = countryFactors[selectedCountrySecondary].flag_icon;

  return (
    <>
      <section className="global-inputs-containers">
        <h5 className="secondary-input-description">Water:</h5>
        <Tabs >
          <TabList aria-label="List of tabs"  style={{width: '100%'}}>
            <Tab className='secondary-tab-water'>{water} kg of CO2/inh {flagIcon}</Tab>
          </TabList>
        </Tabs>
      </section>
    </>
  );
};
export default SecondaryWater;
