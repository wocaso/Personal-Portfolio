import React from "react";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div id="ProjectsPageContainer">
      <div id="ProjectsPageIntro">
        <h1 id="ProjectsPageIntroH1">Projects</h1>
        <div id="ProjectsPageIntroSpacer"></div>
        <p id="ProjectsPageIntroDesc">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <div id="ProjectsPageDownContainer">
        <div id="ProjectsPageDownProj1">
          <div id="ProjectsPageDownProj1img">

          </div>
          <div id="ProjectsPageDownProj1Desc">

          <h1 id="projectsPageDownLeftLabel">Who am I?</h1>
          <p id="projectsPageDownLeftText">
            I'm a <strong>Frontend Focused Web Developer</strong> building and
            managing the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the <strong>Projects section.</strong>
          </p>
          <button id="projectsPageDownLeftButton">Contact Me</button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
