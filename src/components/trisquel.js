import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ props }) => {
  const data = useStaticQuery(graphql`
    query {
      trisquel: file(relativePath: { eq: "trisquel.png" }) {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200, quality: 100) {
            src
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { fluid } = data.trisquel.childImageSharp
  //...GatsbyImageSharpFluid instead of src
  return (
    <Img
      fluid={fluid}
      title="trisquel"
      // objectPosition="50% 50%"
      alt={fluid.originalName}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 100,
        width: 100,
        borderRadius: "50%",
      }}
    />
  )

  //
}

export default Image
