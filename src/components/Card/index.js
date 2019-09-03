import React, { useState} from "react"
import Slider from '../Slider'
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
const Backdrop = styled.div`
  position: fixed;
  z-index:100;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background:rgba(0,0,0,0.5);
`

/**
 *
 * @param image from component
 * @param title string from component
 * @params props  all other information about the componnet
 */

const Card = ({ image, ...props }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      {visible? ( 
      <Backdrop onClick={()=>setVisible(false)}>
       <Slider/>
      </Backdrop>)
       :
      (
        <Cardcontainer  onClick={()=>setVisible(true)}>
        <Image
          style={{ borderRadius: "8px" }}
          fluid={image}
          alt={image.originalName}
          title={image.originalName}
        />
      </Cardcontainer>
      )}
    </div>
  )
}

export default Card
