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
      placeholderImage: file(relativePath: { eq: "Pentacle-Transparent.png" }) {
        childImageSharp {
          resize(height: 100, width: 100) {
            src
          }
        }
      }
      logos: file(relativePath: { eq: "logob-negro.jpg" }) {
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
  
  //...GatsbyImageSharpFluid instead of src
  return (
    <Img
      title="Festival Brujas modernas "
      sizes={data.logos.childImageSharp.fluid}
      alt="Brujamoderna"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 250,
        width: 250,
        borderRadius:'8px',
        marginBottom:'1em'
      }}
      src={data.logos.childImageSharp.fluid.src}
    />
  )
}

export default Image
