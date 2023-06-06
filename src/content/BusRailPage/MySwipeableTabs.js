import React, { useRef, useState } from "react";
import { Tabs } from "antd";
import BusRailBus from "./BusRail_Bus";
import BusRailCoach from "./BusRail_Coach";
import BusRailLocalTrain from "./BusRail_LocalTrain";
import BusRailLongTrain from "./BusRail_LongTrain";
import BusRailTram from "./BusRail_Tram";
import BusRailSubway from "./BusRail_Subway";
import BusRailTaxi from "./BusRail_Taxi";
const { TabPane } = Tabs;
const MyTabsSlider = () => {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("0");
  const [totalTabs, setTotalTabs] = useState(6);
  const [prevDisabled, setprevDisabled] = useState(true);
  const [nextDisabled, setnextDisabled] = useState(false);
  const handleTabsScroll = (direction) => {
    console.log(direction, "Okay", tabsRef.current.offsetWidth);
    const scrollDistance = direction === "next" ? 3300 : -3300;
    direction === "next" ? goToTab(1) : goToTab(-1);
    tabsRef.current.scrollBy({ left: scrollDistance, behavior: "smooth" });
  };
  const setOnclickActiveTab = (key1) => {
    if (key1 == totalTabs) {
      setnextDisabled(true);
      setprevDisabled(false);
    }
    setActiveTab(key1);
  };
  const goToTab = (num) => {
    const activeTabKey = tabsRef.current
      ?.querySelector(".ant-tabs-tab-active")
      ?.getAttribute("aria-controls");


    let tab = parseInt(activeTab) + num > 0 ? parseInt(activeTab) + num : 0;
    setActiveTab(tab > 0 ? tab : 0); // Set the active tab to '15'
    if (tab == totalTabs) {
      setnextDisabled(true);
      setprevDisabled(true);
    } else {
      setnextDisabled(false);
    }
    if (tab > 0 && tab <= totalTabs) {
      setprevDisabled(false);
    } else {
      setprevDisabled(true);
    }
  };

  const tabsArr = [
    {
      label: "BUS",
    },
    {
      label: "COACH",
    },
    {
      label: "LOCAL TRAIN",
    },
    {
      label: "LONG TRAIN",
    },
    {
      label: "TRAM",
    },
    {
      label: "SUBWAY",
    },
    {
      label: "TAXI",
    },
  ];

  return (
    <div className="tabs-slider">
      <div className="tabs-slider-arrows">
        <button
          disabled={prevDisabled}
          className="prev_btn"
          onClick={() => handleTabsScroll("prev")}
        >
          <span></span>
        </button>
        <button
          className="next_btn"
          disabled={nextDisabled}
          onClick={() => handleTabsScroll("next")}
        >
          <span></span>
        </button>
      </div>
      <div className="tabs-slider-tabs" ref={tabsRef}>
        <Tabs
          activeKey={activeTab + ""}
          defaultActiveKey="1"
          tabPosition="top"
          animated={false}
          onChange={(key) => setOnclickActiveTab(key)}
        >
          {new Array(7).fill(null).map((_, i) => {
            const id = String(i);
            return (
              <TabPane
                tab={tabsArr[i] ? tabsArr[i].label : null}
                key={id}
                disabled={i === 28}
              >
                {i == 0 ? (
                  <>
                    <BusRailBus />
                  </>
                ) : i == 1 ? (
                  <>
                    <BusRailCoach />
                  </>
                ) : i == 2 ? (
                  <>
                    <BusRailLocalTrain />
                  </>
                ) : i == 3 ? (
                  <>
                    <BusRailLongTrain />
                  </>
                ) : i == 4 ? (
                  <>
                    <BusRailTram />
                  </>
                ) : i == 5 ? (
                  <>
                    <BusRailSubway />
                  </>
                ) : i == 6 ? (
                  <>
                    <BusRailTaxi />
                  </>
                ) : null}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default MyTabsSlider;
