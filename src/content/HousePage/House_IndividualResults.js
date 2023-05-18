import React from "react";
import { useSelector } from "react-redux";
import HouseTotalResults from "./House_TotalResults";
import { withRouter } from "react-router-dom";

const HouseElectricity = ({ location }) => {
  const {
    electricity,
    electricityFootprint,
    showElectricityResult,

    naturalGasFootprint,

    coalFootprint,

    LPGFootprint,

    propaneFootprint,
  } = useSelector((state) => state.house);

  const totalHouseFootprint =
    parseFloat(electricityFootprint) +
      parseFloat(naturalGasFootprint) +
      parseFloat(coalFootprint) +
      parseFloat(LPGFootprint) +
      parseFloat(propaneFootprint) || 0;
  return (
    <>
      <div
        className={
          location.pathname === "/house" ||
          location.pathname === "/car" ||
          location.pathname === "/bus-rail" ||
          location.pathname === "/flight" ||
          location.pathname === "/consumption"
            ? "step-inner enter_page"
            : "step-inner"
        }
      >
        <div
          className={
            totalHouseFootprint > 0
              ? "step-main-tit active fill"
              : "step-main-tit active"
          }
        >
          <h5>Household</h5>
          <div className="after_sbt_cont">
            <HouseTotalResults />
          </div>
        </div>
        <div
          className={
            showElectricityResult && electricity > 0
              ? "inner_tit active fill"
              : "inner_tit active"
          }
        >
          <h5>
            Electricity
            {showElectricityResult && electricity > 0 && (
              <div className="after_sbt_cont">
                <p>{electricityFootprint} Kg of CO2e</p>
              </div>
            )}
          </h5>
        </div>
        <div
          className={
            parseFloat(naturalGasFootprint) +
              parseFloat(coalFootprint) +
              parseFloat(LPGFootprint) +
              +parseFloat(propaneFootprint) >
            0
              ? "inner_tit active fill"
              : "inner_tit active"
          }
        >
          <h5>Heating</h5>
          <div className="after_sbt_cont">
            {parseFloat(naturalGasFootprint) +
              parseFloat(coalFootprint) +
              parseFloat(LPGFootprint) +
              +parseFloat(propaneFootprint) >
            0 ? (
              <>
                <p>
                  {parseFloat(naturalGasFootprint) +
                    parseFloat(coalFootprint) +
                    parseFloat(LPGFootprint) +
                    +parseFloat(propaneFootprint)}
                  Kg of CO2e{" "}
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(HouseElectricity);
