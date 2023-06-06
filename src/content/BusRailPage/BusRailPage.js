import React from "react";
import "./_bus-rail-page.scss";
import IconsNavigation from "../IconsNavigation/IconsNavigation";
import MySwipeableTabs from "../BusRailPage/MySwipeableTabs";
import ResultsPage from "./../ResultsPage/ResultsPage";
import Waves from "../Waves";
const BusRailPage = () => {

  return (
    <>
      <IconsNavigation />
      <div className="household_sec">
        <div className="container">
          <div className="household_row">
            <div className="housHold_col">
              <div className="form_left_cont">
                <div className="tabs_head">
                  <MySwipeableTabs />
                </div>
              </div>
            </div>
            <ResultsPage />
          </div>
        </div>
      </div>
      <Waves />
    </>
  );
};
export default BusRailPage;
