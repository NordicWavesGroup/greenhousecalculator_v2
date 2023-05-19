import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  setShowBusResult,
  resetBusFootprint,
  setShowCoachResult,
  resetCoachFootprint,
  setShowLocalTrainResult,
  resetLocalTrainFootprint,
  setShowLongTrainResult,
  resetLongTrainFootprint,
  setShowTramResult,
  resetTramFootprint,
  setShowSubwayResult,
  resetSubwayFootprint,
  setShowTaxiResult,
  resetTaxiFootprint,
} from "../../redux/busrail";

import { Button } from "@carbon/react";
import { TrashCan } from "@carbon/react/icons";

const BusRailResults = ({ location }) => {
  const {
    bus,
    unitBus,
    busFootprint,
    showBusResult,

    coach,
    unitCoach,
    coachFootprint,
    showCoachResult,

    localTrain,
    unitLocalTrain,
    localTrainFootprint,
    showLocalTrainResult,

    longTrain,
    unitLongTrain,
    longTrainFootprint,
    showLongTrainResult,

    tram,
    unitTram,
    tramFootprint,
    showTramResult,

    subway,
    unitSubway,
    subwayFootprint,
    showSubwayResult,

    taxi,
    unitTaxi,
    taxiFootprint,
    showTaxiResult,
  } = useSelector((state) => state.busrail);
  const dispatch = useDispatch();

  const resetFootprintBus = () => {
    dispatch(resetBusFootprint());
    dispatch(setShowBusResult(false));
  };
  const resetFootprintCoach = () => {
    dispatch(resetCoachFootprint());
    dispatch(setShowCoachResult(false));
  };
  const resetFootprintLocalTrain = () => {
    dispatch(resetLocalTrainFootprint());
    dispatch(setShowLocalTrainResult(false));
  };
  const resetFootprintLongTrain = () => {
    dispatch(resetLongTrainFootprint());
    dispatch(setShowLongTrainResult(false));
  };
  const resetFootprintTram = () => {
    dispatch(resetTramFootprint());
    dispatch(setShowTramResult(false));
  };
  const resetFootprintSubway = () => {
    dispatch(resetSubwayFootprint());
    dispatch(setShowSubwayResult(false));
  };
  const resetFootprintTaxi = () => {
    dispatch(resetTaxiFootprint());
    dispatch(setShowTaxiResult(false));
  };

  return (
    <>
      <div
        className={
          location.pathname === "/bus-rail" ||
          location.pathname === "/flight" ||
          location.pathname === "/consumption"
            ? "inner_tit active"
            : "inner_tit"
        }
      >
        <h5>Bus</h5>
        <div className="after_sbt_cont active fill">
          <p>
            {parseFloat(busFootprint) + parseFloat(coachFootprint)} Kg for{" "}
            {bus + coach} {unitBus}
          </p>
        </div>
      </div>

      <div
        className={
          location.pathname === "/bus-rail" ||
          location.pathname === "/flight" ||
          location.pathname === "/consumption"
            ? "inner_tit active"
            : "inner_tit"
        }
      >
        <h5>Train</h5>
        <div className="after_sbt_cont">
          <p>
            {parseFloat(localTrainFootprint) + parseFloat(longTrainFootprint)}{" "}
            Kg for {localTrain + longTrain} {unitLocalTrain}
          </p>
        </div>
      </div>

      <div
        className={
          location.pathname === "/bus-rail" ||
          location.pathname === "/flight" ||
          location.pathname === "/consumption"
            ? "inner_tit active"
            : "inner_tit"
        }
      >
        <h5>Taxi</h5>
        <div className="after_sbt_cont">
          <p>
            {" "}
            {parseFloat(tramFootprint) +
              parseFloat(subwayFootprint) +
              parseFloat(taxiFootprint)}{" "}
            Kg for {tram + subway + taxi} {unitTram}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default withRouter(BusRailResults);
