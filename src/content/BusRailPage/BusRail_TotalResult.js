import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBusRailFootprint } from "../../redux/busrail";

const BusRailTotalResult = () => {
  const dispatch = useDispatch();
  const {
    busFootprint,
    coachFootprint,
    localTrainFootprint,
    longTrainFootprint,
    tramFootprint,
    subwayFootprint,
    taxiFootprint,
  } = useSelector((state) => state.busrail);
  const totalBusRailFootprint =
    parseFloat(busFootprint) +
      parseFloat(coachFootprint) +
      parseFloat(localTrainFootprint) +
      parseFloat(longTrainFootprint) +
      parseFloat(tramFootprint) +
      parseFloat(subwayFootprint) +
      parseFloat(taxiFootprint) || 0;

  useEffect(() => {
    dispatch(setBusRailFootprint(totalBusRailFootprint));
  }, [totalBusRailFootprint, dispatch]);
  return totalBusRailFootprint > 0 ? (
    <>
      <p>
        {totalBusRailFootprint.toFixed(2)}
        Kg of CO2e
      </p>
    </>
  ) : null;
};
export default BusRailTotalResult;
