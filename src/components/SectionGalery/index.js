import React from "react"
import styled from "styled-components"
//components
import Separador from "../Elements/separador"
import Trisquel from "../trisquel"
import Section from "../Elements/ContenedorSeccion"
import Subtitle from "../Elements/Subtitle"
import Portfolio from "../Galery"

const AboutText = styled.p`
  font-family: "Hind", sans-serif;
  text-align: justify;
`

const Galery = () => (
  <div>
    <Separador>
      <Trisquel />
    </Separador>
    <Section id="galery">
      <Subtitle>GALERY</Subtitle>
      <AboutText>
        Cada festival de brujas lo realizamos con diferente temática dentro del
        tema mágico, como festival de brujas y hadas, potterico, o celebrando
        cada estación de la rueda.
      </AboutText>
      <Portfolio />
    </Section>
  </div>
)

export default Galery
