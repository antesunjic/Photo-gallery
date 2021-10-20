import styled from "styled-components";

export const BlurSliderStyled = styled.div`
  text-align: center;
  margin-right: 80px;
  background-color: transparent;
  p {
    background-color: transparent;
    margin-bottom: 3px;
  }
  input {
    cursor: pointer;
    appearance: none;
    width: 100%;
    height: 18px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    transition: 0.2s;
    border-radius: 20px;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 25px;
      height: 18px;
      background-color: #e5c1bd;
    }

    &:hover {
      opacity: 1;
    }
    &:active {
      background-color: #99ccff;
    }
  }
`;
