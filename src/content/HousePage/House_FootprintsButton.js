import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setElectricityFootprint,
  setShowElectricityResult,
  setNaturalGasFootprint,
  setShowNaturalGasResult,
  setHeatingOilFootprint,
  setShowHeatingOilResult,
  setCoalFootprint,
  setShowCoalResult,
  setLPGFootprint,
  setShowLPGResult,
  setPropaneFootprint,
  setShowPropaneResult,
  setWoodenPelletsFootprint,
  setShowWoodenPelletsResult,
} from "../../redux/house";

import countryFactors from "../../countryFactors";

const useHouseCalculation = () => {
  const {
    numPeople,
    selectedCountry,

    electricity,
    userElectricityFactor,

    naturalGas,
    unitNaturalGas,

    heatingOil,
    unitHeatingOil,

    coal,
    unitCoal,

    LPG,
    unitLPG,

    propane,
    unitPropane,

    woodenPellets,
    unitWoodenPellets,
  } = useSelector((state) => state.house);
  const dispatch = useDispatch();

  const showFootprintResultsElectricity = () => {
    if (electricity > 0) {
      dispatch(setShowElectricityResult(true));
    }
  };
  const showFootprintResultsNaturalGas = () => {
    if (naturalGas > 0) {
      dispatch(setShowNaturalGasResult(true));
    }
  };
  const showFootprintResultsHeatingOil = () => {
    if (heatingOil > 0) {
      dispatch(setShowHeatingOilResult(true));
    }
  };
  const showFootprintResultsCoal = () => {
    if (coal > 0) {
      dispatch(setShowCoalResult(true));
    }
  };
  const showFootprintResultsLPG = () => {
    if (LPG > 0) {
      dispatch(setShowLPGResult(true));
    }
  };
  const showFootprintResultsPropane = () => {
    if (propane > 0) {
      dispatch(setShowPropaneResult(true));
    }
  };
  const showFootprintResultsWoodenPellets = () => {
    if (woodenPellets > 0) {
      dispatch(setShowWoodenPelletsResult(true));
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
    const calculateNaturalGasFootprint = () => {
      if (isNaN(parseFloat(naturalGas))) {
        dispatch(setNaturalGasFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(naturalGas) / parseFloat(numPeople)) *
          countryFactors[selectedCountry].naturalGasUnits[unitNaturalGas]
            .naturalGas_factor *
          1;
        dispatch(setNaturalGasFootprint(total.toFixed(2)));
      }
      showFootprintResultsNaturalGas();
    };
    const calculateHeatingOilFootprint = () => {
      if (isNaN(parseFloat(heatingOil))) {
        dispatch(setHeatingOilFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(heatingOil) / parseFloat(numPeople)) *
          countryFactors[selectedCountry].heatingOilUnits[unitHeatingOil]
            .heatingOil_factor *
          1;
        dispatch(setHeatingOilFootprint(total.toFixed(2)));
      }
      showFootprintResultsHeatingOil();
    };
    const calculateCoalFootprint = () => {
      if (isNaN(parseFloat(coal))) {
        dispatch(setCoalFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(coal) / parseFloat(numPeople)) *
          countryFactors[selectedCountry].coalUnits[unitCoal].coal_factor *
          1;
        dispatch(setCoalFootprint(total.toFixed(2)));
      }
      showFootprintResultsCoal();
    };
    const calculateLPGFootprint = () => {
      if (isNaN(parseFloat(LPG))) {
        dispatch(setLPGFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(LPG) / parseFloat(numPeople)) *
          countryFactors[selectedCountry].LPGUnits[unitLPG].LPG_factor *
          1;
        dispatch(setLPGFootprint(total.toFixed(2)));
      }
      showFootprintResultsLPG();
    };
    const calculatePropaneFootprint = () => {
      if (isNaN(parseFloat(propane))) {
        dispatch(setPropaneFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(propane) / parseFloat(numPeople)) *
          countryFactors[selectedCountry].propaneUnits[unitPropane]
            .propane_factor *
          1;
        dispatch(setPropaneFootprint(total.toFixed(2)));
      }
      showFootprintResultsPropane();
    };
    const calculateWoodenPelletsFootprint = () => {
      if (isNaN(parseFloat(woodenPellets))) {
        dispatch(setWoodenPelletsFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(woodenPellets) / parseFloat(numPeople)) *
          countryFactors[selectedCountry].woodenPelletsUnits[unitWoodenPellets]
            .woodenPellets_factor *
          1;
        dispatch(setWoodenPelletsFootprint(total.toFixed(2)));
      }
      showFootprintResultsWoodenPellets();
    };
    calculateElectricityFootprint();
    calculateNaturalGasFootprint();
    calculateHeatingOilFootprint();
    calculateCoalFootprint();
    calculateLPGFootprint();
    calculatePropaneFootprint();
    calculateWoodenPelletsFootprint();
  };
  return { calculateAllHouseFootprint };
};

export default useHouseCalculation;
