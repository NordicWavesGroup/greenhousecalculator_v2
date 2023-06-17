import React, { useState, useEffect } from "react";
import "./_landing-page.scss";
import { Button, SkeletonText } from "@carbon/react";
import { NumberInput } from "carbon-components-react";

const LandingOffset = () => {
  const [delay, setDelay] = useState(true);
  const [carbonOffset, setCarbonOffset] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 2000);
  }, [delay]);

  const handleCarbonOffsetChange = (e) => {
    setCarbonOffset(e.target.value);
  };

  return (
    <>
      <div className="landing-knowfootprint-container">
        <div className="landing-tabpanel-middle">
          {delay ? (
            <>
              <SkeletonText
                line
                className={"title"}
                width={"40%"}
                height={"24px"}
              />
            </>
          ) : (
            <>
              <h2 className="landing-title-question">
              Already calculated your carbon footprint and ready to offset?
              </h2>
        
              <br />
            </>
          )}
          <div className="landing-container-input-button ">
          <NumberInput
                step={250}
                max={999999}
                height={50}
                className="landing-number-input"
                value={3100}
                onChange={handleCarbonOffsetChange}
                style={{ textAlign: "right" }}
                labelText="CO2e (kg)"
                invalidText="Number is not valid"

                
                >

            </NumberInput>
            <div className="landing-unit-container">

                <h1>Kg of CO2</h1>
            </div>
            <br />
              <Button kind="secondary" className="landing-button-offset">OFFSET NOW</Button>
              <Button kind="primary" className="landing-button-offset2">CALCULATE</Button>

          </div>
        </div>
      </div>

    </>
  );
};

export default LandingOffset;
