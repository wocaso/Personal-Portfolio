import React from "react";
import "./LandingPageBody.css";
import AboutMePage from "../AboutMePage/AboutMePage";

//components
import LandingPageCard from "./LandingPageCard/LandingPageCard";

function LandingPageBody() {
  return (
    <div id="mainPageContainer">
      <div id="LandingPageBodyContainer">
        <div id="LandingPageBodyLeft">
          <img
            id="LandingPageBodyLeftImg"
            src="./Assets/LandingPage.png"
            alt=""
          />
        </div>
        <div id="LandingPageBodyRight">
          <LandingPageCard />
        </div>
        
      </div>
      <div id="aboutMePageContainer">
        <AboutMePage/>

      </div>
      <div id="projectsPageContainer">
        
        </div>
        <div id="contactPageContainer">
        
        </div>
    </div>
  );
}

export default LandingPageBody;
