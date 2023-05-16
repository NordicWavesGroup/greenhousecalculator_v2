import React, { useRef, useState } from "react";
import { Tabs } from "antd";
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
import "./styles.css"; // Custom CSS for the tabs slider
const { TabPane } = Tabs;

const MyTabsSlider = () => {
  const tabsRef = useRef(null); // Reference to the Tabs component

  const [activeTab, setActiveTab] = useState("1");
  // const handleTabsScroll = (direction) => {
  //   console.log(direction, "Okay", tabsRef.current.offsetWidth);
  //   // Calculate the scroll distance based on the width of each tab
  //   const tabWidth = tabsRef.current.offsetWidth / 3;
  //   const scrollDistance = direction === "next" ? tabWidth : -tabWidth;

  //   // Scroll the tabs container by the calculated distance
  //   tabsRef.current.scrollBy({ left: scrollDistance, behavior: "smooth" });
  // };

  const handleTabsScroll = (direction) => {
    console.log(direction, "Okay", tabsRef.current.offsetWidth);
    const scrollDistance = direction === "next" ? 3300 : -3300; // Adjust the scroll distance as needed

    direction === "next" ? goToTab(1) : goToTab(-1); // Adjust the scroll distance as needed

    // Scroll the tabs container by the calculated distance
    tabsRef.current.scrollBy({ left: scrollDistance, behavior: "smooth" });
  };

  const goToTab = (num) => {
    const activeTabKey = tabsRef.current
      ?.querySelector(".ant-tabs-tab-active")
      ?.getAttribute("aria-controls");

    // tabsRef.current?.scrollTo({
    //   left: (parseInt(activeTab) - 1) * 150,
    //   behavior: "smooth",
    // });

    const tab = parseInt(activeTab) + num;
    console.log(activeTab, num, "Okay", tab);
    setActiveTab(tab + ""); // Set the active tab to '15'
  };

  return (
    <div className="tabs-slider">
      <div className="tabs-slider-arrows">
        <button className="prev_btn" onClick={() => handleTabsScroll("prev")}>
          <span></span>
        </button>
        <button className="next_btn" onClick={() => handleTabsScroll("next")}>
          <span></span>
        </button>
      </div>
      <div className="tabs-slider-tabs" ref={tabsRef}>
        <Tabs
          activeKey={activeTab + ""}
          defaultActiveKey="1"
          tabPosition="top"
          animated={false}
          //onChange={(key) => setActiveTab(key)}
        >
          {new Array(6).fill(null).map((_, i) => {
            const id = String(i);
            return (
              <TabPane tab={`Tab-${id}`} key={id} disabled={i === 28}>
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
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default MyTabsSlider;
