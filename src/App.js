import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Effects from "./components/Effects";
import Title from "./components/Title";
import Photos from "./components/Photos";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;;
    background-color: #f6f6f8;
  }
`;

function App() {
  const [isGrayScale, setIsGrayScale] = useState(false);

  const [sliderValue, setSliderValue] = useState(0);
  return (
    <div>
      <GlobalStyle />
      <Effects
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        isGrayScale={isGrayScale}
        setIsGrayScale={setIsGrayScale}
      />
      <Title />
      <Photos sliderValue={sliderValue} isGrayScale={isGrayScale} />
    </div>
  );
}

export default App;
