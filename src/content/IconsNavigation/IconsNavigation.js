import React, { useEffect } from "react";
import "./_icons-navigation.scss";
import { Link, withRouter } from "react-router-dom";
import {
  Plug,
  PlanePrivate,
  Car,
  Bus
} from "@carbon/react/icons";
import { Restaurant } from "@carbon/icons-react";
import useHouseCalculation from "../HousePage/House_FootprintsButton";
import useConsumptionCalculation from "../ConsumptionPage/Consumption_FootprintsButton";
import useBusCalculation from "../BusRailPage/BusRail_FootprintsButton";
import { ReactComponent as GHCLOGO } from '../../content/WelcomePage/GHC-logo.svg';
import ResultsPage from "../ResultsPage/ResultsPage";


const IconsNavigation = ({ location }) => {
  const { calculateAllHouseFootprint } = useHouseCalculation();
  const { showFootprintResultsFoodDiet } = useConsumptionCalculation();
  const { calculateAllBusRailFootprint } = useBusCalculation();

  useEffect(() => {
    // This code will run after the component mounts
    calculateAllHouseFootprint();
    showFootprintResultsFoodDiet();
    calculateAllBusRailFootprint();

    // Clean-up function
    return () => {
      // This code will run before the component unmounts
      console.log("Component unmounted");
    };
  }, [location.pathname]);

  return (
    <>
      {/* ------------------------------------------------------------------- */}
        <div className="container-nav">
          <div className="logo_inner">
            
            <Link className="logo-name-container" to="/">
              < GHCLOGO className="icons-logo"/>
             
              <h5>GREENHOUSECALCULATOR.COM</h5>
            </Link>

          </div>

          <div className="progress-bar-container fixed-navigation">
         
            <Link
              to="/house"
              className={location.pathname === "/house" ? "active" : ""}
            >
              <Plug
                className={
                  location.pathname === "/house"
                    ? "iconClass active"
                    : "iconClass"
                }
                size="32px"
              />
            </Link>

            <Link
              to="/car"
              className={location.pathname === "/car" ? "active" : ""}
            >
              <Car
                className={
                  location.pathname === "/car"
                    ? "iconClass active"
                    : "iconClass"
                }
                size="32px"
              />
            </Link>

            <Link
              to="/bus-rail"
              className={location.pathname === "/bus-rail" ? "active" : ""}
            >
              <Bus
                className={
                  location.pathname === "/bus-rail"
                    ? "iconClass active"
                    : "iconClass"
                }
                size="32px"
              />
            </Link>

            <Link
              to="/flight"
              className={location.pathname === "/flight" ? "active" : ""}
            >
              <PlanePrivate
                className={
                  location.pathname === "/flight"
                    ? "iconClass active"
                    : "iconClass"
                }
                size="32px"
              />
            </Link>

            <Link
              to="/consumption"
              className={location.pathname === "/consumption" ? "active" : ""}
            >
              <Restaurant
                className={
                  location.pathname === "/consumption"
                    ? "iconClass active"
                    : "iconClass"
                }
                size="32px"
              />
            </Link>

          </div>
          <div className="results-visualizations-container">
          <ResultsPage />

          </div>
        </div>
    </>
  );
};

export default withRouter(IconsNavigation);
