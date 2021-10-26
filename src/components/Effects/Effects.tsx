import React, { Dispatch, SetStateAction } from "react";
import BlurSlider from "./BlurSlider";
import { EffectsStyled } from "./Effects.styled";
import GrayscaleSwitch from "./GrayscaleSwitch";

interface IProps {
  isGrayScale: boolean;
  setIsGrayScale: Dispatch<SetStateAction<boolean>>;
  sliderValue: number;
  setSliderValue: Dispatch<SetStateAction<number>>;
}

const Effects:React.FC<IProps> =  ({setSliderValue, isGrayScale, setIsGrayScale, sliderValue}) => {

  return (
    <EffectsStyled >
      <GrayscaleSwitch
        isGrayScale={isGrayScale}
        setIsGrayScale={setIsGrayScale}
      />
      <BlurSlider sliderValue={sliderValue} setSliderValue={setSliderValue} />
    </EffectsStyled>
  );
};

export default Effects;
