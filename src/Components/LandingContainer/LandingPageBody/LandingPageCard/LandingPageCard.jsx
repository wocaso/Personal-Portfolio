import React from 'react'
import "./LandingPageCard.css"

function LandingPageCard(props) {
  function readyClick(){
    props.buttonFunction(props.goToProp)

  }
  return (
    <div id='LandingPageCardContainer'>
        <div id='LandingPageCardTittle'>
            <h1>Hi! I'm Gabriel Busato, a front-end developer</h1>
        </div>
        <div id='LandingPageCardDescription'>
            <p>Here you will fullfill your demands with ease, and we are cappable of running all type of proyects that the user needs</p>
        </div>
        <div>
            <button onClick={readyClick} id='LandingPageCardButton'>Projects</button>
        </div>
    </div>
  )
}

export default LandingPageCard