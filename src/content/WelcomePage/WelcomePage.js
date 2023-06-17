import React, { useState } from "react";
import "./_welcome-page.scss";
import { Link } from "react-router-dom";
import { ReactComponent as GHCLOGO } from './GHC-logo.svg';


import axios from "axios";
import {
  Button,
  DatePicker,
  DatePickerInput,
  FormGroup,
  Select,
  ToastNotification,
  Form,
} from "@carbon/react";
import Waves from "../Waves";
import Http from "../../services/Http";
const WelcomePage = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    country: "",
    dateRange: "",
  });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [alertClass, setalertClass] = useState("error");
  const [isLoading, setIsLoading] = useState(false);

  const handleDateChange = (selectedDates) => {
    setFormFields({ ...formFields, dateRange: selectedDates });
  };
  const handleChange = (e) => {
    //alert();
    if (e.target.name == "start_date") {
      alert();
    } else {
      setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }
  };
  const validate = () => {
    const errors = {};
    if (!formFields.name) {
      errors.name = "Name is required";
    }
    if (!formFields.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formFields.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
    }
    var data = new FormData();
    data.append("name", formFields.name);
    data.append("email", formFields.email);
    data.append("country", formFields.country);
    data.append("dateRange", formFields.dateRange);
    try {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:2024/api/v1/app/user/register",
        headers: {
          "Content-Type": "application/json",
        },
        data,
      };
      const responseData = await axios.request(config);
      setApiMessage(responseData.data.msg);
      setalertClass("success");
      setIsLoading(false);
    } catch (error) {
      setApiMessage("Some error occure");
      setalertClass("error");
      setIsLoading(false);
    }
  };
  const handleCloseNotify = () => {
    setNotification(false);
  };
  return (
    <>
      {notification && (
        <>
          <ToastNotification
            kind={alertClass}
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
      <main>
        <section className="login_page_sec">
          <div className="container">
            <div className="right_svg_ic">
              <img src="/right_ic.svg" />
            </div>
            <div className="left_svg_ic">
              <img src="/left_ic.svg" />
            </div>
            <div className="logo_wrap">
            <Link to="/">
              <GHCLOGO  className="welcome-logo" />
              </Link>
            </div>
            <div className="login_cont">
              <h2>GREENHOUSE CALCULATOR</h2>
              <p>
                Select your country or region and a date range to start your calculations.
              </p>
      
            </div>
            <div className="login_page_form">
              <Form
                onSubmit={handleSubmit}
                defaultErrorMessage={{ required: "Please enter something." }}
              >
          
              <FormGroup>
                  <Select
                    labelText="Country"
                    value={formFields.country}
                    name="country"
                    size="lg"
                    onChange={handleChange}
                    required
                    errorMessage={{
                      required: "Please enter any country",
                    }}
                  >
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Norway">Norway</option>
                    <option value="Finland">Finland</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="South Korea">South Korea</option>

                  </Select>
                </FormGroup>
                <FormGroup>
                  <DatePicker
                    datePickerType="range"
                    className="welcome-date-picker-container"
                    onChange={handleDateChange}
                    value={formFields.dateRange}
                  >
                    <DatePickerInput
                      id="date-picker-input-id-start"
                      name="start_date"
                      placeholder="mm/dd/yyyy"
                      labelText="Start date"
                      className="welcome-date-picker-from"
                      size="lg"
                      autoComplete="off"
                      required
                      errorMessage={{
                        required: "Please enter start date",
                      }}
                    />
                    <DatePickerInput
                      id="date-picker-input-id-finish"
                      placeholder="mm/dd/yyyy"
                      labelText="End date"
                      className="welcome-date-picker-to"
                      size="lg"
                      name="end_date"
                      autoComplete="off"
                      required
                      errorMessage={{
                        required: "Please enter end date",
                      }}
                    />
                  </DatePicker>
                </FormGroup>
                <div className="custom_link">
                <Link to="/house" className="welcome-button">
                  <Button  kind="primary" type="submit" className="welcome-button2">
                    CONTINUE TO CALCULATOR
                  </Button>
                </Link>
             
          
                </div>
              </Form>
            </div>
          </div>
        </section>
      </main>
      <Waves />
    </>
  );
};

export default WelcomePage;
