import React from "react";
import "./_car-page.scss";
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
  Select,
} from "@carbon/react";
import { Link } from "react-router-dom";
import { NextOutline, PreviousOutline } from "@carbon/react/icons";

import IconsNavigation from "../IconsNavigation/IconsNavigation";
import CarHeader from "./Car_Header";
import CarHeaderResults from "./Car_HeaderResults";
import CarHeaderVisualization from "./Car_HeaderVisualization";

import CarMileage from "./Car_Mileage";
import CarType from "./Car_Type";
import CarSize from "./Car_Size";

import CarTotalResults from "./Car_TotalResults";
import CarFootprintsButton from "./Car_FootprintsButton";
import CarIndividualResults from "./Car_IndividualResults";
import CarDataVisualization from "./Car_DataVisualization";
import CarOffsetButton from "./Car_OffsetButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "carbon-components/css/carbon-components.min.css";
import Slider from "react-slick";
import ResultsPage from "./../ResultsPage/ResultsPage";

import Waves from "../Waves";
const settings = {
  dots: false,
  infinite: false,
  centerPadding: "60px",
  speed: 100,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const CarPage = () => {
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
                        Car
                      </Tab>
                      <Tab id="tab2" label="Tab 2">
                        Motorbike
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <div className="car_page_sec household_form_cont car_form">
                          <p>
                            Please fill in Number of cars you have and details
                            for them.
                          </p>
                          <div className="household-form">
                            <FormGroup>
                              <div className="input-group car_inner_cls">
                                <label>You are using</label>
                                <TextInput
                                  id="electricity-factor"
                                  placeholder="3 Car"
                                  type="number"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                              </div>
                            </FormGroup>
                            <Slider {...settings}>
                              <div className="car_inner_form">
                                <div className="car_label">
                                  <span>Car 1</span>
                                </div>
                                <FormGroup>
                                  <FormLabel>Car Mileage</FormLabel>
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
                                  <Select
                                    labelText="Car Type"
                                    defaultValue="ichooseOption"
                                    size="lg"
                                  >
                                    <option value="chooseOption">
                                      Choose an option
                                    </option>
                                    <option value="usa">
                                      Electric average battery
                                    </option>
                                    <option value="qatar">
                                      Hybrid_ ( full ) average battery
                                    </option>
                                  </Select>
                                </FormGroup>
                                <div className="status_main_cls">
                                  <h5>Motorcycle Size</h5>
                                  <div className="status_cls">
                                    <Link to="">Below</Link>
                                    <Link to="" className="active">
                                      Average
                                    </Link>
                                    <Link to="">Above</Link>
                                  </div>
                                </div>
                              </div>{" "}
                              <div className="car_inner_form">
                                <div className="car_label">
                                  <span>Car 2</span>
                                </div>
                                <FormGroup>
                                  <FormLabel>Car Mileage</FormLabel>
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
                                  <Select
                                    labelText="Car Type"
                                    defaultValue="ichooseOption"
                                    size="lg"
                                  >
                                    <option value="chooseOption">
                                      Choose an option
                                    </option>
                                    <option value="usa">
                                      Electric average battery
                                    </option>
                                    <option value="qatar">
                                      Hybrid_ ( full ) average battery
                                    </option>
                                  </Select>
                                </FormGroup>
                                <div className="status_main_cls">
                                  <h5>Motorcycle Size</h5>
                                  <div className="status_cls">
                                    <Link to="">Below</Link>
                                    <Link to="" className="active">
                                      Average
                                    </Link>
                                    <Link to="">Above</Link>
                                  </div>
                                </div>
                              </div>{" "}
                              <div className="car_inner_form">
                                <div className="car_label">
                                  <span>Car 3</span>
                                </div>
                                <FormGroup>
                                  <FormLabel>Car Mileage</FormLabel>
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
                                  <Select
                                    labelText="Car Type"
                                    defaultValue="ichooseOption"
                                    size="lg"
                                  >
                                    <option value="chooseOption">
                                      Choose an option
                                    </option>
                                    <option value="usa">
                                      Electric average battery
                                    </option>
                                    <option value="qatar">
                                      Hybrid_ ( full ) average battery
                                    </option>
                                  </Select>
                                </FormGroup>
                                <div className="status_main_cls">
                                  <h5>Motorcycle Size</h5>
                                  <div className="status_cls">
                                    <Link to="">Below</Link>
                                    <Link to="" className="active">
                                      Average
                                    </Link>
                                    <Link to="">Above</Link>
                                  </div>
                                </div>
                              </div>{" "}
                              <div className="car_inner_form">
                                <div className="car_label">
                                  <span>Car 3</span>
                                </div>
                                <FormGroup>
                                  <FormLabel>Car Mileage</FormLabel>
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
                                  <Select
                                    labelText="Car Type"
                                    defaultValue="ichooseOption"
                                    size="lg"
                                  >
                                    <option value="chooseOption">
                                      Choose an option
                                    </option>
                                    <option value="usa">
                                      Electric average battery
                                    </option>
                                    <option value="qatar">
                                      Hybrid_ ( full ) average battery
                                    </option>
                                  </Select>
                                </FormGroup>
                                <div className="status_main_cls">
                                  <h5>Motorcycle Size</h5>
                                  <div className="status_cls">
                                    <Link to="">Below</Link>
                                    <Link to="" className="active">
                                      Average
                                    </Link>
                                    <Link to="">Above</Link>
                                  </div>
                                </div>
                              </div>
                            </Slider>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="household_form_cont car_form">
                          <p>Please fill in number of motorcycles you have.</p>
                          <div className="household-form">
                            <FormGroup>
                              <div className="input-group">
                                <label>You are using</label>
                                <TextInput
                                  id="electricity-factor"
                                  placeholder="1 Motorbikes"
                                  type="number"
                                  className="house-block-middle-form"
                                  size="lg"
                                />
                              </div>
                            </FormGroup>
                            <div className="car_inner_form">
                              <div className="car_label">
                                <span>Motorbike 1</span>
                              </div>
                              <FormGroup>
                                <FormLabel>Motorbike Mileage</FormLabel>
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
                              <div className="status_main_cls">
                                <h5>Motorcycle Size</h5>
                                <div className="status_cls">
                                  <Link to="">Below</Link>
                                  <Link to="" className="active">
                                    Average
                                  </Link>
                                  <Link to="">Above</Link>
                                </div>
                              </div>
                            </div>
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

export default CarPage;
