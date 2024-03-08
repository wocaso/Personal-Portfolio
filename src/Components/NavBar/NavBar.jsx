import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    
    <div id='NavBarContainer'>
        <div id='NavBarLeft'>
        <img id="imgWoco"src="./Assets/woco.png" alt="" />
            <h1>Gabriel Busato</h1>
            
        </div>
        <div id='NavBarMiddle'>
            <a href='#' className='labelTextNavBar'>Bussines</a>
            <a href='#' className='labelTextNavBar'>About me</a>
            <a href='#' className='labelTextNavBar'>Contact me</a>
        </div>
        <div id='NavBarRight'>
            <img className="redesImgNavBar"src="./Assets/twitter.png" alt="" />
            <img className="redesImgNavBar" src="./Assets/github.png" alt="" />
            <img className="redesImgNavBar" src="./Assets/instagram.png" alt="" />
        </div>
    </div>
  )
}

export default NavBar