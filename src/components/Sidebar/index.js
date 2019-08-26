import React from 'react'
import styled from 'styled-components'


const SideNav = styled.nav`
   height: 100%;
  background: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
 >ul{
    height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
 }
 >li{
    margin: 0.5rem 0;
 }


`;
const SideDrawer = (props) =>(
  <SideNav>
      <ul>
         <li>ABOUT</li>
         <li>WE ARE</li>
         <li>GALERY</li>
         <li>COMMING SOON </li>
         <li>CONTACT</li>
      </ul>
  </SideNav>  
)

export default SideDrawer;