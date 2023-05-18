import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setFoodDietFootprint,
  setShowFoodDietResult,
  setWaterFootprint,
  setShowWaterResult,
} from "../../redux/secondary";
import countryFactors from "../../countryFactors";

const useConsumptionCalculation = () => {
  const { selectedCountrySecondary, foodDiet, waterFootprint } = useSelector(
    (state) => state.secondary
  );
  const dispatch = useDispatch();

  const showFootprintResultsFoodDiet = () => {
    if (isNaN(parseFloat(waterFootprint))) {
      dispatch(setFoodDietFootprint("Error, check your input"));
    } else {
      let total =
        parseFloat(waterFootprint) + countryFactors[selectedCountrySecondary]
          ? countryFactors[selectedCountrySecondary].foodDietRange
            ? countryFactors[selectedCountrySecondary].foodDietRange[foodDiet]
              ? countryFactors[selectedCountrySecondary].foodDietRange[foodDiet]
                  .foodDiet_factor
                ? countryFactors[selectedCountrySecondary].foodDietRange[
                    foodDiet
                  ].foodDiet_factor
                : 0
              : 0
            : 0
          : 0;
      console.log("=========total==================", total);
      dispatch(setWaterFootprint(waterFootprint));
      dispatch(setFoodDietFootprint(total.toFixed(2)));
      dispatch(setShowWaterResult(true));
      dispatch(setShowFoodDietResult(true));
    }
  };

  return { showFootprintResultsFoodDiet };
};

export default useConsumptionCalculation;
