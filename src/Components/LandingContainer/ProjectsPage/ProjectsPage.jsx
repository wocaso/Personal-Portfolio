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
          created
        </p>
      </div>
      <div id="ProjectsPageDownContainer">
        <div id="ProjectsPageDownProj1">
          <div id="ProjectsPageDownProj1imgContainer">
            <img
              id="ProjectsPageDownProj1img"
              src="./Assets/myRestaurantApp.png"
              alt=""
            />
          </div>
          <div id="ProjectsPageDownProj1Desc">
            <h1 id="projectsPageDownLeftLabel">Town Grill Bar</h1>
            <p id="projectsPageDownLeftText">
            Town Grill Bar is a web template that I created targeting the restaurant
              and food industry which anyone can use to present their business
              online.
            </p>
            <button id="projectsPageDownLeftButton">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
