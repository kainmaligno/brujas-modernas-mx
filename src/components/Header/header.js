import React from "react"
import "./header.css"
import PropTypes from "prop-types"
import Navbar from "../Navbar"
import SideBar from '../Sidebar'
// import forest from "../../images/forest.mp4"
import poster from '../../images/bosque.jpg'
const video = require('../../images/moon1.mp4')



const Header = ({ siteTitle }) => (
  <header>
    <Navbar />
    <SideBar/>
    <div className="hero">
      <video width="100%" height="100vh"  preload='auto' poster={poster} loop autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="content">
        <h1 className="mainTitle">festival de brujas, la bruja moderna</h1>
        <p className="mainp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
