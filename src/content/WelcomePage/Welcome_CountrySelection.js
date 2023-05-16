import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectCountry } from "../../redux/house";
import { selectCountrySecondary } from "../../redux/secondary";
import { selectCountryBusRail } from "../../redux/busrail";
import { selectCountryMotorbike } from "../../redux/motorbike";
import { Select, SelectItem } from '@carbon/react';
import countryFactors from "../../countryFactors";


const SecondaryFoodDrinks = () => {
  const { selectedCountry } = useSelector(
    (state) => state.house
    );

  const countryOptions = Object.keys(countryFactors);

  const dispatch = useDispatch();

  const handleCountryChange = (e) => {
    dispatch(selectCountry(e.target.value));
    dispatch(selectCountrySecondary(e.target.value));
    dispatch(selectCountryBusRail(e.target.value));
    dispatch(selectCountryMotorbike(e.target.value));

  };

  return (
    <>
        <section className="secondary-electricity-container">
          <h5 className="global-input-description">Country:</h5>
         
                <Select 
                  id='country-select'
                  labelText="Select a country to start your calculation"
                  defaultValue={selectedCountry } 
                  onChange={handleCountryChange}
                  className="secondary-block-middle-form2"
                  size='lg'
                >
                {countryOptions.map(country => (
               <SelectItem 
                  key={country} 
                  value={country}  
                  text={country}
                  >
               </SelectItem>
        ))}
      </Select>
         
        </section>
    </>
  );
};

export default SecondaryFoodDrinks;
