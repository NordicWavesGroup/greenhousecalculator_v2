import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./_consumption-page.scss";
import {
  FormGroup,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Select,
  SelectItem,
} from "@carbon/react";
import IconsNavigation from "../IconsNavigation/IconsNavigation";
import Waves from "../Waves";
import { setFoodDiet, setFoodDietFootprint } from "../../redux/secondary";

import countryFactors from "../../countryFactors";
import ResultsPage from "./../ResultsPage/ResultsPage";
import ResultTotalResults from "../../content/ResultsPage/Results_TotalResults"


const SecondaryFoodDrinks = () => {
  const { foodDiet, foodDietFootprint, selectedCountrySecondary } = useSelector(
    (state) => state.secondary
  );

  const rangeOptions = [
    "-Pick a diet-",
    ,
    ...Object.keys(
      countryFactors[selectedCountrySecondary]?.foodDietRange || 0
    ),
  ];
  const dispatch = useDispatch();

  const handleDietChange = (e) => {
    const selectedDiet = e.target.value;
    const dietFootprint =
      countryFactors[selectedCountrySecondary].foodDietRange[selectedDiet]
        .foodDiet_factor;
    dispatch(setFoodDiet(selectedDiet));
    dispatch(setFoodDietFootprint(dietFootprint));
  };
  return (
    <>
            <div className="global-total-result-fixed">
      <ResultTotalResults />
</div>
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
                        Food & Water
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <div className="household_form_cont car_form">
                          <p>
                            Please choose food and diet you are consuming the
                            most.
                          </p>
                          <div className="household-form">
                            <FormGroup>
                              <Select
                                labelText="Food & Diet"
                                size="lg"
                                id="range-foodDrinks-select"
                                defaultValue={foodDiet}
                                onChange={handleDietChange}
                              >
                                {rangeOptions.map((unit) => (
                                  <SelectItem
                                    key={unit}
                                    value={unit}
                                    text={
                                      countryFactors[selectedCountrySecondary]
                                        ?.foodDietRange[unit]?.description ||
                                      unit.charAt(0).toUpperCase() +
                                        unit.slice(1)
                                    }
                                  />
                                ))}
                              </Select>
                            </FormGroup>
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

export default SecondaryFoodDrinks;
