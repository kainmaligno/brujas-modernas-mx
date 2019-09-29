import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
//components
import Image from "gatsby-image"
import palet from "../../pallete"


const ImageContainer = styled.div`
  max-width: 1300px;
  margin: 1% auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

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
const Intro = styled.h6`
  letter-spacing: 3px;
  color:${palet.color.secondary.main};
  font-family:Dosis;
  text-decoration:none;
`
const Portfolio = () => {


   const  data = useStaticQuery(graphql`
    query{
      cover: file(relativePath: { eq: "cover2.jpeg" }){
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200, quality: 100,jpegProgressive:true) {
            src
            originalName
            ...GatsbyImageSharpFluid

          }
        }
      }
      logo: file(relativePath: { eq: "logob-negro.jpg" }){
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200, quality: 100,jpegProgressive:true) {
            src
            originalName
            ...GatsbyImageSharpFluid

          }
        }
      }
    }
  `)

  return (
    <ImageContainer>
      <Link  style={{textDecoration:'none'}} to='galeria'>
      <Cardcontainer>
        <Intro>Festival Tierra magica</Intro>
          <Image
          style={{ borderRadius: "8px" }}
          fluid={data.cover.childImageSharp.fluid}
          alt={data.cover.childImageSharp.fluid.originalName}
          title={data.cover.childImageSharp.fluid.originalName}
          src={data.cover.childImageSharp.fluid.src}
          />
       </Cardcontainer>
      </Link>
     <Link style={{textDecoration:'none'}} to='galeria'>
      <Cardcontainer>
        <Intro>Festival de Brujas</Intro>
          <Image
          style={{ borderRadius: "8px" }}
          fluid={data.logo.childImageSharp.fluid}
          alt={data.logo.childImageSharp.fluid.originalName}
          title={data.logo.childImageSharp.fluid.originalName}
          src={data.logo.childImageSharp.fluid.src}
          />
       </Cardcontainer>
     </Link> 
      {/* {Object.keys(data).length ? (
        data.allFile.edges.map((image, i) => {
          return <Cards image={image.node.childImageSharp.fluid} key={i} />
        })
      ) : (
        <div>loading...</div>
      )} */}
    </ImageContainer>
  )
}

export default Portfolio
