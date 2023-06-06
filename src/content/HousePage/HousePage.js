import React from "react";
import "./_house-page.scss";

import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@carbon/react";
import { Link } from "react-router-dom";

import IconsNavigation from "../IconsNavigation/IconsNavigation";
import IconsNavigationBottom from "../IconsNavigation/IconsNavigationBottom";


import HouseElectricity from "./House_Electricity";
import HouseNaturalGas from "./House_NaturalGas";
// import HouseHeatingOil from './House_HeatingOil'
import HouseCoal from "./House_Coal";
import HouseLPG from "./House_LPG";
import HousePropane from "./House_Propane";

import ResultsPage from "./../ResultsPage/ResultsPage";
import { Information } from "@carbon/icons-react";

import Waves from "../Waves";
import { useState } from "react";

const HousePage = () => {
  const addClass = () => {
    document.getElementsByTagName("body")[0].setAttribute("class", "open_menu");
  };
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
                          <div className="status_cls">
                            <Link
                              onClick={() =>
                                setUsage("Below", "HouseElectricUsage")
                              }
                              className={
                                houseMenu.HouseElectricUsage == "Below"
                                  ? "active"
                                  : ""
                              }
                            >
                              Below <Information />
                            </Link>
                            <Link
                              onClick={() =>
                                setUsage("Average", "HouseElectricUsage")
                              }
                              className={
                                houseMenu.HouseElectricUsage == "Average"
                                  ? "active"
                                  : ""
                              }
                            >
                              Average <Information />
                            </Link>
                            <Link
                              onClick={() =>
                                setUsage("Above", "HouseElectricUsage")
                              }
                              className={
                                houseMenu.HouseElectricUsage == "Above"
                                  ? "active"
                                  : ""
                              }
                            >
                              Above <Information />
                            </Link>
                          </div>

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
                          <div className="status_cls">
                            <Link
                              onClick={() =>
                                setUsage("Below", "HouseHeatingUsage")
                              }
                              className={
                                houseMenu.HouseHeatingUsage == "Below"
                                  ? "active"
                                  : ""
                              }
                            >
                              Below <Information />
                            </Link>
                            <Link
                              onClick={() =>
                                setUsage("Average", "HouseHeatingUsage")
                              }
                              className={
                                houseMenu.HouseHeatingUsage == "Average"
                                  ? "active"
                                  : ""
                              }
                            >
                              Average <Information />
                            </Link>
                            <Link
                              onClick={() =>
                                setUsage("Above", "HouseHeatingUsage")
                              }
                              className={
                                houseMenu.HouseHeatingUsage == "Above"
                                  ? "active"
                                  : ""
                              }
                            >
                              Above <Information />
                            </Link>
                          </div>

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
