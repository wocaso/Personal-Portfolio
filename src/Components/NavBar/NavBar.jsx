import React, { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  let scrollToSection = (id, event) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  function goToAboutMe() {
    scrollToSection("aboutMePageContainer");
  }
  function goToProjects() {
    scrollToSection("projectsPageContainer");
  }
  function goToContact() {
    scrollToSection("contactPageContainer");
  }
  function goToHome() {
    scrollToSection("mainPageContainer");
  }
  return (
    <div id="NavBarContainer">
      <div onClick={goToHome} id="NavBarLeft">
        <img id="imgWoco" src="./Assets/woco.png" alt="" />
        <h1>Gabriel Busato</h1>
      </div>
      <div id="NavBarMiddle">
        <button onClick={goToProjects} href="#" className="labelTextNavBar">
          Projects
        </button>
        <button href="#" onClick={goToAboutMe} className="labelTextNavBar">
          About me
        </button>
        <button onClick={goToContact} href="#" className="labelTextNavBar">
          Contact me
        </button>
      </div>
      <div id="NavBarRight">
        <a  href="https://www.linkedin.com/in/gabriel-alejandro-busato-6a1b8124b" target="_blank"><img className="redesImgNavBar" src="./Assets/linkedin.png" alt="" /></a>
        <a href="https://github.com/wocaso" target="_blank"><img className="redesImgNavBar" src="./Assets/github.png" alt="" /></a>
        <a href="https://www.instagram.com/busato_gabriel/" target="_blank"><img className="redesImgNavBar" src="./Assets/instagram.png" alt="" /></a>
        
        
        
      </div>
    </div>
  );
}

export default NavBar;
