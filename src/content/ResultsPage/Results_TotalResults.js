import React from "react";
import { useSelector } from "react-redux";

const ResultsTotalResult = () => {
  const { totalSelectedFootprint } = useSelector(
    (state) => state.totalfootprint
  );
  console.log("totalSelectedFootprint", totalSelectedFootprint);
  const totalFootprintToOffset = parseFloat(totalSelectedFootprint) || 0;

  return (
    <>
      <p>
        <span style={{ marginLeft: "5px", marginRight: "5px" }}>
          {totalFootprintToOffset.toFixed(2)}
        </span>{" "}
        Kg of CO2e
      </p>
    </>
  );
};

export default ResultsTotalResult;
