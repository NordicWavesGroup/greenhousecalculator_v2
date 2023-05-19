import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setBusFootprint,
  setShowBusResult,
  setCoachFootprint,
  setShowCoachResult,
  setLocalTrainFootprint,
  setShowLocalTrainResult,
  setLongTrainFootprint,
  setShowLongTrainResult,
  setTramFootprint,
  setShowTramResult,
  setSubwayFootprint,
  setShowSubwayResult,
  setTaxiFootprint,
  setShowTaxiResult,
} from "../../redux/busrail";

import countryFactors from "../../countryFactors";

import { Button } from "@carbon/react";
import { Calculator } from "@carbon/react/icons";

const useBusCalculation = () => {
  const {
    numPeople,
    selectedCountryBusRail,

    bus,
    unitBus,

    coach,
    unitCoach,

    localTrain,
    unitLocalTrain,

    longTrain,
    unitLongTrain,

    tram,
    unitTram,

    subway,
    unitSubway,

    taxi,
    unitTaxi,
  } = useSelector((state) => state.busrail);
  const dispatch = useDispatch();

  const showFootprintResultsBus = () => {
    if (bus > 0) {
      dispatch(setShowBusResult(true));
    }
  };
  const showFootprintResultsCoach = () => {
    if (coach > 0) {
      dispatch(setShowCoachResult(true));
    }
  };
  const showFootprintResultsLocalTrain = () => {
    if (localTrain > 0) {
      dispatch(setShowLocalTrainResult(true));
    }
  };
  const showFootprintResultsLongTrain = () => {
    if (longTrain > 0) {
      dispatch(setShowLongTrainResult(true));
    }
  };
  const showFootprintResultsTram = () => {
    if (tram > 0) {
      dispatch(setShowTramResult(true));
    }
  };
  const showFootprintResultsSubway = () => {
    if (subway > 0) {
      dispatch(setShowSubwayResult(true));
    }
  };
  const showFootprintResultsTaxi = () => {
    if (taxi > 0) {
      dispatch(setShowTaxiResult(true));
    }
  };

  const calculateAllBusRailFootprint = () => {
    const calculateBusFootprint = () => {
      if (isNaN(parseFloat(bus))) {
        dispatch(setBusFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(bus) / parseFloat(numPeople)) *
          countryFactors[selectedCountryBusRail].busUnits[unitBus].bus_factor *
          0.001;
        dispatch(setBusFootprint(total.toFixed(2)));
      }
      showFootprintResultsBus();
    };

    const calculateCoachFootprint = () => {
      if (isNaN(parseFloat(coach))) {
        dispatch(setCoachFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(coach) / parseFloat(numPeople)) *
          countryFactors[selectedCountryBusRail].coachUnits[unitCoach]
            .coach_factor *
          0.001;
        dispatch(setCoachFootprint(total.toFixed(2)));
      }
      showFootprintResultsCoach();
    };

    const calculateLocalTrainFootprint = () => {
      if (isNaN(parseFloat(localTrain))) {
        dispatch(setLocalTrainFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(localTrain) / parseFloat(numPeople)) *
          countryFactors[selectedCountryBusRail].localTrainUnits[unitLocalTrain]
            .localTrain_factor *
          0.001;
        dispatch(setLocalTrainFootprint(total.toFixed(2)));
      }
      showFootprintResultsLocalTrain();
    };

    const calculateLongTrainFootprint = () => {
      if (isNaN(parseFloat(longTrain))) {
        dispatch(setLongTrainFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(longTrain) / parseFloat(numPeople)) *
          countryFactors[selectedCountryBusRail].longTrainUnits[unitLongTrain]
            .longTrain_factor *
          0.001;
        dispatch(setLongTrainFootprint(total.toFixed(2)));
      }
      showFootprintResultsLongTrain();
    };

    const calculateTramFootprint = () => {
      if (isNaN(parseFloat(tram))) {
        dispatch(setTramFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(tram) / parseFloat(numPeople)) *
          countryFactors[selectedCountryBusRail].tramUnits[unitTram]
            .tram_factor *
          0.001;
        dispatch(setTramFootprint(total.toFixed(2)));
      }
      showFootprintResultsTram();
    };

    const calculateSubwayFootprint = () => {
      if (isNaN(parseFloat(subway))) {
        dispatch(setSubwayFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(subway) / parseFloat(numPeople)) *
          countryFactors[selectedCountryBusRail].subwayUnits[unitSubway]
            .subway_factor *
          0.001;
        dispatch(setSubwayFootprint(total.toFixed(2)));
      }
      showFootprintResultsSubway();
    };

    const calculateTaxiFootprint = () => {
      if (isNaN(parseFloat(taxi))) {
        dispatch(setTaxiFootprint("Please enter a valid number."));
      } else {
        let total =
          (parseFloat(taxi) / parseFloat(numPeople)) *
          countryFactors[selectedCountryBusRail].taxiUnits[unitTaxi]
            .taxi_factor *
          1;
        dispatch(setTaxiFootprint(total.toFixed(2)));
      }
      showFootprintResultsTaxi();
    };
    calculateBusFootprint();
    calculateCoachFootprint();
    calculateLocalTrainFootprint();
    calculateLongTrainFootprint();
    calculateTramFootprint();
    calculateSubwayFootprint();
    calculateTaxiFootprint();
  };
  return { calculateAllBusRailFootprint };
};

export default useBusCalculation;
