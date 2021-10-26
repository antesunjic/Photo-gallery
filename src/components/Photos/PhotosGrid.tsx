import React, { useCallback, useRef } from "react";
import { StyledSinglePhoto } from "./Photos.styled";

interface IProps {
  photos:{
    id: string | number,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
  }[],
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
}

const PhotosGrid:React.FC<IProps> = ({ photos, setPageNumber }) => {
    const observer = useRef<any>(null);
    const isLastElementRef = useCallback(
      (node)=> {
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
            <div ref={isLastElementRef}>
            <StyledSinglePhoto
              alt={`${photo.id}`}
              src={`https://picsum.photos/id/${photo.id}/900/900`}
              key={photo.id}
              loading="lazy"
            />
            </div>
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
