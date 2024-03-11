import React from "react";
import "./AboutMePage.css";

function AboutMePage() {
  let scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  function goToContact() {
    scrollToSection("contactPageContainer");
  }
  return (
    <div id="AboutMePageContainer">
      <div id="AboutMePageIntro">
        <h1 id="AboutMePageIntroH1">About me</h1>
        <div id="AboutMePageIntroSpacer"></div>
        <p id="AboutMePageIntroDesc">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div id="AboutMePageDown">
        <div id="AboutMePageDownLeft">
          <h1 id="AboutMePageDownLeftLabel">Who am I?</h1>
          <p id="AboutMePageDownLeftText">
            I'm a <strong>Frontend Focused Web Developer</strong> building and
            managing the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the <strong>Projects section.</strong>
            <br></br>
            <br></br>Feel free to Connect or Follow me on my Linkedin and
            Github where I post useful content related to Web Development and
            Programming I'm open to Job opportunities where I can contribute,
            learn and grow.<br></br>
            <br></br> If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
          <button onClick={goToContact} id="AboutMePageDownLeftButton">Contact Me</button>
        </div>
        <div id="AboutMePageRight">
          <h1 id="AboutMePageRightLabel">My skills</h1>
          <div id="skillTreeContainerMain">
            <div id="skillTreeContainer1">
              <div className="skillTreeLabel">&nbsp;React&nbsp;</div>
              <div className="skillTreeLabel">&nbsp;Javascript&nbsp;</div>
              <div className="skillTreeLabel">&nbsp;CSS&nbsp;</div>
              <div className="skillTreeLabel">&nbsp;HTML&nbsp;</div>
              <div className="skillTreeLabel">&nbsp;Sass&nbsp;</div>
            </div>
            <div id="skillTreeContainer2">
              <div className="skillTreeLabel">&nbsp;Express.js&nbsp;</div>
              <div className="skillTreeLabel">&nbsp;git&nbsp;</div>
              <div className="skillTreeLabel">&nbsp;github&nbsp;</div>
              <div className="skillTreeLabel">&nbsp;Mobile First&nbsp;</div>
            </div>
            <div id="skillTreeContainer3">
              <div className="skillTreeLabel">&nbsp;SQL&nbsp;</div>
              <div className="skillTreeLabel">&nbsp;MongoDB&nbsp;</div>
              <div className="skillTreeLabel">&nbsp;Knex.js&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
