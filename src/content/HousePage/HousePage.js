import React from "react";
import "./_house-page.scss";

import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@carbon/react";

import IconsNavigation from "../IconsNavigation/IconsNavigation";

import HouseElectricity from "./House_Electricity";
import HouseNaturalGas from "./House_NaturalGas";
import HouseCoal from "./House_Coal";
import HouseLPG from "./House_LPG";
import HousePropane from "./House_Propane";
import ResultTotalResults from "../../content/ResultsPage/Results_TotalResults"


import ResultsPage from "./../ResultsPage/ResultsPage";

import Waves from "../Waves";
import { useState } from "react";

const HousePage = () => {

  const [houseMenu, setHousemenu] = useState({
    HouseElectricUsage: "",
    HouseElectricCustom: "",
    HouseElectricFactor: "",

    HouseHeatingUsage: "",
    //HouseElectricCustom: "",
    // HouseElectricFactor: "",
  });
  const setUsage = (value, name) => {
    let updatedObject = { ...houseMenu, [name]: value };
    setHousemenu(updatedObject);
  };
  const handleChange = (e) => {
    let updatedObject = { ...houseMenu, [e.target.name]: e.target.value };
    setHousemenu(updatedObject);
  };
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
                  <Tabs
                    selected={1}
                    tabContentClassName="custom-tab-content"
                    tabContentStyle={{ padding: "20px" }}
                  >
                    <TabList>
                      <Tab id="tab1" label="ELECTRICITY">
                        ELECTRICITY
                      </Tab>
                      <Tab id="tab2" label="HEATING">
                        HEATING
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <div className="household_form_cont">
                          <p>
                            Choose how much electricity you used in xx Or write
                            a custom usage.
                          </p>
                      

                          <div className="separator_cls"></div>

                          <HouseElectricity />
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="household_form_cont">
                          <p>
                            Please fill in type of heating you use and fill the
                            amount of heating fuel you used in xx.
                          </p>
                        

                          <div className="separator_cls"></div>
                          <div className="household-form">
                            <HouseNaturalGas />
                            <HouseCoal />
                            <HouseLPG />
                            <HousePropane />
                          </div>
                        </div>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
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

export default HousePage;
