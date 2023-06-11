import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setElectricityFootprint,
  setShowElectricityResult,
} from "../../redux/house";

import countryFactors from "../../countryFactors";

const useHouseCalculation = () => {
  const {
    numPeople,
    selectedCountry,
    electricity,
    userElectricityFactor,

  } = useSelector((state) => state.house);
  const dispatch = useDispatch();

  const showFootprintResultsElectricity = () => {
    if (electricity > 0) {
      dispatch(setShowElectricityResult(true));
    }
  };

  const calculateAllHouseFootprint = () => {
    const calculateElectricityFootprint = () => {
      if (isNaN(parseFloat(electricity))) {
        dispatch(setElectricityFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(electricity) / parseFloat(numPeople)) *
          (userElectricityFactor ||
            countryFactors[selectedCountry].electricity_factor) *
          1;

        dispatch(setElectricityFootprint(total.toFixed(2)));
      }
      showFootprintResultsElectricity();
    };

    calculateElectricityFootprint();

  };
  return { calculateAllHouseFootprint };
};

export default useHouseCalculation;
