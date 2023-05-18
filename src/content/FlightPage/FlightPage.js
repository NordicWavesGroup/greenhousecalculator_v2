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
import ResultsPage from "./../ResultsPage/ResultsPage";
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
      setFormIndex(0);
    } else {
      const newArray = [];
      for (let i = 1; i <= e.target.value; i++) {
        newArray.push({ from: "", to: "" });
      }
      setFormFields(newArray);
      setFormIndex(e.target.value);
    }
  };

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
                    <TabList aria-label={""}>
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
                            <FormGroup legendText={""}>
                              <div className="input-group car_inner_cls">
                                <label>You had</label>
                                <TextInput
                                  labelText={""}
                                  id="electricity-factor"
                                  placeholder="1 Flight"
                                  type="number"
                                  className="house-block-middle-form"
                                  size="lg"
                                  min={1}
                                  max={5}
                                  ///onClick={(e) => makeFlightForm(e)}
                                  onChange={(e) => makeFlightForm(e)}
                                  //onBlur={(e) => makeFlightForm(e)}
                                  value={
                                    formIndex < 0 || formIndex > 5
                                      ? 0
                                      : formIndex
                                  }
                                />
                              </div>
                            </FormGroup>
                            {formFields.length != 0 && (
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
                            )}
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
export default FlightsPage;
