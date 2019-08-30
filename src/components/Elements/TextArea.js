import styled from "styled-components";
import palette from '../../pallete'

export default styled.textarea`
background: ${palette.color.white.main};
  border: none;
  outline: 0;
  height: 150px;
  width:100%;
  font-size: 18px;
  font-family:Dosis;
  line-height: 32px;
  color:${palette.color.secondary.main};
  font-weight: 400;
  vertical-align: top;
  border: 2px solid white;
  border-radius: 5px;
  box-shadow: none;
  padding: 6px 12px;
  margin: 15px;
  cursor: text;
   ${props => (props.label)}; 
  ::placeholder {
    color: ${palette.color.secondary[800]};
  }
  :focus {
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

    border: 2px solid ${palette.color.primary.main};
  }
`