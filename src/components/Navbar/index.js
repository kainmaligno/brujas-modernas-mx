import React, { useEffect, useState } from "react"
import styled from "styled-components"
import logo from "../../images/star.png"
import palete from "../../pallete"
import { Link, animateScroll as scroll } from "react-scroll"
import { Link as Linkgatsby } from "gatsby" 
//rgba(174,191,64,0.5)
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
  z-index: 99;
  transition: 0.6s;
`

const UnorderContiner = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 2em 2em 2em 2em;
`
const List = styled.li`
    & .active {background-color:${palete.color.primary[900]}}
  text-decoration: none;
  list-style: none;
  margin-left: 20px;
  padding: 10px;
  font-family:'Hind', sans-serif;
  border-radius: 8px 8px 8px 8px;
  border: 1px solid ${palete.color.green.main};
  background-color:${palete.color.secondary.main};
  color:${palete.color.white.main};
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  :hover {
    text-decoration: none;
    color:#000000;
    background-color: ${palete.color.primary[900]};
    border: 1px solid ${palete.color.primary[900]};
    cursor: pointer;
  }
`
// const Anchor = styled.span`
//   color:${palete.color.primary.main};
//   text-decoration: none;
//   font-family:'Hind', sans-serif;

//   -webkit-transition: bottom 0.1s ease-in-out;
//   -moz-transition: bottom 0.1s ease-in-out;
//   -o-transition: bottom 0.1s ease-in-out;
//   transition: bottom 0.3s ease-in-out;
//   :hover {
//     text-decoration: none;
//     cursor: pointer;
//     color: ${palete.color.aqua[800]};
//   }
// `

const Logo = styled.img`
  border-radius: 50%;
  height: 3em;
  width: 3em;
  margin: 2em 2em 2em 2em;
  transition: transform 200ms ease-in-out;
  cursor:pointer;
  &:hover {
    transform: rotate(360deg);
  }
`
/**
 * @function useEffect manejar el scroll de la barra de navegacion
 * 
 */

const Navbar = () => {
  const [visible, setVisible] = useState(false)

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
  return (
    <Nav id="nav" visible={visible}>
      <div>
        <Logo src={logo} title="Logo" alt="MinLogo"
        onClick={()=> scroll.scrollToTop()
        }
        />
      </div>
      <div>
        <UnorderContiner>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-230}
            duration={500}
          >
            <List>
              About
            </List>
          </Link>

          <Link
            activeClass="active"
            to="weare"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <List>
              We are
            </List>
          </Link>

          <Link
            activeClass="active"
            to="galery"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <List>
              Galery
            </List>
          </Link>

          <Link
            activeClass="active"
            to="comming"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <List>
              Comming soon
            </List>
          </Link>

          <Linkgatsby to="/contact/" style={{textDecoration:'none'}}>
            <List>
              Contact
            </List>
          </Linkgatsby>
        </UnorderContiner>
      </div>
    </Nav>
  )
}

export default Navbar
