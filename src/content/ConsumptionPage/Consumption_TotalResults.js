import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSecondaryFootprint } from "../../redux/secondary";
import countryFactors from "../../countryFactors";
import { withRouter } from "react-router-dom";

const ConsumptionTotalResult = ({ location }) => {
  const dispatch = useDispatch();

  const { foodDiet, foodDietFootprint, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );

  const totalSecondaryFootprint = parseFloat(foodDietFootprint) || 0;
  const foodDietFactor =
    countryFactors[selectedCountrySecondary]?.foodDietRange[foodDiet]
      ?.foodDiet_factor;

  useEffect(() => {
    dispatch(setSecondaryFootprint(totalSecondaryFootprint));
  }, [totalSecondaryFootprint, dispatch]);

  useEffect(() => {
    console.log(`Factor of current food diet (${foodDiet}): ${foodDietFactor}`);
  }, [foodDiet, foodDietFactor]);

  return (
    <>
      <div
        className={
          location.pathname === "/consumption"
            ? "step-inner enter_page"
            : "step-inner"
        }
      >
        <div
          className={
            totalSecondaryFootprint > 0
              ? location.pathname === "/consumption"
                ? "step-main-tit active fill"
                : "step-main-tit active fill"
              : "step-main-tit"
          }
        >
          <h5>Consumption</h5>
          <div
            className={
              totalSecondaryFootprint > 0
                ? location.pathname === "/consumption"
                  ? "after_sbt_cont active fill"
                  : "after_sbt_cont active"
                : "after_sbt_cont"
            }
          >
            {totalSecondaryFootprint > 0 ? (
              <>
                <p>
                  {totalSecondaryFootprint.toFixed(2)}
                  Kg of CO2e
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ConsumptionTotalResult);
