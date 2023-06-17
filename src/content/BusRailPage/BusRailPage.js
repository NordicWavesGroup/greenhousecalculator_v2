import React from "react";
import "./_bus-rail-page.scss";
import IconsNavigation from "../IconsNavigation/IconsNavigation";
import MySwipeableTabs from "../BusRailPage/MySwipeableTabs";
import Waves from "../Waves";
import ResultTotalResults from "../../content/ResultsPage/Results_TotalResults"

const BusRailPage = () => {

  return (
    <>
        <div className="global-total-result-fixed">
      <ResultTotalResults />
</div>
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
          </div>
        </div>
      </div>
      <Waves />
    </>
  );
};
export default BusRailPage;
