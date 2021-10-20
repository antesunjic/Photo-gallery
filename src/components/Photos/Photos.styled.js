import styled from "styled-components";

export const StyledPhotos = styled.section`
  div {
    position: absolute;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(900px, 900px));
    column-gap: 10px;
    row-gap: 10px;
    margin-right: 80px;
  }
  img {
    filter: ${(props) =>
      props.isGrayScale
        ? `grayscale(100%) blur(${props.sliderValue}px)`
        : `blur(${props.sliderValue}px)`};
  }
`;

export const StyledSinglePhoto = styled.img`
  height: 900px;
  width: 900px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  box-shadow: 5px 5px 21px -4px rgba(0, 0, 0, 0.41);
`;
