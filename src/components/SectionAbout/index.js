import React from "react"
import styled from "styled-components"
//components
import Separador from "../Elements/separador"
import Trisquel from "../trisquel"
import Section from "../../components/Elements/ContenedorSeccion"
import Subtitle from "../../components/Elements/Subtitle"
import palete from '../../pallete'
//image
import Logo from '../logo'
//utils
const Intro = styled.h6`
  letter-spacing: 3px;
  color:${palete.color.secondary.main};
`
const AboutText = styled.p`
  font-family: "Hind", sans-serif;
  text-align: justify;
  color:#000000;
`
const About = () => (
  <div>
    <Separador>
      <Trisquel />
    </Separador>

    <Section id="about">
      <Intro>SOMOS BRUJAS</Intro>
      <Logo/>
      <Subtitle>LA BRUJA MODERNA</Subtitle>
      <AboutText> 
        Festival de brujas la bruja moderna, los pioneros en crear espacios
        dedicados a las brujas y magos buscando generar empleos a mercaderes y
        artistas e informar a la gente sobre las brujas de la vida real y la
        gran diferencia de ciencia ficción.
      </AboutText>
    </Section>
  </div>
)

export default About
