import React from "react";
import "./AboutMePage.css";

function AboutMePage() {
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
            I'm a <strong>Frontend Focused Web Developer</strong> building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the <strong>Projects section.</strong>
            <br></br><br></br> I also like sharing content related to the stuff that I
            have learned over the years in Web Development so it can help other
            people of the Dev Community.<br></br><br></br>Feel free to Connect or Follow me on my
            Linkedin and Instagram where I post useful content related to Web
            Development and Programming I'm open to Job opportunities where I
            can contribute, learn and grow.<br></br><br></br> If you have a good opportunity that
            matches my skills and experience then don't hesitate to contact me.
          </p>
          <button id="AboutMePageDownLeftButton">Contact Me</button>
        </div>
        <div id="AboutMePageRight">
          <h1 id="AboutMePageRightLabel">My skills</h1>
          <div id="skillTreeContainerMain">
            <div id="skillTreeContainer1">
              <div className="skillTreeLabel">React</div>
              <div className="skillTreeLabel">Javascript</div>
              <div className="skillTreeLabel">CSS</div>
              <div className="skillTreeLabel">HTML</div>
            </div>
            <div id="skillTreeContainer2">
            <div className="skillTreeLabel">Sass</div>
              <div className="skillTreeLabel">git</div>
              <div className="skillTreeLabel">github</div>
              <div className="skillTreeLabel">Mobile First</div>
            </div>
            <div id="skillTreeContainer3">
            <div className="skillTreeLabel">SQL</div>
              <div className="skillTreeLabel">MongoDB</div>
              <div className="skillTreeLabel">Knex.js</div>
              <div className="skillTreeLabel">Express.js</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
