import React from "react";
import "./NavBar.css";

function NavBar() {

  let scrollToSection = (id) => {
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
  return (
      <div id="NavBarContainer">
        <div id="NavBarLeft">
          <img id="imgWoco" src="./Assets/woco.png" alt="" />
          <h1>Gabriel Busato</h1>
        </div>
        <div id="NavBarMiddle">
          <a onClick={goToProjects} href="#" className="labelTextNavBar">
            Projects
          </a>
          <a href="#" onClick={goToAboutMe} className="labelTextNavBar">
            About me
          </a>
          <a onClick={goToContact} href="#" className="labelTextNavBar">
            Contact me
          </a>
        </div>
        <div id="NavBarRight">
          <img className="redesImgNavBar" src="./Assets/twitter.png" alt="" />
          <img className="redesImgNavBar" src="./Assets/github.png" alt="" />
          <img className="redesImgNavBar" src="./Assets/instagram.png" alt="" />
        </div>
      </div>


  );
}

export default NavBar;
