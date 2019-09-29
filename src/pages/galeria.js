import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { animateScroll as scroll } from "react-scroll"
import { Link as Linkgatsby } from "gatsby"
import logo from "../images/star.png"
import styled from "styled-components"
import device from "../device"
import palete from "../pallete"
import SEO from "../components/seo"
import Footer from "../components/Footer"
//componnentes
import Cards from "../components/Card"
import faceIcon from "../assets/media/facebook-brands.svg"
import instagram from "../assets/media/instagram.svg"
import youtube from "../assets/media/youtube-brands.svg"

const ImageContainer = styled.div`
  max-width: 1300px;
  margin: 8% auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media ${device.tablet} {
    justify-content: center;
  }
`
const Nav = styled.nav`
  width: 100%;
  height: ${props => (props.visible ? "100px" : "80px")};
  background-color: ${props =>
    props.visible ? "rgba(0,0,0,0.9)" : "transparent"};
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: 0.6s;
  @media ${device.mobileL} {
    display: none;
  }
`
const Logo = styled.img`
  border-radius: 50%;
  height: 3em;
  width: 3em;
  margin: 2em 2em 2em 2em;
  transition: transform 200ms ease-in-out;
  cursor: pointer;
  background-color:${props => props.icon? '#fafafa':'none'};
  padding: ${props => props.icon? '3px': 'none'};
  &:hover {
    transform: rotate(360deg);
  }
  @media ${device.mobileL} {
    display: none;
  }
`
const List = styled.li`
  text-decoration: none;
  list-style: none;
  display: ${props => (props.visible? 'flex':'none' && props.mobile?'flex':'none')};
  width: ${props => (props.mobile ? "100%" : "100%")};
  margin-left: 20px;
  padding: 10px;
  font-family: "Hind", sans-serif;
  border-radius: 8px 8px 8px 8px;
  border: 1px solid ${palete.color.green.main};
  background-color: ${palete.color.secondary.main};
  color: ${palete.color.white.main};
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  /*mobil*/

  :hover {
    text-decoration: none;
    color: #000000;
    background-color: ${palete.color.primary[900]};
    border: 1px solid ${palete.color.primary[900]};
    cursor: pointer;
  }
`

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: flex-start;
  position: fixed;
  height: 100%;
  width: 70%;
  z-index: 100;
  background-color: #020202;
  border-radius: 20px;
  /* transform: translateX(-100%); */
  transition: transform 0.3s ease-out;
  transform: ${props => (props.mobile ? "translateX(0)" : "translateX(-100%)")};
  /* transform: translateX(0); */

  @media ${device.desktop} {
    display: none;
    justify-content:center;
  }
  @media ${device.mobileL} {
    display: flex;
    justify-content:center;
  }
`
const VideoContainer = styled.div`
     width: 100vw;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-flow: wrap;
    @media only screen and ${device.laptop}{
      justify-content:center;
    }
`
const videoCard = styled.div`
    padding: 2em;
    width: auto;
    height: auto;
    margin: 2em;
`
const IconMobile = styled.img`
  border-radius: 50%;
  height: 3em;
  width: 3em;
  margin: 2em 2em 2em 2em;
  transition: transform 200ms ease-in-out;
  cursor: pointer;
  position: fixed;
  z-index: 200;
  visibility: ${props => (props.mobile ? "hidden" : "inline-flex")};
  &:hover {
    transform: rotate(360deg);
  }
  @media ${device.laptopL} {
    display: none;
  }
  @media ${device.desktop} {
    display: none;
  }
  @media ${device.mobileL} {
    display: inline-flex;
  }
`

const Backdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`


const Galeria = ({props}) => {
  const [visible, setVisible] = useState(false)
  const [mobile, setMobile] = useState(false)
 
  /**useEffect fr scroll on navbar  */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 200
      document.getElementById("nav")
      if (isTop) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  })

  
  let backdrop
if (mobile) {
  backdrop = <Backdrop onClick={() => setMobile(false)} />
}
  //backdrop controler todo: refactor on components
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
                presentationWidth
              }
            }
          }
        }
      }
    }
  `)
  /*const handleClick = (e) => {
    console.log('estas en click')
  }*/

  return (
    <div>
      <SEO title=" Festival Brujas Modernas Galeria" />
      <div>
        <IconMobile
          src={logo}
          title="mobile"
          alt="mobile-logo"
          onClick={() => setMobile(true)}
          mobile={mobile}
        />
      </div>
      <MobileNav mobile={mobile}>
        <Linkgatsby to="/" style={{ textDecoration: "none", width: "70%" }}>
          <List mobile={mobile}>Pagina Principal</List>
        </Linkgatsby>
        <Linkgatsby
          to="/contact/"
          style={{ textDecoration: "none", width: "70%" }}
        >
          <List mobile={mobile}>Contacto</List>
        </Linkgatsby>
      </MobileNav>
      {backdrop}

      {/** nav mob bar  */}

      <Nav id="nav" visible={visible}>
        <div style={{display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:'2em'}}>
          
            <Linkgatsby
              to="/"
              style={{ textDecoration: "none", marginRight: "2em" }}
            >
              <Logo src={logo} title="Logo" alt="MinLogo" />
            </Linkgatsby>
          
          <Linkgatsby
            to="/"
            style={{ textDecoration: "none", marginRight: "2em" }}
          >
            <List visible={visible}>Pagina Principal</List>
          </Linkgatsby>
          <Linkgatsby to="/contact/" style={{ textDecoration: "none" }}>
            <List visible={visible}>Contacto</List>
          </Linkgatsby>
        </div>
        <div>
          <a href="https://www.facebook.com/FestivalBrujas/" target="_blank"  rel="noopener noreferrer">
            <Logo
              icon
              src={faceIcon}
              title="Festival de Brujas"
              alt="Festival de brujas"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/El-Aquelarre-328246424785272/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo icon src={faceIcon} title="El Aquelarre" alt="El aquelarre" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/festival_de_brujas_mx/?hl=es-la"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo
              icon
              src={instagram}
              title="FestivalBrujas Instagram"
              alt="Brujas Modernas Instagram"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCLegGX_n-nllzE3Ldngphkw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo
              icon
              src={youtube}
              title="Festival De Brujas Festival de Brujas México"
              alt="Brujas Modernas YouTube"
            />
          </a>
        </div>
      </Nav>
      <ImageContainer>
        <VideoContainer>
          <videoCard>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xJdbXDnSrSk"
            title="Festival Bruja Moderna"
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </videoCard>
            <videoCard>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ioz7aMdpGg4" 
            title="Festival second video"
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </videoCard>
        </VideoContainer>
       
        
        {Object.keys(data).length ? (
          data.allFile.edges.map((image, i) => {
            return (
              <Cards
                slider={image}
                image={image.node.childImageSharp.fluid}
                key={i}
              />
            )
          })
        ) : (
          <div>loading...</div>
        )}
      </ImageContainer>
      <Footer />
    </div>
  )
}

export default Galeria
