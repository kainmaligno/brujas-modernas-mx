import React from "react"
import { Link } from "gatsby"
//components
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/SectionAbout"
import WeAre from "../components/SectionWeAre"
import Galery from "../components/SectionGalery"
import Events from "../components/SectionEvents"
const IndexPage = () => (
  <Layout>
    <SEO title="Brujas Modernas" />
    <About />
    <WeAre />
    <Galery />
    <Events />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
