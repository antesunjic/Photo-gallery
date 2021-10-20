import React, { useCallback, useRef } from "react";
import { StyledSinglePhoto } from "./Photos.styled";

const PhotosGrid = ({ photos, setPageNumber }) => {
  const observer = useRef();
  const isLastElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [setPageNumber]
  );

  return (
    <div>
      {photos?.map((photo, index) => {
        if (photos.length === index + 1) {
          return (
            <StyledSinglePhoto
              alt={`${photo.id}`}
              src={`https://picsum.photos/id/${photo.id}/900/900`}
              key={photo.id}
              ref={isLastElementRef}
              loading="lazy"
            />
          );
        } else {
          return (
            <StyledSinglePhoto
              alt={`${photo.id}`}
              src={`https://picsum.photos/id/${photo.id}/900/900`}
              key={photo.id}
              loading="lazy"
            />
          );
        }
      })}
    </div>
  );
};

export default React.memo(PhotosGrid);
