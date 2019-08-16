import styled from "styled-components"
import palet from "../../pallete"
export default styled.section`
  height: auto;
  width: auto;
  padding: 1em;
  display: flex;
  flex-direction: ${props => (props.rows ? "row" : "column")};
  justify-content: center;
  align-items: center;
  /* border:3px solid red; */
  border-radius: 20px;
  color: ${palet.color.secondary.main};
  background-color: ${palet.color.primary[700]};
  transition: all 0.5s ease-out;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  :hover {
    background-color: ${palet.color.secondary[800]};
    border: 3px solid ${palet.color.primary.main};
    color: ${palet.color.primary.main};
    box-shadow:${palet.color.primary[900]};
  }
`
