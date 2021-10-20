import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../store/actions/photosActions";
import { StyledPhotos } from "./Photos.styled";
import PhotosGrid from "./PhotosGrid";

const Photos = ({ sliderValue, isGrayScale }) => {
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.photos);

  const [pageNumber, setPageNumber] = useState(1);

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
