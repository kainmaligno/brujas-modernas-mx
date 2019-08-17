import React, { useEffect, useState } from "react"
import styled from "styled-components"
import logo from "../../images/star.png"
import palete from "../../pallete"
const Nav = styled.nav`
  width: 100%;
  height: ${props => (props.visible ? "100px": "80px")};
  background-color:${props =>(props.visible ? 'rgba(1,1,1,0.5)':'transparent')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  transition:0.4s;
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
  text-decoration: none;
  list-style: none;
  margin-left: 20px;
  padding: 10px;
  border-radius: 8px 8px 8px 8px;
  border: 1px solid ${palete.color.primary.main};
  -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  :hover {
    text-decoration: none;
    background-color: ${palete.color.primary[900]};
    border: 1px solid ${palete.color.primary[900]};
    cursor: pointer;
  
  }
`
const Anchor = styled.a`
  color: ${palete.color.aqua[800]};
  text-decoration: none;
  -webkit-transition: bottom 0.1s ease-in-out;
    -moz-transition: bottom 0.1s ease-in-out;
    -o-transition: bottom 0.1s ease-in-out;
    transition: bottom 0.3s ease-in-out;
  :hover {
    text-decoration: none;
    cursor: pointer;
    color: ${palete.color.aqua[800]};

 
  }
`

const Logo = styled.img`
  border-radius: 50%;
  height: 3em;
  width: 3em;
  margin: 2em 2em 2em 2em;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
`
/**
 * @function onScreen custom hook para observar un nodo en el dom
 * @param {*} options
 */

const Navbar = () => {
  const [visible , setVisible] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const isTop = window.scrollY > 200;
      const nav = document.getElementById('nav')
      if(isTop){
       setVisible(true)
      }else{
       setVisible(false)
      }
    })
  })
  return (
    <Nav id='nav' visible={visible}>
      <div>
        <Logo src={logo} title="Logo" alt="MinLogo" />
      </div>
      <div>
        <UnorderContiner>
          <List>
            <Anchor href="#">Home</Anchor>
          </List>
          <List>
            <Anchor href="#">About</Anchor>
          </List>
          <List>
            <Anchor href="#">We are</Anchor>
          </List>
          <List>
            <Anchor href="#">Galery</Anchor>
          </List>
          <List>
            <Anchor href="#">Coming Soon</Anchor>
          </List>
          <List>
            <Anchor href="#">Contact</Anchor>
          </List>
        </UnorderContiner>
      </div>
    </Nav>
  )
}

export default Navbar
