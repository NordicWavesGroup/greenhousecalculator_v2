import React from "react";
import "./_results-page.scss";
import "@carbon/charts/styles.css";
import { withRouter } from "react-router-dom";

const ResultsPage = () => {


  return (
    <>
      <div className="housHold_col">
        <div className="mobile_sidebar">
          <div className="result_mobile">
            <span  className="result_menu">
              Results
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ResultsPage);
