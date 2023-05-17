import React from "react";
import "./_icons-navigation.scss";
import { Link, withRouter } from "react-router-dom";
import {
  Home,
  PlanePrivate,
  Car,
  Scooter,
  Bus,
  Add,
  ChartLineData,
  Earth,
} from "@carbon/react/icons";
import { Restaurant } from "@carbon/icons-react";

/* -------------------------------
  Imported the withRouter Higher-Order Component (HOC) from the react-router-dom library to get access to the current location object.

  Wrapped the IconsNavigation component with the withRouter HOC to gain access to the location prop.

  Added a class of 'active' to the Link element surrounding each icon when the current pathname matches the route of the icon.

  Used the class of 'active' to change the color of the icon to blue when the icon's corresponding route is active.

  Overall, these changes allow the icons to visually indicate which route the user is currently on and provides a clear way to navigate between different routes using icons.
  
  ------------------------------------ */

const IconsNavigation = ({ location }) => {
  return (
    <>
      {/* ------------------------------------------------------------------- */}
      <div className="top-header-sec">
        <div className="container">
          <div className="logo_inner">
            <Link to="/">
              <img src="/logo.png" />
              <h5>GREENHOUSECALCULATOR.COM</h5>
            </Link>
          </div>
          <div className="progress-bar-container fixed-navigation">
            {/* <Link to="/welcome" className={location.pathname === '/welcome' ? 'active' : ''}>
                <Earth
                  className={location.pathname === '/welcome' ? 'iconClass active' : 'iconClass'}
                  size='32px'
                />
              </Link> */}
            <Link
              to="/house"
              className={location.pathname === "/house" ? "active" : ""}
            >
              <Home
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

            {/* <Link to="/secondary" className={location.pathname === '/secondary' ? 'active' : ''}>
                <Add
                  className={location.pathname === '/secondary' ? 'iconClass active' : 'iconClass'}
                  size='32px'
                />
              </Link> */}
            {/* <Link to="/results" className={location.pathname === '/results' ? 'active' : ''}>
                <ChartLineData
                  className={location.pathname === '/results' ? 'iconClass active' : 'iconClass'}
                  size='32px'
                />
              </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(IconsNavigation);
