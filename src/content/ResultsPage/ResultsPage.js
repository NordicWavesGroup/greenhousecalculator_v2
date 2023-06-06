import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./_results-page.scss";
import "@carbon/charts/styles.css";

import ResultTotalResults from "./Results_TotalResults";
import { Button } from "@carbon/react";
import { withRouter } from "react-router-dom";

import { setTotalSelectedFootprint } from "../../redux/totalfootprint";

import HouseIndividualResults from "./../HousePage/House_IndividualResults";
import BusIndividualResults from "./../BusRailPage/BusRail_IndividualResults";
import FlightTotalResult from "./../FlightPage/Flight_TotalResults";
import ConsumptionTotalResult from "./../ConsumptionPage/Consumption_TotalResults";
import BusTotalResult from "./../BusRailPage/BusRail_TotalResult";

const ResultsPage = ({ location }) => {
  const dispatch = useDispatch();
  const { houseFootprint } = useSelector((state) => state.house);
  const { flights } = useSelector((state) => state.flights);
  const { motorbikeFootprint } = useSelector((state) => state.motorbike);
  const { carFootprint } = useSelector((state) => state.car);
  const { busrailFootprint } = useSelector((state) => state.busrail);
  const { secondaryFootprint } = useSelector((state) => state.secondary);

  const totalHouseFootprint = parseFloat(houseFootprint) || 0;
  ///mulitple flights total
  let totalFlightFootprint = 0;
  for (let index = 0; index < flights.length; index++) {
    if (parseFloat(flights[index].flightFootprint) > 0) {
      totalFlightFootprint += parseFloat(flights[index].flightFootprint);
    }
  }
  //const totalFlightFootprint = parseFloat(flightFootprint) || 0;
  const totalCarFootprint = parseFloat(carFootprint) || 0;
  const totalMotorbikeFootprint = parseFloat(motorbikeFootprint) || 0;
  const totalBusRailFootprint = parseFloat(busrailFootprint) || 0;
  const totalSecondaryFootprint = parseFloat(secondaryFootprint) || 0;

  const totalSelectedFootprint = (
    totalHouseFootprint +
    totalFlightFootprint +
    totalCarFootprint +
    totalMotorbikeFootprint +
    totalBusRailFootprint +
    totalSecondaryFootprint
  ).toFixed(4);

  useEffect(() => {
    dispatch(setTotalSelectedFootprint(totalSelectedFootprint));
  }, [totalSelectedFootprint, dispatch]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const resultMenu = document.querySelector(".result_menu");
      if (resultMenu && !resultMenu.contains(event.target)) {
        removeClass();
      }
    };
  
    document.addEventListener("click", handleOutsideClick);
  
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const addClass = () => {
    document.getElementsByTagName("body")[0].setAttribute("class", "open_menu");
  };
  const removeClass = () => {
    document.getElementsByTagName("body")[0].classList.remove("open_menu");
  };
  const handleButtonClick = () => {
    window.location.href = "/welcome";
  };
  return (
    <>
      <div className="housHold_col">
        <div className="mobile_sidebar">
          
          <div className="result_mobile">
            <span onClick={addClass} className="result_menu">
              Results
            </span>
          </div>


          <div className="household-right-sidebar">
            <h3>Summary</h3>
            <div className="step-cont">
              <div className="inner-step-list">
                <div className="inner_step_cont">
                  <HouseIndividualResults />
                  <div
                    className={
                      location.pathname === "/car" ||
                      location.pathname === "/bus-rail" ||
                      location.pathname === "/flight" ||
                      location.pathname === "/consumption"
                        ? "step-inner enter_page"
                        : "step-inner"
                    }
                  >
                    <div className="step-main-tit">
                      <h5>Private Vehicles</h5>
                      <div
                        className={
                          location.pathname === "/car" ||
                          location.pathname === "/bus-rail" ||
                          location.pathname === "/flight" ||
                          location.pathname === "/consumption"
                            ? "after_sbt_cont active"
                            : "after_sbt_cont"
                        }
                      >
                      </div>
                    </div>
                    <div
                      className={
                        location.pathname === "/car" ||
                        location.pathname === "/bus-rail" ||
                        location.pathname === "/flight" ||
                        location.pathname === "/consumption"
                          ? "inner_tit active"
                          : "inner_tit"
                      }
                    >
                      <h5>Car</h5>
                    </div>
                    <div
                      className={
                        location.pathname === "/car" ||
                        location.pathname === "/bus-rail" ||
                        location.pathname === "/flight" ||
                        location.pathname === "/consumption"
                          ? "inner_tit active"
                          : "inner_tit"
                      }
                    >
                      <h5>Motorbike</h5>
                    </div>
                  </div>
                  <div
                    className={
                      location.pathname === "/bus-rail" ||
                      location.pathname === "/flight" ||
                      location.pathname === "/consumption"
                        ? "step-inner enter_page"
                        : "step-inner"
                    }
                  >
                    <div className="step-main-tit">
                      <h5>Public Transport</h5>
                      <div
                        className={
                          location.pathname === "/bus-rail" ||
                          location.pathname === "/flight" ||
                          location.pathname === "/consumption"
                            ? "after_sbt_cont active"
                            : "after_sbt_cont"
                        }
                      >
                        <BusTotalResult />
                      </div>
                    </div>
                    <BusIndividualResults />
                  </div>
                  <div
                    className={
                      location.pathname === "/flight" ||
                      location.pathname === "/consumption"
                        ? "step-inner enter_page"
                        : "step-inner"
                    }
                  >
                    <div
                      className={
                        location.pathname === "/flight" ||
                        location.pathname === "/consumption"
                          ? "step-main-tit active"
                          : "step-main-tit"
                      }
                    >
                      <h5>Flight</h5>
                      <div className="after_sbt_cont">
                        <FlightTotalResult />
                      </div>
                    </div>
                  </div>
                  <ConsumptionTotalResult />
                  <div className="step-inner">
                    <div className="step-main-tit">
                      <h5>Results</h5>
                      <div className="after_sbt_cont">
                        <ResultTotalResults />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="call_to_action">
                <Button onClick={handleButtonClick} className="wht-btn">
                  Send results to your email
                </Button>
                <Button className="primary_btn">Offset your Carbon</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ResultsPage);
