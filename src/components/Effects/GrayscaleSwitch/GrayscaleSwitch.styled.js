import styled from "styled-components";

export const SwitchStyled = styled.span`
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

export const SwitchContainerStyled = styled.div`
  height: 40px;
  text-align: center;
`;

export const SwitchLabelStyled = styled.label`
  cursor: pointer;
  position: absolute;
  display: inline-block;
  font-size: 20px;
  height: 1em;
  width: 2em;
  background-color: ${(props) => (props.isGrayScale ? `#e5c1bd` : "#D2D2CF ")};
  border-radius: 1em;
  margin-left: 0.5em;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  &:active {
    background-color: #99ccff;
  }
`;

export const SwitchInputStyled = styled.input`
  position: absolute;
  opacity: 0;
  &:checked + div {
    transform: translateX(100%);
  }
`;

export const SwitchDivStyled = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 1em;
  background: #fff;
  box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
  transition: all 300ms;
`;

export const GrayscaleSwitch = styled.div`
  background-color: transparent;
  p {
    margin-left: 80px;
    background-color: transparent;
    margin-bottom: 3px;
  }
`;
