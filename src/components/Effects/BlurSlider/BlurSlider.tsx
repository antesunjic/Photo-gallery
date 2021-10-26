import React, { Dispatch, SetStateAction } from "react";
import { BlurSliderStyled } from "./BlurSlider.styled";

interface IProps {
  sliderValue: number,
  setSliderValue: Dispatch<SetStateAction<number>>;
}

const BlurSlider:React.FC<IProps> = ({ sliderValue, setSliderValue }) => {
  return (
    <BlurSliderStyled>
      <p>Slide for blur effect!</p>
      <input
        type="range"
        min="0"
        max="10"
        value={sliderValue}
        onChange={(e) => {
          setSliderValue(parseInt(e.target.value));
        }}
      />
    </BlurSliderStyled>
  );
};

export default BlurSlider;
