import styled from "styled-components";
import palet from '../../pallete'

let mainColor = palet.color.primary[900];
let mainWhite = palet.color.white.main;
let mainGreen = palet.color.secondary.main;

export default styled.button`
  margin: 20px;
  /* width: 200px;
  height: 50px; */
  font-family:Dosis;
  font-size: 14px;
  background: ${props => (props.primary ? mainGreen : 0.0)};
border: 2px solid ${mainGreen};
  box-shadow: none;
  color: ${props => (props.primary ? mainWhite : '#010101')};
  text-decoration: none;
  transition: all 0.3s ease-out;
  cursor: pointer;
  padding: 12px 23px;
  display: inline-block;
  margin: 10px 10px 10px 0;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 600;
  -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  border-radius: ${props => (props.rounded ? "30px": "6px" )};
  :hover {
    background: ${props => (props.primary ? mainColor : mainColor)};
    border-radius: ${props => (props.rounded ? "30px": "6px" )};
    color: #010101;
    border: 2px solid ${mainColor};

    
   
  }
  
`;