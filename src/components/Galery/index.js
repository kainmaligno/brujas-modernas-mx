import React from "react"
import styled from "styled-components"
import { useStaticQuery, StaticQuery, graphql } from "gatsby"
//components
import Cards from "../Card"
import Image from "gatsby-image"

const ImageContainer = styled.div`
  max-width: 1300px;
  margin: 1% auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const Portfolio = () => {
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

export default Portfolio
