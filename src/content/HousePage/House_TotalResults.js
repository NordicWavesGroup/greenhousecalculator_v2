import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHouseFootprint } from "../../redux/house";

const HouseTotalResult = () => {
  const dispatch = useDispatch();

  const {
    electricityFootprint,
    naturalGasFootprint,
    heatingOilFootprint,
    coalFootprint,
    LPGFootprint,
    propaneFootprint,
    woodenPelletsFootprint,
  } = useSelector((state) => state.house);
  const totalHouseFootprint =
    parseFloat(electricityFootprint) +
      parseFloat(naturalGasFootprint) +
      parseFloat(heatingOilFootprint) +
      parseFloat(coalFootprint) +
      parseFloat(LPGFootprint) +
      parseFloat(propaneFootprint) +
      parseFloat(woodenPelletsFootprint) || 0;

  useEffect(() => {
    dispatch(setHouseFootprint(totalHouseFootprint));
  }, [totalHouseFootprint, dispatch]);

  return (
    <>
      <p>
        {totalHouseFootprint ? (
          <>{totalHouseFootprint.toFixed(2)} Kg of CO2e</>
        ) : null}
      </p>
    </>
  );
};

export default HouseTotalResult;
