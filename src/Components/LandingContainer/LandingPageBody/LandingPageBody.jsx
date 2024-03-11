import React from "react";
import "./LandingPageBody.css";
import AboutMePage from "../AboutMePage/AboutMePage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import ContactMePage from "../../ContactMePage/ContactMePage";

//components
import LandingPageCard from "./LandingPageCard/LandingPageCard";

function LandingPageBody() {
  let scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth' // Add smooth scrolling behavior
      });
    }
  };
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
          <LandingPageCard buttonFunction={scrollToSection} goToProp="projectsPageContainer"/>
        </div>
        
      </div>
      <div id="aboutMePageContainer">
        <AboutMePage/>

      </div>
      <div id="projectsPageContainer">
        <ProjectsPage/>
        
        </div>
        <div id="contactPageContainer">
          <ContactMePage/>
        </div>
    </div>
  );
}

export default LandingPageBody;
