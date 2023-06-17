import React, { useState, useEffect, useRef } from "react";
import "./_landing-page.scss";
import './_landing-footer.scss';
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
import CustomTabsSkeleton from "../../components/CustomTabsSkelton"
import { ReactComponent as GHCLOGO } from '../../content/WelcomePage/GHC-logo.svg';
import  LandingOffset  from './LandingOffset'
import Waves from "../Waves";
import LandingFooter from "./LandingFooter";
import LandingProjectCards from "./LandingProjectCards";
import Welcome_visualization from './Welcome_Visualization'

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
                <Tab className={"landing-tab"}>What</Tab>
                <Tab className={"landing-tab"}>Emissions</Tab>
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
                          kind="primary"
                        >
                          GET STARTED
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
            <TabPanel>
              < Welcome_visualization />
            </TabPanel>
         
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
                     AWARENESS{" "}
                  </h3>
                  <br />
                  <p>
                    {" "}
                   Become aware of how your lifestyle choices affect the environment. This awareness can inspire you to adopt more sustainable habits in your daily life. 
                  </p>
         
            
                    <div class="spinner-box">
                      <div class="blue-orbit leo">
                      </div>

                      <div class="green-orbit leo">
                      </div>
                      
                      <div class="red-orbit leo">
                      </div>
                      
                      <div class="white-orbit w1 leo">
                      </div><div class="white-orbit w2 leo">
                      </div><div class="white-orbit w3 leo">
                      </div>
                    </div>
                 
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
                   RESPONSABILITY{" "}
                  </h3>
                  <br />
                  <p>
                    {" "}
                    Quantify your carbon footprint to heighten awareness of your lifestyle. lifestyle impact on the environment. Let this knowledge drive sustainable choices for a greener everyday life.
                  </p>
          
                    <div class="spinner-box">
                        <div class="leo-border-1">
                          <div class="leo-core-1"></div>
                        </div> 
                        <div class="leo-border-2">
                          <div class="leo-core-2"></div>
                        </div> 
                      </div>
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
                   IMPACT{" "}
                  </h3>
                  <br />
                  <p>
                  Understanding your carbon footprint reveals your impact on climate change. Reduce it to make a positive environmental difference and combat the effects of global warming.
                  
                  </p>

                  <div class="spinner-box">
                    <div class="solar-system">
                      <div class="earth-orbit orbit">
                        <div class="planet earth"></div>
                        <div class="venus-orbit orbit">
                          <div class="planet venus"></div>
                          <div class="mercury-orbit orbit">
                            <div class="planet mercury"></div>
                            <div class="sun"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

               
                </div>
              </>
            )}
          </Tile>
        </section>
       <LandingOffset />
       <LandingProjectCards />
      </section>
      <LandingFooter />

      <Waves />
    </>
  );
};

export default LandingPage;
