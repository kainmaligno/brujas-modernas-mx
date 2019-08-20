import styled from "styled-components";
import palet from '../../pallete';
export default styled.input`
  background: ${palet.color.primary[700]};
  border: none;
  outline: 0;
  height: 34px;
  font-size: 18px;
  line-height: 32px;
  color: #aaa;
  font-weight: 400;
  vertical-align: top;
  border: 2px solid ${palet.color.secondary.main};
  border-radius: 5px;
  box-shadow: none;
  padding: 6px 12px;
  margin: 15px;
  cursor: text;
   ${props => (props.label)}; 
  ::placeholder {
    color: #aaa;
  }
  :focus {
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

    border: 2px solid ${palet.color.primary.main};
  }
`;