import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Elements/Contact"
import ContactContainer from "../components/Elements/ContactContainer"
import Subtitle from "../components/Elements/Subtitle"
import TextArea from "../components/Elements/TextArea"
import Input from "../components/Elements/input"
import styled from "styled-components"
import palet from '../pallete'
import Button from '../components/Elements/Button'
import device from '../device'

const MainBox = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-content: center;
  width: 96%;
  height: 70%;
  padding:3%;
  @media ${device.tablet}{
   flex-direction:column;
  }
`

const ExtraContact = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: auto;
  height: auto;
  letter-spacing:3px;
  color:${palet.color.primary.main};
  @media ${device.tablet}{
   display:none;
  }
`
const SecondPage = () => (
  <ContactContainer>
    <SEO title="Contact" />
    <Contact>
      <Subtitle>Envianos un Email!!!</Subtitle>
      <MainBox>
        <ExtraContact>
          <span>Mexico, CDMX</span><br/>
          <span>(+52) 15611038379</span><br/>
          <span> labrujamodernaoficial@gmail.com<br />
            </span>
        </ExtraContact>
        <form 
          name="contact-form"
          method="POST"
          
          action="https://formspree.io/labrujamodernaoficial@gmail.com"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <input type="hidden" name='_next' value='https://stupefied-carson-3d8b1f.netlify.com/succes/' />

          <Input name="name" type="text" placeholder="Yor name" label />
          <Input name="email" type="email" placeholder="your email name@name.com" />
          <TextArea  name="textArea" placeholder="Your Message" type="text" />
          <Button primary type='submit'>Enviar Mensaje</Button>
        </form>
      </MainBox>
      <Link to="/"><Button>Regresa al Home</Button></Link>
    </Contact>
  </ContactContainer>
)

export default SecondPage
