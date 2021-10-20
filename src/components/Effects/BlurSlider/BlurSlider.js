import React from "react";
import { BlurSliderStyled } from "./BlurSlider.styled";
const BlurSlider = ({ sliderValue, setSliderValue }) => {
  return (
    <BlurSliderStyled>
      <p>Slide for blur effect!</p>
      <input
        type="range"
        min="0"
        max="10"
        value={sliderValue}
        onChange={(e) => {
          setSliderValue(e.target.value);
        }}
      />
    </BlurSliderStyled>
  );
};

export default BlurSlider;
