import React,{useState} from 'react'
import styled from 'styled-components'
import device from '../../device'
//assets

const SideNav = styled.nav`
background-color:white;
height:100%;

@media ${device.desktop}{
  display:none;
}
@media ${device.mobileL}{
  display:block
}
`
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
const List = styled.ul`
& li{ 
list-style:none;

 }
`;

const SideDrawer = (props) => {
  const [visible, setVisible] = useState(false)


   const displaySide =()=>{
     document.getElementById('sidenav')
     if(visible){
       console.log('maligno')
     }
   }

  return(
    <SideNav>
     <List>
         <li>ABOUT</li>
         <li>WE ARE</li>
         <li>GALERY</li>
         <li>COMMING SOON </li>
         <li>CONTACT</li>
     </List>
 </SideNav>
  )
 
      
}

export default SideDrawer;