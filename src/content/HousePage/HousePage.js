import React from "react";
import "./_house-page.scss";

import {
  Button,
  Column,
  FormGroup,
  FormLabel,
  Grid,
  Row,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TextInput,
} from "@carbon/react";
import { Link } from "react-router-dom";
import {
  NextOutline,
  PreviousOutline,
  Information32,
} from "@carbon/react/icons";
import IconsNavigation from "../IconsNavigation/IconsNavigation";
import HouseHeader from "./House_Header";
import HouseHeaderResults from "./House_HeaderResults";
import HouseHeaderVisualization from "./House_HeaderVisualization";

import HouseElectricity from "./House_Electricity";
import HouseNaturalGas from "./House_NaturalGas";
// import HouseHeatingOil from './House_HeatingOil'
import HouseCoal from "./House_Coal";
import HouseLPG from "./House_LPG";
import HousePropane from "./House_Propane";
import HouseFootprintsButton from "./House_FootprintsButton";
import HouseIndividualResults from "./House_IndividualResults";
import HouseDataVisualization from "./House_DataVisualization";
import HouseOffsetButton from "./House_OffsetButton";

import HouseTotalResults from "./House_TotalResults";
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
                          <HouseFootprintsButton />
                        </div>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
              </div>
            </div>
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
                        <div className="step-inner enter_page">
                          <div className="step-main-tit active">
                            <h5>Household</h5>
                            <div className="after_sbt_cont">
                              <HouseTotalResults />
                            </div>
                          </div>
                          <HouseIndividualResults />
                        </div>
                        <div className="step-inner">
                          <div className="step-main-tit">
                            <h5>Private Vehicles</h5>
                            <div className="after_sbt_cont">
                              <p></p>
                            </div>
                          </div>
                          <div className="inner_tit">
                            <h5>Car</h5>
                          </div>
                          <div className="inner_tit">
                            <h5>Motorbike</h5>
                          </div>
                        </div>
                        <div className="step-inner">
                          <div className="step-main-tit">
                            <h5>Public Transport</h5>
                            <div className="after_sbt_cont">
                              <p></p>
                            </div>
                          </div>
                          <div className="inner_tit">
                            <h5>Bus</h5>
                          </div>
                          <div className="inner_tit">
                            <h5>Train</h5>
                          </div>
                          <div className="inner_tit">
                            <h5>Taxi</h5>
                          </div>
                        </div>
                        <div className="step-inner">
                          <div className="step-main-tit">
                            <h5>Flight</h5>
                            <div className="after_sbt_cont">
                              <p></p>
                            </div>
                          </div>
                        </div>
                        <div className="step-inner">
                          <div className="step-main-tit">
                            <h5>Consumption</h5>
                            <div className="after_sbt_cont">
                              <p></p>
                            </div>
                          </div>
                        </div>
                        <div className="step-inner">
                          <div className="step-main-tit">
                            <h5>Results</h5>
                            <div className="after_sbt_cont">
                              <p>x.xxx t</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="call_to_action">
                      <Button className="wht-btn">
                        Send results to your email
                      </Button>
                      <Button className="primary_btn">
                        Offset your Carbon
                      </Button>
                    </div>
                  </div>
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

export default HousePage;
