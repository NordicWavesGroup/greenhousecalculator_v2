import React, { useState } from "react";
import ReactGA from 'react-ga';

import { Button } from "@carbon/react";
import html2canvas from "html2canvas";
import pdfConverter from "jspdf";
import axios from "axios";
import {
  Modal,
  ModalBody,
  TextInput,
  Loading,
  ToastNotification,
} from "carbon-components-react";

const SecondaryFootprint = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [apiMessage, setApiMessage] = useState("");
  const [alertClass, setalertClass] = useState("error");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(false);


  const handleOpen = (e) => {
    const but = e.target;
    //but.style.display = "none";
    let input = window.document.getElementsByClassName("div2PDF")[0];
    html2canvas(input).then(async (canvas) => {
      let img = canvas.toDataURL("image/png");
      //const pdf = new pdfConverter("l", "pt");
      const pdf = new pdfConverter({
        orientation: "landscape",
        unit: "in",
        format: [14, 10],
      });
      pdf.addImage(img, "png", 0.6, 0.6);
      ///but.style.display = "block";
      //pdf.save("b2c_calculator_result.pdf");
      setImg(img);
    });
    setOpen(true);

    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: 'Example button clicked'
    });
  };

  const handleClose = () => {
    setNameErrorMessage("");
    setEmailErrorMessage("");
    setName("");
    setEmail("");
    setImg("");
    setOpen(false);
    setTimeout(() => {
      handleCloseNotify();
    }, 5000);
    // setalertClass("");
    // setApiMessage("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    if (!name) {
      setNameErrorMessage("Name is required. Please enter your name.");
      return;
    } else {
      setNameErrorMessage("");
    }
    if (!email) {
      setEmailErrorMessage(
        "Email is required. Please enter your email address."
      );
      return;
    } else {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      let emailValid = pattern.test(email);
      if (!emailValid) {
        setEmailErrorMessage("Please enter a valid email address.");
        return;
      } else {
        setEmailErrorMessage("");
      }
    }
    setIsLoading(true);
    /////Send to server
    var data = new FormData();
    data.append("image", img);
    data.append("email", email);
    data.append("name", name);
    try {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://3.20.147.34:2024/send-email",
        headers: {
          "Content-Type": "application/json",
        },
        data,
      };
      const responseData = await axios.request(config);
      setApiMessage(responseData.data.msg);
      setalertClass("success");
      setIsLoading(false);
      handleClose();
    } catch (error) {
      setApiMessage("Some error occure");
      setalertClass("error");
      setIsLoading(false);
    }
    setNotification(true);
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

      <Button
        onClick={(e) => handleOpen(e)}
        className="results-calculate-footprint-button"
      >
        Send Calculation To Email
      </Button>
      <Modal
        className="personalDetailModal"
        open={open}
        onRequestClose={handleClose}
      >
        <h3>Personal details</h3>
        <ModalBody className="customBody">
          <TextInput
            id="input-box"
            labelText="Enter Your Name*"
            value={name}
            onChange={handleNameChange}
            required
            autoComplete="off"
          />
          {nameErrorMessage && (
            <p className="text-danger">{nameErrorMessage}</p>
          )}
          <TextInput
            className=""
            type="email"
            id="input-box"
            labelText="Enter Email Address*"
            value={email}
            onChange={handleEmailChange}
            required
            autoComplete="off"
          />
          {emailErrorMessage && (
            <p className="text-danger">{emailErrorMessage}</p>
          )}
          <div className="landing-tiles-questions">
            <Button className="customBtn" onClick={handleClose}>
              Close
            </Button>
            <Button
              className="customBtn ml-3"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? <Loading /> : "Submit"}
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};
export default SecondaryFootprint;
