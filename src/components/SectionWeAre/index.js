import React from "react"
import styled from "styled-components"
//components
import Separador from "../Elements/separador"
import Trisquel from "../trisquel"
import Section from "../../components/Elements/ContenedorSeccion"
import Subtitle from "../../components/Elements/Subtitle"
const AboutText = styled.p`
  font-family: "Hind", sans-serif;
  text-align: justify;
`

const WeAre = () => (
  <div>
    <Separador>
      <Trisquel />
    </Separador>
    <Section id="weare">
      <Subtitle>DIFERENCIA</Subtitle>
      <AboutText>
        Lejos de las diferencias entre religiones, Festival de brujas a creado
        espacios donde las brujas y magos de diferentes creencias y religiones
        conviven en armonía.
      </AboutText>
    </Section>
  </div>
)

export default WeAre
