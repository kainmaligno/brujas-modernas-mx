import React, { useEffect, useState } from "react"
import styled from "styled-components"
import logo from "../../images/star.png"
import palete from "../../pallete"
import device from "../../device"
import { Link, animateScroll as scroll } from "react-scroll"
import { Link as Linkgatsby } from "gatsby"

const Nav = styled.nav`
  width: 100%;
  height: ${props => (props.visible ? "100px" : "80px")};
  background-color: ${props =>
    props.visible ? "rgba(0,0,0,0.9)" : "transparent"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const UnorderContiner = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2em 2em 2em 2em;
  @media ${device.mobileL} {
    display: none;
  }
`
const List = styled.li`
  text-decoration: none;
  list-style: none;
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
  :hover {
    text-decoration: none;
    color: #000000;
    background-color: ${palete.color.primary[900]};
    border: 1px solid ${palete.color.primary[900]};
    cursor: pointer;
  }
`
const Logo = styled.img`
  border-radius: 50%;
  height: 3em;
  width: 3em;
  margin: 2em 2em 2em 2em;
  transition: transform 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotate(360deg);
  }
  @media ${device.mobileL} {
    display: none;
  }
`
//mobile settings

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: unset;
  align-items: flex-start;
  position: fixed;
  height: 100%;
  width: 70%;
  z-index: 100;
  background-color:white;
  /* transform: translateX(-100%); */
  transition: transform 0.3s ease-out;
  transform:${props => props.mobile? 'translateX(0)':'translateX(-100%)'};
  /* transform: translateX(0); */

  @media ${device.desktop}{
    display:none;
  }
  @media ${device.mobileL}{
    display:flex;
  }
`

const IconMobile = styled.img`
  border-radius: 50%;
  height: 3em;
  width: 3em;
  margin: 2em 2em 2em 2em;
  transition: transform 200ms ease-in-out;
  cursor: pointer;
  position:fixed;
  z-index:200;
  visibility:${props => props.mobile ? "hidden": "inline-flex"};
  &:hover {
    transform: rotate(360deg);
  }
  @media ${device.laptopL} {
    display: none;
  }
  @media ${device.desktop}{
    display:none;
  }
  @media ${device.mobileL} {
    display: inline-flex;
  }
`

const ColumnContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 2em 2em 2em 2em;
  background-color: white;
  height: 100%;
  width: 70%;
  z-index:101;
  & li {
    list-style: none;
    color: black;
  }
`

 const Backdrop = styled.div`
 position:fixed;
 height:100%;
 width:100%;
 top:0;
 left:0;
 background:rgba(0,0,0,0.3);

 `; 
/**
 * @function useEffect manejar el scroll de la barra de navegacion
 *
 */

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [mobile, setMobile] = useState(false);

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
  //backdrop controler todo: refactor on components
  let backdrop;
  if(mobile){
    backdrop = <Backdrop onClick={() => setMobile(false)}/>
  }

  return (
    <>
      {/** todo in this component desktop view separate  */}
      <div>
          <IconMobile
            src={logo}
            title="mobile"
            alt="mobile-logo"
            onClick={()=> setMobile(true)}
            mobile={mobile}
          />
        </div>
      <MobileNav mobile={mobile} >
        <ColumnContainer>
          <li>ABOUT</li>
          <li>WE ARE</li>
          <li>GALERY</li>
          <li>COMMING SOON </li>
          <li>CONTACT</li>
        </ColumnContainer>
      </MobileNav>
      {backdrop}

      <Nav id="nav" visible={visible}>
        <div>
          <Logo
            src={logo}
            title="Logo"
            alt="MinLogo"
            onClick={() => scroll.scrollToTop()}
          />
        </div>

        <div>
          <UnorderContiner id="nav-items">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-230}
              duration={500}
            >
              <List>About</List>
            </Link>

            <Link
              activeClass="active"
              to="weare"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <List>We are</List>
            </Link>

            <Link
              activeClass="active"
              to="galery"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <List>Galery</List>
            </Link>

            <Link
              activeClass="active"
              to="comming"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <List>Comming soon</List>
            </Link>

            <Linkgatsby to="/contact/" style={{ textDecoration: "none" }}>
              <List>Contact</List>
            </Linkgatsby>
          </UnorderContiner>
        </div>
      </Nav>
    </>
  )
}

export default Navbar
