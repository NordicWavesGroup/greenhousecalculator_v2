import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./_flight-page.scss";
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
import IconsNavigation from "../IconsNavigation/IconsNavigation";
import {
  NextOutline,
  PreviousOutline,
  TrashCan,
  Add,
} from "@carbon/react/icons";
import FlightHeader from "./Flight_Header";
import FlightHeaderResults from "./Flight_HeaderResults";
import FlightHeaderVisualization from "./Flight_HeaderVisualization";
import FlightOptions from "./Flight_Options";
import FlightFrom from "./Flight_From";
import FlightTo from "./Flight_To";
//import FlightClass from './Flight_Class'
//import FlightTrips from './Flight_Trips'
//import FlightRadiative from './Flight_Radiative'
//import FlightLuggage from './Flight_Luggage';
import FlightTotalResults from "./Flight_TotalResults";
import { ToastNotification } from "carbon-components-react";
import FlightFootprintsButton from "./Flight_FootprintsButton";
import FlightIndividualResults from "./Flight_IndividualResults";
import FlightDataVisualization from "./Flight_DataVisualization";
import FlightOffsetButton from "./Flight_OffsetButton";
import Waves from "../Waves";
import {
  setSelectedAirportFrom,
  setSelectedAirportTo,
  setShowFlightResult,
  resetFlightFootprint,
} from "../../redux/flights";
import Slider from "react-slick";

const FlightsPage = () => {
  const addClass = () => {
    document.getElementsByTagName("body")[0].setAttribute("class", "open_menu");
  };
  const dispatch = useDispatch();

  const { flights } = useSelector((state) => state.flights);
  const [formFields, setFormFields] = useState([{ from: "", to: "" }]);
  const [formIndex, setFormIndex] = useState(flights.length);
  const [apiMessage, setApiMessage] = useState("");
  const [notification, setNotification] = useState(false);
  const [alertClass, setalertClass] = useState("error");
  const [isLoading, setIsLoading] = useState(false);
  const [flightsCount, setflightsCount] = useState(1);

  const handleAddFields = async () => {
    alert(formIndex);
    let oldIndex = formIndex - 1 > 0 ? formIndex - 1 : 0;
    // if (!flights[oldIndex] || !flights[oldIndex].selectedAirportFrom.name) {
    //   setApiMessage(" Please first select any Airport..");
    //   setNotification(true);
    //   setTimeout(() => {
    //     handleCloseNotify();
    //   }, 5000);
    // } else {
    await setFormFields([...formFields, { from: "", to: "" }]);
    await setFormIndex(formIndex + 1);
    //}
  };
  const resetFootprintFlight = (index) => {
    let showFlight = false;
    let footerPrint = 0;
    dispatch(setShowFlightResult({ showFlight, index }));
    dispatch(resetFlightFootprint({ footerPrint, index }));
    setFormIndex(formIndex - 1);
  };

  const removeFormFields = (index) => {
    let newFormValues = [...formFields];
    if (index > 0) {
      newFormValues.splice(index, 1);
      setFormFields(newFormValues);
    }
    resetFootprintFlight(index);
  };
  const handleCloseNotify = () => {
    setNotification(false);
  };
  const makeFlightForm = (e) => {
    if (e.target.value > 5) {
      setApiMessage("5 max flights are allowed");
      setalertClass("error");
      setNotification(true);
      setflightsCount(1);
    } else {
      console.log("flights.length", flights.length);
      console.log("Shree Ram flightsCount", e.target.value);
      setflightsCount(e.target.value);
      console.log("Shree Ram setflightsCount", flightsCount);
      if (e.target.value > flightsCount) {
        for (let i = flightsCount; i < e.target.value; i++) {
          console.log("i", i);
          handleAddFields();
        }
      } else {
        for (let i = flightsCount; i < e.target.value; i--) {
          removeFormFields(i);
        }
      }
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    centerPadding: "60px",
    speed: 100,
    slidesToShow: 3,
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
  console.log("formFields", formFields);
  return (
    <>
      {notification && (
        <>
          <ToastNotification
            kind={"error"}
            title="Alert"
            subtitle={apiMessage}
            caption=""
            onCloseButtonClick={handleCloseNotify}
            hideCloseButton={false}
            lowContrast={false}
            open={notification}
            className="custom-toast-notification" // Add custom CSS class name
          />
        </>
      )}
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
                        Flight
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <div className="car_page_sec household_form_cont car_form">
                          <p>
                            Please fill in number of flights you had and details
                            for them.
                          </p>
                          <div className="household-form">
                            <FormGroup>
                              <div className="input-group car_inner_cls">
                                <label>You had</label>
                                <TextInput
                                  id="electricity-factor"
                                  placeholder="1 Flight"
                                  type="number"
                                  className="house-block-middle-form"
                                  size="lg"
                                  min={1}
                                  max={5}
                                  onChange={(e) => makeFlightForm(e)}
                                  value={flightsCount > 5 ? 0 : flightsCount}
                                />
                              </div>
                            </FormGroup>
                            <Slider {...settings}>
                              {formFields.map((field, index) => (
                                <div className="car_inner_form">
                                  <div className="car_label d-flex">
                                    <span>Flight {index + 1}</span>
                                    <Button
                                      className="flight-result-trashcan-icon-container removeBtn "
                                      onClick={() => removeFormFields(index)}
                                    >
                                      <TrashCan />
                                    </Button>
                                  </div>
                                  <FlightFrom index={index} />
                                  <FlightTo index={index} />
                                </div>
                              ))}
                            </Slider>
                          </div>
                        </div>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
              </div>
              <FlightFootprintsButton />
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
                          <div className="step-main-tit active fill">
                            <h5>Household</h5>
                            <div className="after_sbt_cont">
                              <p>x.xx t</p>
                            </div>
                          </div>
                          <div className="inner_tit active fill">
                            <h5>Electricity</h5>
                          </div>
                          <div className="inner_tit active fill">
                            <h5>Heating</h5>
                          </div>
                        </div>
                        <div className="step-inner enter_page">
                          <div className="step-main-tit active fill">
                            <h5>Private Vehicles</h5>
                            <div className="after_sbt_cont">
                              <p>x.xx t</p>
                            </div>
                          </div>
                          <div className="inner_tit active fill">
                            <h5>Car</h5>
                          </div>
                          <div className="inner_tit active fill">
                            <h5>Motorbike</h5>
                          </div>
                        </div>
                        <div className="step-inner enter_page">
                          <div className="step-main-tit active fill">
                            <h5>Public Transport</h5>
                            <div className="after_sbt_cont">
                              <p>x.xx t</p>
                            </div>
                          </div>
                          <div className="inner_tit active fill">
                            <h5>Bus</h5>
                          </div>
                          <div className="inner_tit active fill">
                            <h5>Train</h5>
                          </div>
                          <div className="inner_tit active fill">
                            <h5>Taxi</h5>
                          </div>
                        </div>
                        <div className="step-inner enter_page">
                          <div className="step-main-tit">
                            <h5>Flight</h5>
                            <div className="after_sbt_cont">
                              <p>x.xx t</p>
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
export default FlightsPage;
