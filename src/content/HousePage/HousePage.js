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
import { NextOutline, PreviousOutline } from "@carbon/react/icons";

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

import Waves from "../Waves";
import { useState } from "react";

const HousePage = () => {
  const addClass = () => {
    document.getElementsByTagName("body")[0].setAttribute("class", "open_menu");
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
                      <Tab id="tab1" label="Tab 1">
                        ELECTRICITY
                      </Tab>
                      <Tab id="tab2" label="Tab 2">
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
                            <Link to="">Below</Link>
                            <Link to="" className="active">
                              Average
                            </Link>
                            <Link to="">Above</Link>
                          </div>

                          <div className="separator_cls"></div>
                          <div className="household-form">
                            <FormGroup>
                              <div className="input-group">
                                <TextInput
                                  id="electricity-input"
                                  labelText="Custom"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                                <TextInput
                                  id="electricity-factor"
                                  labelText="at a factor of:"
                                  type="number"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                              </div>
                            </FormGroup>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="household_form_cont">
                          <p>
                            Please fill in type of heating you use and fill the
                            amount of heating fuel you used in xx.
                          </p>
                          <div className="status_cls">
                            <Link to="">Below</Link>
                            <Link to="" className="active">
                              Average
                            </Link>
                            <Link to="">Above</Link>
                          </div>

                          <div className="separator_cls"></div>
                          <div className="household-form">
                            <FormGroup>
                              <FormLabel>Natural Gas</FormLabel>
                              <div className="input-group">
                                <TextInput
                                  id="electricity-input"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                                <TextInput
                                  id="electricity-factor"
                                  placeholder="KG"
                                  type="number"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                              </div>
                            </FormGroup>
                            <FormGroup>
                              <FormLabel>Coal</FormLabel>
                              <div className="input-group">
                                <TextInput
                                  id="electricity-input"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                                <TextInput
                                  id="electricity-factor"
                                  placeholder="KG"
                                  type="number"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                              </div>
                            </FormGroup>
                            <FormGroup>
                              <FormLabel>LPG</FormLabel>
                              <div className="input-group">
                                <TextInput
                                  id="electricity-input"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                                <TextInput
                                  id="electricity-factor"
                                  placeholder="KG"
                                  type="number"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                              </div>
                            </FormGroup>
                            <FormGroup>
                              <FormLabel>Propane</FormLabel>
                              <div className="input-group">
                                <TextInput
                                  id="electricity-input"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                                <TextInput
                                  id="electricity-factor"
                                  placeholder="KG"
                                  type="number"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                              </div>
                            </FormGroup>
                          </div>
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
                              <p>x.xx t</p>
                            </div>
                          </div>
                          <div className="inner_tit active">
                            <h5>Electricity</h5>
                          </div>
                          <div className="inner_tit active">
                            <h5>Heating</h5>
                          </div>
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
