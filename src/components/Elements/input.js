import styled from "styled-components";
import palet from '../../pallete';
export default styled.input`
  background: ${palet.color.white.main};
  border: none;
  outline: 0;
  height: auto;
  width:100%;
  font-size: 18px;
  line-height: 32px;
  color: ${palet.color.secondary.main};
  font-weight: 400;
  font-family:Dosis;
  vertical-align: top;
  border: 2px solid white;
  border-radius: 5px;
  box-shadow: none;
  padding: 6px 12px;
  margin: 15px;
  cursor: text;
   ${props => (props.label)}; 
  ::placeholder {
    color: ${palet.color.secondary[800]};
  }
  :focus {
    transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
    border: 2px solid ${palet.color.primary.main};
  }
`;