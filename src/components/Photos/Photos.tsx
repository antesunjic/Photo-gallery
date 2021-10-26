import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../src/index";
import { getPhotos } from "../../store/actions/photosActions";
import { StyledPhotos } from "./Photos.styled";
import PhotosGrid from "./PhotosGrid";

interface IProps{
  sliderValue: number,
  isGrayScale: boolean,
}

const Photos:React.FC<IProps> = ({ sliderValue, isGrayScale }) => {
  const dispatch = useDispatch();

  const photos = useSelector((state:RootState) => state.photosReducer.photos);

  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    dispatch(getPhotos(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <StyledPhotos isGrayScale={isGrayScale} sliderValue={sliderValue}>
        <PhotosGrid photos={photos} setPageNumber={setPageNumber} />
      </StyledPhotos>
    </>
  );
};

export default Photos;
