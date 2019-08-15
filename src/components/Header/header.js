import React from "react"
import "./header.css"
import PropTypes from "prop-types"
import Navbar from "../Navbar"
import forest from "../../images/forest.mp4"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar />
    <div className="hero">
      <video width="100%" height="100vh" loop autoPlay muted>
        <source src={forest} type="video/mp4" />
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
