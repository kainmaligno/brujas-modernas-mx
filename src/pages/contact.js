import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/Elements/Contact"
import ContactContainer from "../components/Elements/ContactContainer"
import Subtitle from "../components/Elements/Subtitle"
import TextArea from "../components/Elements/TextArea"
import Input from "../components/Elements/input"
import styled from "styled-components"
import palet from '../pallete'
import Button from '../components/Elements/Button'

const MainBox = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-content: center;
  width: 96%;
  height: 70%;
  padding:3%;
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
`
const SecondPage = () => (
  <ContactContainer>
    <SEO title="Contact" />
    <Contact>
      <Subtitle >Contact us</Subtitle>
      <MainBox>
        <ExtraContact>
          <span>PO Box 16122 Collins Street West Victoria 8007 Australia.</span>
          <span>(+44) 239 121 332.</span>
          <span> hello@example.com <br />
            job@example.com</span>
        </ExtraContact>
        <form 
          netlify
          name="contact-form"
          method="post"
          data-neftlify="true"
          data-netlify-honeypot="bot-field"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Input name="name" type="text" placeholder="Yor name" label />
          <Input name="email" type="email" placeholder="name@name.com" />
          <TextArea  name="textArea" placeholder="Your Message" type="text" />
          <Button primary>Send Message</Button>
        </form>
      </MainBox>
      <Link to="/"><Button>Go Back to Home</Button></Link>
    </Contact>
  </ContactContainer>
)

export default SecondPage
