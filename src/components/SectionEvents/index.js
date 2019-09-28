import React from "react"
import styled from "styled-components"
//components
import Separador from "../Elements/separador"
import Trisquel from "../trisquel"
import Section from "../../components/Elements/ContenedorSeccion"
import Subtitle from "../../components/Elements/Subtitle"
import Eventos from "../Events"
const AboutText = styled.p`
  font-family: "Hind", sans-serif;
  text-align: justify;
`

const Events = () => (
  <div>
    <Separador>
      <Trisquel />
    </Separador>
    <Section  id="comming">
      <Subtitle>PROXIMAMENTE!</Subtitle>
      <AboutText>
        Con el fin de que cada bruja y mago pueda celebrar su poder, la magia y
        los dioses.
      </AboutText>
      <Eventos />
    </Section>
  </div>
)

export default Events
