import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import palet from "../../pallete"
const Cardcontainer = styled.div`
  top: 0;
  width: 250px;
  left: 0;
  border-radius: 20px;
  margin-bottom: 1rem;
  padding: 10px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  :hover {
    box-shadow: 2px 2px 2px 2px ${palet.color.primary.main};
  }
`
/**
 *
 * @param image from component
 * @param title string from component
 * @params props  all other information about the componnet
 */

const Card = ({ image }) => (
  <Cardcontainer>
    {/* <span>card</span> */}
    <Image
      style={{ borderRadius: "8px" }}
      fluid={image}
      alt={image.originalName}
      title={image.originalName}
    />
  </Cardcontainer>
)

export default Card
