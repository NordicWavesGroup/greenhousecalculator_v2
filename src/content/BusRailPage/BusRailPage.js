import React from "react";
import "./_bus-rail-page.scss";
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
  // Tabs,
  TextInput,
  Select,
} from "@carbon/react";
import { Link } from "react-router-dom";
import { NextOutline, PreviousOutline } from "@carbon/react/icons";

import IconsNavigation from "../IconsNavigation/IconsNavigation";
import BusRailHeaders from "./BusRail_Headers";
import BusRailHeaderResults from "./BusRail_HeaderResults";
import BusRailHeaderVisualization from "./BusRail_HeaderVisualization";

import BusRailBus from "./BusRail_Bus";
import BusRailCoach from "./BusRail_Coach";
import BusRailLocalTrain from "./BusRail_LocalTrain";
import BusRailLongTrain from "./BusRail_LongTrain";
import BusRailTram from "./BusRail_Tram";
import BusRailSubway from "./BusRail_Subway";
import BusRailTaxi from "./BusRail_Taxi";
import BusRailTotalResult from "./BusRail_TotalResult";

import BusRailFootprintsButton from "./BusRail_FootprintsButton";
import BusRailIndividualResults from "./BusRail_IndividualResults";
import BusRailDataVisualization from "./BusRail_DataVisualization";
import BusRailOffsetButton from "./BusRail_OffsetButton";
import { Radio, Tabs } from "antd";
import MySwipeableTabs from "../../components/MySwipeableTabs";
import ResultsPage from "./../ResultsPage/ResultsPage";

import Waves from "../Waves";

const BusRailPage = () => {
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
                  {/* <Tabs
                    selected={1}
                    tabContentClassName="custom-tab-content"
                    tabContentStyle={{ padding: "20px" }}
                  >
                    <TabList>
                      <Tab id="tab1" label="Tab 1">
                        Bus
                      </Tab>
                      <Tab id="tab2" label="Tab 2">
                        Coach
                      </Tab>
                      <Tab id="tab3" label="Tab 3">
                        Local Train
                      </Tab>
                      <Tab id="tab4" label="Tab 4">
                        Long Train
                      </Tab>
                      <Tab id="tab5" label="Tab 5">
                        Coach
                      </Tab>
                      <Tab id="tab6" label="Tab 6">
                        Subway
                      </Tab>
                      <Tab id="tab7" label="Tab 7">
                        Taxi
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <div className="household_form_cont car_form">
                          <p>How many kilometres have you passed with a Bus?</p>
                          <div className="household-form">
                            <FormGroup>
                              <FormLabel>Bus Mileage</FormLabel>
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
                      <TabPanel>
                        <div className="household_form_cont car_form">
                          <p>
                            How many kilometres have you passed with a Coach?
                          </p>
                          <div className="household-form">
                            <FormGroup>
                              <FormLabel>Coach Mileage</FormLabel>
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
                      <TabPanel>
                        <div className="household_form_cont car_form">
                          <p>
                            How many kilometres have you passed with a Local
                            Train?
                          </p>
                          <div className="household-form">
                            <FormGroup>
                              <FormLabel>Local Train Mileage</FormLabel>
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
                      <TabPanel>
                        <div className="household_form_cont car_form">
                          <p>
                            How many kilometres have you passed with a Long
                            Train?
                          </p>
                          <div className="household-form">
                            <FormGroup>
                              <FormLabel>Long Train Mileage</FormLabel>
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
                      <TabPanel>
                        <div className="household_form_cont car_form">
                          <p>
                            How many kilometres have you passed with a Tram?
                          </p>
                          <div className="household-form">
                            <FormGroup>
                              <FormLabel>Tram Mileage</FormLabel>
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
                      <TabPanel>
                        <div className="household_form_cont car_form">
                          <p>
                            How many kilometres have you passed with a Subway?
                          </p>
                          <div className="household-form">
                            <FormGroup>
                              <FormLabel>Subway Mileage</FormLabel>
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
                      <TabPanel>
                        <div className="household_form_cont car_form">
                          <p>
                            How many kilometres have you passed with a Taxi?
                          </p>
                          <div className="household-form">
                            <FormGroup>
                              <FormLabel>Taxi Mileage</FormLabel>
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
                  </Tabs> */}
                  {/* <Tabs
                    defaultActiveKey="1"
                    tabPosition={"top"}
                    style={{
                      height: 220,
                    }}
                    items={new Array(30).fill(null).map((_, i) => {
                      const id = String(i);
                      return {
                        label: `Tab-${id}`,
                        key: id,
                        disabled: i === 28,
                        children: `Content of tab ${id}`,
                      };
                    })}
                  /> */}
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
