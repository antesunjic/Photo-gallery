import { React, useEffect, useRef, useState } from "react";
import BlurSlider from "./BlurSlider";
import { EffectsStyled } from "./Effects.styled";
import GrayscaleSwitch from "./GrayscaleSwitch";

const Effects = ({
  isGrayScale,
  setIsGrayScale,
  sliderValue,
  setSliderValue,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current,
      observer = new IntersectionObserver(
        ([entries]) => {
          setIsSticky(entries.intersectionRatio < 1);
        },
        { threshold: 1 }
      );
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <EffectsStyled ref={ref} isSticky={isSticky}>
      <GrayscaleSwitch
        isGrayScale={isGrayScale}
        setIsGrayScale={setIsGrayScale}
      />
      <BlurSlider sliderValue={sliderValue} setSliderValue={setSliderValue} />
    </EffectsStyled>
  );
};

export default Effects;
