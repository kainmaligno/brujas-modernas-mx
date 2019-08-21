import styled from "styled-components"
import palet from "../../pallete"
export default styled.section`
  height:95%;
  width: 83%;
  padding: 1em;
  display: flex;
  flex-direction: ${props => (props.rows ? "row" : "column")};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: ${palet.color.secondary.main};
  background-color: ${palet.color.primary[700]};
`
