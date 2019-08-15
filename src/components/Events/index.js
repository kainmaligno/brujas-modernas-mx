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
const Eventos = () => {
  const eventos = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/assets/eventos/" } }) {
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
      {Object.keys(eventos).length ? (
        eventos.allFile.edges.map((image, i) => {
          return <Cards image={image.node.childImageSharp.fluid} key={i} />
        })
      ) : (
        <div>loading...</div>
      )}
    </ImageContainer>
  )
}

export default Eventos
