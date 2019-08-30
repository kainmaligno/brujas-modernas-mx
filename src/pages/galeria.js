import React from 'react'
import { useStaticQuery, StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import device from '../device'
import SEO from "../components/seo"
import Button from '../components/Elements/Button'


//componnentes 
import Cards from '../components/Card'

const ImageContainer = styled.div`
  max-width: 1300px;
  margin: 1% auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media ${device.tablet}{
   justify-content:center;
  }
`
const Galeria = () => {
    const data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/assets/galeria/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 960, maxHeight: 760) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

    return (
        <ImageContainer>
            <SEO title='Galery'/>
        {Object.keys(data).length ? (
          data.allFile.edges.map((image, i) => {
            return <Cards image={image.node.childImageSharp.fluid} key={i} />
          })
        ) : (
          <div>loading...</div>
        )}
      </ImageContainer>
    )
} 


export default Galeria 