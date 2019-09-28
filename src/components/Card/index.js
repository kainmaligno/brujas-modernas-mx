import React, { useState } from "react"
import Slider from "../Slider"
import Image from "gatsby-image/withIEPolyfill"
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
  z-index: 100;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

/**
 *
 * @param image from component
 * @param title string from component
 * @params props  all other information about the componnet
 *
 */

const Card = ({ image, i }) => {
  const [visible, setVisible] = useState(false)

  const NonStretchedImage = props => {
    let normalizedProps = props
    if (props.fluid && props.fluid.presentationWidth) {
      normalizedProps = {
        ...props,
        style: {
          ...(props.style || {}),
          maxWidth: props.fluid.presentationWidth,
          margin: "0 auto", // Used to center the image
        },
      }
    }
  
    return <Image {...normalizedProps} />
  }

  let backdrop = <Backdrop onClick={() => setVisible(false)} />

  if (visible) {
    return (
      <Backdrop onClick={() => setVisible(false)}>
        <div
          style={{
            height: "80%",
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            resizeMode:"container",
            alignSelf:"center",
            zIndex: "200",
          }}
        >
          <Image
            props
            style={{
              height: "100%",
              width: "80%",
              borderRadius: "8px",
              border: "2px solid red",
            }}
            fluid={image}
          />
        </div>
      </Backdrop>
       
      
    )
  }
  return (
    <Cardcontainer onClick={() => setVisible(true)}>
      <Image
        style={{ borderRadius: "8px" }}
        fluid={image}
        alt={image.originalName}
        title={image.originalName}
        key={i}
      />
    </Cardcontainer>
  )
}

export default Card
