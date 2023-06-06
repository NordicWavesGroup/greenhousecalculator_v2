import React, { Component } from "react";
import ReactGA from "react-ga";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import "./app.scss";
import { Theme } from "@carbon/react";
import { Content } from "@carbon/react";

import TheHeader from "./components/TheHeader/TheHeader";
import LandingPage from "./content/LandingPage";
import WelcomePage from "./content/WelcomePage";
import HousePage from "./content/HousePage";
import CarPage from "./content/CarPage";
import BusRailPage from "./content/BusRailPage";
import ResultsPage from "./content/ResultsPage";
import FlightPage from "./content/FlightPage";
import ConsumptionPage from "./content/ConsumptionPage";

ReactGA.initialize("G-CB09DB5YGC");

class App extends Component {
  componentDidMount() {
    // Track initial pageview
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Theme theme="g100">
            <TheHeader />
            <Content>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/welcome" component={WelcomePage} />
                <Route path="/consumption" component={ConsumptionPage} />
                <Route path="/house" component={HousePage} />
                <Route path="/flight" component={FlightPage} />
                <Route path="/car" component={CarPage} />
                <Route path="/bus-rail" component={BusRailPage} />
                <Route path="/results" component={ResultsPage} />
              </Switch>
            </Content>
          </Theme>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
