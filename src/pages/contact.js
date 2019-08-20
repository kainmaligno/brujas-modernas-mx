import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from '../components/Elements/Contact'
import ContactContainer from '../components/Elements/ContactContainer'
import Subtitle from '../components/Elements/Subtitle'
const SecondPage = () => (
  <ContactContainer>
     <Contact>
      <Subtitle>Contact us</Subtitle>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    </Contact>
  </ContactContainer>
)

export default SecondPage
