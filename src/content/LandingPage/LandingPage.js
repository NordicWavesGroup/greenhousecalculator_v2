import React, { useState, useEffect, useRef } from "react";
import "./_landing-page.scss";
import { Link } from "react-router-dom";
import Button from "@carbon/react/lib/components/Button/Button";
import { NextOutline } from "@carbon/react/icons";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tile,
  SkeletonText,
  SkeletonPlaceholder,
} from "@carbon/react";
import CustomTabsSkeleton from "../../components/CustomTabsSkelton";
import { ReactComponent as GHCLOGO } from '../../content/WelcomePage/GHC-logo.svg';


import Waves from "../Waves";

// Define an array of 12 different languages
const languages = [
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Olá",
  "Привет",
  "Hej",
  "Merhaba",
];
// Language changer component
const LanguageChanger = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const helloHeadingRef = useRef(null);
  // Define a function to change the hello text with a 1 second transition
  function changeHelloText(text) {
    helloHeadingRef.current.style.transition = "1s";
    helloHeadingRef.current.textContent = text;
  }
  // Use the useEffect hook to update the hello text every second
  useEffect(() => {
    const interval = setInterval(() => {
      changeHelloText(` ${languages[currentLanguageIndex]}!`);
      setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentLanguageIndex]);
  return <div ref={helloHeadingRef} style={{ fontSize: "26px" }}></div>;
};

const LandingPage = () => {
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 2000);
  }, [delay]);

  return (
    <>
      <section className="landing-main-container">
        <Tabs>
          <header className="landing-header">
          
            {delay ? (
              <div className="headerPlac">
                <SkeletonText line width={"10%"} />
                <SkeletonText heading width={"20%"} height={"20%"} />
              </div>
            ) : (
              <>
              <div className="landing-header-container">

              < GHCLOGO className="landing-logo"/>
              <div>
                <a href="/" className="landing-little-title">
                  Getting Started
                </a>
                <h1 className="landing-title">B2C Greenhouse Calculator</h1>
              </div>
              </div>
              </>
            )}
          </header>
          {delay ? (
            <>
              <CustomTabsSkeleton className={"landing-tablist"} />
            </>
          ) : (
            <>
              <TabList className={"landing-tablist"} aria-label="List of tabs">
                <Tab className={"landing-tab"}>About</Tab>
                <Tab className={"landing-tab"}>Design</Tab>
                <Tab className={"landing-tab"}>Tools</Tab>
              </TabList>
            </>
          )}

          <TabPanels>
            <TabPanel style={{ background: "#161616" }}>
              <section className="landing-container">
                <div className="landing-tabpanel-left">
                  {delay ? (
                    <>
                      <SkeletonText
                        line
                        className={"title"}
                        width={"40%"}
                        height={"24px"}
                      />
                      <SkeletonText line width={"80%"} height={"24px"} />
                      <SkeletonText line width={"85%"} height={"24px"} />
                      <SkeletonText line width={"70%"} height={"24px"} />
                    </>
                  ) : (
                    <>
                      <h5 className="landing-title-question">
                        What is Greenhouse Calculator ?
                      </h5>
                      <p className="landing-paragraph-question">
                        Greenhouse the ultimate B2C solution for measuring
                        carbon footprints. Our passionate team of researchers,
                        developers, and designers from around the world have
                        come together to develop this tool. 

                      </p>
                      <br />
                      <p>   Join us in our mission to
                        create a more sustainable future for all.</p>
                    </>
                  )}
                  {delay ? (
                    <SkeletonPlaceholder className="global-buttons-link-back-and-forth" />
                  ) : (
                    <>
                      <Link
                        className="global-buttons-link-back-and-forth"
                        to="/welcome"
                      >
                        <Button
                          className="landing-button"
                          renderIcon={NextOutline}
                          kind="tertiary"
                        >
                          Get Started
                        </Button>
                      </Link>{" "}
                    </>
                  )}
                </div>
                <div className="landing-tabpanel-right">
                  {delay ? (
                    <SkeletonPlaceholder />
                  ) : (
                    <>
                      <LanguageChanger />
                    </>
                  )}
                </div>
              </section>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>

        <section className="landing-footer-tiles">
          <Tile light={false} id="tile-1" className={"landing-tile1"}>
            {delay ? (
              <SkeletonPlaceholder className={"footerPlac"} />
            ) : (
              <>
                <div className="tileOuter">
                  <h6 className="landing-tite-title">The Principles</h6>
                </div>
              </>
            )}
          </Tile>
          <Tile light={false} id="tile-1" className={"landing-tile1"}>
            {delay ? (
              <SkeletonPlaceholder className={"footerPlac"} />
            ) : (
              <>
                <div className="tileOuter">
                  <h3 className="landing-tiles-questions">
                     Awareness{" "}
                  </h3>
                  <br />
                  <p>
                    {" "}
                    Calculating your carbon footprint can increase your
                    awareness of the impact your lifestyle choices have on the
                    environment. 
                  </p>
                  <br />
                  <p>This awareness can motivate you to make more
                    sustainable choices in your day-to-day life.</p>
                </div>
              </>
            )}
          </Tile>
          <Tile light={false} id="tile-1" className={"landing-tile1"}>
            {delay ? (
              <SkeletonPlaceholder className={"footerPlac"} />
            ) : (
              <>
                <div className="tileOuter">
                  <h3 className="landing-tiles-questions">
                   Responsibility{" "}
                  </h3>
                  <br />
                  <p>
                    {" "}
                    Calculating your carbon footprint can help you take personal
                    responsibility for your carbon emissions. 
                  </p>
                  <br />
                  <p>It can be easy to
                    overlook the impact of our daily actions, but by quantifying
                    our carbon footprint, we can take action to reduce it.</p>
                </div>
              </>
            )}
          </Tile>
          <Tile light={false} id="tile-1" className={"landing-tile1"}>
            {" "}
            {delay ? (
              <SkeletonPlaceholder className={"footerPlac"} />
            ) : (
              <>
                <div className="tileOuter">
                  <h3 className="landing-tiles-questions">
                   Impact{" "}
                  </h3>
                  <br />
                  <p>
                    Knowing your carbon footprint can help you understand how
                    your actions contribute to climate change. 
                  
                  </p>
<br />
                  <p>   By reducing your
                    carbon footprint, you can make a positive impact on the
                    environment and help mitigate the effects of climate change.</p>
                </div>
              </>
            )}
          </Tile>
        </section>
      </section>

      <Waves />
    </>
  );
};

export default LandingPage;
