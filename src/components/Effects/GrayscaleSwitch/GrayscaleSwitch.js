import React from "react";
import {
  SwitchContainerStyled,
  SwitchDivStyled,
  SwitchInputStyled,
  SwitchLabelStyled,
  SwitchStyled,
} from "./GrayscaleSwitch.styled";

const GrayscaleSwitch = ({ isGrayScale, setIsGrayScale }) => {
  return (
    <div>
      <p>Normal | Grayscale</p>
      <SwitchStyled>
        <SwitchContainerStyled>
          <SwitchLabelStyled isGrayScale={isGrayScale}>
            <SwitchInputStyled
              type="checkbox"
              onClick={() => setIsGrayScale((prev) => !prev)}
            />
            <SwitchDivStyled />
          </SwitchLabelStyled>
        </SwitchContainerStyled>
      </SwitchStyled>
    </div>
  );
};

export default GrayscaleSwitch;
