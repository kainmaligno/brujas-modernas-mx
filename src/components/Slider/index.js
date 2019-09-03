import React, { useState, useEffect } from "react"
import { Gallery, GalleryImage } from "react-gesture-gallery"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const images = [
  "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80",
  "https://images.unsplash.com/photo-1557389352-e721da78ad9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1553969420-fb915228af51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
  "https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1550640964-4775934de4af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
]

const Slider = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (index === 23) {
        setIndex(0)
      } else {
        setIndex(prev => prev + 1)
      }
    }, 3000)
    return () => clearInterval(timer)
  }, [index])

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/assets/galeria/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed(width: 500, height: 500) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Gallery
        //   style={{
        //     background: "black",
        //     height: "100vh",
        //     width: "100vw"
        //   }}
        index={index}
        onRequestChange={i => {
          setIndex(i)
        }}
      >
        {Object.keys(data).length ? (
          data.allFile.edges.map((image, i) => {
            return <Image fixed={image.node.childImageSharp.fixed} />
          })
        ) : (
          <div>no hay nadie</div>
        )}
        {/* {images.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))} */}
      </Gallery>
    </>
  )
}

export default Slider
